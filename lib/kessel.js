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
/*! exports provided: join, flat, clean, value, nth, first, second, third, fourth, fifth, map, apply, chain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flat", function() { return flat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clean", function() { return clean; });
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('join', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('flat', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('flat', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('flat', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v.flat(Infinity));
});
/**
 * Creates a parser that will execute `p` and return `p`'s result with
 * all `null` or `undefined` elements removed. This requires that `p`
 * returns an array, and an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and returns the array
 *     that `p` returns with `null` and `undefined` values stripped.
 */

const clean = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('clean', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('clean', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('clean', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('nth', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('nth', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argNumFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('nth', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('apply', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('apply', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('apply', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('second argument to return a parser'));
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qres.status === Fatal || qctx.index !== index);
    return fn(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors)));
  }

  return qrep;
});

/***/ }),

/***/ "./src/combinators/misc.js":
/*!*********************************!*\
  !*** ./src/combinators/misc.js ***!
  \*********************************/
/*! exports provided: label, lazy, block, skip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block", function() { return block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT




const {
  Ok,
  Fail,
  Fatal
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
/**
 * Executes a parser. If that parser succeeds or fails fatally, its
 * behavior is not modified.
 *
 * However, if the parser fails normally, whatever error message was
 * generated will be replaced with `m` as an expected error message.
 *
 * Every parser that can fail already can take an optional error
 * message. The purpose of this parser is to provide a way for
 * already-created parsers to change their error messages. For instance,
 * one might write `const quoted = between(char('"'), char('"'),
 * many(letter()))` and then re-use this `quoted` parser in a number of
 * contexts, all of which might have their own ideas of a good error
 * message. Using `label(quoted, errorMessage)` still lets that happen.
 *
 * Note that unlike virtually every other parser in the library, the
 * message `m` here is required.
 *
 * @param {Parser} p The parser whose failure message will be changed.
 * @param {string} m The new error message for parser failure.
 * @returns {Parser} A new parser that exeuctes the same as `p` but
 *     provides `m` as an error message when it fails.
 */

const label = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('label', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('label', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  return pres.status !== Fail ? prep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m));
});
/**
 * Creates a parser that runs a parser-producing function when it's
 * execucted. It then executes that parser and returns its result.
 *
 * This is useful for defining recursive parsers, as defining a parser
 * with a factory calling itself will always blow up the stack as the
 * factory calls itself infinitely many times. `lazy` defers the call to
 * the factory until the parser is executed and knows that it *needs*
 * another parser from that factory. Assuming that there is a case when
 * the parser would not call for another parser, the factory calls will
 * terminate and no infinite loop will occur.
 *
 * @param {function():Parser} fn A parser-producing factory function.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that calls `fn` on execution and executes
 *     the parser it returns.
 */

const lazy = (fn, m) => {
  const hasM = m != null;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('lazy', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('lazy', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const p = fn();
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('lazy', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('function argument to return a parser'));
    return p(ctx);
  });
};
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
  let errors = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, []);
  let nextValue;
  let context = ctx;
  let i = 0;

  while (true) {
    var _pres$errors;

    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, value);
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('block', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
    const [pctx, pres] = value(context);
    context = pctx;
    if (!hasM) errors = ((_pres$errors = pres.errors) === null || _pres$errors === void 0 ? void 0 : _pres$errors.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

    if (pres.status !== Ok) {
      const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal || pctx.index !== index);
      return fn(pctx, errors);
    }

    nextValue = pres.value;
    i++;
  }
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, null);
});

/***/ }),

/***/ "./src/combinators/sequence.js":
/*!*************************************!*\
  !*** ./src/combinators/sequence.js ***!
  \*************************************/
/*! exports provided: seq, left, right, many, many1, sepby, sepby1, endby, endby1, count, between, until, pipe, lassoc, lassoc1, rassoc, rassoc1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return seq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "many", function() { return many; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return many1; });
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('left', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('right', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('many1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepby1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepby1', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('sepby1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('endby', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('endby', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('endby', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('endby1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('endby1', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('endby1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
  var _pres$errors2;

  const hasM = m != null;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(3, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('between', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(4, true));
  const index = ctx.index;
  const [sctx, sres] = s(ctx);

  if (sres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(sres.status === Fatal);
    return fn(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, sres.errors));
  }

  const [pctx, pres] = p(sctx);
  const errors = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, ((_pres$errors2 = pres.errors) === null || _pres$errors2 === void 0 ? void 0 : _pres$errors2.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(sres.errors, pres.errors) : []);

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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('until', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('until', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('until', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
     true && ps.forEach((p, i) => Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('pipe', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(i + 1, true)));
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipe', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(ps.length + 1, true));
    const index = ctx.index;
    const values = [];
    let context = ctx;
    let errors = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, []);

    for (const p of ps) {
      var _pres$errors3;

      const [pctx, pres] = p(context);
      context = pctx;
      if (!hasM) errors = ((_pres$errors3 = pres.errors) === null || _pres$errors3 === void 0 ? void 0 : _pres$errors3.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

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
 * Remove duplicates from an array. This is meant for strings (error
 * messages) though it would also work with primitives.
 *
 * @param {string[]} array The array of strings to dedupe.
 * @returns {string[]} The same array, but with no duplicate strings.
 */

function dedupe(array) {
  return [...new Set(array)];
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
  return dedupe(nestedMsgs).join('');
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
  const expected = Object(_util__WEBPACK_IMPORTED_MODULE_0__["commaSeparate"])(dedupe(errors.filter(error => error.type === ErrorType.Expected).map(error => error.label)));
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
/*! exports provided: alpha, any, char, digit, eof, hex, ichar, letter, lower, noneof, octal, oneof, range, satisfy, upper, always, fail, fatal, newline, regex, space, spaces, spaces1, ualpha, uletter, ulower, unewline, uspace, uspaces, uspaces1, uupper, all, anystr, istr, str, alt, def, empty, not, opt, peek, attempt, bapply, bbetween, bblock, bchain, bcount, bleft, bpipe, bright, bseq, buntil, apply, chain, clean, fifth, first, flat, fourth, join, map, nth, second, third, value, block, label, lazy, skip, between, count, endby, endby1, lassoc, lassoc1, left, many, many1, pipe, rassoc, rassoc1, right, sepby, sepby1, seq, until, Status, failReply, failure, fatalReply, okReply, parse, parser, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clean", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["clean"]; });

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

/* harmony import */ var _combinators_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combinators/misc */ "./src/combinators/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "block", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_7__["block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_7__["label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_7__["lazy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_7__["skip"]; });

/* harmony import */ var _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./combinators/sequence */ "./src/combinators/sequence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["count"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endby", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["endby"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endby1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["endby1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lassoc", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["lassoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lassoc1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["lassoc1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rassoc", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["rassoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rassoc1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["rassoc1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepby", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepby"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepby1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepby1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["seq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "until", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["until"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failReply", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["failReply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["failure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fatalReply", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["fatalReply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "okReply", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["okReply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["parser"]; });

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

function charParser(fn) {
  return ctx => {
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
  };
}
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


function char(c, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('char', c, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argCharFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('char', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(ch => c === ch)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].char(c)));
  });
}
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

function ichar(c, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('ichar', c, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argCharFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('ichar', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(ch => c.toLowerCase() === ch.toLowerCase())(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].ichar(c)));
  });
}
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

function satisfy(fn, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfy', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('satisfy', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    if (cres.status === Ok) return crep;
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, cres.errors));
  });
}
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

function range(s, e, m) {
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argCharFormatter"])(1, true));
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argCharFormatter"])(2, true));
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('range', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const fn = c => c >= s && c <= e;

    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].range(s, e)));
  });
}
/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that matches any character.
 */

function any(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('any', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
}
/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that matches the end of input.
 */

function eof(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('eof', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const {
      index,
      view
    } = ctx;
    return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].eof));
  });
}
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

function oneof(cs, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('oneof', cs, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrArrFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('oneof', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
}
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

function noneof(cs, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('noneof', cs, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrArrFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('noneof', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
}
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII digit.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     digit.
 */

function digit(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('digit', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const fn = c => c >= '0' && c <= '9';

    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].digit));
  });
}
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     hexadecimal digit.
 */

function hex(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('hex', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].hex));
  });
}
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     octal digit.
 */

function octal(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('octal', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const fn = c => c >= '0' && c <= '7';

    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].octal));
  });
}
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII letter.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     letter.
 */

function letter(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('letter', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letter));
  });
}
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII alphanumeric character.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     alphanumeric character.
 */

function alpha(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('alpha', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alpha));
  });
}
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII uppercase letter.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     uppercase letter.
 */

function upper(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('upper', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const fn = c => c >= 'A' && c <= 'Z';

    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upper));
  });
}
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII lowercase letter.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     lowercase letter.
 */

function lower(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('lower', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const fn = c => c >= 'a' && c <= 'z';

    const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
    return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lower));
  });
}

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
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
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

function fail(m) {
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["parser"])(ctx => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["failReply"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["generic"])(m)));
}
/**
 * A parser that fails without consuming input, setting the generic
 * error message to whatever is passed in. This signifies a fatal error,
 * one that cannot be recovered from without backtracking.
 *
 * @param {string} m The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */

function fatal(m) {
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["parser"])(ctx => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatalReply"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["generic"])(m)));
}
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

function always(x) {
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["parser"])(ctx => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["okReply"])(ctx, x));
}

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

function regexParser(re) {
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const {
      index,
      view
    } = ctx;
    const rest = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, view.byteLength - index, view);
    const match = rest.match(re);
    return match ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, match[0], index + Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringToView"])(match[0]).byteLength) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx);
  });
}
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


function regex(r, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrRegExp"])('regex', r, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrRegFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('regex', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return ctx => {
    // First, convert to a regular expression if it's a string
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
  };
}
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

function uletter(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('uletter', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reLetter)(ctx));
    return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].uletter));
  });
}
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

function ualpha(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('ualpha', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reAlpha)(ctx));
    return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].ualpha));
  });
}
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

function uupper(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('uupper', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUpper)(ctx));
    return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].uupper));
  });
}
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

function ulower(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('ulower', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reLower)(ctx));
    return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].ulower));
  });
}
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

function space(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('space', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reSpace)(ctx));
    return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].space));
  });
}
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

function uspace(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('uspace', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUspace)(ctx));
    return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].uspace));
  });
}
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

function spaces() {
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rctx, _] = regexParser(reSpaces)(ctx);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rctx, null);
  });
}
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

function uspaces() {
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rctx, _] = regexParser(reUspaces)(ctx);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rctx, null);
  });
}
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

function spaces1(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('spaces1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rctx, rres] = regexParser(reSpaces1)(ctx);
    return rres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1));
  });
}
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

function uspaces1(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('uspaces1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rctx, rres] = regexParser(reUspaces1)(ctx);
    return rres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].uspaces1));
  });
}
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

function newline(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('newline', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reNewline)(ctx));
    return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newline));
  });
}
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

function unewline(m) {
  if (m != null) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('unewline', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUnewline)(ctx));
    return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].unewline));
  });
}

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

function stringParser(length, fn) {
  return ctx => {
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
  };
}
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


function str(s, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('str', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('str', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [srep, [sctx, sres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(s), chars => s === chars)(ctx));
    return sres.status === Ok ? srep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].str(s)));
  });
}
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

function istr(s, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('istr', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('istr', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [srep, [sctx, sres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(s), chars => s.toLowerCase() === chars.toLowerCase())(ctx));
    return sres.status === Ok ? srep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].istr(s)));
  });
}
/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 *
 * @returns {Parser} A parser that will always succeed and returns the
 *     remainder of the input.
 */

function all() {
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const {
      index,
      view
    } = ctx;
    const width = view.byteLength - index;
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, width, view), index + width);
  });
}
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

function anystr(n, m) {
  const hasM = m != null;
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('anystr', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argNumFormatter"])(1, hasM));
  if (hasM) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('anystr', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const [srep, [sctx, sres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(n, () => true)(ctx));
    return sres.status === Ok ? srep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anystr(n)));
  });
}

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: encoder, decoder, range, viewToString, stringToView, charLength, nextCharWidth, nextChar, nextChars, quote, dup, commaSeparate, track, wordinal, stringify, replyFn, ferror, nerror, berror, hex, displayHex */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayHex", function() { return displayHex; });
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
function hex(value, digits = 2) {
  return value == null ? 'null' : ('0'.repeat(digits) + value.toString(16).toUpperCase()).substr(-digits);
}
function displayHex(view, start, length) {
  const bytes = [];

  for (const i of range(start, Math.min(start + length, view.byteLength))) {
    bytes.push(hex(view.getUint8(i)));
  }

  return bytes.join(' ');
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jaGFpbmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvbWlzYy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvY2hhci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3JlZ2V4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmb3JtYXR0ZXIiLCJ0eXBlIiwidmFsdWUiLCJzdHJpbmdpZnkiLCJjaGFyRm9ybWF0dGVyIiwiZm5Gb3JtYXR0ZXIiLCJnZW5Gb3JtYXR0ZXIiLCJzdHJGb3JtYXR0ZXIiLCJhcnJGb3JtYXR0ZXIiLCJzdHJBcnJGb3JtYXR0ZXIiLCJzdHJSZWdGb3JtdHRlciIsIm51bUZvcm1hdHRlciIsInBhckZvcm1hdHRlciIsImFyZ0Zvcm1hdHRlciIsIm9yZGVyIiwibXVsdGlwbGUiLCJ3b3JkaW5hbCIsImFyZ0NoYXJGb3JtYXR0ZXIiLCJhcmdGbkZvcm1hdHRlciIsImFyZ0dlbkZvcm1hdHRlciIsImFyZ051bUZvcm1hdHRlciIsImFyZ1BhckZvcm1hdHRlciIsImFyZ1N0ckZvcm1hdHRlciIsImFyZ1N0ckFyckZvcm1hdHRlciIsImFyZ1N0clJlZ0Zvcm1hdHRlciIsImZhaWxBc3NlcnQiLCJuYW1lIiwiRXJyb3IiLCJhc3NlcnRDaGFyIiwiY2hhckxlbmd0aCIsImFzc2VydEZ1bmN0aW9uIiwicGFyc2VyIiwiY3JlYXRlZCIsImFzc2VydEdlbkZ1bmN0aW9uIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYXNzZXJ0U3RyaW5nIiwiYXNzZXJ0QXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJhc3NlcnROdW1iZXIiLCJhc3NlcnRQYXJzZXIiLCJPayIsIkZhaWwiLCJGYXRhbCIsIlN0YXR1cyIsImFsdCIsImFyZ3MiLCJwcyIsInNsaWNlIiwibSIsImxlbmd0aCIsInBvcCIsImN0eCIsImhhc00iLCJBU1NFUlQiLCJmb3JFYWNoIiwicCIsImkiLCJlcnJvcnMiLCJleHBlY3RlZCIsInByZXAiLCJwY3R4IiwicHJlcyIsImR1cCIsInN0YXR1cyIsIm1lcmdlIiwiZmF0YWxSZXBseSIsImZhaWxSZXBseSIsIm9wdCIsImZlcnJvciIsInJlcGx5Iiwib2tSZXBseSIsImRlZiIsIngiLCJwZWVrIiwiaW5kZXgiLCJuZXJyb3IiLCJlbXB0eSIsImZuIiwicmVwbHlGbiIsIm5vdCIsInVuZGVmaW5lZCIsImF0dGVtcHQiLCJFcnJvclR5cGUiLCJOZXN0ZWQiLCJjb21wb3VuZCIsImJzZXEiLCJ2YWx1ZXMiLCJjb250ZXh0IiwiZXJyb3IiLCJiZXJyb3IiLCJwdXNoIiwiYmNoYWluIiwicSIsInFyZXAiLCJxY3R4IiwicXJlcyIsImJhcHBseSIsImJsZWZ0IiwiYnJpZ2h0IiwiYmNvdW50IiwibiIsIl8iLCJyYW5nZSIsImJ1bnRpbCIsImUiLCJlY3R4IiwiZXJlcyIsImJibG9jayIsImciLCJnZW4iLCJuZXh0VmFsdWUiLCJkb25lIiwibmV4dCIsInYiLCJicGlwZSIsImJiZXR3ZWVuIiwicyIsInNjdHgiLCJzcmVzIiwiam9pbiIsImZsYXQiLCJJbmZpbml0eSIsImNsZWFuIiwiZmlsdGVyIiwibnRoIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwibWFwIiwiYXBwbHkiLCJjaGFpbiIsImxhYmVsIiwibGF6eSIsImJsb2NrIiwic2tpcCIsImxvb3BNZXNzYWdlIiwic2VxIiwibGVmdCIsInJpZ2h0IiwibWFueSIsInZpZXciLCJieXRlTGVuZ3RoIiwibWFueTEiLCJzZXBieSIsIlR5cGVFcnJvciIsInNlcGJ5MSIsImVuZGJ5IiwiZW5kYnkxIiwiY291bnQiLCJiZXR3ZWVuIiwidW50aWwiLCJwaXBlIiwib3BGb3JtYXR0ZXIiLCJvcmQiLCJsYXNzb2MiLCJvIiwib3BzIiwib2N0eCIsIm9yZXMiLCJsYXNzb2MxIiwicmFzc29jIiwicmFzc29jMSIsImlzVHlwZWRBcnJheSIsIlVpbnQ4QXJyYXkiLCJVaW50OENsYW1wZWRBcnJheSIsIlVpbnQxNkFycmF5IiwiVWludDMyQXJyYXkiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsImlucHV0IiwibWVzc2FnZSIsInN0cmluZ1RvVmlldyIsIkRhdGFWaWV3IiwiYnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJ0cmFjayIsInBhcnNlIiwic3VjY2VlZGVkIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmb3JtYXRFcnJvcnMiLCJydW4iLCJyZXN1bHQiLCJ0YWIiLCJ6ZXJvV2lkdGgiLCJFeHBlY3RlZCIsIlVuZXhwZWN0ZWQiLCJHZW5lcmljIiwiQ29tcG91bmQiLCJPdGhlciIsInVuZXhwZWN0ZWQiLCJnZW5lcmljIiwib3RoZXIiLCJuZXN0ZWQiLCJlcnJvcnMxIiwiZXJyb3JzMiIsImlzTmV3bGluZSIsImJ5dGUiLCJnZXRVaW50OCIsIm5ld2xpbmUiLCJuZXh0Qnl0ZSIsInRoaXJkQnl0ZSIsIm5leHRDaGFyV2lkdGgiLCJnZXRMaW5lSW5kZXhlcyIsInN0YXJ0IiwibGluZW5vIiwiZW5kIiwiZ2V0Q2hhckluZGV4IiwiY2hhckluZGV4IiwiYnl0ZUluZGV4IiwidGFiaWZ5IiwibGluZSIsInRhYlNpemUiLCJ0YWJJbmRleGVzIiwidGFiTWF0Y2giLCJleGVjIiwib2Zmc2V0IiwicHJlSW5kZXhPZmZzZXQiLCJ0YWJJbmRleCIsImFjdHVhbEluZGV4Iiwic3BhY2VDb3VudCIsInN1YnN0cmluZyIsInJlcGVhdCIsImNvbEluZGV4IiwiZ2V0Q29sTnVtYmVyIiwibWF0Y2hlcyIsIm1hdGNoIiwiY29sbm8iLCJzaG93IiwibWF4V2lkdGgiLCJpbmRlbnQiLCJzcCIsIm5ld0NvbG5vIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImRlZHVwZSIsImFycmF5IiwiU2V0IiwiZm9ybWF0TmVzdGVkIiwibmVzdGVkcyIsIm5lc3RlZE1zZ3MiLCJmb3JtYXQiLCJlbnN1cmVOZXdsaW5lcyIsInRleHQiLCJyYXdMaW5lIiwidmlld1RvU3RyaW5nIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmluZCIsImNvbW1hU2VwYXJhdGUiLCJ1bmV4cE1zZyIsImV4cE1zZyIsImdlbmVyaWNNc2ciLCJuZXN0ZWRNc2ciLCJjb21wb3VuZE1zZyIsInVua25vd25Nc2ciLCJlb2ZNc2ciLCJnZXRQb3NpdGlvbiIsImNvbHVtbiIsInN0cmluZ3MiLCJhbHBoYSIsImFueSIsImFueXN0ciIsImNoYXIiLCJxdW90ZSIsImRpZ2l0IiwiZW9mIiwiaGV4IiwiaWNoYXIiLCJpc3RyIiwibGV0dGVyIiwibG93ZXIiLCJub25lb2YiLCJvY3RhbCIsIm9uZW9mIiwicmVnZXgiLCJyZSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInN0ciIsInVhbHBoYSIsInVsZXR0ZXIiLCJ1bG93ZXIiLCJ1bmV3bGluZSIsInVwcGVyIiwidXNwYWNlIiwidXNwYWNlcyIsInVzcGFjZXMxIiwidXVwcGVyIiwiZXhwZWN0ZWRzIiwiY2hhclBhcnNlciIsIndpZHRoIiwibmV4dENoYXIiLCJjcmVwIiwiY2N0eCIsImNyZXMiLCJjaCIsInRvTG93ZXJDYXNlIiwic2F0aXNmeSIsImNzIiwiYXJyIiwiaW5jbHVkZXMiLCJmYWlsIiwiZmF0YWwiLCJhbHdheXMiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJyZWdleFBhcnNlciIsInJlc3QiLCJyIiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJyZWFuY2hvciIsIm5ld1NvdXJjZSIsInJyZXAiLCJyY3R4IiwicnJlcyIsInN0cmluZ1BhcnNlciIsIm5leHRDaGFycyIsInNyZXAiLCJjaGFycyIsImFsbCIsImVuY29kZXIiLCJUZXh0RW5jb2RlciIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsInN0ZXAiLCJpbmNsdXNpdmUiLCJhYnMiLCJmb3J3YXJkIiwiY3VycmVudCIsImZpbmlzaGVkIiwiYnl0ZXMiLCJmcm9tIiwiZGVjb2RlIiwiZW5jb2RlIiwidmlld0xlbmd0aCIsIm1lc3NhZ2VzIiwibXNncyIsImxhc3QiLCJwcm9wIiwidHJhY2tlZCIsIldlYWtTZXQiLCJkZWZpbmVQcm9wZXJ0eSIsImFkZCIsImhhcyIsImJpbmQiLCJudW1zIiwib25lcyIsInRlbnMiLCJncm91cHMiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWFnIiwibG9nMTAiLCJmIiwibXVsdCIsIm51bSIsInJlbSIsImRlc2NyaXB0aW9uIiwiSlNPTiIsImNvbmRpdGlvbiIsImNvbmQiLCJkaWdpdHMiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsImRpc3BsYXlIZXgiLCJtaW4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUEsU0FBUyxHQUFHQyxJQUFJLElBQzNCQyxLQUFLLElBQUssWUFBV0QsSUFBSyxXQUFVRSx1REFBUyxDQUFDRCxLQUFELENB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Ozs7OztBQ3p3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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LENBQUNwQixDQUFELEVBQUlTLE1BQUosQ0FBN0M7QUFDRDtBQUVNLFNBQVN3TixHQUFULENBQWF2UixLQUFiLEVBQW9CbVksTUFBTSxHQUFHLENBQTdCLEVBQWdDO0FBQ3JDLFNBQU9uWSxLQUFLLElBQUksSUFBVCxHQUNILE1BREcsR0FFSCxDQUFDLElBQUl5TyxNQUFKLENBQVcwSixNQUFYLElBQXFCblksS0FBSyxDQUFDa0MsUUFBTixDQUFlLEVBQWYsRUFBbUJrVyxXQUFuQixFQUF0QixFQUF3REMsTUFBeEQsQ0FBK0QsQ0FBQ0YsTUFBaEUsQ0FGSjtBQUdEO0FBRU0sU0FBU0csVUFBVCxDQUFvQmxQLElBQXBCLEVBQTBCbUUsS0FBMUIsRUFBaUNoSyxNQUFqQyxFQUF5QztBQUM5QyxRQUFNNlMsS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsT0FBSyxNQUFNdFMsQ0FBWCxJQUFnQjhDLEtBQUssQ0FBQzJHLEtBQUQsRUFBUTZCLElBQUksQ0FBQ21KLEdBQUwsQ0FBU2hMLEtBQUssR0FBR2hLLE1BQWpCLEVBQXlCNkYsSUFBSSxDQUFDQyxVQUE5QixDQUFSLENBQXJCLEVBQXlFO0FBQ3ZFK00sU0FBSyxDQUFDcFEsSUFBTixDQUFXdUwsR0FBRyxDQUFDbkksSUFBSSxDQUFDNkQsUUFBTCxDQUFjbkosQ0FBZCxDQUFELENBQWQ7QUFDRDs7QUFDRCxTQUFPc1MsS0FBSyxDQUFDdk8sSUFBTixDQUFXLEdBQVgsQ0FBUDtBQUNELEMiLCJmaWxlIjoia2Vzc2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgcGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgc3RyaW5naWZ5LCB3b3JkaW5hbCB9IGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmb3JtYXR0ZXIgZnVuY3Rpb24gb3V0IG9mIGEgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSB0aGF0IHRoZSB2YWx1ZSBzaG91bGQgYmUuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6c3RyaW5nfSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIGFueVxuICogICAgIHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgZm9ybWF0dGVyID0gdHlwZSA9PlxuICB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuY29uc3QgY2hhckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycpXG5jb25zdCBmbkZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBmdW5jdGlvbicpXG5jb25zdCBnZW5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZ2VuZXJhdG9yIGZ1bmN0aW9uJylcbmNvbnN0IHN0ckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcnKVxuY29uc3QgYXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhbiBhcnJheScpXG5jb25zdCBzdHJBcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMnKVxuY29uc3Qgc3RyUmVnRm9ybXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uJylcbmNvbnN0IG51bUZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBudW1iZXInKVxuY29uc3QgcGFyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHBhcnNlcicpXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZm9ybWF0dGVyIGZ1bmN0aW9uIG91dCBvZiBhIHR5cGUgYW5kIGEgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgdGhhdCB0aGUgdmFsdWUgc2hvdWxkIGJlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlcl0gVGhlIHBvc2l0aW9uIG9mIHRoZSB2YWx1ZSB3aXRoaW4gYW4gYXJndW1lbnRcbiAqICAgICBsaXN0LlxuICogQHBhcmFtIHtib29sZWFufSBbbXVsdGlwbGVdIEluZGljYXRlcyB3aGV0aGVyIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmVcbiAqICAgICBhcmd1bWVudCBpbiB0aGUgZnVuY3Rpb24gd2hvc2UgZXJyb3IgaXMgYmVpbmcgZm9ybWF0dGVkLiBJZiB0aGlzXG4gKiAgICAgaXMgZmFsc2UsIHRoZSBgb3JkZXJgIHdpbGwgYmUgaWdub3JlZC5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbigqKTpzdHJpbmd9IEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgdmFsdWUgb2YgYW55XG4gKiAgICAgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBhcmdGb3JtYXR0ZXIgPSAodHlwZSwgb3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PiB2YWx1ZSA9PlxuICBgZXhwZWN0ZWQgJHtcbiAgICBtdWx0aXBsZSA/IGAke3dvcmRpbmFsKG9yZGVyKX0gYCA6ICcnXG4gIH1hcmd1bWVudCB0byBiZSAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5leHBvcnQgY29uc3QgYXJnQ2hhckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdGbkZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBmdW5jdGlvbicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdHZW5Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgZ2VuZXJhdG9yIGZ1bmN0aW9uJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ051bUZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBudW1iZXInLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnUGFyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdTdHJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egc3RyaW5nJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ1N0ckFyckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2YgY2hhcmFjdGVycycsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdTdHJSZWdGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uJywgb3JkZXIsIG11bHRpcGxlKVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6c3RyaW5nfSBmb3JtYXR0ZXJcbiAqL1xuZnVuY3Rpb24gZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHNpbmdsZS1jaGFyYWN0ZXIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydENoYXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGNoYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY2hhckxlbmd0aCh2YWx1ZSkgIT09IDEpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIG5vbi1wYXJzZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGZuRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgfHwgcGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0R2VuRnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGdlbkZvcm1hdHRlcikge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0QXJyYXkobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGFyckZvcm1hdHRlcikge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc2luZ2xlLWNoYXJhY3RlclxuICogc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPckFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJBcnJGb3JtYXR0ZXIpIHtcbiAgaWYgKCEoXG4gICAgQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAmJiB2YWx1ZS5ldmVyeShjID0+IHR5cGVvZiBjID09PSAnc3RyaW5nJyAmJiBjaGFyTGVuZ3RoKGMpID09PSAxKVxuICAgIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yUmVnRXhwKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJSZWdGb3JtdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJ1xuICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBudW1Gb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRQYXJzZXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHBhckZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8ICFwYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ1BhckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkLCBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCwgZmVycm9yLCBuZXJyb3IsIHJlcGx5Rm4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgcGFyc2VycyBvbmUgYXQgYSB0aW1lIHVudGlsIG9uZSBzdWNjZWVkcywgb25lXG4gKiBmYWlscyBmYXRhbGx5LCBvciBhbGwgZmFpbC4gT24gZmFpbHVyZSAoZmF0YWwgb3Igb3RoZXJ3aXNlKSwgZXJyb3JcbiAqIG1lc3NhZ2VzIGZyb20gYWxsIHBhcnNlcnMgdGhhdCBoYWQgZmFpbGVkIGFyZSBtZXJnZWQgaW50byBgYWx0YCdzXG4gKiBlcnJvciBtZXNzYWdlcy5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcnxzdHJpbmd9IGFyZ3MgVGhlIHBhcnNlcnMgdG8gZXhlY3V0ZSwgb25lIGF0IGEgdGltZSxcbiAqICAgICB1bnRpbCBvbmUgc3VjY2VlZHMsIG9uZSBmYWlscyBmYXRhbGx5LCBvciBhbGwgZmFpbC4gVGhlIGxhc3RcbiAqICAgICBhcmd1bWVudCAqbWF5KiBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBiZWNvbWVzIHRoZSBleHBlY3RlZFxuICogICAgIGVycm9yIG1lc3NhZ2UgaW4gcGxhY2Ugb2YgdGhlIGNvbGxlY3RlZCBleHBlY3RlZCBlcnJvciBtZXNzYWdlc1xuICogICAgIG9mIHRoZSBjb25zdGl0dWVudCBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VycyB1bnRpbFxuICogICAgIG9uZSBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsdCA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IG0gPSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyA/IHBzLnBvcCgpIDogbnVsbFxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgICBBU1NFUlQgJiYgcHMuZm9yRWFjaCgocCwgaSkgPT5cbiAgICAgIGFzc2VydFBhcnNlcignYWx0JywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCB0cnVlKSkpXG5cbiAgICBsZXQgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcblxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZXJyb3JzKVxuICAgIH1cbiAgICByZXR1cm4gZmFpbFJlcGx5KGN0eCwgZXJyb3JzKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciwgc3VjY2VlZGluZyB3aGV0aGVyIGl0XG4gKiBmYWlscyBvciBub3QgYnV0IG9ubHkgY29uc3VtaW5nIGlucHV0IGlmIGl0IHN1Y2NlZWRzLiBUaGlzIHBhcnNlclxuICogd2lsbCBvbmx5IGZhaWwgaWYgaXRzIHN1cHBsaWVkIHBhcnNlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgZm9yIG9wdGlvbmFsIGNvbnRlbnQgdG8gYmUgZXhlY3V0ZWQgYW5kXG4gKiAgICAgdGhlbiBoYXZlIGl0cyByZXN1bHQgaWdub3JlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYCBmYWlscy5cbiAqIEByZXR1cm4ge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyB3aXRoIG5vIHJlc3VsdCB1bmxlc3MgaXRzXG4gKiAgICAgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LiBUaGlzIHBhcnNlciBjb25zdW1lcyB0ZXh0IG9ubHkgaWZcbiAqICAgICBpdHMgY29udGFpbmVkIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG9wdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ29wdCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdvcHQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBjb25zdCBlcnJvcnMgPSBmZXJyb3IobSwgcHJlcy5lcnJvcnMpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGVycm9ycylcblxuICAvLyBJZiB0aGUgb3B0aW9uYWwgcGFyc2VyIGZhaWxzLCB3ZSBhZGQgdGhlIGVycm9yIG1lc3NhZ2UgZXZlbiB0aG91Z2hcbiAgLy8gdGhlIGVuZCByZXN1bHQgb2YgYG9wdGAgaXMgc3VjY2Vzcy4gVGhpcyBsZXRzIHNlcXVlbmNpbmcgcGFyc2Vyc1xuICAvLyBhZGQgdGhlIG9wdCBwYXJzZXIncyBleHBlY3RlZCB0byBlcnJvciBtZXNzYWdlcyBpZiBhIGxhdGVyIHBhcnNlclxuICAvLyBpbiB0aGUgc2VxdWVuY2UgZmFpbHMuXG4gIGNvbnN0IHJlcGx5ID0gb2tSZXBseShwY3R4LCBudWxsKVxuICByZXBseVsxXS5lcnJvcnMgPSBlcnJvcnNcbiAgcmV0dXJuIHJlcGx5XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgZWl0aGVyIHdpdGggdGhlIHN1cHBsaWVkIHBhcnNlcidzIHN1Y2Nlc3NmdWxcbiAqIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHQgdmFsdWUgYHhgLlxuICogVGhpcyBwYXJzZXIgb25seSBmYWlscyBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZiA9IChwLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2RlZicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdkZWYnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG4gIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cbiAqIFN1Y2Nlc3Mgb3IgZmFpbHVyZSBhcmUgc3RpbGwgcmV0dXJuZWQsIHRob3VnaCBmYXRhbCBmYWlsdXJlIGlzXG4gKiBjb252ZXJ0ZWQgdG8gbm9uLWZhdGFsIGR1ZSB0byB0aGUgZmFjdCB0aGF0IG5vIGlucHV0IGlzIGNvbnN1bWVkLlxuICpcbiAqIElmIHRoZSBjb25zaXR1ZW50IHBhcnNlciBmYWlscyBmYXRhbGx5LCBhIG5lc3RlZCBlcnJvciBtZXNzYWdlIHdpbGxcbiAqIGJlIGNyZWF0ZWQgdG8gdHJhY2sgdGhlIGFjdHVhbCBlcnJvciBjYXVzZSBiZWZvcmUgdGhpcyBwYXJzZXJcbiAqIGF1dG9tYXRpY2FsbHkgYmFja3RyYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgb3IgZmFpbHNcbiAqICAgICB3aXRoIGl0LCBidXQgd2hpY2ggY29uc3VtZXMgbm8gaW5wdXQgZWl0aGVyIHdheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBlZWsgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdwZWVrJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3BlZWsnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBva1JlcGx5KHBjdHgsIHByZXMudmFsdWUsIGluZGV4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycyksIGluZGV4KVxuICB9XG4gIC8vIFRoaXMgcGFyc2VyIGltcGxlbWVudHMgYXV0b21hdGljIGJhY2t0cmFja2luZywgc28gaWYgaXRzIHBhcnNlclxuICAvLyBmYWlscyBmYXRhbGx5LCBpdCBoYXMgdG8gdHJhY2sgdGhhdCB0aHJvdWdoIGEgbmVzdGVkIGVycm9yXG4gIHJldHVybiBmYWlsUmVwbHkocGN0eCwgbmVycm9yKG0sIHBjdHgsIHByZXMuZXJyb3JzKSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscywgdGhpc1xuICogcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlIG9uIGZhaWx1cmUgaWYgdGhhdFxuICogZmFpbHVyZSB3YXMgY2F1c2VkIGJ5IGEgc3VjY2VzcyB3aXRoIGlucHV0IGNvbnN1bWVkLiBBbiBlcnJvciBtZXNzYWdlXG4gKiBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXMgdGhlIG9wdGlvbmFsXG4gKiBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGNvbnN1bWVzXG4gKiAgICAgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3QgZW1wdHkgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbXB0eScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbXB0eScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPayAmJiBwY3R4LmluZGV4ID09PSBpbmRleCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgbnVsbClcbiAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgYnV0IHdoaWNoIGRvZXNcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiBgcGAgc3VjY2VlZHMsIHRoaXMgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBBblxuICogZXJyb3IgbWVzc2FnZSBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXNcbiAqIHRoZSBvcHRpb25hbCBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIHdoZW4gaXRcbiAqICAgICBmYWlscywgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGUgcGFyc2VyIGNvbnRleHQsIHdoZXRoZXIgb3Igbm90IGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbm90JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ25vdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPa1xuICAgID8gZmFpbFJlcGx5KHBjdHgsIGZlcnJvcihtLCB1bmRlZmluZWQpLCBpbmRleClcbiAgICA6IG9rUmVwbHkocGN0eCwgbnVsbCwgaW5kZXgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ0dlbkZvcm1hdHRlcixcbiAgYXJnTnVtRm9ybWF0dGVyLFxuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydEdlbkZ1bmN0aW9uLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxuICBmb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBjb21wb3VuZCwgRXJyb3JUeXBlLCBleHBlY3RlZCwgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQge1xuICBiZXJyb3IsXG4gIGR1cCxcbiAgZmVycm9yLFxuICBuZXJyb3IsXG4gIHJhbmdlLFxuICByZXBseUZuLFxuICBzdHJpbmdpZnksXG4gIHdvcmRpbmFsLFxufSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYmFja3RyYWNrcyB3aGVuIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkgYW5kXG4gKiB0cmFuc2Zvcm1zIHRoYXQgZmF0YWwgZmFpbHVyZSBpbnRvIGEgbm9uLWZhdGFsIG9uZS5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGUgZmV3IHdheXMgdG8gY2F1c2UgYSBjb250YWluZWQgcGFyc2VyIHRvIGJhY2t0cmFja1xuICogYWZ0ZXIgYSBmYXRhbCBmYWlsdXJlIChgcGVla2AgYWxzbyBkb2VzIHRoYXQgYXMgYSBzaWRlIGVmZmVjdCwgZXRjLikuXG4gKiBBbGwgb2YgdGhlIGBCYCBiYWNrdHJhY2tpbmcgcGFyc2VycyBiYWNrdHJhY2sgb25seSBpZiB0aGUgZmF0YWxcbiAqIGZhaWx1cmUgd2FzIGNhdXNlZCBieSBhIGNvbnRhaW5lZCBwYXJzZXIncyBub24tZmF0YWwgZmFpbHVyZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIGZhdGFsIGZhaWx1cmVzIHdpbGwgYmUgY29udmVydGVkXG4gKiAgICAgaW50byBub24tZmF0YWwgZmFpbHVyZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuIElmIHRoZSBwYXJzZXIgYmFja3RyYWNrcywgdGhpcyBpbnN0ZWFkIGJlY29tZXMgdGhlIHRleHQgb2ZcbiAqICAgICB0aGUgZ2VuZXJhdGVkIGNvbXBvdW5kIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGNhbm5vdCBmYWlsIGZhdGFsbHkuIElmIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIgZmFpbHMgZmF0YWxseSwgdGhpcyBvbmUgd2lsbCBpbnN0ZWFkIGZhaWwgbm9uLWZhdGFsbHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhdHRlbXB0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXR0ZW1wdCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhdHRlbXB0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHBjdHguaW5kZXggIT09IGluZGV4KSB7XG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBuZXJyb3IobSwgcGN0eCwgcHJlcy5lcnJvcnMpLCBpbmRleClcbiAgfVxuICBpZiAoaGFzTSkge1xuICAgIGlmIChwcmVzLmVycm9ycy5sZW5ndGggPT09IDEgJiYgcHJlcy5lcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZCkge1xuICAgICAgY29uc3QgeyBjdHgsIGVycm9ycyB9ID0gcHJlcy5lcnJvcnNbMF1cbiAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgY29tcG91bmQobSwgY3R4LCBlcnJvcnMpLCBpbmRleClcbiAgICB9XG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBleHBlY3RlZChtKSwgaW5kZXgpXG4gIH1cbiAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBwcmVzLmVycm9ycywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpcyBleGVjdXRlZFxuICogaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZSBmYWlscy4gSW4gdGhlXG4gKiBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lcyB0aGVcbiAqIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYWxsIG9mIHRoZSBlYXJsaWVyXG4gKiBwYXJzZXJzIHN1Y2NlZWRlZCwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIHRoZVxuICogdmVyeSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ8c3RyaW5nfSBwcyBUaGUgcGFyc2VycyB0byBiZSBleGVjdXRlZC4gVGhlIGxhc3RcbiAqICAgICBhcmd1bWVudCAqbWF5KiBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBiZWNvbWVzIHRoZSBleHBlY3RlZFxuICogICAgIGVycm9yIG1lc3NhZ2UgKG9yIGNvbXBvdW5kIGVycm9yIG1lc3NhZ2UsIGluIHRoZSBjYXNlIG9mXG4gKiAgICAgYmFja3RyYWNraW5nIGhhcHBlbmluZykgaW4gcGxhY2Ugb2YgdGhlIGNvbGxlY3RlZCBleHBlY3RlZCBlcnJvclxuICogICAgIG1lc3NhZ2VzIG9mIHRoZSBjb25zdGl0dWVudCBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXRcbiAqICAgICBhIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJzZXEgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIHBzW3BzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyA/IHBzLnBvcCgpIDogbnVsbFxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBBU1NFUlQgJiYgcHMuZm9yRWFjaCgocCwgaSkgPT5cbiAgICAgIGFzc2VydFBhcnNlcignYnNlcScsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgYXJncy5sZW5ndGggPiAxKSkpXG5cbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICAgIH1cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IGJlcnJvcihwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgZXJyb3JzKVxuICAgICAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9yLCBpbmRleClcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgcmVzdWx0IGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWQgcGFyc2VyXG4gKiB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZSBwYXJzZXJcbiAqIHJldHVybnMgdGhhdCByZXN1bHQuXG4gKlxuICogSWYgdGhlIHBhcnNlciByZXR1cm5lZCBieSBgZm5gIGZhaWxzIG5vbi1mYXRhbGx5IGFmdGVyIGBwYCBzdWNjZWVkcyxcbiAqIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZSBwb2ludCB3aGVyZSBgcGAgd2FzIGV4ZWN1dGVkIGFuZFxuICogd2lsbCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAsIHBhc3MgdGhlIHJlc3VsdCB0b1xuICogICAgIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHVzZSB0aGF0IGZ1bmN0aW9uJ3MgcmV0dXJuIHZhbHVlIGFzIGFcbiAqICAgICBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBiY2hhaW4gPSAocCwgZm4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmNoYWluJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ2JjaGFpbicsIGZuLCBhcmdGbkZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiY2hhaW4nLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBxID0gZm4ocHJlcy52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnYmNoYWluJywgcSwgZm9ybWF0dGVyKCdzZWNvbmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgcGFyc2VyJyksXG4gIClcblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IGR1cChxKHBjdHgpKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcXJlcFxuXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocWN0eCwgZmVycm9yKG0sIGVycm9ycykpXG4gIGNvbnN0IGVycm9yID0gYmVycm9yKHFjdHguaW5kZXggIT09IGluZGV4LCBtLCBxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyb3IsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBxYCB0byB0aGUgZnVuY3Rpb25cbiAqIHJldHVybmVkIGJ5IGBwYC5cbiAqXG4gKiBJZiBgcGAgc3VjY2VlZHMgYW5kIGBxYCBmYWlscywgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlXG4gKiBwb2ludCB3aGVyZSBgcGAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICogICAgIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIEEgcGFyc2VyIHdoaWNoIHByb3ZpZGVzIGEgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmVzdWx0cyBpblxuICogICAgIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYCB3aGVuIHRoZSB2YWx1ZVxuICogICAgIHJldHVybmVkIGJ5IGBwYCBpcyBwYXNzZWQgaW50byBpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJhcHBseSA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JhcHBseScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmFwcGx5JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2JhcHBseScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShxY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHFjdHgsIGVycm9ycylcbiAgICByZXR1cm4gZmFpbFJlcGx5KHFjdHgsIGVycm9yLCBpbmRleClcbiAgfVxuXG4gIGNvbnN0IGZuID0gcXJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgJ2JhcHBseScsIGZuLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBmdW5jdGlvbicpLFxuICApXG4gIHJldHVybiBva1JlcGx5KHFjdHgsIGZuKHByZXMudmFsdWUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gb3JkZXIgYW5kIHRoZW5cbiAqIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwYC5cbiAqXG4gKiBJZiBgcGAgc3VjY2VlZHMgYW5kIGBxYCBmYWlscywgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlXG4gKiBwb2ludCB3aGVyZSBgcGAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXR1cm5zIHRoZVxuICogICAgIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBibGVmdCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JsZWZ0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdibGVmdCcsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdibGVmdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rUmVwbHkocWN0eCwgcHJlcy52YWx1ZSlcblxuICBjb25zdCBlcnJvcnMgPSBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHFjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuXG4gIGNvbnN0IGVycm9yID0gYmVycm9yKHFjdHguaW5kZXggIT09IGluZGV4LCBtLCBxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyb3IsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gb3JkZXIgYW5kIHRoZW5cbiAqIHJldHVybiB0aGUgcmVzdWx0IG9mIGBxYC5cbiAqXG4gKiBJZiBgcGAgc3VjY2VlZHMgYW5kIGBxYCBmYWlscywgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlXG4gKiBwb2ludCB3aGVyZSBgcGAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXR1cm5zIHRoZVxuICogICAgIHJlc3VsdCBvZiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgY29uc3QgYnJpZ2h0ID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYnJpZ2h0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdicmlnaHQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYnJpZ2h0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHFyZXBcblxuICBjb25zdCBlcnJvcnMgPSBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHFjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuXG4gIGNvbnN0IGVycm9yID0gYmVycm9yKHFjdHguaW5kZXggIT09IGluZGV4LCBtLCBxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyb3IsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLCBjb2xsZWN0aW5nIHRoZVxuICogc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuXG4gKlxuICogSWYgYHBgIGZhaWxzIGFmdGVyIGluaXRpYWxseSBzdWNjZWVkaW5nIG9uY2Ugb3IgbW9yZSwgdGhpcyBwYXJzZXJcbiAqIHdpbGwgYmFja3RyYWNrIHRvIHRoZSBwb2ludCB3aGVyZSBgcGAgd2FzIGV4ZWN1dGVkIHRoZSBmaXJzdCB0aW1lIGFuZFxuICogd2lsbCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGV4ZWN1dGUgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGV4ZWN1dGUgdGhlIHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBiY291bnQgPSAocCwgbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiY291bnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ2Jjb3VudCcsIG4sIGFyZ051bUZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiY291bnQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocGN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHBjdHgsIHByZXMuZXJyb3JzKVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnJvciwgaW5kZXgpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBhIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBhblxuICogZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZlxuICogdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqICpmaXJzdCosIHNvIHRoZSByZXN1bHRzIG9mIHRoZSB0d28gcGFyc2VycyB3aWxsIG5vdCBvdmVybGFwLlxuICpcbiAqIElmIGBwYCBmYWlscyBub24tZmF0YWxseSBiZWZvcmUgYGVgIHN1Y2NlZWRzLCB0aGlzIHBhcnNlciB3aWxsXG4gKiBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgdGhlIGZpcnN0IHRpbWUgYW5kIHdpbGxcbiAqIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyLiBJdHMgcmVzdWx0cyBhcmUgcHVzaGVkIGludG8gYW5cbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZSBUaGUgZW5kIHBhcnNlci4gUGFyc2luZyBlbmRzIHdoZW4gdGhpcyBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBlYCBhbmQgdGhlbiBgcGAgemVyb1xuICogICAgIG9yIG1vcmUgdGltZXMgdW50aWwgYGVgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgYnVudGlsID0gKHAsIGUsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYnVudGlsJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdidW50aWwnLCBlLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYnVudGlsJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbZWN0eCwgZXJlc10gPSBlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IGVjdHhcbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShlY3R4LCBmZXJyb3IobSwgZXJlcy5lcnJvcnMpKVxuICAgIGlmIChlcmVzLnN0YXR1cyA9PT0gT2spIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBiZXJyb3IoXG4gICAgICAgIHBjdHguaW5kZXggIT09IGluZGV4LCBtLCBwY3R4LCBtZXJnZShwcmVzLmVycm9ycywgZXJlcy5lcnJvcnMpLFxuICAgICAgKVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnJvciwgaW5kZXgpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGEgYmxvY2sgb2YgY29kZSBpbiB0aGUgZm9ybSBvZiBhIGdlbmVyYXRvclxuICogZnVuY3Rpb24uIEluc2lkZSB0aGF0IGZ1bmN0aW9uLCBwYXJzZXJzIHRoYXQgYXJlIGB5aWVsZGBlZCB3aWxsIGJlXG4gKiBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlbiBiZVxuICogYXNzaWduZWQgdG8gdmFyaWFibGVzLCBldGMuKS5cbiAqXG4gKiBJZiBhbnkgb2YgdGhlIHlpZWxkZWQgcGFyc2VycyBmYWlsLCAgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG9cbiAqIHRoZSBwb2ludCB3aGVyZSB0aGUgZmlyc3QgcGFyc2VyIHdhcyBleGVjdXRlZCBhbmQgd2lsbCBmYWlsXG4gKiBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZyBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vIGFyZ3VtZW50c1xuICogICAgIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZCBwYXJzZXInc1xuICogICAgIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seSBgUGFyc2VyYHM7XG4gKiAgICAgb3RoZXJ3aXNlIGFuIGVycm9yIGlzIHRocm93bi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXG4gKiAgICAgZXhlY3V0ZXMgcGFyc2VycyBhcyB0aGV5IGFyZSB5aWVsZGVkLCBhbmQgcmVzdWx0cyBpbiB0aGUgcmV0dXJuXG4gKiAgICAgdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJibG9jayA9IChnLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRHZW5GdW5jdGlvbignYmJsb2NrJywgZywgYXJnR2VuRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2JibG9jaycsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBnZW4gPSBnKClcbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgbGV0IGVycm9ycyA9IFtdXG4gIGxldCBuZXh0VmFsdWVcbiAgbGV0IGNvbnRleHQgPSBjdHhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBnZW4ubmV4dChuZXh0VmFsdWUpXG4gICAgaWYgKGRvbmUpIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmJsb2NrJywgdmFsdWUsIHYgPT4gYGV4cGVjdGVkICR7XG4gICAgICB3b3JkaW5hbChpICsgMSlcbiAgICB9IHlpZWxkIHRvIGJlIHRvIGEgcGFyc2VyOyBmb3VuZCAke3N0cmluZ2lmeSh2KX1gKVxuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gdmFsdWUoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYmVycm9yKHBjdHguaW5kZXggIT09IGluZGV4LCBtLCBwY3R4LCBlcnJvcnMpXG4gICAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9yLCBpbmRleClcbiAgICB9XG4gICAgbmV4dFZhbHVlID0gcHJlcy52YWx1ZVxuICAgIGkrK1xuICB9XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UgYW5kIHBhc3NlcyB0aG9zZVxuICogcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2YgcGFyc2VycyB0b1xuICogZXhlY3V0ZS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhpcyBwYXJzZXInc1xuICogcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSBhZnRlciBhbGwgb2YgdGhlIGVhcmxpZXJcbiAqIHBhcnNlcnMgc3VjY2VlZGVkLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgdGhlXG4gKiB2ZXJ5IGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0gey4uLihQYXJzZXJ8ZnVuY3Rpb24oLi4uKik6Kil9IGFyZ3MgQW4gYXJyYXkgb2YgcGFyc2VycyB0byBiZVxuICogICAgIGV4ZWN1dGVkIG9uZSBhdCBhIHRpbWUsIGluIG9yZGVyLCBmb2xsb3dlZCBieSBhIGZ1bmN0aW9uIHdoaWNoXG4gKiAgICAgd2lsbCByZWNlaXZlIGFzIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0cyByZXR1cm5cbiAqICAgICB2YWx1ZSB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoaXMgcGFyc2VyLiBBIHNpbmdsZSBmdW5jdGlvblxuICogICAgIG11c3QgYmUgcHJlc2VudCBhbmQgaXQgbXVzdCBiZSB0aGUgbGFzdCBwYXJhbWV0ZXI7IGFsbCBvdGhlclxuICogICAgIHBhcmFtZXRlcnMgbXVzdCBiZSBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGV4ZWN1dGUgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBicGlwZSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IG0gPSB0eXBlb2YgcHNbcHMubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG4gIGNvbnN0IGZuID0gcHMucG9wKClcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+IGFzc2VydFBhcnNlcihcbiAgICAgICdicGlwZScsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgdHJ1ZSksXG4gICAgKSlcbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ2JwaXBlJywgZm4sIGFyZ0ZuRm9ybWF0dGVyKHBzLmxlbmd0aCArIDEsIHRydWUpKVxuXG4gICAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGxldCBjb250ZXh0ID0gY3R4XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICAgIGNvbnRleHQgPSBwY3R4XG4gICAgICBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IGJlcnJvcihwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgZXJyb3JzKVxuICAgICAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9yLCBpbmRleClcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgaXRzIHByZSwgY29udGVudCwgYW5kIHBvc3QgcGFyc2VycyBpbiBvcmRlclxuICogYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKlxuICogSWYgYW55IHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gd2hlcmVcbiAqIGBzYCB3YXMgZXhlY3V0ZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGxhc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlIGFuZCB3aG9zZSByZXN1bHRcbiAqICAgICBiZWNvbWVzIHRoZSByZXN1bHQgb2YgdGhlIG5ldyBwYXJzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYHNgLCBgcGAsIGFuZCBgZWAgaW5cbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXR1cm5zIHRoZSByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgYmJldHdlZW4gPSAocywgZSwgcCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiYmV0d2VlbicsIHMsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmJldHdlZW4nLCBlLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JiZXR3ZWVuJywgcCwgYXJnUGFyRm9ybWF0dGVyKDMsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2JiZXR3ZWVuJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjdHgpXG4gIGlmIChzcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4oc3Jlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihzY3R4LCBmZXJyb3IobSwgc3Jlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChzY3R4KVxuICBjb25zdCBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2Uoc3Jlcy5lcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICBjb25zdCBlcnJvciA9IGJlcnJvcihwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgZXJyb3JzKVxuICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgW2VjdHgsIGVyZXNdID0gZShwY3R4KVxuICBpZiAoZXJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsUmVwbHkoZWN0eCwgZmVycm9yKG0sIG1lcmdlKGVycm9ycywgZXJlcy5lcnJvcnMpKSlcbiAgfVxuICBpZiAoZXJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICBjb25zdCBlcnJvciA9IGJlcnJvcihcbiAgICAgIGVjdHguaW5kZXggIT09IGluZGV4LCBtLCBlY3R4LCBtZXJnZShlcnJvcnMsIGVyZXMuZXJyb3JzKSxcbiAgICApXG4gICAgcmV0dXJuIGZhaWxSZXBseShlY3R4LCBlcnJvciwgaW5kZXgpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoZWN0eCwgcHJlcy52YWx1ZSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdGbkZvcm1hdHRlcixcbiAgYXJnTnVtRm9ybWF0dGVyLFxuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0QXJyYXksXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxuICBmb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAsIGZlcnJvciwgcmVwbHlGbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCBhbmQgcmV0dXJuIGBwYCdzIHJlc3VsdHMgam9pbmVkXG4gKiB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyByZXF1aXJlcyB0aGF0IGBwYCByZXR1cm5zIGFuXG4gKiBhcnJheTsgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgaXQgZG9lcyBub3QuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXR1cm4gYW4gYXJyYXkgb2ZcbiAqICAgICBzdHJpbmdzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIHJldHVybnMgYSBzaW5nbGVcbiAqICAgICBzdHJpbmcgbWFkZSBmcm9tIGpvaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBhcnJheSBvZiBzdHJpbmdzXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgLlxuICovXG5leHBvcnQgY29uc3Qgam9pbiA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2pvaW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnam9pbicsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2pvaW4nLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHYuam9pbignJykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAgYW5kIHJldHVybiBpdHMgcmVzdWx0IHdpdGggYWxsXG4gKiBpbnRlcm5hbCBhcnJheXMgZmxhdHRlbmVkIGludG8gYSBzaW5nbGUtbGV2ZWwgYXJyYXkuIFRoaXMgcmVxdWlyZXNcbiAqIHRoYXQgYHBgIHJldHVybiBhbiBhcnJheTsgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgaXQgZG9lcyBub3QuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXR1cm4gYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgcmV0dXJucyBhXG4gKiAgICAgc2luZ2xlLWxldmVsIGFycmF5IG1hZGUgYnkgZmxhdHRlbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlIGFycmF5XG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgLlxuICovXG5leHBvcnQgY29uc3QgZmxhdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZsYXQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZmxhdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZsYXQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHYuZmxhdChJbmZpbml0eSkpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGV4ZWN1dGUgYHBgIGFuZCByZXR1cm4gYHBgJ3MgcmVzdWx0IHdpdGhcbiAqIGFsbCBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgZWxlbWVudHMgcmVtb3ZlZC4gVGhpcyByZXF1aXJlcyB0aGF0IGBwYFxuICogcmV0dXJucyBhbiBhcnJheSwgYW5kIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGlmIGl0IGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIHJldHVybnMgdGhlIGFycmF5XG4gKiAgICAgdGhhdCBgcGAgcmV0dXJucyB3aXRoIGBudWxsYCBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzIHN0cmlwcGVkLlxuICovXG5leHBvcnQgY29uc3QgY2xlYW4gPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjbGVhbicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdjbGVhbicsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2NsZWFuJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2LmZpbHRlcih4ID0+IHggIT0gbnVsbCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGJ1dCwgb24gc3VjY2VzcywgcmV0dXJucyBgeGAgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LiBJdHMgcmVzdWx0IGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgdGhlIG5ldyBwYXJzZXIgd2lsbCByZXN1bHQgaW4gaWYgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgYHBgIGJ1dCByZXR1cm4gYHhgIG9uXG4gKiAgICAgc3VjY2Vzcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHZhbHVlID0gKHAsIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndmFsdWUnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndmFsdWUnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgYG5gdGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIHJlc3VsdCBlbGVtZW50IHRvIHJldHVybi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgYG5gdGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbnRoID0gKHAsIG4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbnRoJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdudGgnLCBuLCBhcmdOdW1Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbnRoJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheShcbiAgICAnbnRoJywgdiwgZm9ybWF0dGVyKCdmaXJzdCBhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSxcbiAgKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbbl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpcnN0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZpcnN0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlyc3QnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMF0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlY29uZCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzZWNvbmQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdzZWNvbmQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgdGhpcmQgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSB0aGlyZCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCB0aGlyZCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3RoaXJkJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3RoaXJkJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgndGhpcmQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvdXJ0aCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvdXJ0aCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdmb3VydGgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmb3VydGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbM10pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlmdGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaWZ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWZ0aCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpZnRoJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZpZnRoJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlmdGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbNF0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGFuZCBwYXNzZXMgaXRzIHJlc3VsdCB0b1xuICogdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGVcbiAqIHJlc3VsdC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBgZm1hcGAgb3BlcmF0aW9uIGZyb20gSGFza2VsbCdzIGBGdW5jdG9yYCBjbGFzcy4gSXQnc1xuICogdXNlZCBhcyBhIGJhc2lzIGZvciBsaWZ0aW5nIGZ1bmN0aW9ucyBpbnRvIGEgUGFyc2VyIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6Kn0gZm4gQSBtYXBwaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAgYW5kIHdob3NlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlXG4gKiAgICAgY3JlYXRlZCBwYXJzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCBzdWNjZWVkIHdpdGggdGhhdFxuICogICAgIHJldHVybiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgbWFwID0gKHAsIGZuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hcCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdtYXAnLCBmbiwgYXJnRm5Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbWFwJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShwY3R4LCBmbihwcmVzLnZhbHVlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcWAgdG8gdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIGA8Kj5gIGZyb20gSGFza2VsbCdzIGBBcHBsaWNhdGl2ZWBcbiAqIGNsYXNzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAqICAgICBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBBIHBhcnNlciB3aGljaCBwcm92aWRlcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHkgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHknLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXBwbHknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocXJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHFjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihxY3R4LCBmZXJyb3IobSwgbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSkpXG4gIH1cblxuICBjb25zdCBmbiA9IHFyZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICdhcHBseScsIGZuLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBmdW5jdGlvbicpLFxuICApXG4gIHJldHVybiBva1JlcGx5KHFjdHgsIGZuKHByZXMudmFsdWUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgcmVzdWx0IGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWQgcGFyc2VyXG4gKiB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZSBwYXJzZXJcbiAqIHJldHVybnMgdGhhdCByZXN1bHQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgdGhlIGZ1bmN0aW9uLXByb3ZpZGVkIHBhcnNlciBmYWlsc1xuICogYWZ0ZXIgdGhlIG90aGVyIHBhcnNlciBjb25zdW1lcyBpbnB1dCwgZXZlbiBpZiB0aGF0IGZhaWx1cmUgaXNcbiAqIG5vbi1mYXRhbC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyB0aGUgYE1vbmFkYCBjbGFzcydzIGBiaW5kYCBvcGVyYXRpb25cbiAqIChnZW5lcmFsbHkgd3JpdHRlbiBgPj49YCBpbiBIYXNrZWxsKS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9IChwLCBmbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjaGFpbicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdjaGFpbicsIGZuLCBhcmdGbkZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdjaGFpbicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHEgPSBmbihwcmVzLnZhbHVlKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICdjaGFpbicsIHEsIGZvcm1hdHRlcignc2Vjb25kIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICApXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGZlcnJvcihtLCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKSlcbiAgfVxuICByZXR1cm4gcXJlcFxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMSBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ0ZuRm9ybWF0dGVyLFxuICBhcmdHZW5Gb3JtYXR0ZXIsXG4gIGFyZ1BhckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0R2VuRnVuY3Rpb24sXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxuICBmb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCwgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAsIGZlcnJvciwgcmVwbHlGbiwgc3RyaW5naWZ5LCB3b3JkaW5hbCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYWlsLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKlxuICogRXhlY3V0ZXMgYSBwYXJzZXIuIElmIHRoYXQgcGFyc2VyIHN1Y2NlZWRzIG9yIGZhaWxzIGZhdGFsbHksIGl0c1xuICogYmVoYXZpb3IgaXMgbm90IG1vZGlmaWVkLlxuICpcbiAqIEhvd2V2ZXIsIGlmIHRoZSBwYXJzZXIgZmFpbHMgbm9ybWFsbHksIHdoYXRldmVyIGVycm9yIG1lc3NhZ2Ugd2FzXG4gKiBnZW5lcmF0ZWQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGBtYCBhcyBhbiBleHBlY3RlZCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEV2ZXJ5IHBhcnNlciB0aGF0IGNhbiBmYWlsIGFscmVhZHkgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXJyb3JcbiAqIG1lc3NhZ2UuIFRoZSBwdXJwb3NlIG9mIHRoaXMgcGFyc2VyIGlzIHRvIHByb3ZpZGUgYSB3YXkgZm9yXG4gKiBhbHJlYWR5LWNyZWF0ZWQgcGFyc2VycyB0byBjaGFuZ2UgdGhlaXIgZXJyb3IgbWVzc2FnZXMuIEZvciBpbnN0YW5jZSxcbiAqIG9uZSBtaWdodCB3cml0ZSBgY29uc3QgcXVvdGVkID0gYmV0d2VlbihjaGFyKCdcIicpLCBjaGFyKCdcIicpLFxuICogbWFueShsZXR0ZXIoKSkpYCBhbmQgdGhlbiByZS11c2UgdGhpcyBgcXVvdGVkYCBwYXJzZXIgaW4gYSBudW1iZXIgb2ZcbiAqIGNvbnRleHRzLCBhbGwgb2Ygd2hpY2ggbWlnaHQgaGF2ZSB0aGVpciBvd24gaWRlYXMgb2YgYSBnb29kIGVycm9yXG4gKiBtZXNzYWdlLiBVc2luZyBgbGFiZWwocXVvdGVkLCBlcnJvck1lc3NhZ2UpYCBzdGlsbCBsZXRzIHRoYXQgaGFwcGVuLlxuICpcbiAqIE5vdGUgdGhhdCB1bmxpa2UgdmlydHVhbGx5IGV2ZXJ5IG90aGVyIHBhcnNlciBpbiB0aGUgbGlicmFyeSwgdGhlXG4gKiBtZXNzYWdlIGBtYCBoZXJlIGlzIHJlcXVpcmVkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgZmFpbHVyZSBtZXNzYWdlIHdpbGwgYmUgY2hhbmdlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBuZXcgZXJyb3IgbWVzc2FnZSBmb3IgcGFyc2VyIGZhaWx1cmUuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIG5ldyBwYXJzZXIgdGhhdCBleGV1Y3RlcyB0aGUgc2FtZSBhcyBgcGAgYnV0XG4gKiAgICAgcHJvdmlkZXMgYG1gIGFzIGFuIGVycm9yIG1lc3NhZ2Ugd2hlbiBpdCBmYWlscy5cbiAqL1xuZXhwb3J0IGNvbnN0IGxhYmVsID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsYWJlbCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnbGFiZWwnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICByZXR1cm4gcHJlcy5zdGF0dXMgIT09IEZhaWwgPyBwcmVwIDogZmFpbFJlcGx5KHBjdHgsIGV4cGVjdGVkKG0pKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcnVucyBhIHBhcnNlci1wcm9kdWNpbmcgZnVuY3Rpb24gd2hlbiBpdCdzXG4gKiBleGVjdWN0ZWQuIEl0IHRoZW4gZXhlY3V0ZXMgdGhhdCBwYXJzZXIgYW5kIHJldHVybnMgaXRzIHJlc3VsdC5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgZGVmaW5pbmcgcmVjdXJzaXZlIHBhcnNlcnMsIGFzIGRlZmluaW5nIGEgcGFyc2VyXG4gKiB3aXRoIGEgZmFjdG9yeSBjYWxsaW5nIGl0c2VsZiB3aWxsIGFsd2F5cyBibG93IHVwIHRoZSBzdGFjayBhcyB0aGVcbiAqIGZhY3RvcnkgY2FsbHMgaXRzZWxmIGluZmluaXRlbHkgbWFueSB0aW1lcy4gYGxhenlgIGRlZmVycyB0aGUgY2FsbCB0b1xuICogdGhlIGZhY3RvcnkgdW50aWwgdGhlIHBhcnNlciBpcyBleGVjdXRlZCBhbmQga25vd3MgdGhhdCBpdCAqbmVlZHMqXG4gKiBhbm90aGVyIHBhcnNlciBmcm9tIHRoYXQgZmFjdG9yeS4gQXNzdW1pbmcgdGhhdCB0aGVyZSBpcyBhIGNhc2Ugd2hlblxuICogdGhlIHBhcnNlciB3b3VsZCBub3QgY2FsbCBmb3IgYW5vdGhlciBwYXJzZXIsIHRoZSBmYWN0b3J5IGNhbGxzIHdpbGxcbiAqIHRlcm1pbmF0ZSBhbmQgbm8gaW5maW5pdGUgbG9vcCB3aWxsIG9jY3VyLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKTpQYXJzZXJ9IGZuIEEgcGFyc2VyLXByb2R1Y2luZyBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBjYWxscyBgZm5gIG9uIGV4ZWN1dGlvbiBhbmQgZXhlY3V0ZXNcbiAqICAgICB0aGUgcGFyc2VyIGl0IHJldHVybnMuXG4gKi9cbmV4cG9ydCBjb25zdCBsYXp5ID0gKGZuLCBtKSA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ2xhenknLCBmbiwgYXJnRm5Gb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGF6eScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgcCA9IGZuKClcbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICAgJ2xhenknLCBwLCBmb3JtYXR0ZXIoJ2Z1bmN0aW9uIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICAgIClcbiAgICByZXR1cm4gcChjdHgpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXG4gKlxuICogSWYgYW55IHlpZWxkZWQgcGFyc2VyIGZhaWxzIGFmdGVyIGFub3RoZXIgeWllbGRlZCBwYXJzZXIgaGFzIGNvbnN1bWVkXG4gKiBpbnB1dCwgdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxuICogY2F1c2UgYW4gZXJyb3IgdG8gYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRzXG4gKiAgICAgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5IGBQYXJzZXJgcztcbiAqICAgICBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBibG9jayA9IChnLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRHZW5GdW5jdGlvbignYmxvY2snLCBnLCBhcmdHZW5Gb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmxvY2snLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgZ2VuID0gZygpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBmZXJyb3IobSwgW10pXG4gIGxldCBuZXh0VmFsdWVcbiAgbGV0IGNvbnRleHQgPSBjdHhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBnZW4ubmV4dChuZXh0VmFsdWUpXG4gICAgaWYgKGRvbmUpIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxvY2snLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIHdvcmRpbmFsKGkgKyAxKVxuICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSB2YWx1ZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBlcnJvcnMpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgZGlzY2FyZHMgYW55IHN1Y2Nlc3NmdWwgcmVzdWx0IHdoaWxlXG4gKiBzdGlsbCBjb25zdW1pbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdG8gYmUgZGlzY2FyZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGNvbnN1bWUgaW5wdXQgYXMgYHBgIGRvZXMgb25cbiAqICAgICBzdWNjZXNzLCBidXQgd2lsbCBwcm9kdWNlIG5vIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXAgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdza2lwJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NraXAnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHBjdHgsIG51bGwpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBmYXRhbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAsIGZlcnJvciwgcmFuZ2UsIHJlcGx5Rm4sIHN0cmluZ2lmeSwgd29yZGluYWwgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG5mdW5jdGlvbiBsb29wTWVzc2FnZShuYW1lKSB7XG4gIHJldHVybiBgWyR7bmFtZX1dOiBpbmZpbml0ZSBsb29wIGRldGVjdGVkOyBgXG4gICAgKyAnbmVpdGhlciBjb250ZW50IG5vciBzZXBhcmF0b3IgcGFyc2VyIGNvbnN1bWVkIGlucHV0J1xufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpcyBleGVjdXRlZFxuICogaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZSBmYWlscy4gSW4gdGhlXG4gKiBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lcyB0aGVcbiAqIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBhbnkgaW5wdXQgd2FzIGNvbnN1bWVkIGJlZm9yZSBhbnkgb2ZcbiAqIGl0cyBwYXJzZXJzIGZhaWwsIGV2ZW4gaWYgdGhhdCBmYWlsdXJlIGl0c2VsZiB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfHN0cmluZ30gYXJncyBUaGUgcGFyc2VycyB0byBiZSBleGVjdXRlZC4gVGhlIGxhc3RcbiAqICAgICBhcmd1bWVudCAqbWF5KiBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBiZWNvbWVzIHRoZSBleHBlY3RlZFxuICogICAgIGVycm9yIG1lc3NhZ2UgaW4gcGxhY2Ugb2YgdGhlIGNvbGxlY3RlZCBleHBlY3RlZCBlcnJvciBtZXNzYWdlc1xuICogICAgIG9mIHRoZSBjb25zdGl0dWVudCBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXRcbiAqICAgICBhIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IG0gPSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyA/IHBzLnBvcCgpIDogbnVsbFxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgICBBU1NFUlQgJiYgcHMuZm9yRWFjaCgocCwgaSkgPT5cbiAgICAgIGFzc2VydFBhcnNlcignc2VxJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCB0cnVlKSkpXG5cbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgbGV0IGVycm9ycyA9IGZlcnJvcihtLCBbXSlcbiAgICBsZXQgY29udGV4dCA9IGN0eFxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgY29udGV4dC5pbmRleCAhPT0gaW5kZXgpXG4gICAgICAgIHJldHVybiBmbihjb250ZXh0LCBlcnJvcnMpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgcmV0dXJuc1xuICogdGhlIHJlc3VsdCBvZiBgcGAuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBhcHBsaWNhdGl2ZSBgPCpgXG4gKiBpbiBIYXNrZWxsLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbGVmdCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGVmdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIGNvbnN0IGZuID0gcHJlcy5zdGF0dXMgPT09IEZhdGFsID8gZmF0YWxSZXBseSA6IGZhaWxSZXBseVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3FjdHgsIHFyZXNdID0gcShwY3R4KVxuICBpZiAocXJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHFyZXMuc3RhdHVzID09PSBGYXRhbCB8fCBxY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICByZXR1cm4gZm4ocWN0eCwgZmVycm9yKG0sIG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycykpKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHFjdHgsIHByZXMudmFsdWUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gb3JkZXIgYW5kIHJldHVybnNcbiAqIHRoZSByZXN1bHQgb2YgYHFgLiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyB0aGUgYXBwbGljYXRpdmUgYCo+YFxuICogaW4gSGFza2VsbC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBgcWAgZmFpbHMgYWZ0ZXIgYHBgIGNvbnN1bWVzIGlucHV0LFxuICogZXZlbiBpZiBgcWAncyBmYWlsdXJlIHdhcyBub24tZmF0YWwuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgY29uc3QgcmlnaHQgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmlnaHQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBTdGF0dXMuT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxY3R4LnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGZlcnJvcihtLCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKSlcbiAgfVxuICByZXR1cm4gcXJlcFxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIHRoZSByZXN1bHRzIGludG8gYW4gYXJyYXkgdGhhdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW5ub3QgZmFpbCBub24tZmF0YWxseTsgaG93ZXZlciwgaWYgYHBgIGV2ZXIgZmFpbHNcbiAqIGZhdGFsbHksIHRoZW4gc28gd2lsbCB0aGlzIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBleGVjdXRlZCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdtYW55JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW50byBhbiBhcnJheSB0aGF0IGlzIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbiBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGBwYCBldmVyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgZXhlY3V0ZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55MSA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnkxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ21hbnkxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzYCBpblxuICogYmV0d2VlbiBlYWNoLiBUaGUgcmVzdWx0cyBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIG5vdCBmYWlsIG5vbi1mYXRhbGx5LCBhcyBtYXRjaGluZyBgcGAgemVybyB0aW1lcyBpc1xuICogdmFsaWQuIEl0IGNhbiBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcGJ5ID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwYnknLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcGJ5JywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NlcGJ5JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgZmVycm9yKG0sIHNyZXMuZXJyb3JzKSlcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwYnknKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIG9uZSBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2guIFRoZSByZXN1bHRzIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmRcbiAqIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgaWYgYHBgIGRvZXNuJ3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJdFxuICogd2lsbCBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcGJ5MSA9IChwLCBzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcGJ5MScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwYnkxJywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NlcGJ5MScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY29udGV4dClcbiAgICBjb250ZXh0ID0gc2N0eFxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGZlcnJvcihtLCBzcmVzLmVycm9ycykpXG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcGJ5MScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2ggYW5kIG9wdGlvbmFsbHkgYWZ0ZXIgdGhlIGxhc3QgbWF0Y2ggb2YgYHBgLiBUaGUgcmVzdWx0c1xuICogb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZCByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIG5vdCBmYWlsIG5vbi1mYXRhbGx5LCBhcyBtYXRjaGluZyBgcGAgemVybyB0aW1lcyBpc1xuICogdmFsaWQuIEl0IGNhbiBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuZGJ5ID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZW5kYnknLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZGJ5JywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2VuZGJ5JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgZmVycm9yKG0sIHNyZXMuZXJyb3JzKSlcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnZW5kYnknKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2AgaW5cbiAqIGJldHdlZW4gZWFjaCBhbmQgb3B0aW9uYWxseSBhZnRlciB0aGUgbGFzdCBtYXRjaCBvZiBgcGAuIFRoZSByZXN1bHRzXG4gKiBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgaWYgYHBgIGRvZXNuJ3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJdFxuICogd2lsbCBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuZGJ5MSA9IChwLCBzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZGJ5MScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZW5kYnkxJywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2VuZGJ5MScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY29udGV4dClcbiAgICBjb250ZXh0ID0gc2N0eFxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGZlcnJvcihtLCBzcmVzLmVycm9ycykpXG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ2VuZGJ5MScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLCBjb2xsZWN0aW5nIHRoZVxuICogc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuXG4gKlxuICogSWYgYHBgIGZhaWxzIGFmdGVyIGFueSBpbnB1dCBoYXMgYmVlbiBjb25zdW1lZCBieSBhIHByaW9yIGV4ZWN1dGlvblxuICogb2YgYHBgLCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBleGVjdXRlIG11bHRpcGxlIHRpbWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBleGVjdXRlIHRoZSBwYXJzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBjb3VudCA9IChwLCBuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2NvdW50JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdjb3VudCcsIG4sIGFyZ051bUZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdjb3VudCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGl0cyBzdGFydCwgY29udGVudCwgYW5kIGVuZCBwYXJzZXJzIGluIG9yZGVyXG4gKiBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBJZiBlaXRoZXIgYHBgIG9yIGBlYCBmYWlscyBhZnRlciBhIHByaW9yIHBhcnNlciBoYXMgY29uc3VtZWRcbiAqIGlucHV0LCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGxhc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGUgbmV3IHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gdGhlIGNvcnJlY3RcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgYmV0d2VlbiA9IChzLCBlLCBwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBlLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmV0d2VlbicsIG0sIGFyZ1N0ckZvcm1hdHRlcig0LCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY3R4KVxuICBpZiAoc3Jlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHNyZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4oc2N0eCwgZmVycm9yKG0sIHNyZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoc2N0eClcbiAgY29uc3QgZXJyb3JzID0gZmVycm9yKFxuICAgIG0sIHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShzcmVzLmVycm9ycywgcHJlcy5lcnJvcnMpIDogW10sXG4gIClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtlY3R4LCBlcmVzXSA9IGUocGN0eClcbiAgaWYgKGVyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihlcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgZWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKGVjdHgsIGZlcnJvcihtLCBtZXJnZShlcnJvcnMsIGVyZXMuZXJyb3JzKSkpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoZWN0eCwgcHJlcy52YWx1ZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYSBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgYW5cbiAqIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2ZcbiAqIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiAqZmlyc3QqLCBzbyB0aGUgcmVzdWx0cyBvZiB0aGUgdHdvIHBhcnNlcnMgd2lsbCBub3Qgb3ZlcmxhcC5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYmVmb3JlIGBlYCBzdWNjZWVkcyBidXQgYWZ0ZXIgcHJpb3IgZXhlY3V0aW9ucyBvZiBgcGBcbiAqIGhhdmUgY29uc3VtZWQgaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqICAgICB1bnRpbCBgZWAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnRpbCA9IChwLCBlLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3VudGlsJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCd1bnRpbCcsIGUsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd1bnRpbCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW2VjdHgsIGVyZXNdID0gZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBlY3R4XG4gICAgaWYgKGVyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkoZWN0eCwgZmVycm9yKG0sIGVyZXMuZXJyb3JzKSlcbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgbWVyZ2UocHJlcy5lcnJvcnMsIGVyZXMuZXJyb3JzKSkpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXMgdGhvc2VcbiAqIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mIHBhcnNlcnMgdG9cbiAqIGV4ZWN1dGUuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoaXMgcGFyc2VyJ3NcbiAqIHJlc3VsdC5cbiAqXG4gKiBOb3RlIHRoYXQsIHVubGlrZSBgc2VxdWVuY2VgLCBgbnVsbGAgcGFyc2VyIHJlc3VsdHMgYXJlICpub3QqXG4gKiBkaXNjYXJkZWQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICogdG8gYGZuYCBubyBtYXR0ZXIgdGhlIHJlc3VsdHMgZnJvbSB0aGUgcGFyc2Vycy5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgYWZ0ZXIgcHJpb3IgcGFyc2VycyBoYXZlIGNvbnN1bWVkIGlucHV0LFxuICogdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogVGhpcyBwYXJzZXIgaXMgZXF1aXZhbGVudCB0byB0aGUgYXBwbGljYXRpdmUgbGlmdCBvcGVyYXRpb24sIGxpZnRpbmdcbiAqIG11bHRpLXBhcmFtZXRlciBmdW5jdGlvbnMgaW50byB0aGUgY29udGV4dCBvZiBhIHBhcnNlci4gSXQgYWN0cyBsaWtlXG4gKiBgbGlmdEEyYCBpZiB0d28gcGFyc2VycyBhcmUgcGFzc2VkIGluLCBgbGlmdEEzYCBpZiB0aHJlZSBhcmUgcGFzc2VkXG4gKiBpbiwgZXRjLlxuICpcbiAqIEBwYXJhbSB7Li4uKFBhcnNlcnxmdW5jdGlvbiguLi4qKToqfHN0cmluZyl9IGFyZ3MgQW4gYXJyYXkgb2YgcGFyc2Vyc1xuICogICAgIHRvIGJlIGV4ZWN1dGVkIG9uZSBhdCBhIHRpbWUsIGluIG9yZGVyLCBmb2xsb3dlZCBieSBhIGZ1bmN0aW9uXG4gKiAgICAgd2hpY2ggd2lsbCByZWNlaXZlIGFzIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0c1xuICogICAgIHJldHVybiB2YWx1ZSB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoaXMgcGFyc2VyLiBBIHNpbmdsZVxuICogICAgIGZ1bmN0aW9uIG11c3QgYmUgcHJlc2VudCBhbmQgaXQgbXVzdCBjb21lIGFmdGVyIHRoZSBwYXJzZXJzLlxuICogICAgIE9wdGlvbmFsbHksIGEgc3RyaW5nIG1heSBiZSB0aGUgbGFzdCBhcmd1bWVudDsgaWYgaXQgaXMgcHJlc2VudCxcbiAqICAgICBpdCByZXBsYWNlcyB0aGUgZGVmYXVsdCBlcnJvciBtZXNzYWdlIGluIHRoZSBldmVudCB0aGF0IHRoZVxuICogICAgIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBleGVjdXRlIGl0cyBwYXJzZXJzIGluIG9yZGVyLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgcGlwZSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IG0gPSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyA/IHBzLnBvcCgpIDogbnVsbFxuICBjb25zdCBmbiA9IHBzLnBvcCgpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PiBhc3NlcnRQYXJzZXIoXG4gICAgICAncGlwZScsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgdHJ1ZSksXG4gICAgKSlcbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3BpcGUnLCBmbiwgYXJnRm5Gb3JtYXR0ZXIocHMubGVuZ3RoICsgMSwgdHJ1ZSkpXG5cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gZmVycm9yKG0sIFtdKVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgICAgIHJldHVybiBmbihwY3R4LCBlcnJvcnMpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCBmbiguLi52YWx1ZXMpKVxuICB9KVxufVxuXG4vKipcbiAqIFByaXZhdGUgZm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgYXNzZXJ0aW9uIG1lc3NhZ2VzIGFib3V0IG9wIHBhcnNlcnNcbiAqIG5vdCByZXR1cm5pbmcgZnVuY3Rpb25zXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG9yZCBUaGUgbnVtYmVyIG9mIHRoZSBvcCBwYXJzZXIgdGhhdCBmYWlscyB0byBwcm9kdWNlXG4gKiAgICAgYSBmdW5jdGlvblxuICogQHJldHVybnMge3N0cmluZ30gQW4gYXBwcm9wcmlhdGUgYXNzZXJ0aW9uIGZhaWx1cmUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gb3BGb3JtYXR0ZXIob3JkKSB7XG4gIHJldHVybiB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHtvcmR9IG9wIHBhcnNlciB0byByZXR1cm4gYSBmdW5jdGlvbjsgZm91bmQgJHtcbiAgICBzdHJpbmdpZnkodmFsdWUpXG4gIH1gXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9gLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb2AgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gbyBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgbGFzc29jID0gKHAsIG8sIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGFzc29jJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsYXNzb2MnLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGFzc29jJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgZmVycm9yKG0sIG9yZXMuZXJyb3JzKSlcbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignbGFzc29jJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSlcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIE90aGVyd2lzZSBpdCBjYW4gb25seSBmYWlsIGZhdGFsbHkgaWYgYHBgIG9yIGBvYCBmYWlscyBmYXRhbGx5LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9gIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG8gVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBsYXNzb2MxID0gKHAsIG8sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGFzc29jMScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGFzc29jMScsIG8sIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdsYXNzb2MxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvY3R4LCBvcmVzXSA9IG8oY29udGV4dClcbiAgICBjb250ZXh0ID0gb2N0eFxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KG9jdHgsIGZlcnJvcihtLCBvcmVzLmVycm9ycykpXG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnbGFzc29jMScsIG9yZXMudmFsdWUsIG9wRm9ybWF0dGVyKHdvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gob3Jlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb2AgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9gLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb2AgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gbyBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJhc3NvYyA9IChwLCBvLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3Jhc3NvYycsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmFzc29jJywgbywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3Jhc3NvYycsIG0sIGFyZ1N0ckZvcm1hdHRlcig0LCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvY3R4LCBvcmVzXSA9IG8oY29udGV4dClcbiAgICBjb250ZXh0ID0gb2N0eFxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KG9jdHgsIGZlcnJvcihtLCBvcmVzLmVycm9ycykpXG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3Jhc3NvYycsIG9yZXMudmFsdWUsIG9wRm9ybWF0dGVyKHdvcmRpbmFsKGkgKyAxKSkpXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb2AgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBPdGhlcndpc2UgaXQgY2FuIG9ubHkgZmFpbCBmYXRhbGx5IGlmIGBwYCBvciBgb2AgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJhc3NvYzEgPSAocCwgbywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyYXNzb2MxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyYXNzb2MxJywgbywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3Jhc3NvYzEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgZmVycm9yKG0sIG9yZXMuZXJyb3JzKSlcbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdyYXNzb2MxJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZm9ybWF0RXJyb3JzIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IGR1cCwgc3RyaW5nVG9WaWV3LCB0cmFjayB9IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xuICogb2YgdHlwZWQgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxufVxuXG4vKipcbiAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3RhdHVzIG9mIHRoZSBsYXN0IHBhcnNpbmcgb3BlcmF0aW9uLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IHtcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIHdhcyBzdWNjZXNzZnVsLiAqL1xuICBPazogJ29rJyxcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC4gKi9cbiAgRmFpbDogJ2ZhaWwnLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cbiAgRmF0YWw6ICdmYXRhbCcsXG59XG5cbi8qKlxuICogVGhlIGNvbnRleHQgb2YgYSBwYXJzZXIuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBpbnB1dCB0ZXh0IGFuZCBhXG4gKiBwb2ludGVyIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIHdpdGhpbiBpdC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb250ZXh0XG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgd2hlcmUgdGhlXG4gKiAgICAgbmV4dCBwYXJzaW5nIG9wZXJhdGlvbiB3aWxsIHRha2UgcGxhY2UgKG9yIHdoZXJlIHRoZSBsYXN0IG9uZVxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGlzIGlzXG4gKiBlc3NlbnRpYWxseSBhIHVuaW9uIG9mIHN1Y2Nlc3NmdWwgdmFsdWUgYW5kIGZhaWx1cmUgZXJyb3IsIHdpdGggdGhlXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVzdWx0XG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXG4gKiAgICAgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiBhIHN1Y2Nlc3NmdWwgcGFyc2UuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxuICogICAgIGR1cmluZyBhbiB1bnN1Y2Nlc3NmdWwgcGFyc2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgb2JqZWN0IHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgaW5jbHVkaW5nIHRoZVxuICogY29udGV4dCBhbmQgdGhlIHJlc3VsdC5cbiAqIEB0eXBlZGVmIHtbQ29udGV4dCwgUmVzdWx0XX0gUmVwbHlcbiAqL1xuXG4vKipcbiAqIEEgdHlwZWQgYXJyYXkgb2YgYW55IGJ1aWx0LWluIGtpbmQuXG4gKlxuICogQHR5cGVkZWZcbiAqICAgeyhVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcbiAqICAgSW50MTZBcnJheXxJbnQzMkFycmF5fEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXkpfSBUeXBlZEFycmF5XG4gKi9cblxuLyoqXG4gKiBJbnB1dCB0ZXh0IHRvIGJlIHBhcnNlZC5cbiAqXG4gKiBAdHlwZWRlZiB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gSW5wdXRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBjb250ZXh0LiBUaGlzIGlzIG5vdCBleHBvcnRlZCBiZWNhdXNlIGFcbiAqIG5ldyBjb250ZXh0IGlzIG9ubHkgY3JlYXRlZCBiZWZvcmUgcGFyc2luZywgaW4gdGhlIGBwYXJzZWAgZnVuY3Rpb24uXG4gKiBBbnkgZnVydGhlciBjb250ZXh0cyBhcmUgZGVyaXZlZCBmcm9tIHRoZSBjb250ZXh0IHVzaW5nIHtAbGluayBva30sXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxuICpcbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge0NvbnRleHR9IEFuIGVtcHR5IHBhcnNlciBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dChpbnB1dCkge1xuICBjb25zdCBtZXNzYWdlID0gJ1BhcnNlciBpbnB1dCBtdXN0IGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LCBhbiBhcnJheSAnXG4gICAgKyBgYnVmZmVyLCBvciBhIGRhdGEgdmlldzsgcGFyc2VyIGlucHV0IHdhcyAke3R5cGVvZiBpbnB1dH1gXG5cbiAgY29uc3QgdmlldyA9IChpbnB1dCA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpc1R5cGVkQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH0pKGlucHV0KVxuXG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBpbmRleDogMCxcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXG4gKiBjb250ZXh0LCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXG4gKiByZXR1cm5zIHRoZSB1cGRhdGVkIGNvbnRleHQuXG4gKlxuICogQGNhbGxiYWNrIFBhcnNlclxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYmVmb3JlIHRoZSBwYXJzZXIgaXMgcnVuLlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgdXBkYXRlZCBjb250ZXh0IGFmdGVyIHRoZSBwYXJzZXIgaXMgYXBwbGllZCBhbmRcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoYXQgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgUGFyc2VyYC4gVGhpcyBmYWN0b3J5IHNpbXBseSB0YWtlcyBhIHBhcnNlciBmdW5jdGlvblxuICogYW5kIHJldHVybnMgdGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uOyB0aGUgcHVycG9zZSBvZiB0aGUgZmFjdG9yeSBpc1xuICogdG8gdHJhY2sgcGFyc2VycyB0aGF0IGl0IGhhcyBjcmVhdGVkLlxuICpcbiAqIElmIGFzc2VydGlvbnMgYXJlIGVuYWJsZWQsIHRoaXMgd2lsbCBtZWFuIHRoYXQgYW55IHBhcnNlciBjb21iaW5hdG9yXG4gKiB3aWxsIGFzc2VydCB0aGF0IHRoZSBwYXJzZXIgdGhhdCBpcyBwYXNzZWQgdG8gaXQgd2FzIGNyZWF0ZWQgYnkgdGhpc1xuICogZmFjdG9yeSBmdW5jdGlvbi4gQW55IG90aGVyIHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93bixcbiAqIGV2ZW4gaWYgaXQgYWNjZXB0cyB0aGUgcmlnaHQga2luZCBvZiBhcmd1bWVudCBhbmQgcmV0dXJucyB0aGUgcHJvcGVyXG4gKiByZXR1cm4gdmFsdWUuIElmIGFzc2VydGlvbnMgYXJlIG5vdCBlbmFibGVkLCB0aGlzIGNoZWNrIHdpbGwgbm90IGJlXG4gKiBkb25lLlxuICpcbiAqIEV2ZXJ5IHBhcnNlciBpbiB0aGlzIGxpYnJhcnkgaXMgY3JlYXRlZCB3aXRoIGBtYWtlUGFyc2VyYCwgc28gYW55IG9mXG4gKiB0aG9zZSBvciBhbnkgcGFyc2VyIGNvbXBvc2VkIGZyb20gdGhvc2Ugd2lsbCB3b3JrIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IGZuIEEgcGFyc2VyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gVGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3QgcGFyc2VyID0gdHJhY2soZm4gPT4gZm4pXG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgcmVwbHkgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2Ugc3VjY2VlZGVkLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIHBhcnNlclxuICogICAgIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBzdWNjZWVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBva1JlcGx5KGN0eCwgdmFsdWUgPSBudWxsLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLk9rLCB2YWx1ZSB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IHJlcGx5IGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZ1xuICogaW5wdXQuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250ZXh0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbFJlcGx5KGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmFpbCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgcmVwbHkgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdoaWxlIGNvbnN1bWluZ1xuICogaW5wdXQuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W10gVGhlIGVycm9ycyBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRleHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9Y3R4LmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGUgbGF0ZXN0XG4gKiAgICAgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYXRhbFJlcGx5KGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmF0YWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFRoaXMgaW5wdXQgY2FuIGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LFxuICogYW4gYXJyYXkgYnVmZmVyLCBvciBhIGRhdGEgdmlldy4gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgZmluYWwgcGFyc2VyXG4gKiBjb250ZXh0IHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgYWZ0ZXIgYmVpbmcgcnVuLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgZmluYWwgY29udGV4dCBhZnRlciBhbGwgcGFyc2VycyBoYXZlIGJlZW5cbiAqICAgICBhcHBsaWVkIGFuZCB0aGUgcmVzdWx0IG9mIHRoZSBmaW5hbCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShwYXJzZXIsIGlucHV0KSB7XG4gIHJldHVybiBwYXJzZXIoY29udGV4dChpbnB1dCkpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtTdGF0dXN9IFRoZSBzdGF0dXMgb2YgdGhlIGdpdmVuIHJlcGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdHVzKHJlcGx5KSB7XG4gIHJldHVybiByZXBseVsxXS5zdGF0dXNcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gaW52b2NhdGlvbiBvZiBgcGFyc2VgIHdhcyBzdWNjZXNzZnVsLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcGFyc2VyIHN1Y2NlZWRlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgZGlkIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2NlZWRlZChyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzID09PSBTdGF0dXMuT2tcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuIElmIHRoZSBwYXJzZXJcbiAqIGRpZCBub3Qgc3VjY2VlZCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAqXG4gKiBOb3RlIHRoYXQgYG51bGxgIGlzIGEgcG9zc2libGUgcmVzdWx0IGZyb20gc29tZSBpbmRpdmlkdWFsIHBhcnNlcnNcbiAqIChgc2tpcGAsIGBsb29rQWhlYWRgLCBldGMuKS4gVGhlIHByb3BlciB3YXkgdG8gdGVsbCBpZiBhIHBhcnNlclxuICogc3VjY2VlZGVkIGluIHRoZSBmaXJzdCBwbGFjZSBpcyB0byB1c2UgYHN1Y2NlZWRlZGAuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB2YWx1ZSBmcm9tIHRoZSBwYXJzZSBpZiBpdCB3YXMgc3VjY2Vzc2Z1bCxcbiAqICAgICBvciBgbnVsbGAgaWYgaXQgd2FzIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2Nlc3MocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyByZXBseVsxXS52YWx1ZSA6IG51bGxcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgZXJyb3IgbWVzc2FnZSBhcyBhIHN0cmluZyBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBhblxuICogdW5zdWNjZXNzZnVsIGludm9jYXRpb24gb2YgYHBhcnNlYC4gSWYgdGhlIHBhcnNlciB3YXMgYWN0dWFsbHlcbiAqIHN1Y2Nlc3NmdWwsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmcgZGV0YWlsaW5nIHRoZSBjaXJjdW1zdGFuY2VzIG9mXG4gKiAgICAgdGhlIHBhcnNlciBmYWlsdXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZShyZXBseSkge1xuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IG51bGwgOiBmb3JtYXRFcnJvcnMocmVwbHkpXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gUmV0dXJucyB0aGUgcGFyc2VkIHZhbHVlIGlmIHRoZSBwYXJzZXJcbiAqIHN1Y2NlZWRzLCBvciB0aHJvd3MgYW4gZXhjZXB0aW9uIHdpdGggdGhlIHBhcnNlcidzIGVycm9yIG1lc3NhZ2UgaWZcbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgZnJvbSB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLCBpZiB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBhcnNlciBmYWlscy4gVGhlIGVycm9yIG1lc3NhZ2Ugd2lsbCBiZSBhXG4gKiAgICAgZGV0YWlsZWQgcmVjb3JkIG9mIHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwYXJzZXIsIGlucHV0KSB7XG4gIGNvbnN0IFtyZXBseSwgW18sIHJlc3VsdF1dID0gZHVwKHBhcnNlcihjb250ZXh0KGlucHV0KSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEVycm9ycyhyZXBseSkpXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBjaGFyTGVuZ3RoLFxuICBjb21tYVNlcGFyYXRlLFxuICBuZXh0Q2hhcldpZHRoLFxuICB2aWV3VG9TdHJpbmcsXG59IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5SZXN1bHR9IFJlc3VsdCAqL1xuXG5jb25zdCB0YWIgPSAvXFx0L2d1XG5jb25zdCB6ZXJvV2lkdGggPSAvKD86XFxwe01ufXxcXHB7Q2Z9KS9ndVxuXG4vKipcbiAqIEEgc3RyaW5nIGRlZmluaW5nIHRoZSB0eXBlIG9mIGFuIGVycm9yLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVycm9yVHlwZSA9IHtcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGV4cGVjdGVkIHJlc3VsdC4gUHJvZHVjZWQgYnkgdGhlIHZhc3RcbiAgICogbWFqb3JpdHkgb2YgcGFyc2Vycy5cbiAgICovXG4gIEV4cGVjdGVkOiAnZXhwZWN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSByZXN1bHQgdGhhdCB3YXMgbm90IGV4cGVjdGVkLiBUeXBpY2FsbHlcbiAgICogcHJvZHVjZWQgYnkgcGFyc2VycyBzdWNoIGFzIGB1bmV4cGVjdGVkYCBhbmQgYG5vdEZvbGxvd2VkQnlgLlxuICAgKi9cbiAgVW5leHBlY3RlZDogJ3VuZXhwZWN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFR5cGljYWxseSBwcm9kdWNlZFxuICAgKiBieSBwYXJzZXJzIHN1Y2ggYXMgYGZhaWxgIGFuZCBgZmFpbEZhdGFsbHlgLlxuICAgKi9cbiAgR2VuZXJpYzogJ2dlbmVyaWMnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXJyb3Igd2l0aGluIGFub3RoZXIgZXJyb3IuIFRoaXMgaXNcbiAgICogZ2VuZXJhbGx5IHVzZWQgZm9yIGFuIGVycm9yIHRoYXQgY2F1c2VkIGJhY2t0cmFja2luZywgd2hlcmUgdGhlXG4gICAqIHBhcmVudCBlcnJvciBpcyByZXBvcnRlZCBhZnRlciBiYWNrdHJhY2tpbmcuXG4gICAqL1xuICBOZXN0ZWQ6ICduZXN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBuZXN0ZWQgZXJyb3Igd2l0aCBpdHMgb3duIHNlcGFyYXRlIGVycm9yXG4gICAqIG1lc3NhZ2UuIFRoaXMgaXMgcHJvZHVjZWQgc3BlY2lmaWNhbGx5IGJ5IHRoZSBgY29tcG91bmRgIHBhcnNlci5cbiAgICovXG4gIENvbXBvdW5kOiAnY29tcG91bmQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgc29tZSBvdGhlciBraW5kIG9mIGVycm9yIG1lc3NhZ2UgdG8gYmVcbiAgICogZGlzcGxheWVkIGluIGEgY3VzdG9tIGVycm9yIGZvcm1hdHRlci5cbiAgICovXG4gIE90aGVyOiAnb3RoZXInLFxufVxuXG4vKipcbiAqIEEgbGlzdCBvZiBlcnJvcnMuIFRoaXMgY2FuIGNvbnNpc3Qgb2YgYW55IGVycm9yIG1lc3NhZ2VzIHRoYXQgYXBwbHlcbiAqIHRvIGEgcGFydGljdWxhciBpbmRleCBvciBuZXN0ZWQvY29tcG91bmQgZXJyb3JzIHRoYXQgcG9pbnQgYmFjayB0b1xuICogdGhlIHNhbWUgaW5kZXggYnV0IGFwcGx5IHRvIGEgZGlmZmVyZW50IG9uZS5cbiAqIEB0eXBlZGVmIHsoTmVzdGVkRXJyb3J8Q29tcG91bmRFcnJvcnxMb2NhbEVycm9yKVtdfSBFcnJvckxpc3RcbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBhdCB0aGUgbG9jYXRpb24gcmVmZXJyZWQgdG8gYnkgdGhlIGN1cnJlbnRcbiAqIGNvbnRleHQuIFRoZSB0eXBlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXJlIHRoZSBsYWJlbCBzaG91bGQgYmVcbiAqIHBvc2l0aW9uZWQgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTG9jYWxFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBlcnJvci5cbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBpbiBhIGRpZmZlcmVudCBsb2NhdGlvbiB0aGFuIHRoZSBvbmUgcmVmZXJyZWRcbiAqIHRvIGJ5IHRoZSBjdXJyZW50IGNvbnRleHQuIFRoZSBtb3N0IHR5cGljYWwgcmVhc29uIGZvciB0aGlzIGhhcHBlbmluZ1xuICogaXMgYmFja3RyYWNraW5nOyB0aGUgbG9jYWwgZXJyb3IgY2FuIHRyYWNrIHRoZSBjdXJyZW50XG4gKiAocG9zdC1iYWNrdHJhY2spIGxvY2F0aW9uIHdoaWxlIHRoZSBuZXN0ZWQgZXJyb3IgcmV0YWlucyBpbmZvcm10aW9uXG4gKiBmcm9tIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgYmFja3RyYWNraW5nIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXN0ZWRFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcbiAqICAgICBgRXJyb3JUeXBlLk5lc3RlZGAuXG4gKiBAcHJvcGVydHkge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbFxuICogICAgIGVycm9yIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tXG4gKiAgICAgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgY3R4YC5cbiAqL1xuXG4vKipcbiAqIEEgbmVzdGVkIGVycm9yIHRoYXQgaGFzIGl0cyBvd24gbGFiZWwuIFRoaXMgaXMgc2ltcGx5IGZvciBwcm9kdWNpbmdcbiAqIG5pY2VyIGVycm9yIG1lc3NhZ2VzOyB0aGlzIGVycm9yIGlzIHR5cGljYWxseSBvbmx5IHByb2R1Y2VkIGJ5IHRoZVxuICogYGJhY2tsYWJlbGAgcGFyc2VyLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbXBvdW5kRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXG4gKiAgICAgYEVycm9yVHlwZS5Db21wb3VuZGAuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZXJyb3IuIFRoaXNcbiAqICAgICBpcyB0eXBpY2FsbHkgdXNlZCBhcyBhIHNvcnQgb2YgaGVhZGVyIG92ZXIgdGhlIG5lc3RlZCBtZXNzYWdlc1xuICogICAgIHVuZGVyIHRoaXMgY29tcG91bmQgZXJyb3IuXG4gKiBAcHJvcGVydHkge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbFxuICogICAgIGVycm9yIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tXG4gKiAgICAgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgY3R4YC5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZXJyb3IgbGlzdCBjb250YWluaW5nIG9uZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGV4cGVjdGVkLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZXhwZWN0ZWQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGVjdGVkKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuRXhwZWN0ZWQsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuIEl0IGlzIGV4cGVjdGVkIHRoYXQgb25lIGFycmF5IG9mXG4gKiBlcnJvciBtZXNzYWdlcyBtYXkgaGF2ZSBtdWx0aXBsZSB1bmV4cGVjdGVkIGVycm9ycywgYnV0IG9ubHkgdGhlXG4gKiBmaXJzdCB3aWxsIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZm91bmQgYnV0IHdhc1xuICogICAgIG5vdCBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIHVuZXhwZWN0ZWQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXhwZWN0ZWQobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5VbmV4cGVjdGVkLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFRoZXJlIGNhbiBiZSBtb3JlIHRoYW4gb25lIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgaW4gYW4gYXJyYXkgb2YgZXJyb3IgbWVzc2FnZXMsIGJ1dCBvbmx5IHRoZSBmaXJzdCB3aWxsXG4gKiBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgZ2VuZXJpYyBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBnZW5lcmljIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuR2VuZXJpYywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIG90aGVyIGVycm9yLiBUaGVzZSBlcnJvcnMgYXJlIG5vdCBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHRcbiAqIGZvcm1hdHRlciBhdCBhbGwgYW5kIGFyZSBvbmx5IHVzZWZ1bCBmb3IgY3VzdG9tIGZvcm1hdHRlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBvdGhlciBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBwYXJzZSBlcnJvciBvZiB0aGUgb3RoZXIgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG90aGVyKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuT3RoZXIsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5lc3RlZCBlcnJvci4gVGhpcyB0YWtlcyBhbiBlcnJvciBsaXN0IGFuZCB3cmFwcyBpdCB3aXRoXG4gKiBjb250ZXh0IGluZm9ybWF0aW9uLiBJZiB0aGUgc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlXG4gKiBuZXN0ZWQgZXJyb3IsIHRoYXQgZXJyb3IgaXMgc2ltcGx5IHJldHVybmVkOyBhIHNpbmdsZSBuZXN0ZWQgZXJyb3JcbiAqIHdpbGwgbm90IGJlIG5lc3RlZCBpbiBhbm90aGVyIG5lc3RlZCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIG5lc3RlZCBlcnJvclxuICogICAgIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBjb250ZXh0LlxuICogQHJldHVybnMge1tOZXN0ZWRFcnJvcl19IEEgbmV3IG5lc3RlZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lc3RlZChjdHgsIGVycm9ycykge1xuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxuICAgID8gZXJyb3JzXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuTmVzdGVkLCBjdHgsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgY29tcG91bmQgZXJyb3IuIFRoaXMgd3JhcHMgYW4gZXJyb3IgbGlzdCBqdXN0IGFzIGFcbiAqIG5lc3RlZCBlcnJvciBkb2VzLCBleGNlcHQgaXQgYWxzbyBhdHRhY2hlcyBhIG1lc3NhZ2UgdG8gaXQuIElmIHRoZVxuICogc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlIG5lc3RlZCBlcnJvciwgaXRzIGluZm9ybWF0aW9uIGlzXG4gKiB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBjb21wb3VuZCBlcnJvciB3aXRob3V0IGFueSBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGF0dGFjaGVkIHRvIHRoZSBuZXN0ZWQgZXJyb3IuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIGNvbXBvdW5kXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7W0NvbXBvdW5kRXJyb3JdfSBBIG5ldyBjb21wb3VuZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvdW5kKGxhYmVsLCBjdHgsIGVycm9ycykge1xuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxuICAgID8gW3tcbiAgICAgIHR5cGU6IEVycm9yVHlwZS5Db21wb3VuZCxcbiAgICAgIGN0eDogZXJyb3JzLmN0eCxcbiAgICAgIGVycm9yczogZXJyb3JzLmVycm9ycyxcbiAgICAgIGxhYmVsLFxuICAgIH1dXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsIGN0eCwgZXJyb3JzLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIE1lcmdlcyB0d28gYXJyYXlzIG9mIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9yczE9W11dIFRoZSBmaXJzdCBhcnJheSBvZiBlcnJvcnMuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9yczI9W11dIFRoZSBzZWNvbmQgYXJyYXkgb2YgZXJyb3JzLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVycm9ycyBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHR3byBhcnJheXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShlcnJvcnMxID0gW10sIGVycm9yczIgPSBbXSkge1xuICByZXR1cm4gWy4uLmVycm9yczEsIC4uLmVycm9yczJdXG59XG5cbi8vICNyZWdpb24gRm9ybWF0dGluZyB1dGlsaXR5IGZ1bmN0aW9uc1xuXG4vLyAjcmVnaW9uIFR5cGVkZWZzIGZvciBvYmplY3QgcmV0dXJuIHR5cGVzXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2YWx1YXRpb24gb2YgYSBieXRlIHRvIHNlZVxuICogaWYgaXQgaXMgKG9yIHN0YXJ0cykgYSBuZXdsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5ld2xpbmVJbmZvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG5ld2xpbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNjYW5uZWQgYnl0ZSB3YXNcbiAqICAgICBlaXRoZXIgYSBuZXdsaW5lIG9yIHRoZSBiZWdpbm5pbmcgb2YgYSBtdWx0aS1ieXRlIG5ld2xpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2tpcCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgdGhlIG5leHQgY2hhcmFjdGVyXG4gKiAgICAgY29udGFpbnMuIFRoaXMgaXMgcmV0dXJuZWQgYWNjdXJhdGVseSB3aGV0aGVyIG9yIG5vdCB0aGF0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGEgbmV3bGluZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydCBhbmQgZW5kIGluZGV4ZXMgb2YgYVxuICogbGluZSB3aXRoaW4gYSBkYXRhIHZpZXcsIGFzIHdlbGwgYXMgdGhlIG51bWJlciBvZiB0aGF0IGxpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTGluZUluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGFsd2F5cyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBkYXRhIHZpZXcgaXRzZWxmLCBvciB0aGUgZmlyc3QgYnl0ZSBhZnRlciBhIG5ld2xpbmVcbiAqICAgICBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kIFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgbGFzdFxuICogICAgIGJ5dGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBlaXRoZXIgdGhlIGxhc3RcbiAqICAgICBieXRlIGluIHRoZSBkYXRhIHZpZXcgb3IgdGhlIGJ5dGUgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgYSBuZXdsaW5lIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lbm8gVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIGJvdW5kZWQgYnlcbiAqICAgICBpbmRleGVzIGBzdGFydGAgYW5kIGBlbmRgLiBUaGlzIG51bWJlciBpcyAxLWJhc2VkLCBhcyBpdCBpcyB1c2VkXG4gKiAgICAgZm9yIGRpc3BsYXkgb2YgYW4gZXJyb3IgcG9zaXRpb24gaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyB0aGUgYWRqdXN0ZWQgbGluZSBhbmQgY29sdW1uIGluZGV4IHRoYXQgcmVzdWx0c1xuICogZnJvbSB0YWIgZXhwYW5zaW9uLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhYmJlZExpbmVJbmZvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGluZSBUaGUgc3RyaW5nIG9mIHRleHQgcmVwcmVzZW50aW5nIG9uZSBsaW5lLFxuICogICAgIHdpdGggdGFiIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBzcGFjZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sSW5kZXggVGhlIGNoYXJhY3RlciBpbmRleCBwYXNzZWQgaW50byB0aGVcbiAqICAgICBmdW5jdGlvbiwgYWRqdXN0ZWQgYnkgdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0YWJzIGFuZFxuICogICAgIHRoZSBzcGFjZXMgdXNlZCB0byByZXBsYWNlIHRoZW0uXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFuaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBjb2x1bW4gaW5kZXggYW5kIGxpbmVcbiAqIGxlbmd0aCBhZnRlciBhY2NvdW50aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29sSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sbm8gVGhlIGFkanVzdGVkIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlclxuICogICAgIHBvaW50ZWQgdG8gYnkgdGhlIGBjaGFySW5kZXhgIHBhcmFtZXRlci4gVGhpcyBpcyBhZGp1c3RlZCBieSBhbnlcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdGhhdCBtYXkgYXBwZWFyIGluIHRoZSBsaW5lIGFuZCBpcyB0dXJuZWRcbiAqICAgICBpbnRvIGEgMS1iYXNlZCBudW1iZXIgZm9yIGRpc3BsYXkgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhpcyBpcyByZXR1cm5lZCBzb2xlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqICAgICBvdGhlciBmdW5jdGlvbnMgd2hvIHRoZW4gd29uJ3QgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGUgd2lkdGggb2ZcbiAqICAgICB0aGUgbGluZSBhY2NvdW50aW5nIGZvciB0aG9zZSBzYW1lIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqL1xuXG4vKipcbiAgKiBPYmplY3QgY29udGFpbmluZyBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycy5cbiAgKlxuICAqIEB0eXBlZGVmIHtvYmplY3R9IFBvc2l0aW9uXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmUgVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG8gYnlcbiAgKiAgICAgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldy5cbiAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uIFRoZSBjb2x1bW4gbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG9cbiAgKiAgICAgYnkgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldywgYWRqdXN0ZWQgZm9yIGNoYXJhY3RlciB3aWR0aCBhbmRcbiAgKiAgICAgdGFiIHNpemUuXG4gICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBjYWxsZWQgYnkgYGZvcm1hdEVycm9yc2AgdG8gZG8gdGhlIGFjdHVhbCBmb3JtYXR0aW5nLiBBXG4gKiBkZWZhdWx0IGZvcm1hdHRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCBidXQgY2FuIGJlIHJlcGxhY2VkIGlmXG4gKiBkZXNpcmVkLlxuICpcbiAqIEBjYWxsYmFjayBGb3JtYXR0ZXJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGVycm9ycyBiZWluZyB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiBgdmlld2Agb2YgdGhlIGJ5dGUgd2hlcmUgdGhlXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xuICogICAgIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gZGlzcGxheSB3aWR0aCBvZiB0aGUgbGluZSB3aGVyZVxuICogICAgIHRoZSBlcnJvciBvY2N1cnJlZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZVxuICogICAgIHRydW5jYXRlZCB3aXRoIGVsbGlwc2VzIGJlZm9yZSBhbmQvb3IgYWZ0ZXIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIG11bHRpLWxpbmUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhcmFjdGVyIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3VwcGxpZWRcbiAqIHZpZXcgaXMgYSBuZXdsaW5lLiBBbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllcyBpcyByZXR1cm5lZDtcbiAqIGBuZXdsaW5lYCBpcyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGF0IGNoYXJhY3RlciBpcyBhXG4gKiBuZXdsaW5lOyBgc2tpcGAgaXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgKGFuZCB0aGVyZWZvcmUgaG93IG1hbnlcbiAqIGJ5dGVzIHRvIHNraXAgdW50aWwgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGNoZWNrKS5cbiAqXG4gKiBBbGwgVW5pY29kZSBuZXdsaW5lcyAoQ1IsIExGLCBGRiwgVlQsIE5FTCwgTFMsIGFuZCBQUykgYXJlIGhhbmRsZWQsXG4gKiBhbG9uZyB3aXRoIHRoZSBtdWx0aS1jaGFyYWN0ZXIgbmV3bGluZSBDUitMRi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGludG8gYHZpZXdgIGluZGljYXRpbmcgdGhlIGJ5dGUgdG9cbiAqICAgICBjaGVjayB0byBzZWUgaWYgaXQncyBhIG5ld2xpbmUuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXdsaW5lSW5mb30gTmV3bGluZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5kZXhlZCBieXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdsaW5lKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoYnl0ZSA9PT0gMHgwYSB8fCBieXRlID09PSAweDBiIHx8IGJ5dGUgPT09IDB4MGMpIHtcbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChieXRlID09PSAweDBkKSB7XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcbiAgICAgIGlmIChieXRlID09PSAweDBkICYmIG5leHRCeXRlID09PSAweDBhKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuXG4gICAgaWYgKGJ5dGUgPT09IDB4YzIgJiYgbmV4dEJ5dGUgPT09IDB4ODUpIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDIpIHtcbiAgICAgIGNvbnN0IHRoaXJkQnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAyKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4ZTIgJiYgbmV4dEJ5dGUgPT09IDB4ODBcbiAgICAgICAgJiYgKHRoaXJkQnl0ZSA9PT0gMHhhOCB8fCB0aGlyZEJ5dGUgPT09IDB4YTkpKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDMgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG5ld2xpbmU6IGZhbHNlLCBza2lwOiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyBpbmRleGVzIG9mIHRoZSBsaW5lIGluIHRoZSBnaXZlblxuICogdmlldyB0aGF0IGNvbnRhaW5zIHRoZSBieXRlIHBvaW50ZWQgYXQgYnkgYGluZGV4YC4gSXQgZG9lcyB0aGlzIGJ5XG4gKiBkZXRlcm1pbmluZyB3aGVyZSBuZXdsaW5lcyBhcmUgYW5kIHRoZW4gZmlndXJpbmcgb3V0IHdoaWNoIG9uZXMgY29tZVxuICogY2xvc2VzdCBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmRleC4gVGhlIG51bWJlciBvZiBuZXdsaW5lcyB0aGF0IGNhbWVcbiAqIGJlZm9yZSB0aGUgaW5kZXggKGFuZCB0aGVyZWZvcmUgdGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIHdpdGggdGhlXG4gKiBpbmRleCkgaXMgYWxzbyBjb3VudGVkLlxuICpcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhyZWUgcHJvcGVydGllczogYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlXG4gKiBmaXJzdCBieXRlIG9mIHRoZSBsaW5lLCBgZW5kYCBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgYnl0ZSBvZiB0aGVcbiAqIGxpbmUgKG5vdCBjb3VudGluZyB0aGUgbmV3bGluZSksIGFuZCBgbGluZW5vYCBpcyB0aGUgbGluZSBudW1iZXJcbiAqIHdoZXJlIHRoZSBpbmRleCBhcHBlYXJzLiBgbGluZW5vYCBpcyAxLWluZGV4ZWQgc2luY2UgaXQgaXMgbWVhbnQgZm9yXG4gKiBkaXNwbGF5IGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGxpbmVcbiAqICAgICBpbmRleCBpbmZvcm1hdGlvbiBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TGluZUluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmdcbiAqICAgICBpbmRleGVzIG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpIHtcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgbGluZW5vID0gMSAvLyAxLWJhc2VkXG4gIGxldCBpID0gMFxuXG4gIHdoaWxlIChpIDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgY29uc3QgeyBuZXdsaW5lLCBza2lwIH0gPSBpc05ld2xpbmUoaSwgdmlldylcbiAgICBpZiAobmV3bGluZSkge1xuICAgICAgaWYgKGkgKyBza2lwID4gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZDogaSAtIDEsIGxpbmVubyB9XG4gICAgICB9XG4gICAgICBsaW5lbm8rK1xuICAgICAgc3RhcnQgPSBpICsgc2tpcFxuICAgIH1cbiAgICBpICs9IHNraXBcbiAgfVxuICByZXR1cm4geyBzdGFydCwgZW5kOiB2aWV3LmJ5dGVMZW5ndGggLSAxLCBsaW5lbm8gfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNoYXJhY3RlciBpbmRleCAoYXMgb3Bwb3NlZCB0byBieXRlIGluZGV4KSB3aXRoaW4gYVxuICogc2luZ2xlIGxpbmUgb2YgdGV4dCBvZiB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgdG8gYnkgYGluZGV4YCB3aXRoaW5cbiAqIGB2aWV3YC4gVGhlIGBzdGFydGAgcGFyYW1ldGVyIHNldHMgdGhlIGZpcnN0IGJ5dGUgb2YgYSBcImxpbmVcIiB3aXRoaW5cbiAqIHRoZSB2aWV3IGFuZCBjYW4gYmUgY2FsY3VsYXRlZCB3aXRoIHtAbGluayBnZXRMaW5lSW5kZXhlc30gYWJvdmUuXG4gKlxuICogSW4gbGluZXMgd2l0aCBvbmx5IHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMsIHRoZSBjaGFyYWN0ZXIgaW5kZXggd2lsbFxuICogYWx3YXlzIGJlIHRoZSBzYW1lIGFzIGBpbmRleCAtIHN0YXJ0YC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvblxuICogaXMgdG8gYWRqdXN0IHdoZW4gbXVsdGktYnl0ZSBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGNoYXJhY3RlclxuICogICAgIGluZGV4IGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCwgd2l0aGluIGEgc2luZ2xlIGxpbmUgb2YgdGV4dCwgb2YgdGhlXG4gKiAgICAgY2hhcmFjdGVyIHdob3NlIGZpcnN0IGJ5dGUgaXMgYmVpbmcgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydCkge1xuICBsZXQgY2hhckluZGV4ID0gMFxuICBsZXQgYnl0ZUluZGV4ID0gc3RhcnRcbiAgd2hpbGUgKGJ5dGVJbmRleCA8IGluZGV4ICYmIGJ5dGVJbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGJ5dGVJbmRleCArPSBuZXh0Q2hhcldpZHRoKGJ5dGVJbmRleCwgdmlldylcbiAgICBjaGFySW5kZXgrK1xuICB9XG4gIHJldHVybiBjaGFySW5kZXhcbn1cblxuLyoqXG4gKiBFeHBhbmRzIHRhYnMgaW50byBzcGFjZXMgYW5kIGNhbGN1bGF0ZXMgdGhlIGNvbHVtbiBpbmRleCBvZiB0aGVcbiAqIGluZGV4ZWQgY2hhcmFjdGVyIGFkanVzdGluZyBmb3IgdGhvc2Ugc3BhY2VzLiBUaGUgbnVtYmVyIG9mIHNwYWNlcyBpblxuICogZWFjaCB0YWIgY2FuIGJlIHNwZWNpZmllZCB3aXRoIGB0YWJTaXplYC5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiBgbGluZWAgaXMgdGhlXG4gKiBpbnB1dCBsaW5lIHdpdGggdGFicyBleHBhbmRlZCBpbnRvIHNwYWNlcywgYW5kIGBjb2xJbmRleGAgaXMgdGhlXG4gKiBpbmRleCBvZiB0aGUgY29sdW1uIHRoYXQgaGFzIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCBhdCBieSB0aGVcbiAqIGNoYXJhY3RlciBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhckluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXRcbiAqICAgICB3aXRoaW4gdGhlIGxpbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIHRhYmlmaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHNwYWNlcyB0aGF0IGNhbiByZXBsYWNlXG4gKiAgICAgYSB0YWIuIE5vdGUgdGhhdCB0YWJzIGFyZSB0cmVhdGVkIGFzIHN0b3BzOyB0aGV5IHdpbGwgYmUgb2ZcbiAqICAgICB2YXJ5aW5nIHNpemVzIHRoYXQgcmVzdWx0cyBpbiB0aGVtIGFsd2F5cyBlbmRpbmcgYXQgYSBjb2x1bW4gdGhhdFxuICogICAgIGlzIGEgbXVsdGlwbGUgb2YgYHRhYlNpemVgLlxuICogQHJldHVybnMge1RhYmJlZExpbmVJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbGluZSBhZnRlciByZXBsYWNpbmdcbiAqICAgICB0YWJzIHdpdGggc3BhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFiaWZ5KGNoYXJJbmRleCwgbGluZSwgdGFiU2l6ZSkge1xuICBjb25zdCB0YWJJbmRleGVzID0gW11cbiAgbGV0IHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgd2hpbGUgKHRhYk1hdGNoICE9PSBudWxsKSB7XG4gICAgdGFiSW5kZXhlcy5wdXNoKHRhYk1hdGNoLmluZGV4KVxuICAgIHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgfVxuXG4gIC8vIHJlcGxhY2UgZWFjaCB0YWIgd2l0aCB0aGUgY29yZWN0IG51bWJlciBvZiBzcGFjZXMsIHNoaWZ0aW5nIHRoZVxuICAvLyByZW1haW5pbmcgaW5kZXhlcyBieSB0aGF0IGFtb3VudFxuICBsZXQgb2Zmc2V0ID0gMFxuICBsZXQgcHJlSW5kZXhPZmZzZXQgPSAwXG4gIGxldCByZXN1bHQgPSBsaW5lXG5cbiAgZm9yIChjb25zdCB0YWJJbmRleCBvZiB0YWJJbmRleGVzKSB7XG4gICAgY29uc3QgYWN0dWFsSW5kZXggPSB0YWJJbmRleCArIG9mZnNldFxuICAgIGNvbnN0IHNwYWNlQ291bnQgPSB0YWJTaXplIC0gYWN0dWFsSW5kZXggJSB0YWJTaXplXG4gICAgaWYgKGFjdHVhbEluZGV4IDwgY2hhckluZGV4ICsgcHJlSW5kZXhPZmZzZXQpIHtcbiAgICAgIHByZUluZGV4T2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgfVxuICAgIG9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgYWN0dWFsSW5kZXgpICsgJyAnLnJlcGVhdChzcGFjZUNvdW50KVxuICAgICAgKyByZXN1bHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4ICsgMSlcbiAgfVxuICByZXR1cm4geyBsaW5lOiByZXN1bHQsIGNvbEluZGV4OiBwcmVJbmRleE9mZnNldCArIGNoYXJJbmRleCB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZmluYWwgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgdG9cbiAqIGJ5IHRoZSBjb2x1bW4gaW5kZXguIFRoaXMgY29sdW1uIG51bWJlciBpcyAxLWJhc2VkIChmb3IgZGlzcGxheSwgdGhlXG4gKiBzYW1lIGFzIHRoZSBsaW5lIG51bWJlciBmcm9tIGBnZXRMaW5lSW5kZXhlc2ApIGFuZCBpcyBhZGp1c3RlZCBmb3JcbiAqIHplcm8td2lkdGggY2hhcmFjdGVycyBzdWNoIGFzIGZvcm1hdHRpbmcgY2hhcmFjdGVycyBhbmQgbm9uLXNwYWNpbmdcbiAqIG1hcmtzLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHR3byBwcm9wZXRpZXM6IGBjb2xub2AgaXMgdGhlXG4gKiAxLWluZGV4ZWQgY29sdW1uIG51bWJlciwgYW5kIGBsZW5ndGhgIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxpbmVcbiAqIGFkanVzdGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGUgbGF0dGVyIGlzIHByb3ZpZGVkIHNvIGl0XG4gKiBkb2Vzbid0IGhhdmUgdG8gYmUgcmVjYWxjdWxhdGVkIGJ5IGBzaG93YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY29sSW5kZXggVGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gd2l0aGluIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IHBvdGVudGlhbGx5IGNvbnRhaW5pbmdcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdG8gYWNjb3VudCBmb3IuXG4gKiBAcmV0dXJucyB7Q29sSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSkge1xuICBsZXQgaW5kZXggPSBjb2xJbmRleFxuICBjb25zdCBtYXRjaGVzID0gW11cblxuICBsZXQgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB3aGlsZSAobWF0Y2ggIT09IG51bGwpIHtcbiAgICBtYXRjaGVzLnB1c2gobWF0Y2guaW5kZXgpXG4gICAgaWYgKG1hdGNoLmluZGV4IDwgaW5kZXgpIGluZGV4LS1cbiAgICBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb2xubzogaW5kZXggKyAxLCAvLyAxLWJhc2VkXG4gICAgbGVuZ3RoOiBjaGFyTGVuZ3RoKGxpbmUpIC0gbWF0Y2hlcy5sZW5ndGgsXG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmUgbGluZSB0aGF0IGlzIHRoZSB0ZXh0IGF0IGFuZCBhcm91bmRcbiAqIHRoZSBjb2x1bW4gdG8gYmUgZGlzcGxheWVkLCBhbmQgb25lIGxpbmUgdGhhdCBpcyBhIGNhcmV0IHBvaW50aW5nIHRvXG4gKiB0aGF0IHBhcnRpY3VsYXIgY29sdW1uLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBlbGxpcHNlcyBhcyBuZWVkZWQgdG8gdGhlIGZyb250IGFuZC9vciB0aGUgYmFjayBvZlxuICogdGhlIGxpbmUgaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb2x1bW4gaW50byB0aGUgdmlzaWJsZSBhcmVhLCBiYXNlZCBvblxuICogdGhlIGBtYXhXaWR0aGAgb2YgdGhlIGxpbmUgdG8gZGlzcGxheS4gVGhlIGBsZW5ndGhgIHBhcmFtZXRlciBpcyB0aGVcbiAqIGBsZW5ndGhgIHJldHVybmVkIGJ5IGBnZXRDb2xOdW1iZXJgIGFuZCBpcyBoZXJlIGp1c3QgdG8gYXZvaWQgaGF2aW5nXG4gKiB0byByZWNhbGN1bGF0ZSBpdCBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gaXQgYWxyZWFkeSBuZWVkZWQgdG8gYmVcbiAqIGNhbGN1bGF0ZWQgaW4gdGhlIG90aGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgZm9ybWF0dGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3IgdGFicyBhbmRcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKiBAcGFyYW0ge251bWJlcn0gY29sbm8gVGhlIGNvbHVtbiBudW1iZXIgd2hlcmUgdGhlIGNhcmV0IHNob3VsZCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcG90ZW50aWFsbHkgdHJ1bmNhdGVkIGxpbmUgb2YgdGV4dCwgZm9sbG93ZWQgYnlcbiAqICAgICBhbm90aGVyIGxpbmUgY29udGFpbmluZyBhIGNhcmV0IHBvaW50aW5nIGF0IHRoZSBkZXNpZ25hdGVkXG4gKiAgICAgY29sdW1uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50ID0gMCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuXG4gIC8vIEZpcnN0IGNhc2U6IHRoZSBsaW5lIGlzIHNob3J0ZXIgdGhhbiBtYXhXaWR0aC4gRGlzcGxheSB0aGUgbGluZVxuICAvLyB3aXRoIHRoZSBjYXJldCBwb3NpdGlvbmVkIGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggJiYgbGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZX1cXG4ke3NwfSR7JyAnLnJlcGVhdChjb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBTZWNvbmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgdG8gYSBjaGFyYWN0ZXIgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuXG4gIC8vIERpc3BsYXkgdGhlIGZpcnN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBhZnRlciBpdCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggLSAzKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZS5zdWJzdHJpbmcoMCwgbWF4V2lkdGggLSAzKX0uLi5cXG4ke3NwfSR7XG4gICAgICAnICcucmVwZWF0KGNvbG5vIC0gMSlcbiAgICB9XmBcbiAgfVxuXG4gIC8vIFRoaXJkIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIGF0IGEgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKVxuICAvLyBjaGFyYWN0ZXJzIGJ1dCBpcyBpbiB0aGUgbGFzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBEaXNwbGF5XG4gIC8vIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBiZWZvcmUgaXQsIGNhbGN1bGF0ZSBhIG5ld1xuICAvLyBwb3NpdGlvbiBmb3IgdGhlIGNhcmV0LCBhbmQgcG9zaXRpb24gaXQgYmVsb3cgdGhlIGxpbmUuXG4gIGlmIChjb2xubyA+PSBsZW5ndGggLSBtYXhXaWR0aCArIDMpIHtcbiAgICBjb25zdCBzdGFydCA9IGxlbmd0aCAtIG1heFdpZHRoICsgM1xuICAgIGNvbnN0IG5ld0NvbG5vID0gY29sbm8gLSAobGVuZ3RoIC0gbWF4V2lkdGgpXG4gICAgcmV0dXJuIGAke3NwfS4uLiR7bGluZS5zdWJzdHJpbmcoc3RhcnQpfVxcbiR7c3B9JHsnICcucmVwZWF0KG5ld0NvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIEZpbmFsIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIG1heFdpZHRoIC0gMyBhbmQgdGhlIGNhcmV0XG4gIC8vIGRvZXMgbm90IHBvaW50IHRvIGEgY2hhcmFjdGVyIHdpdGhpbiBlaXRoZXIgdGhlIGZpcnN0IG9yIGxhc3RcbiAgLy8gKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gU2hpZnQgdGhlIGxpbmUgdG8gbWFrZSB0aGUgY2FyZXQgcG9pbnRcbiAgLy8gYXQgdGhlIG1pZGRsZSBvZiBpdCwgYWRkIGAuLi5gIHRvIHRoZSBzdGFydCAqYW5kKiBlbmQsIGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGNvbnN0IHN0YXJ0ID0gY29sbm8gLSAxIC0gTWF0aC5jZWlsKG1heFdpZHRoIC8gMikgKyAzXG4gIGNvbnN0IGVuZCA9IGNvbG5vIC0gMSArIE1hdGguZmxvb3IobWF4V2lkdGggLyAyKSAtIDNcbiAgcmV0dXJuIGAke3NwfS4uLiR7XG4gICAgbGluZS5zdWJzdHJpbmcoc3RhcnQsIGVuZClcbiAgfS4uLlxcbiR7c3B9JHtcbiAgICAnICcucmVwZWF0KE1hdGguY2VpbChtYXhXaWR0aCAvIDIpKVxuICB9XmBcbn1cblxuLyoqXG4gKiBSZW1vdmUgZHVwbGljYXRlcyBmcm9tIGFuIGFycmF5LiBUaGlzIGlzIG1lYW50IGZvciBzdHJpbmdzIChlcnJvclxuICogbWVzc2FnZXMpIHRob3VnaCBpdCB3b3VsZCBhbHNvIHdvcmsgd2l0aCBwcmltaXRpdmVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGFycmF5IFRoZSBhcnJheSBvZiBzdHJpbmdzIHRvIGRlZHVwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gVGhlIHNhbWUgYXJyYXksIGJ1dCB3aXRoIG5vIGR1cGxpY2F0ZSBzdHJpbmdzLlxuICovXG5mdW5jdGlvbiBkZWR1cGUoYXJyYXkpIHtcbiAgcmV0dXJuIFsuLi5uZXcgU2V0KGFycmF5KV1cbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEgc2V0IG9mIG5lc3RlZCAob3IgY29tcG91bmQpIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7KE5lc3RlZEVycm9yW118Q29tcG91bmRFcnJvcltdKX0gbmVzdGVkcyBBbiBhcnJheSBvZiBlaXRoZXJcbiAqICAgICBuZXN0ZWQgb3IgY29tcG91bmQgZXJyb3JzIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmUgdGFiXG4gKiAgICAgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRlbnQgVGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50IHRoZSBlcnJvclxuICogICAgIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIG5lc3RlZCBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBmb3JtYXROZXN0ZWQobmVzdGVkcywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuICBjb25zdCBuZXN0ZWRNc2dzID0gbmVzdGVkcy5tYXAobiA9PiB7XG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gbi5jdHhcbiAgICBjb25zdCBsYWJlbCA9IG4ubGFiZWxcbiAgICAgID8gYFxcbiR7c3B9Q291bGQgbm90IHBhcnNlICR7bi5sYWJlbH0gYmVjYXVzZTpcXG5cXG5gXG4gICAgICA6IGBcXG4ke3NwfVRoZSBwYXJzZXIgYmFja3RyYWNrZWQgYWZ0ZXI6XFxuXFxuYFxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxuICB9KVxuICByZXR1cm4gZGVkdXBlKG5lc3RlZE1zZ3MpLmpvaW4oJycpXG59XG5cbi8qKlxuICogRW5zdXJlcyB0aGF0IGEgc3RyaW5nIGVuZHMgd2l0aCBhIGNlcnRhaW4gbnVtYmVyIG9mIG5ld2xpbmVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBzdHJpbmcgdGhhdCBpcyBzdXBwb3NlZCB0byBoYXZlIGEgY2VydGFpblxuICogICAgIG51bWJlciBvZiBuZXdsaW5lcyBhdCB0aGUgZW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgbmV3bGluZXMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGJ1dCB3aXRoIGBjb3VudGAgbmV3bGluZXMgYXQgdGhlXG4gKiAgICAgZW5kLlxuICovXG5mdW5jdGlvbiBlbnN1cmVOZXdsaW5lcyh0ZXh0LCBjb3VudCkge1xuICBsZXQgcmVzdWx0ID0gdGV4dFxuICB3aGlsZSAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJ1xcbicpIHtcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIHJlc3VsdC5sZW5ndGggLSAxKVxuICB9XG4gIHJldHVybiByZXN1bHQgKyAnXFxuJy5yZXBlYXQoY291bnQpXG59XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZm9ybWF0dGVyIGZvciBlcnJvciBtZXNzYWdlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBzdHJpbmcgdGhhdCBoYXMgdGhlIGZvbGxvd2luZyBwYXJ0czpcbiAqXG4gKiAxLiBBIHBvc2l0aW9uIGxpbmUgdGhhdCBnaXZlcyB0aGUgbGluZSBudW1iZXIgYW5kIGNvbHVtbiBudW1iZXIgd2hlcmVcbiAqICAgIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIDIuIEEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBsb2NhdGlvbi4gVGhpcyBwYXJ0IGdlbmVyYXRlc1xuICogICAgdHdvIGxpbmVzIGluIHRoZSBlcnJvciBtZXNzYWdlLiBUaGUgZmlyc3QgaXMgZWl0aGVyIHRoZSBlbnRpcmVcbiAqICAgIGlucHV0IGxpbmUgb3IsIGlmIHRoYXQncyB0b28gbG9uZywgYSBwb3J0aW9uIG9mIHRoZSBpbnB1dCBsaW5lXG4gKiAgICBzdGFydGVkIGFuZC9vciBlbmRlZCB3aXRoIGVsbGlwc2VzIHRoYXQgY29udGFpbnMgdGhlIGVycm9yXG4gKiAgICBsb2NhdGlvbi4gVGhlIHNlY29uZCBpcyBhIGNhcmV0IHBvc2l0aW9uZWQgdW5kZXJuZWF0aCB0aGUgbG9jYXRpb25cbiAqICAgIGluIHRoZSBmaXJzdCBsaW5lIHRoYXQgc2hvd3MgZXhhY3RseSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAzLiBUaGUgZmlyc3QgdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLCBpZiBhbnkuXG4gKiA0LiBBbGwgb2YgdGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzIChpZiBhbnkpLCBzZXBhcmF0ZWQgYnkgJ29yJyBhbmRcbiAqICAgIGNvbW1tYXMgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSBudW1iZXIgb2YgbWVzc2FnZXMuXG4gKiA1LiBUaGUgZmlyc3Qgb2YgdGhlIGdlbmVyaWMgbWVzc2FnZXMsIGlmIGFueS5cbiAqXG4gKiBUaGUgcG9zaXRpb24gb2YgdGhlIGVycm9yIGlzIGluZGljYXRlZCBieSB0aGUgYGluZGV4YCBwYXJhbWV0ZXIsXG4gKiB3aGljaCBpcyB0aGUgaW5kZXggd2l0aGluIHRoZSBhcnJheSBvZiBieXRlcyBpbiBgdmlld2Agd2hlcmUgdGhlXG4gKiBlcnJvciBvY2N1cnJlZC4gVGhlIGNhbGN1bGF0aW9uIG9mIGxpbmUgYW5kIGNvbHVtbiBudW1iZXIgZnJvbSB0aGlzXG4gKiBmbGF0IGFycmF5IG9mIGJ5dGVzIHRha2VzIHRoZSBmb2xsb3dpbmcgaW50byBhY2NvdW50OlxuICpcbiAqICogTXVsdGktYnl0ZSBjaGFyYWN0ZXJzIChldmVyeXRoaW5nIGlzIFVURi04IGF3YXJlLCBzbyBjaGFyYWN0ZXJzIGNhblxuICogICBiZSAxLCAyLCAzLCBvciA0IGJ5dGVzIGxvbmcpXG4gKiAqIE11bHRpLWNoYXJhY3RlciBhbmQgc2luZ2xlLWNoYXJhY3RlciBtdWx0aS1ieXRlIGxpbmUgZW5kaW5nc1xuICogKiBUYWJzLCB3aGljaCBhcmUgZXhwYW5kZWQgaW50byBhIG51bWJlciBvZiBzcGFjZXMgc2V0IGJ5IHRoZVxuICogICBgdGFiU2l6ZWAgcGFyYW1ldGVyXG4gKiAqIFplcm8td2lkdGggY2hhcmFjdGVycywgc3VjaCBhcyB6ZXJvLXdpZHRoIHNwYWNlcyBhbmQgam9pbmVycywgUlRMXG4gKiAgIG9yIExUUiBmb3JtYXR0aW5nIGNoYXJhY3RlcnMsIGFuZCBkaWFjcml0aWNzIChIZWJyZXcgb3IgVGhhaSB2b3dlbFxuICogICBtYXJrcywgdW1sYXV0cyBvdmVyIExhdGluIGNoYXJhY3RlcnMsIGV0Yy4pXG4gKlxuICogVGhlIG91dHB1dCBpcyBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgNSBlbGVtZW50cyBhYm92ZS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIFRoZSBmb2xsb3dpbmcgdHdvIGxpbmVzIG9mIGNvZGUgdXNlcyBgc3RyaW5nVG9WaWV3YCwgYW4gaW50ZXJuYWxcbiAqIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCwgYXMgaXRzIG5hbWUgc3VnZ2VzdHMsIHR1cm5zIGEgc3RyaW5nIGludG8gYVxuICogVVRGLTggZGF0YSB2aWV3LiBJdCdzIGNhbGxlZCBieSBgcGFyc2VgIGl0c2VsZiwgc28gaW4gcmVhbCB3b3JsZFxuICogdXNhZ2UsIGl0J3Mgbm90IG5lY2Vzc2FyeSB0byBrbm93LlxuICpcbiAqIGBgYFxuICogY29uc3QgdmlldyA9IHN0cmluZ1RvVmlldygnXFx0T25vbWF0b3BvZWlhXFx0XFx0XFx0XFx04LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHJylcbiAqIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXQoW2V4cGVjdGVkKCdhIGRpZ2l0JyldLCAyOSwgdmlldywgNCwgNzIpXG4gKiBgYGBcbiAqXG4gKiBGcm9tIHRoaXMgY2FsbCB0byBgZm9ybWF0YCwgdGhlIGZvbGxvd2luZyBtdWx0aS1saW5lIHN0cmluZyB3aWxsIGJlXG4gKiBwcm9kdWNlZDpcbiAqXG4gKiBgYGBcbiAqIFBhcnNlIGVycm9yIGF0IChsaW5lIDEsIGNvbHVtbiAzNyk6XG4gKlxuICogICAgIE9ub21hdG9wb2VpYSAgICAgICAgICAgICAgICDguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5cbiAqIEV4cGVjdGVkIGEgZGlnaXRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRvIGJlIGZvcm1hdHRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW4gdGhlIHZpZXcgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemU9OF0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZVxuICogICAgIHRhYiBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoPTcyXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGVudD0wXSBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0aGUgbWVzc2FnZSBzaG91bGQgYmVcbiAqICAgICBpbmRlbnRlZC4gVGhpcyBzaG91bGQgYmUgMCBhbmQgaW5jcmVhc2VkIG9ubHkgZm9yIG5lc3RlZCBlcnJvcnMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoXG4gIGVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUgPSA4LCBtYXhXaWR0aCA9IDcyLCBpbmRlbnQgPSAwLFxuKSB7XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIGxlbmd0aCB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gYCR7c3B9UGFyc2UgZXJyb3IgYXQgKGxpbmUgJHtsaW5lbm99LCBjb2x1bW4gJHtjb2xub30pOmBcbiAgY29uc3QgZGlzcGxheSA9IHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgZ2VuZXJpYyA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxuICBjb25zdCB1bmV4cGVjdGVkID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLlVuZXhwZWN0ZWQpXG4gIGNvbnN0IGV4cGVjdGVkID0gY29tbWFTZXBhcmF0ZShkZWR1cGUoXG4gICAgZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuRXhwZWN0ZWQpXG4gICAgICAubWFwKGVycm9yID0+IGVycm9yLmxhYmVsKSxcbiAgKSlcblxuICBjb25zdCBuZXN0ZWQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWQpXG4gIGNvbnN0IGNvbXBvdW5kID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuQ29tcG91bmQpXG5cbiAgY29uc3QgdW5leHBNc2cgPSB1bmV4cGVjdGVkID8gYCR7c3B9VW5leHBlY3RlZCAke3VuZXhwZWN0ZWQubGFiZWx9XFxuYCA6ICcnXG4gIGNvbnN0IGV4cE1zZyA9IGV4cGVjdGVkLmxlbmd0aCA/IGAke3NwfUV4cGVjdGVkICR7ZXhwZWN0ZWR9XFxuYCA6ICcnXG4gIGNvbnN0IGdlbmVyaWNNc2cgPSBnZW5lcmljID8gYCR7c3B9JHtnZW5lcmljLmxhYmVsfVxcbmAgOiAnJ1xuXG4gIGNvbnN0IG5lc3RlZE1zZyA9IGZvcm1hdE5lc3RlZChuZXN0ZWQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXG4gIGNvbnN0IGNvbXBvdW5kTXNnID0gZm9ybWF0TmVzdGVkKGNvbXBvdW5kLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxuXG4gIGNvbnN0IHVua25vd25Nc2cgPSBlcnJvcnMubGVuZ3RoID09PSAwID8gYCR7c3B9VW5rbm93biBlcnJvcihzKVxcbmAgOiAnJ1xuICBjb25zdCBlb2ZNc2cgPSBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcbiAgICA/IGAke3NwfU5vdGU6IGZhaWx1cmUgb2NjdXJyZWQgYXQgdGhlIGVuZCBvZiBpbnB1dFxcbmAgOiAnJ1xuXG4gIHJldHVybiBlbnN1cmVOZXdsaW5lcyhcbiAgICBgJHtwb3NpdGlvbn1cXG5cXG4ke2Rpc3BsYXl9XFxuJHt1bmV4cE1zZ30ke2V4cE1zZ30ke2dlbmVyaWNNc2d9JHt1bmtub3duTXNnfWBcbiAgICAgICsgYCR7ZW9mTXNnfSR7Y29tcG91bmRNc2d9JHtuZXN0ZWRNc2d9YCxcbiAgICAyLFxuICApXG59XG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBBY2NlcHRzIGEgcGFyc2VyIGNvbnRleHQgYW5kIHByb2R1Y2VzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBpdC5cbiAqXG4gKiBBIGRlZmF1bHQgZm9ybWF0dGVyIGlzIHByb3ZpZGVkIGJ1dCBhbiBhbHRlcm5hdGUgb25lIGNhbiBiZSBwYXNzZWRcbiAqIGluLiBUaGUgc2FtZSBnb2VzIGZvciB0YWIgc2l6ZSAodXNlZCB0byBleHBhbmQgdGFicyBpbiBwYXJzZWQgdGV4dDtcbiAqIGRlZmF1bHRzIHRvIDggaW4gdGhlIGRlZmF1bHQgZm9ybWF0dGVyKSBhbmQgbWF4IHdpZHRoIChmb3IgdGhlIGVycm9yXG4gKiBtZXNzYWdlIGl0c2VsZjsgZGVmYXVsdHMgdG8gNzIgaW4gdGhlIGRlZmF1bHQgZm9ybWF0dGVyKS5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgcmVwbHkgcmV0dXJuZWQgYnkgdGhlIHBhcnNlciB3aGVuIHRoZSBlcnJvclxuICogICAgIGhhcHBlbmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplXSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlIHRhYnNcbiAqICAgICBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aF0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtGb3JtYXR0ZXJ9IFtmb3JtYXR0ZXI9Zm9ybWF0XSBUaGUgZnVuY3Rpb24gdG8gd2hpY2ggdGhlXG4gKiAgICAgYWN0dWFsIGZvcm1hdHRpbmcgaXMgZGVsZWdhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JzKHJlcGx5LCB0YWJTaXplLCBtYXhXaWR0aCwgZm9ybWF0dGVyID0gZm9ybWF0KSB7XG4gIGNvbnN0IFtjdHgsIHJlc3VsdF0gPSByZXBseVxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgcmV0dXJuIGZvcm1hdHRlcihyZXN1bHQuZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIG5leHQgYnl0ZSBvZiB0aGUgc3VwcGxpZWQgY29udGV4dC4gVGhlXG4gKiBwb3NpdGlvbiBpcyBhbiBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMgdGhhdCBhcmVcbiAqIHRoZSAxLWJhc2VkIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzIG9mIHRoZSBieXRlIGF0IHRoZSBjb250ZXh0J3NcbiAqIGluZGV4IHdpdGhpbiB0aGUgY29udGV4dCdzIGRhdGEgdmlldy5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCB3aG9zZSBjdXJyZW50IHBvc2l0aW9uIGlzIGJlaW5nXG4gKiAgICAgY2FsY3VsYXRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXG4gKiAgICAgdGFicyBzdG9wLiBUaGUgY3VycmVudCBwb3NpdGlvbidzIGNvbHVtbiBudW1iZXIgaXMgYWRqdXN0ZWQgYmFzZWRcbiAqICAgICBvbiB0aGlzIHBhcmFtZXRlciB3aGVuIHRhYiBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICogQHJldHVybnMge1Bvc2l0aW9ufSBBIHR3by1wcm9wZXJ0eSBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gXG4gKiAgICAgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKGN0eCwgdGFiU2l6ZSA9IDgpIHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIF8gfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICByZXR1cm4geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sbm8gfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUlNcblxuZXhwb3J0IHtcbiAgYWxwaGEsXG4gIGFueSxcbiAgY2hhcixcbiAgZGlnaXQsXG4gIGVvZixcbiAgaGV4LFxuICBpY2hhcixcbiAgbGV0dGVyLFxuICBsb3dlcixcbiAgbm9uZW9mLFxuICBvY3RhbCxcbiAgb25lb2YsXG4gIHJhbmdlLFxuICBzYXRpc2Z5LFxuICB1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXG5leHBvcnQge1xuICBhbHdheXMsXG4gIGZhaWwsXG4gIGZhdGFsLFxufSBmcm9tICcuL3BhcnNlcnMvbWlzYydcbmV4cG9ydCB7XG4gIG5ld2xpbmUsXG4gIHJlZ2V4LFxuICBzcGFjZSxcbiAgc3BhY2VzLFxuICBzcGFjZXMxLFxuICB1YWxwaGEsXG4gIHVsZXR0ZXIsXG4gIHVsb3dlcixcbiAgdW5ld2xpbmUsXG4gIHVzcGFjZSxcbiAgdXNwYWNlcyxcbiAgdXNwYWNlczEsXG4gIHV1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL3JlZ2V4J1xuZXhwb3J0IHtcbiAgYWxsLFxuICBhbnlzdHIsXG4gIGlzdHIsXG4gIHN0cixcbn0gZnJvbSAnLi9wYXJzZXJzL3N0cmluZydcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTUJJTkFUT1JTXG5cbmV4cG9ydCB7XG4gIGFsdCxcbiAgZGVmLFxuICBlbXB0eSxcbiAgbm90LFxuICBvcHQsXG4gIHBlZWssXG59IGZyb20gJy4vY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUnXG5leHBvcnQge1xuICBhdHRlbXB0LFxuICBiYXBwbHksXG4gIGJiZXR3ZWVuLFxuICBiYmxvY2ssXG4gIGJjaGFpbixcbiAgYmNvdW50LFxuICBibGVmdCxcbiAgYnBpcGUsXG4gIGJyaWdodCxcbiAgYnNlcSxcbiAgYnVudGlsLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2JhY2t0cmFja2luZydcbmV4cG9ydCB7XG4gIGFwcGx5LFxuICBjaGFpbixcbiAgY2xlYW4sXG4gIGZpZnRoLFxuICBmaXJzdCxcbiAgZmxhdCxcbiAgZm91cnRoLFxuICBqb2luLFxuICBtYXAsXG4gIG50aCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgdmFsdWUsXG59IGZyb20gJy4vY29tYmluYXRvcnMvY2hhaW5pbmcnXG5leHBvcnQge1xuICBibG9jayxcbiAgbGFiZWwsXG4gIGxhenksXG4gIHNraXAsXG59IGZyb20gJy4vY29tYmluYXRvcnMvbWlzYydcbmV4cG9ydCB7XG4gIGJldHdlZW4sXG4gIGNvdW50LFxuICBlbmRieSxcbiAgZW5kYnkxLFxuICBsYXNzb2MsXG4gIGxhc3NvYzEsXG4gIGxlZnQsXG4gIG1hbnksXG4gIG1hbnkxLFxuICBwaXBlLFxuICByYXNzb2MsXG4gIHJhc3NvYzEsXG4gIHJpZ2h0LFxuICBzZXBieSxcbiAgc2VwYnkxLFxuICBzZXEsXG4gIHVudGlsLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcblxuZXhwb3J0IHtcbiAgU3RhdHVzLFxuICBmYWlsUmVwbHksXG4gIGZhaWx1cmUsXG4gIGZhdGFsUmVwbHksXG4gIG9rUmVwbHksXG4gIHBhcnNlLFxuICBwYXJzZXIsXG4gIHJ1bixcbiAgc3RhdHVzLFxuICBzdWNjZWVkZWQsXG4gIHN1Y2Nlc3MsXG59IGZyb20gJy4vY29yZSdcbmV4cG9ydCB7XG4gIEVycm9yVHlwZSxcbiAgY29tcG91bmQsXG4gIGV4cGVjdGVkLFxuICBmb3JtYXRFcnJvcnMsXG4gIGdlbmVyaWMsXG4gIGdldFBvc2l0aW9uLFxuICBtZXJnZSxcbiAgbmVzdGVkLFxuICBvdGhlcixcbiAgdW5leHBlY3RlZCxcbn0gZnJvbSAnLi9lcnJvcidcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IGNvbW1hU2VwYXJhdGUsIHF1b3RlIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgYWxwaGE6ICdhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcbiAgYW55OiAnYW55IGNoYXJhY3RlcicsXG4gIGFueXN0cjogbiA9PiBgYSBzdHJpbmcgb2YgJHtufSBjaGFyYWN0ZXJzYCxcbiAgY2hhcjogYyA9PiBxdW90ZShjKSxcbiAgZGlnaXQ6ICdhIGRpZ2l0JyxcbiAgZW9mOiAnZW5kIG9mIGlucHV0JyxcbiAgaGV4OiAnYSBoZXhhZGVjaW1hbCBkaWdpdCcsXG4gIGljaGFyOiBjID0+IHF1b3RlKGMpLFxuICBpc3RyOiBzID0+IHF1b3RlKHMpLFxuICBsZXR0ZXI6ICdhIGxldHRlcicsXG4gIGxvd2VyOiAnYSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgbmV3bGluZTogJ2EgbmV3bGluZScsXG4gIG5vbmVvZjogYXJyYXkgPT4gJ25vbmUgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcbiAgb2N0YWw6ICdhbiBvY3RhbCBkaWdpdCcsXG4gIG9uZW9mOiBhcnJheSA9PiAnb25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXG4gIHJhbmdlOiAoc3RhcnQsIGVuZCkgPT4gYGEgY2hhcmFjdGVyIGJldHdlZW4gJyR7c3RhcnR9JyBhbmQgJyR7ZW5kfSdgLFxuICByZWdleDogcmUgPT4gYGEgc3RyaW5nIG1hdGNoaW5nICR7cmV9YCxcbiAgc3BhY2U6ICdhIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcbiAgc3BhY2VzOiAnemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlczE6ICdvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzdHI6IHMgPT4gcXVvdGUocyksXG4gIHVhbHBoYTogJ2EgVW5pY29kZSBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcbiAgdWxldHRlcjogJ2EgVW5pY29kZSBsZXR0ZXInLFxuICB1bG93ZXI6ICdhIFVuaWNvZGUgbG93ZXJjYXNlIGxldHRlcicsXG4gIHVuZXdsaW5lOiAnYSBVbmljb2RlIG5ld2xpbmUnLFxuICB1cHBlcjogJ2FuIHVwcGVyY2FzZSBsZXR0ZXInLFxuICB1c3BhY2U6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICB1c3BhY2VzOiAnemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgdXNwYWNlczE6ICdvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHV1cHBlcjogJ2EgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyJyxcbn1cblxuZXhwb3J0IGNvbnN0IGV4cGVjdGVkcyA9IHtcbiAgYWxwaGE6IGV4cGVjdGVkKHN0cmluZ3MuYWxwaGEpLFxuICBhbnk6IGV4cGVjdGVkKHN0cmluZ3MuYW55KSxcbiAgYW55c3RyOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55c3RyKG4pKSxcbiAgY2hhcjogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXIoYykpLFxuICBkaWdpdDogZXhwZWN0ZWQoc3RyaW5ncy5kaWdpdCksXG4gIGVvZjogZXhwZWN0ZWQoc3RyaW5ncy5lb2YpLFxuICBoZXg6IGV4cGVjdGVkKHN0cmluZ3MuaGV4KSxcbiAgaWNoYXI6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5pY2hhcihjKSksXG4gIGlzdHI6IHMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5pc3RyKHMpKSxcbiAgbGV0dGVyOiBleHBlY3RlZChzdHJpbmdzLmxldHRlciksXG4gIGxvd2VyOiBleHBlY3RlZChzdHJpbmdzLmxvd2VyKSxcbiAgbmV3bGluZTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lKSxcbiAgbm9uZW9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLm5vbmVvZihhcnJheSkpLFxuICBvY3RhbDogZXhwZWN0ZWQoc3RyaW5ncy5vY3RhbCksXG4gIG9uZW9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLm9uZW9mKGFycmF5KSksXG4gIHJhbmdlOiAoc3RhcnQsIGVuZCkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yYW5nZShzdGFydCwgZW5kKSksXG4gIHJlZ2V4OiByZSA9PiBleHBlY3RlZChzdHJpbmdzLnJlZ2V4KHJlKSksXG4gIHNwYWNlOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlKSxcbiAgc3BhY2VzOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlcyksXG4gIHNwYWNlczE6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMSksXG4gIHN0cjogcyA9PiBleHBlY3RlZChzdHJpbmdzLnN0cihzKSksXG4gIHVhbHBoYTogZXhwZWN0ZWQoc3RyaW5ncy51YWxwaGEpLFxuICB1bGV0dGVyOiBleHBlY3RlZChzdHJpbmdzLnVsZXR0ZXIpLFxuICB1bG93ZXI6IGV4cGVjdGVkKHN0cmluZ3MudWxvd2VyKSxcbiAgdW5ld2xpbmU6IGV4cGVjdGVkKHN0cmluZ3MudW5ld2xpbmUpLFxuICB1cHBlcjogZXhwZWN0ZWQoc3RyaW5ncy51cHBlciksXG4gIHVzcGFjZTogZXhwZWN0ZWQoc3RyaW5ncy51c3BhY2UpLFxuICB1c3BhY2VzOiBleHBlY3RlZChzdHJpbmdzLnVzcGFjZXMpLFxuICB1c3BhY2VzMTogZXhwZWN0ZWQoc3RyaW5ncy51c3BhY2VzMSksXG4gIHV1cHBlcjogZXhwZWN0ZWQoc3RyaW5ncy51dXBwZXIpLFxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnQ2hhckZvcm1hdHRlcixcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ1N0ckFyckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRDaGFyLFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0U3RyaW5nLFxuICBhc3NlcnRTdHJpbmdPckFycmF5LFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZHVwLCBmZXJyb3IsIG5leHRDaGFyIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyLCBmZWVkcyBpdCB0byBhIGZ1bmN0aW9uLCBhbmRcbiAqIHN1Y2NlZWRzIG9yIGZhaWxzIGJhc2VkIG9uIHRoZSByZXR1cm4gdmFsdWUuXG4gKlxuICogVGhlcmUgaXNuJ3QgYW55dGhpbmcgaGVyZSB0aGF0IGNvdWxkbid0IGJlIHdyaXR0ZW4gd2l0aFxuICogYFN0cmluZ1BhcnNlcmAgaW5zdGVhZCwgYnV0IHdoZW4gd29ya2luZyB3aXRoIHNpbmdsZSBjaGFyYWN0ZXJzIHRoZXJlXG4gKiBhcmUgY2VydGFpbiBhc3N1bXB0aW9ucyB0aGF0IGNhbiBiZSBtYWRlIChzdWNoIGFzIHRoZSBudW1iZXIgb2ZcbiAqIGNoYXJhY3RlcnMgdGhhdCBoYXZlIHRvIGJlIHJlYWQgZnJvbSB0aGUgaW5wdXQgdmlldykgdGhhdCBhbGxvdyBpdCB0b1xuICogYmUgYSBsaXR0bGUgbW9yZSBlZmZpY2llbnQuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIGNoYXJQYXJzZXIoZm4pIHtcbiAgcmV0dXJuIGN0eCA9PiB7XG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gICAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGZhaWxSZXBseShjdHgpXG5cbiAgICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgICByZXR1cm4gZm4obmV4dCkgPyBva1JlcGx5KGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aCkgOiBmYWlsUmVwbHkoY3R4KVxuICB9XG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmQgc3VjY2VlZHMgaWZcbiAqIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICB0aHJvdyBhbiBlcnJvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCBpcyB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyKGMsIG0pIHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIGFzc2VydENoYXIoJ2NoYXInLCBjLCBhcmdDaGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBpZiAoaGFzTSkgYXNzZXJ0U3RyaW5nKCdjaGFyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGNoID0+IGMgPT09IGNoKShjdHgpKVxuICAgIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gY3JlcFxuICAgICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5jaGFyKGMpKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZCBzdWNjZWVkcyBpZlxuICogdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBUaGlzIGRpZmZlcnMgZnJvbSBgY2hhcmAgaW4gdGhhdCB0aGVcbiAqIGNvbXBhcmlzb24gZG9uZSBieSB0aGlzIHBhcnNlciBpcyBjYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxuICogICAgIHRocm93IGFuIGVycm9yLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIChvciBpdHNcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGljaGFyKGMsIG0pIHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIGFzc2VydENoYXIoJ2ljaGFyJywgYywgYXJnQ2hhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgaWYgKGhhc00pIGFzc2VydFN0cmluZygnaWNoYXInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoXG4gICAgICBjaCA9PiBjLnRvTG93ZXJDYXNlKCkgPT09IGNoLnRvTG93ZXJDYXNlKCksXG4gICAgKShjdHgpKVxuICAgIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gY3JlcFxuICAgICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5pY2hhcihjKSkpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGUgcHJvdmlkZWRcbiAqIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyIHN1Y2NlZWRzIHdpdGhcbiAqIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAsIHRoaXNcbiAqIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGRldGVybWluZSB0aGUgY2F1c2UgZm9yIGFuIGVycm9yIHNpbmNlIGl0J3Mgbm90XG4gKiBmZWFzaWJsZSB0byBoYXZlIGl0IGFuYWx5emUgdGhlIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGl0IGV4cGVjdHMgdG9cbiAqIG1hdGNoLCBzbyBubyBlcnJvciBtZXNzYWdlIGlzIHByb3ZpZGVkIG9uIGZhaWx1cmUuIFVzZVxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtc2cpYCBvciB0aGUgZXF1aXZhbGVudCBgc2F0aXNmeUwoZm4sIG1zZylgIHRvXG4gKiBhZGQgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdGlzZnkoZm4sIG0pIHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5JywgZm4sIGFyZ0ZuRm9ybWF0dGVyKDEsIGhhc00pKVxuICBpZiAoaGFzTSkgYXNzZXJ0U3RyaW5nKCdzYXRpc2Z5JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICAgIGlmIChjcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBjcmVwXG4gICAgcmV0dXJuIGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgY3Jlcy5lcnJvcnMpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgaXQgaXNcbiAqIGJldHdlZW4gKGFjY29yZGluZyB0byBjb2RlIHBvaW50cykgY2hhcmFjdGVycyBgc2AgYW5kIGBlYFxuICogKGluY2x1c2l2ZSkuIElmIGl0IGlzLCB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0LFxuICogYW5kIGlmIGl0IGlzIG5vdCwgdGhlIHBhcnNlciBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cbiAqXG4gKiBgc2AgYW5kIGBlYCBhcmUgZXhwZWN0ZWQgdG8gYmUgc2luZ2xlIGNoYXJhY3RlcnMuIEFuIGVycm9yIHdpbGwgYmVcbiAqIHRocm93biBpZiB0aGV5IGFyZSBub3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHMgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZSByYW5nZVxuICogICAgIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZSBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgZW5kIG9mIHRoZSByYW5nZSBvZlxuICogICAgIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgbmV4dCBpbnB1dFxuICogICAgIGNoYXJhY3RlciBpcyBiZXR3ZWVuIGBzdGFydGAgYW5kIGBlbmRgIChpbmNsdXNpdmUpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2UocywgZSwgbSkge1xuICBhc3NlcnRDaGFyKCdyYW5nZScsIHMsIGFyZ0NoYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIGFzc2VydENoYXIoJ3JhbmdlJywgZSwgYXJnQ2hhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgaWYgKG0gIT0gbnVsbCkgYXNzZXJ0U3RyaW5nKCdyYW5nZScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgZm4gPSBjID0+IGMgPj0gcyAmJiBjIDw9IGVcbiAgICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICAgIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gY3JlcFxuICAgICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5yYW5nZShzLCBlKSkpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBpbnB1dCBjaGFyYWN0ZXIgYW5kIHRoZW4gc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIuIEZhaWxzIG9ubHkgaWYgdGhlcmUgaXMgbm8gaW5wdXQgbGVmdCB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgbWF0Y2hlcyBhbnkgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYW55KG0pIHtcbiAgaWYgKG0gIT0gbnVsbCkgYXNzZXJ0U3RyaW5nKCdhbnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gICAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuYW55KSlcbiAgICB9XG5cbiAgICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgICByZXR1cm4gb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBkb2VzXG4gKiBub3QgZXhpc3QgKGkuZS4sIGlmIHRoZSBpbmRleCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0KS5cbiAqIENvbnN1bWVzIG5vdGhpbmcgb24gZWl0aGVyIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IG1hdGNoZXMgdGhlIGVuZCBvZiBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVvZihtKSB7XG4gIGlmIChtICE9IG51bGwpIGFzc2VydFN0cmluZygnZW9mJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICAgIHJldHVybiBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcbiAgICAgID8gb2tSZXBseShjdHgsIG51bGwpXG4gICAgICA6IGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuZW9mKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2ggb2YgdGhlXG4gKiBjaGFyYWN0ZXJzIGluIGBjc2AsIHdoaWNoIGlzIGVpdGhlciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIG9yIGFcbiAqIHN0cmluZy4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZSBwYXJzZXJcbiAqIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjcyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5IG9yIGFcbiAqICAgICBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gYmUgYSBtZW1iZXIgZm9yXG4gKiAgICAgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgb25lXG4gKiAgICAgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uZW9mKGNzLCBtKSB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBhc3NlcnRTdHJpbmdPckFycmF5KCdvbmVvZicsIGNzLCBhcmdTdHJBcnJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIGlmIChoYXNNKSBhc3NlcnRTdHJpbmcoJ29uZW9mJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBhcnIgPSBbLi4uY3NdXG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gICAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMub25lb2YoYXJyKSkpXG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuXG4gICAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgICAgPyBva1JlcGx5KGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbiAgICAgIDogZmFpbFJlcGx5KGN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5vbmVvZihhcnIpKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2ggb2YgdGhlXG4gKiBjaGFyYWN0ZXJzIGluIGBjc2AsIHdoaWNoIGlzIGVpdGhlciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIG9yIGFcbiAqIHN0cmluZy4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzICpub3QqIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZVxuICogcGFyc2VyIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjcyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5IG9yIGFcbiAqICAgICBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gbm90IGJlIGEgbWVtYmVyXG4gKiAgICAgZm9yIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIG5vdFxuICogICAgIG9uZSBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9uZW9mKGNzLCBtKSB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBhc3NlcnRTdHJpbmdPckFycmF5KCdub25lb2YnLCBjcywgYXJnU3RyQXJyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBpZiAoaGFzTSkgYXNzZXJ0U3RyaW5nKCdub25lb2YnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGFyciA9IFsuLi5jc11cbiAgICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFpbFJlcGx5KGN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5ub25lb2YoYXJyKSkpXG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuXG4gICAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgICAgPyBmYWlsUmVwbHkoY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLm5vbmVvZihhcnIpKSlcbiAgICAgIDogb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgZGlnaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYVxuICogICAgIGRpZ2l0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlnaXQobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ2RpZ2l0JywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc5J1xuICAgIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gICAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBjcmVwXG4gICAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmRpZ2l0KSlcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGhleGFkZWNpbWFsIGRpZ2l0LiBUaGlzIHBhcnNlciBpcyBub3QgY2FzZSBzZW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYVxuICogICAgIGhleGFkZWNpbWFsIGRpZ2l0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGV4KG0pIHtcbiAgaWYgKG0gIT0gbnVsbCkgYXNzZXJ0U3RyaW5nKCdoZXgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gICAgfHwgYyA+PSAnYScgJiYgYyA8PSAnZidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdGJ1xuICAgIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gICAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBjcmVwXG4gICAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmhleCkpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gb2N0YWwgZGlnaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICBvY3RhbCBkaWdpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9jdGFsKG0pIHtcbiAgaWYgKG0gIT0gbnVsbCkgYXNzZXJ0U3RyaW5nKCdvY3RhbCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnNydcbiAgICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICAgIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gY3JlcFxuICAgICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5vY3RhbCkpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgbGV0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFcbiAqICAgICBsZXR0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZXR0ZXIobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ2xldHRlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneicgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICAgIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gY3JlcFxuICAgICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5sZXR0ZXIpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ2FscGhhJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICAgICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgICAgIHx8IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gICAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgICByZXR1cm4gY3Jlcy5zdGF0dXMgPT09IE9rXG4gICAgICA/IGNyZXBcbiAgICAgIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuYWxwaGEpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIHVwcGVyY2FzZSBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICB1cHBlcmNhc2UgbGV0dGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBwZXIobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ3VwcGVyJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICAgIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gICAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBjcmVwXG4gICAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVwcGVyKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBsb3dlcmNhc2UgbGV0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFcbiAqICAgICBsb3dlcmNhc2UgbGV0dGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG93ZXIobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ2xvd2VyJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICAgIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gICAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBjcmVwXG4gICAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmxvd2VyKSlcbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBnZW5lcmljIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWwobSkge1xuICByZXR1cm4gcGFyc2VyKGN0eCA9PiBmYWlsUmVwbHkoY3R4LCBnZW5lcmljKG0pKSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi4gVGhpcyBzaWduaWZpZXMgYSBmYXRhbCBlcnJvcixcbiAqIG9uZSB0aGF0IGNhbm5vdCBiZSByZWNvdmVyZWQgZnJvbSB3aXRob3V0IGJhY2t0cmFja2luZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyBmYXRhbGx5IHdpdGggdGhlXG4gKiAgICAgc3VwcGxpZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhdGFsKG0pIHtcbiAgcmV0dXJuIHBhcnNlcihjdHggPT4gZmF0YWxSZXBseShjdHgsIGdlbmVyaWMobSkpKVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGFsd2F5cyBzdWNjZWVkcyB3aXRoIHRoZSBzdXBwbGllZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIHNlcnZlcyBhcyBhIHByaW1pdGl2ZSBmb3IgYm90aCBtb25hZHMgYW5kIGFwcGxpY2F0aXZlcy4gSW5cbiAqIEhhc2tlbGwgdGVybXMsIHRoaXMgZnVuY3Rpb24gcmVwcmVzZW50cyBib3RoIGBwdXJlYCBpbiB0aGVcbiAqIGBBcHBsaWNhdGl2ZWAgY2xhc3MgYW5kIGByZXR1cm5gIGluIHRoZSBgTW9uYWRgIGNsYXNzLlxuICpcbiAqIEluIG90aGVyIHdvcmRzLCBpdCBsaWZ0cyBhbiBhcmJpdHJhcnkgdmFsdWUgaW50byBhIFBhcnNlciBjb250ZXh0LFxuICogdHVybmluZyBpdCBpbnRvIGEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGF0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgd2lsbCByZXN1bHQgd2hlbiB0aGlzIHBhcnNlciBpcyBhcHBsaWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgd2l0aCBgdmFsdWVgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWx3YXlzKHgpIHtcbiAgcmV0dXJuIHBhcnNlcihjdHggPT4gb2tSZXBseShjdHgsIHgpKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhcmdTdHJSZWdGb3JtYXR0ZXIsXG4gIGFzc2VydFN0cmluZyxcbiAgYXNzZXJ0U3RyaW5nT3JSZWdFeHAsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBkdXAsIGZlcnJvciwgc3RyaW5nVG9WaWV3LCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8vIEFsbCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9ucyB1c2VkIGluIHRoZSBkZXJpdmVkIHJlZ2V4IHBhcnNlcnMuXG4vLyBUaGVzZSBhcmUgaGVyZSB0byBjcmVhdGUgYW5kIGNvbXBpbGUgdGhlbSBvbmNlLCB1cG9uIGluaXRpYWwgbG9hZCwgdG9cbi8vIHNwZWVkIHBhcnNpbmcgbGF0ZXIuXG5cbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlTGV0dGVyID0gL15cXHB7QWxwaGFiZXRpY30vdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgb3IgbnVtYmVyIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlQWxwaGEgPSAvXig/OlxccHtBbHBoYWJldGljfXxcXHB7Tn0pL3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVVwcGVyID0gL14oPzpcXHB7VXBwZXJjYXNlfXxcXHB7THR9KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxvd2VyY2FzZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxvd2VyID0gL15cXHB7TG93ZXJjYXNlfS91XG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVNwYWNlID0gL14oPzpcXHJcXG58W1xcclxcblxcdCBdKS9cbi8qKiBNYXRjaGVzIGEgc2luZ2xlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVVzcGFjZSA9IC9eKD86XFxyXFxufFxccHtXaGl0ZV9TcGFjZX0pL3Vcbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMgPSAvXltcXHJcXG5cXHQgXSovXG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMgPSAvXlxccHtXaGl0ZV9TcGFjZX0qL3Vcbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVNwYWNlczEgPSAvXltcXHJcXG5cXHQgXSsvXG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlVXNwYWNlczEgPSAvXlxccHtXaGl0ZV9TcGFjZX0rL3Vcbi8qKiBNYXRjaGVzIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoXFxyLCBcXG4sIG9yIFxcclxcbikuICovXG5jb25zdCByZU5ld2xpbmUgPSAvXig/OlxcclxcbnxcXHJ8XFxuKS9cbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbmV3bGluZSBjaGFyYWN0ZXIsIHBsdXMgXFxyXFxuLiAqL1xuY29uc3QgcmVVbmV3bGluZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHUwMDg1XFx1MjAyOFxcdTIwMjldKS91XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgYW5kIG1hdGNoZXMgaXQgYXMgZmFyXG4gKiBhcyBpdCBjYW4gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKlxuICogSXQgaXMgYXNzdW1lZCB0aGF0IHRoZSByZWdleCBiZWdpbnMgd2l0aCBhIGBeYCAuIFRoZSBgZ2AgZmxhZyBpc1xuICogaWdub3JlZCBpbiB0aGF0IG9ubHkgdGhlIGZpcnN0IG1hdGNoIGlzIHByb2Nlc3NlZCBhbmQgcmV0dXJuZWQuIFRoaXNcbiAqIGVuc3VyZXMgdGhhdCB0aGUgbWF0Y2ggaXMgb25seSBhZ2FpbnN0IHRoZSB0ZXh0IGRpcmVjdGx5IGF0IHRoZVxuICogY3VycmVudCBwb2ludGVyIGxvY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gbWF0Y2ggYWdhaW5zdCB0aGVcbiAqICAgICBpbnB1dCB0ZXh0IHN0YXJ0aW5nIGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgcmVndWxhclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhQYXJzZXIocmUpIHtcbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICAgIGNvbnN0IHJlc3QgPSB2aWV3VG9TdHJpbmcoaW5kZXgsIHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4LCB2aWV3KVxuXG4gICAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxuICAgIHJldHVybiBtYXRjaFxuICAgICAgPyBva1JlcGx5KGN0eCwgbWF0Y2hbMF0sIGluZGV4ICsgc3RyaW5nVG9WaWV3KG1hdGNoWzBdKS5ieXRlTGVuZ3RoKVxuICAgICAgOiBmYWlsUmVwbHkoY3R4KVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHN1cHBsaWVkIHJlZ3VsYXIgZXhwcmVzc2lvbiB0b1xuICogdGhlIGlucHV0IHRleHQgYXQgdGhlIGN1cnJlbnQgbG9jYXRpb24uIElmIHRoZXJlIGlzIGEgbWF0Y2gsIGFueVxuICogbWF0Y2hpbmcgdGV4dCBpcyByZXR1cm5lZCBhcyBhIHN1Y2Nlc3NmdWwgcmVzdWx0LiBObyB0ZXh0IGlzIGNvbnN1bWVkXG4gKiB1cG9uIGZhaWx1cmUuXG4gKlxuICogQSBzdHJpbmcgY2FuIGJlIHBhc3NlZCB0byB0aGlzIHBhcnNlci4gSWYgb25lIGlzLCBpdCBpcyBjb252ZXJ0ZWRcbiAqIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aG91dCBmbGFncy5cbiAqXG4gKiBJZiBhIHN0YXJ0IGFuY2hvciAoXikgaXMgbm90IGluY2x1ZGVkLCBvbmUgd2lsbCBiZSBhZGRlZC4gSWYgdGhlIGBnYFxuICogZmxhZyBpcyBpbmNsdWRlZCwgaXQnbGwgZnVuY3Rpb25hbGx5IGJlIGlnbm9yZWQgYXMgb25seSB0aGUgZmlyc3RcbiAqIG1hdGNoIHdpbGwgYmUgY29uc2lkZXJlZCBhbnl3YXkuIFRoZXNlIHR3byBydWxlcyBlbnN1cmUgdGhhdCB0aGVcbiAqIG1hdGNoIGlzIG9ubHkgYXR0ZW1wdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgdGV4dC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gciBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3RcbiAqICAgICB0aGUgaW5wdXQgdGV4dC4gSWYgdGhpcyBpcyBhIHN0cmluZywgaXQgd2lsbCBiZSBjb252ZXJ0ZWQgaW50byBhXG4gKiAgICAgcmVndWxhciBleHByZXNzaW9uIHdpdGggbm8gZmxhZ3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXG4gKiAgICAgZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbiBhbmQgc3VjY2VlZHNcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnZXgociwgbSkge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgYXNzZXJ0U3RyaW5nT3JSZWdFeHAoJ3JlZ2V4JywgciwgYXJnU3RyUmVnRm9ybWF0dGVyKDEsIGhhc00pKVxuICBpZiAoaGFzTSkgYXNzZXJ0U3RyaW5nKCdyZWdleCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICByZXR1cm4gY3R4ID0+IHtcbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xuICAgIGxldCByZWdleCA9IHR5cGVvZiByID09PSAnc3RyaW5nJyA/IG5ldyBSZWdFeHAocikgOiByXG5cbiAgICAvLyBOZXh0LCBtYWtlIHN1cmUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdGFydHMgd2l0aCBhIF4gYW5jaG9yXG4gICAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxuICAgIGNvbnN0IHJlYW5jaG9yID0gc291cmNlWzBdICE9PSAnXidcbiAgICBpZiAocmVhbmNob3IpIHtcbiAgICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxuICAgICAgcmVnZXggPSBuZXcgUmVnRXhwKG5ld1NvdXJjZSwgZmxhZ3MpXG4gICAgfVxuXG4gICAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVnZXgpKGN0eCkpXG4gICAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBycmVwXG4gICAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnJlZ2V4KHJlZ2V4KSkpXG4gIH1cbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxldHRlci4gQSBsZXR0ZXIgZm9yIHRoaXMgcHVycG9zZSBpcyBhbnkgY2hhcmFjdGVyIHdpdGggdGhlXG4gKiBVbmljb2RlIGBBbHBoYWJldGljYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgbGV0dGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdWxldHRlcihtKSB7XG4gIGlmIChtICE9IG51bGwpIGFzc2VydFN0cmluZygndWxldHRlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbcnJlcCwgW3JjdHgsIHJyZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZUxldHRlcikoY3R4KSlcbiAgICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgICA/IHJyZXBcbiAgICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMudWxldHRlcikpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYWxwaGFudW1lcmljLiBBIGNoYXJhY3RlciBpcyBhbHBoYW51bWVyaWMgaWYgaXQgaGFzIGVpdGhlciB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5IG9yIHRoZSBVbmljb2RlIGBOdW1iZXJgIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgYWxwaGFudW1lcmljIGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVhbHBoYShtKSB7XG4gIGlmIChtICE9IG51bGwpIGFzc2VydFN0cmluZygndWFscGhhJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlQWxwaGEpKGN0eCkpXG4gICAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBycmVwXG4gICAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVhbHBoYSkpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgZWl0aGVyIGFuIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpc1xuICogdXBwZXJjYXNlIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgVXBwZXJjYXNlYCBwcm9wZXJ0eSBhbmQgaXMgdGl0bGVjYXNlXG4gKiBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYExldHRlciwgVGl0bGVjYXNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhblxuICogICAgIHVwcGVyY2FzZSBsZXR0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1dXBwZXIobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ3V1cHBlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbcnJlcCwgW3JjdHgsIHJyZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZVVwcGVyKShjdHgpKVxuICAgIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gcnJlcFxuICAgICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51dXBwZXIpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXMgbG93ZXJjYXNlIGlmIGl0IGhhcyB0aGVcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYVxuICogICAgIGxvd2VyY2FzZSBsZXR0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bG93ZXIobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ3Vsb3dlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbcnJlcCwgW3JjdHgsIHJyZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZUxvd2VyKShjdHgpKVxuICAgIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gcnJlcFxuICAgICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51bG93ZXIpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxuICogb3IgYFxcclxcbmApLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgQVNDSUkgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGFjZShtKSB7XG4gIGlmIChtICE9IG51bGwpIGFzc2VydFN0cmluZygnc3BhY2UnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVTcGFjZSkoY3R4KSlcbiAgICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgICA/IHJyZXBcbiAgICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuc3BhY2UpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIEEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2UgZm9yIHRoZVxuICogcHVycG9zZSBvZiB0aGlzIHBhcnNlciBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFdoaXRlX1NwYWNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGFsc28gcmVjb2duaXplIHRoZSB0d28tY2hhcmFjdGVyIGNvbWJpbmF0aW9uIGBcXHJcXG5gXG4gKiBhcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiB3aGl0ZXNwYWNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFcbiAqICAgICBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNwYWNlKG0pIHtcbiAgaWYgKG0gIT0gbnVsbCkgYXNzZXJ0U3RyaW5nKCd1c3BhY2UnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVVc3BhY2UpKGN0eCkpXG4gICAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBycmVwXG4gICAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVzcGFjZSkpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChzcGFjZSwgYFxcdGAsXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXJcbiAqIGFsd2F5cyBzdWNjZWVkczsgZXZlbiB6ZXJvIHdoaXRlc3BhY2VzIGlzIGVub3VnaCB0byBtYWtlIGl0IHN1Y2NlZWQsXG4gKiB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGUgaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGVcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgYW5kIHNraXBzIG92ZXIgYW55XG4gKiAgICAgbnVtYmVyIG9mIEFTQ0lJIHdoaXRlc3BhY2UgY2hhcmFjdGVycy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwYWNlcygpIHtcbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IFtyY3R4LCBfXSA9IHJlZ2V4UGFyc2VyKHJlU3BhY2VzKShjdHgpXG4gICAgcmV0dXJuIG9rUmVwbHkocmN0eCwgbnVsbClcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXG4gKiBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdFxuICogcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyBhbmQgc2tpcHMgb3ZlciBhbnlcbiAqICAgICBudW1iZXIgb2YgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c3BhY2VzKCkge1xuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgW3JjdHgsIF9dID0gcmVnZXhQYXJzZXIocmVVc3BhY2VzKShjdHgpXG4gICAgcmV0dXJuIG9rUmVwbHkocmN0eCwgbnVsbClcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGxcbiAqIG9ubHkgZmFpbCBpZiB0aGVyZSBpcyBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uXG4gKiBzdWNjZXNzLCBpdCBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHNraXBzIG9uZSBvciBtb3JlIEFTQ0lJIHdoaXRlc3BhY2VcbiAqICAgICBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BhY2VzMShtKSB7XG4gIGlmIChtICE9IG51bGwpIGFzc2VydFN0cmluZygnc3BhY2VzMScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbcmN0eCwgcnJlc10gPSByZWdleFBhcnNlcihyZVNwYWNlczEpKGN0eClcbiAgICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgICA/IG9rUmVwbHkocmN0eCwgbnVsbClcbiAgICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuc3BhY2VzMSkpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsIG9ubHkgZmFpbCBpZiB0aGVyZSBpc1xuICogbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPbiBzdWNjZXNzLCBpdCBza2lwcyB0aGVcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBza2lwcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2VcbiAqICAgICBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNwYWNlczEobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ3VzcGFjZXMxJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IFtyY3R4LCBycmVzXSA9IHJlZ2V4UGFyc2VyKHJlVXNwYWNlczEpKGN0eClcbiAgICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgICA/IG9rUmVwbHkocmN0eCwgbnVsbClcbiAgICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMudXNwYWNlczEpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgQVNDSUkgbmV3bGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5ld2xpbmUobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ25ld2xpbmUnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVOZXdsaW5lKShjdHgpKVxuICAgIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gcnJlcFxuICAgICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5uZXdsaW5lKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gKiBOZXdsaW5lcyBpbiBVbmljb2RlIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKiAqIGBORUxgIChuZXh0IGxpbmUsIGBVKzAwODVgKVxuICogKiBgTFNgIChsaW5lIHNlcGFyYXRvciwgYFUrMjAyOGApXG4gKiAqIGBQU2AgKHBhcmFncmFwaCBzZXBhcmF0b3IsIGBVKzIwMjlgKVxuICpcbiAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyBgXFxmYCBvciBgXFx2YCwgd2hpY2ggd2hpbGUgYmVpbmdcbiAqIHZlcnRpY2FsIHNlcGFyYXRvcnMsIGFyZW4ndCByZWFsbHkgbmV3bGluZXMgaW4gdGhlIHRyYWRpdGlvbmFsIHNlbnNlLlxuICpcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXG4gKiBgXFxyXFxuYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgVW5pY29kZSBuZXdsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5ld2xpbmUobSkge1xuICBpZiAobSAhPSBudWxsKSBhc3NlcnRTdHJpbmcoJ3VuZXdsaW5lJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlVW5ld2xpbmUpKGN0eCkpXG4gICAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBycmVwXG4gICAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVuZXdsaW5lKSlcbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFN0cmluZyxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGR1cCwgZmVycm9yLCBuZXh0Q2hhcnMsIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGUgY3VycmVudFxuICogcG9zaXRpb24gaW4gdGhlIHRleHQuIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgZXF1YWwgaW4gbGVuZ3RoIHRvXG4gKiBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXG4gKiAgICAgc2hvdWxkIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIHJlYWRcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSByZWFkIHN0cmluZyBwYXNzZXNcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzdHJpbmdQYXJzZXIobGVuZ3RoLCBmbikge1xuICByZXR1cm4gY3R4ID0+IHtcbiAgICBpZiAobGVuZ3RoIDwgMSkgcmV0dXJuIG9rUmVwbHkoY3R4LCAnJylcblxuICAgIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICAgIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsUmVwbHkoY3R4KVxuXG4gICAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBsZW5ndGgpXG4gICAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICAgID8gZmFpbFJlcGx5KGN0eClcbiAgICAgIDogb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG4gIH1cbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlIGlucHV0XG4gKiBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoZSBzdHJpbmcgbWF0Y2ggbXVzdCBiZVxuICogZXhhY3QgKGl0IGlzIGNhc2Utc2Vuc2l0aXZlKSwgYW5kIGFsbCBVVEYtOCBjaGFyYWN0ZXJzIGFyZSByZWNvZ25pemVkXG4gKiBwcm9wZXJseS5cbiAqXG4gKiBJZiBgc2AgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cihzLCBtKSB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBhc3NlcnRTdHJpbmcoJ3N0cicsIHMsIGFyZ1N0ckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgaWYgKGhhc00pIGFzc2VydFN0cmluZygnc3RyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbc3JlcCwgW3NjdHgsIHNyZXNdXSA9IGR1cChzdHJpbmdQYXJzZXIoXG4gICAgICBjaGFyTGVuZ3RoKHMpLCBjaGFycyA9PiBzID09PSBjaGFycyxcbiAgICApKGN0eCkpXG4gICAgcmV0dXJuIHNyZXMuc3RhdHVzID09PSBPa1xuICAgICAgPyBzcmVwXG4gICAgICA6IGZhaWxSZXBseShzY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnN0cihzKSkpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZSBpbnB1dFxuICogYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGlzIG1hdGNoIGlzICpub3QqXG4gKiBjYXNlLXNlbnNpdGl2ZS5cbiAqXG4gKiBJZiBgc3RyYCBpcyBlbXB0eSwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgc3VjY2VlZC4gSWYgaXQgaXNcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHMgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBjYXNlLWluc2Vuc2l0aXZlbHkgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzdHIocywgbSkge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgYXNzZXJ0U3RyaW5nKCdpc3RyJywgcywgYXJnU3RyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBpZiAoaGFzTSkgYXNzZXJ0U3RyaW5nKCdpc3RyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbc3JlcCwgW3NjdHgsIHNyZXNdXSA9IGR1cChzdHJpbmdQYXJzZXIoXG4gICAgICBjaGFyTGVuZ3RoKHMpLCBjaGFycyA9PiBzLnRvTG93ZXJDYXNlKCkgPT09IGNoYXJzLnRvTG93ZXJDYXNlKCksXG4gICAgKShjdHgpKVxuICAgIHJldHVybiBzcmVzLnN0YXR1cyA9PT0gT2tcbiAgICAgID8gc3JlcFxuICAgICAgOiBmYWlsUmVwbHkoc2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5pc3RyKHMpKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cbiAqIHRoYXQgdGV4dC4gU3VjY2VlZHMgaWYgYWxyZWFkeSBhdCBFT0YsIHJlc3VsdGluZyBpbiBhbiBlbXB0eSBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFsd2F5cyBzdWNjZWVkIGFuZCByZXR1cm5zIHRoZVxuICogICAgIHJlbWFpbmRlciBvZiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGwoKSB7XG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgICBjb25zdCB3aWR0aCA9IHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4XG4gICAgcmV0dXJuIG9rUmVwbHkoY3R4LCB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSwgaW5kZXggKyB3aWR0aClcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2VydGFpbiBudW1iZXIgb2YgY2hhcmFjdGVycywgdXNpbmcgdGhlbSAoYXMgYVxuICogc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmUgbm90IHRoYXRcbiAqIG1hbnkgY2hhcmFjdGVycyBsZWZ0IHRvIHJlYWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIHRoYXQgbWFueSBjaGFyYWN0ZXJzIGFuZCBqb2luc1xuICogICAgIHRoZW0gaW50byBhIHN0cmluZyBmb3IgaXRzIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFueXN0cihuLCBtKSB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBhc3NlcnROdW1iZXIoJ2FueXN0cicsIG4sIGFyZ051bUZvcm1hdHRlcigxLCBoYXNNKSlcbiAgaWYgKGhhc00pIGFzc2VydFN0cmluZygnYW55c3RyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBbc3JlcCwgW3NjdHgsIHNyZXNdXSA9IGR1cChzdHJpbmdQYXJzZXIobiwgKCkgPT4gdHJ1ZSkoY3R4KSlcbiAgICByZXR1cm4gc3Jlcy5zdGF0dXMgPT09IE9rXG4gICAgICA/IHNyZXBcbiAgICAgIDogZmFpbFJlcGx5KHNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuYW55c3RyKG4pKSlcbiAgfSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgcGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgY29tcG91bmQsIGV4cGVjdGVkLCBuZXN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuQ29udGV4dH0gQ29udGV4dCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlc3VsdH0gUmVzdWx0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuUmVwbHl9IFJlcGx5ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9lcnJvcicpLkVycm9yTGlzdH0gRXJyb3JMaXN0ICovXG5cbi8qKlxuICogVHJhbnNsYXRlcyBhIFVDUy0yIHN0cmluZyBpbnRvIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVaW50OEFycmF5IG9mIFVURi04IGJ5dGVzIGludG8gYSBVQ1MtMiBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcblxuLyoqXG4gKiBBbiBpdGVyYXRvciB0aGF0IGNvdmVycyBhIHJhbmdlIGZyb20gYSBzdGFydGluZyB2YWx1ZSB0byBhbiBlbmRpbmdcbiAqIHZhbHVlLCBzdGVwcGluZyBieSBhIGNlcnRhaW4gdmFsdWUgYmV0d2VlbiBlYWNoLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIGZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBsYXN0IG51bWJlciBvZiB0aGUgcmFuZ2UuIEJ5IGRlZmF1bHQgdGhpc1xuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcbiAqICAgICBpbiBpdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RlcD0xXSBUaGUgbnVtYmVyIHRvIGluY3JlYXNlIHRoZSB5aWVsZGVkIHZhbHVlIGJ5XG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVzaXZlPWZhbHNlXSBEZXRlcm1pbmVzIHdoZXRoZXIgYGVuZGAgc2hvdWxkIGJlXG4gKiAgICAgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICpyYW5nZShzdGFydCwgZW5kLCBzdGVwLCBpbmNsdXNpdmUpIHtcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXG4gIGNvbnN0IGUgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IGVuZCA6IHN0YXJ0XG4gIGNvbnN0IHAgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcicgPyBzdGVwID09PSAwID8gMSA6IE1hdGguYWJzKHN0ZXApIDogMVxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXG4gICAgPyAhIWluY2x1c2l2ZSA6IHR5cGVvZiBlbmQgPT09ICdudW1iZXInXG4gICAgICA/ICEhc3RlcCA6ICEhZW5kXG5cbiAgY29uc3QgZm9yd2FyZCA9IHMgPCBlXG4gIGxldCBjdXJyZW50ID0gc1xuXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4ge1xuICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXG4gICAgfVxuICAgIHJldHVybiBpID8gY3VycmVudCA8IGUgOiBjdXJyZW50IDw9IGVcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XG4gICAgeWllbGQgY3VycmVudFxuICAgIGN1cnJlbnQgPSBmb3J3YXJkID8gY3VycmVudCArIHAgOiBjdXJyZW50IC0gcFxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwb3J0aW9uIG9mIGEgVVRGLTggZGF0YSB2aWV3IGFzIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgdG8gYmUgdGhlIGZpcnN0IGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQgZnJvbSB3aGljaFxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxuICogQHJldHVybnMge3N0cmluZ30gQSBVQ1MtMiAocmVndWxhciBKYXZhU2NyaXB0IHN0cmluZykgcmVwcmVzZW50YXRpb25cbiAqICAgICBvZiB0aGUgVVRGLTggY2hhcmFjdGVycyBpbiB0aGUgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlld1RvU3RyaW5nKGluZGV4LCBsZW5ndGgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZXMgPSBVaW50OEFycmF5LmZyb20oXG4gICAgeyBsZW5ndGggfSxcbiAgICAoXywgaSkgPT4gdmlldy5nZXRVaW50OChpbmRleCArIGkpLFxuICApXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVVRGLTggZGF0YSB2aWV3IG9mIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cbiAqIEByZXR1cm5zIHtEYXRhVmlld30gQSBkYXRhIHZpZXcgb3ZlciB0aGUgVVRGLTggYnl0ZXMgb2YgdGhlIGlucHV0XG4gKiAgICAgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9WaWV3KHN0cikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KGVuY29kZXIuZW5jb2RlKHN0cikuYnVmZmVyKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcbiAqIGZyb20gdGhlIG51bWJlciBvZiBVQ1MtMiBjaGFyYWN0ZXJzIGluIHRoZSBzYW1lIHN0cmluZywgbWVhbmluZyB0aGlzXG4gKiB2YWx1ZSBjYW4gZGlmZmVyIGZyb20gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIHRoZSBzYW1lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgb2Ygd2hpY2ggdG8gZ2V0IHRoZSBjaGFyYWN0ZXIgbGVuZ3RoLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gdGhhdCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyTGVuZ3RoKHN0cikge1xuICByZXR1cm4gWy4uLnN0cl0ubGVuZ3RoXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcbiAqIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXG4gKiAgICAgdGhlIGZpcnN0IChhbmQgcGVyaGFwcyBvbmx5KSBieXRlIG9mIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxuICogICAgIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoKGJ5dGUgJiAweDgwKSA+PiA3ID09PSAwKSByZXR1cm4gMVxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTEwKSByZXR1cm4gM1xuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTEpIHJldHVybiA0XG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXG4gIC8vIGFzY2lpIGNvZGVzIGlzIHVzZWRcbiAgcmV0dXJuIDFcbn1cblxuLyoqXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cbiAqXG4gKiBAdHlwZWRlZiBOZXh0Q2hhckluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuZXh0IFRoZSBuZXh0IGNoYXJhY3RlcihzKS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRhdGEgdmlldy5cbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXG4gKiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xuICBjb25zdCB3aWR0aCA9IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpXG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cbiAqIHdpdGhpbiB0aGUgdmlldy4gRWFjaCBvZiB0aGVzZSBjaGFyYWN0ZXJzIG1heSBiZSAxLSwgMi0sIDMtLCBvclxuICogNC1ieXRlIGNoYXJhY3RlcnMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlaXIgZmlyc3QgYnl0ZXMuIElmXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBmaXJzdCBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFycyhpbmRleCwgdmlldywgY291bnQpIHtcbiAgY29uc3Qgdmlld0xlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aFxuICBsZXQgd2lkdGggPSAwXG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKGNvdW50KSkge1xuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXG4gICAgaWYgKGkgPj0gdmlld0xlbmd0aCkgYnJlYWtcbiAgICB3aWR0aCArPSBuZXh0Q2hhcldpZHRoKGksIHZpZXcpXG4gIH1cbiAgaWYgKGluZGV4ICsgd2lkdGggPj0gdmlld0xlbmd0aCkge1xuICAgIHdpZHRoID0gdmlld0xlbmd0aCAtIGluZGV4XG4gIH1cbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBTdXJyb3VuZHMgdGhlIHN1cHBsaWVkIHN0cmluZyBpbiBzaW5nbGUgcXVvdGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzdXJyb3VuZCBpbiBzaW5nbGUgcXVvdGVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBsZWQgYW5kIHRyYWlsZWQgYnkgc2luZ2xlIHF1b3Rlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlKHN0cikge1xuICByZXR1cm4gYCcke3N0cn0nYFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogVGhpcyBzb3J0IG9mIGVtdWxhdGVzICphcy1wYXR0ZXJucyogaW4gYSBsaW1pdGVkIHdheSBpbiBKYXZhU2NyaXB0LlxuICogSW4gbGFuZ3VhZ2VzIGxpa2UgSGFza2VsbCBhbmQgTUwsIHdoZW4gcGF0dGVybiBtYXRjaGluZyBpcyBkb25lLFxuICogdGhlcmUgaXMgYSBjb25zdHJ1Y3QgdG8gYmUgYWJsZSB0byByZXRhaW4gYSBsYXJnZXIgcGFydCBvZiB0aGVcbiAqIGRlc3RydWN0dXJlZCBwYXR0ZXJuIHdoaWxlIGFsc28gYnJlYWtpbmcgaXQgZG93biBmdXJ0aGVyLiBJbiBIYXNrZWxsLFxuICpcbiAqIGBgYGhhc2tlbGxcbiAqIChoZWFkIDogdGFpbCkgPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIHdpbGwgYXNzaWduIGAxYCB0byBgaGVhZGAsIGFuZCBgWzIsIDMsIDQsIDVdYCB0byBgdGFpbGAuIFRoaXMgY2FuIGJlXG4gKiBkb25lIGluIEphdmFTY3JpcHQgYXMgd2VsbCwgbGlrZSB0aGlzOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IFtoZWFkLCAuLi50YWlsXSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogSG93ZXZlciwgSGFza2VsbCBjYW4gZ28gZmFydGhlcjogaXQgY2FuIGFsc28gYXNzaWduIHRoZSBlbnRpcmUgbGlzdFxuICogYXMgYSB3aG9sZSB0byBhbm90aGVyIHZhcmlhYmxlIHdoaWxlIHN0aWxsIGFzc2lnbmluZyBpdHMgZWxlbWVudHMgYXNcbiAqIGFib3ZlLiBJdCdzIGRvbmUgbGlrZSB0aGlzOlxuICpcbiAqIGBgYGhhc2tlbGxcbiAqIGxpc3QgQCAoaGVhZCA6IHRhaWwpID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBUaGlzIHdpbGwsIGluIGFkZGl0aW9uIHRvIHRoZSBhc3NpZ25tZW50cyBhYm92ZSwgYXNzaWduIGBbMSwgMiwgMywgNCxcbiAqIDVdYCB0byBgbGlzdGAuIFRoZSBgQGAgc2lnbiBpcyByZWFkICphcyosIGFuZCB0aGlzIGNvbnN0cnVjdCBpc1xuICogY2FsbGVkIGFuICphcy1wYXR0ZXJuKiAocGVyaGFwcyBiZWNhdXNlIHRoZSBNTCB3YXkgb2YgZG9pbmcgaXQgdXNlc1xuICogdGhlIGBhc2Aga2V5d29yZCBpbnN0ZWFkIG9mIHRoZSBgQGAgc3ltYm9sKS5cbiAqXG4gKiBUaGVyZSBpcyBubyBmYWNpbGl0eSB0byBkbyB0aGlzIGluIEphdmFTY3JpcHQuIEJ1dCB0aGVyZSBhcmUgbWFueVxuICogcGxhY2VzIGluIHRoaXMgbGlicmFyeSB3aGVyZSBhIGBSZXBseWAgaXMgZGVzY3R1cmN0dXJlZCBpbnRvIGl0c1xuICogYENvbnRleHRgIGFuZCBgUmVzdWx0YCBlbGVtZW50cywgeWV0IHRoZXJlIGlzIGEgbmVlZCB0byBjb25kaXRpb25hbGx5XG4gKiB1c2UgdGhlIGVudGlyZSBgUmVwbHlgIGFzIHdlbGwgKG5vcm1hbGx5IHRvIHJldHVybiBpdCBpZiBzb21lXG4gKiBjb25kaXRpb24gaXMgbWV0KS4gUmF0aGVyIHRoYW4gY3JlYXRlIGEgbmV3IGBSZXBseWAgZnJvbSB0aGVzZSBwYXJ0cyxcbiAqIGB0d2luYCBjYW4gYmUgdXNlZCB0byBkdXBsaWNhdGUgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGBSZXBseWAuIFRoZW5cbiAqIG9ubHkgKm9uZSogb2YgdGhlIGR1cGxpY2F0ZSByZWZlcmVuY2VzIGNhbiBiZSBkZXN0cnVjdHVyZWQsIHdoaWxlIHRoZVxuICogb3RoZXIgb25lIGlzIHJldGFpbmVkIGFzIGEgd2hvbGUuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHBhcnNlcihjdHgpKVxuICogYGBgXG4gKlxuICogQXMtcGF0dGVybnMgY2FuIGJlIHVzZWQgb24gcGllY2VzIG9mIGEgcGF0dGVybiBpbnN0ZWFkIG9mIHRoZSBlbnRpcmVcbiAqIHBhdHRlcm4sIGFuZCBgdHdpbmAgY2Fubm90IGRvIHRoYXQuIEJ1dCBpdCBzZXJ2ZXMgZm9yIHdoYXQgaXMgbmVlZGVkXG4gKiBpbiBLZXNzZWwuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gdmFsdWUgQSByZXBseSB0aGF0IG5lZWRzIHRvIGJlIGRlc3RydWN0dXJlZCB3aGlsZVxuICogICAgIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSB3aG9sZS5cbiAqIEByZXR1cm5zIHtbUmVwbHksIFJlcGx5XX0gQW4gYXJyYXkgY29udGFpbmluZyB0d28gY29waWVzIG9mIHRoZVxuICogICAgIHJlcGx5LiBPbmUgY2FuIGJlIGRlc3RydWN0dXJlZCB3aGlsZSB0aGUgb3RoZXIgaXMgcmV0YWluZWQgd2hvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkdXAodmFsdWUpIHtcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXG59XG5cbi8qKlxuICogQ29tbWEtc2VwYXJhdGVzIChhcyBuZWVkZWQpIHRoZSBzdHJpbmdzIGluIHRoZSBwcm92aWRlZCBhcnJheS4gSWZcbiAqIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlIHJlc3VsdCB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZzsgaWYgdGhlIGFycmF5XG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcbiAqIHR3byBlbGVtZW50cywgdGhleSB3aWxsIGJlIGpvaW5lZCB3aXRoICcgb3IgJyBiZXR3ZWVuIHRoZW0uIElmIHRoZVxuICogYXJyYXkgaXMgbG9uZ2VyIHRoYW4gdGhhdCwgYWxsIGVsZW1lbnRzIHdpbGwgYmUgY29tbWEtc2VwYXJhdGVkIHdpdGhcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXG4gKiBzdHlsZSkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXG4gKiAgICAgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG1lc3NhZ2VzIGpvaW5lZCBpbnRvIGEgc2luZ2xlIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hU2VwYXJhdGUobWVzc2FnZXMpIHtcbiAgc3dpdGNoIChtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xuICAgIGNhc2UgMTogcmV0dXJuIG1lc3NhZ2VzWzBdXG4gICAgY2FzZSAyOiByZXR1cm4gbWVzc2FnZXMuam9pbignIG9yICcpXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgbXNncyA9IG1lc3NhZ2VzLnNsaWNlKClcbiAgICAgIGNvbnN0IGxhc3QgPSBtc2dzLnBvcCgpXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBdWdtZW50cyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBpdFxuICogY3JlYXRlZCBhbiBhcmJpdHJhcnkgb2JqZWN0LiBUaGUgZmFjdG9yeSBmdW5jdGlvbiBpcyBhc3NpZ25lZCBhblxuICogYWRkaXRpb25hbCBwcm9wZXJ0eSAoYnkgZGVmYXVsdCBuYW1lZCBgY3JlYXRlZGAsIGNhbiBiZSBjaGFuZ2VkIGJ5XG4gKiBwYXNzaW5nIGluIHRoZSBgcHJvcGAgYXJndW1lbnQpIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogb2JqZWN0IGFuZCByZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmFjdG9yeSBjcmVhdGVkIGl0IG9yIGBmYWxzZWAgaWYgaXRcbiAqIGRpZCBub3QuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGF1Z21lbnRlZCB3aXRoXG4gKiAgICAgdGhlIG5ldyBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gW3Byb3A9J2NyZWF0ZWQnXSBUaGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlXG4gKiAgICAgYWRkZWQgdG8gdGhlIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IFRoZSBhdWdtZW50ZWQgZmFjdG9yeSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrKGZuLCBwcm9wID0gJ2NyZWF0ZWQnKSB7XG4gIGNvbnN0IHRyYWNrZWQgPSBuZXcgV2Vha1NldCgpXG5cbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlZCA9IGZuKC4uLmFyZ3MpXG4gICAgICB0cmFja2VkLmFkZChjcmVhdGVkKVxuICAgICAgcmV0dXJuIGNyZWF0ZWRcbiAgICB9LFxuICAgIHByb3AsXG4gICAgeyB2YWx1ZTogdHJhY2tlZC5oYXMuYmluZCh0cmFja2VkKSB9LFxuICApXG59XG5cbmNvbnN0IG51bXMgPSBbXG4gICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsXG4gICduaW5lJywgJ3RlbicsICdlbGV2ZW4nLCAndHdlbHZlJywgJ3RoaXJ0ZWVuJywgJ2ZvdXJ0ZWVuJywgJ2ZpZnRlZW4nLFxuICAnc2l4dGVlbicsICdzZXZlbnRlZW4nLCAnZWlnaHRlZW4nLCAnbmluZXRlZW4nLFxuXVxuY29uc3Qgb25lcyA9IFtcbiAgJ3plcm90aCcsICdmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2ZpZnRoJywgJ3NpeHRoJywgJ3NldmVudGgnLFxuICAnZWlnaHRoJywgJ25pbnRoJywgJ3RlbnRoJywgJ2VsZXZlbnRoJywgJ3R3ZWxmdGgnLCAndGhpcnRlZW50aCcsXG4gICdmb3VydGVlbnRoJywgJ2ZpZnRlZW50aCcsICdzaXh0ZWVudGgnLCAnc2V2ZW50ZWVudGgnLCAnZWlnaHRlZW50aCcsXG4gICduaW5ldGVlbnRoJyxcbl1cbmNvbnN0IHRlbnMgPSBbXG4gICd0d2VudCcsICd0aGlydCcsICdmb3J0JywgJ2ZpZnQnLCAnc2l4dCcsICdzZXZlbnQnLCAnZWlnaHQnLCAnbmluZXQnLFxuXVxuY29uc3QgZ3JvdXBzID0gW1xuICAnaHVuZHJlZCcsICd0aG91c2FuZCcsICdtaWxsaW9uJywgJ2JpbGxpb24nLCAndHJpbGxpb24nLCAncXVhZHJpbGxpb24nLFxuXVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gaXRzIHdvcmQtYmFzZWQgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCdmaXJzdCdgLCBgMTcyOWAgYmVjb21lcyBgJ29uZSB0aG91c2FuZCBzZXZlbiBodW5kcmVkXG4gKiB0d2VudHktbmludGgnYCwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIG51bWJlciBpbiBpdHMgd29yZC1iYXNlZCBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3b3JkaW5hbChuKSB7XG4gIGlmIChuIDwgMCB8fCBuID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke051bWJlci5NQVhfU0FGRV9JTlRFR0VSfWApXG4gIH1cbiAgY29uc3QgbWFnID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKG4pKVxuXG4gIGlmIChuIDwgMjApIHJldHVybiBvbmVzW25dXG4gIGlmIChtYWcgPT09IDEpIHtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihuIC8gMTApIC0gMlxuICAgIHJldHVybiBuICUgMTAgPT09IDAgPyBgJHt0ZW5zW2ldfWlldGhgIDogYCR7dGVuc1tpXX15LSR7b25lc1tuICUgMTBdfWBcbiAgfVxuICBpZiAobWFnID09PSAyKSB7XG4gICAgY29uc3QgZiA9IE1hdGguZmxvb3IobiAvIDEwICoqIG1hZylcbiAgICBjb25zdCB4ID0gbiAtIGYgKiAxMCAqKiBtYWdcbiAgICByZXR1cm4gYCR7bnVtc1tmXX0gJHtncm91cHNbMF19JHt4ID09PSAwID8gJ3RoJyA6IGAgJHt3b3JkaW5hbCh4KX1gfWBcbiAgfVxuXG4gIGNvbnN0IGcgPSBtYWcgJSAzICsgMVxuICBjb25zdCBpID0gTWF0aC5mbG9vcihtYWcgLyAzKVxuICBjb25zdCBmID0gTWF0aC5mbG9vcihuIC8gMTAgKiogKG1hZyAtIGcgKyAxKSlcbiAgY29uc3QgbSA9IChmdW5jdGlvbiBtdWx0KG51bSkge1xuICAgIGlmIChudW0gPCAyMCkgcmV0dXJuIG51bXNbbnVtXVxuXG4gICAgY29uc3QgcmVtID0gbnVtICUgMTBcbiAgICBpZiAobnVtIDwgMTAwKSB7XG4gICAgICByZXR1cm4gYCR7dGVuc1tNYXRoLmZsb29yKG51bSAvIDEwKSAtIDJdfXkke1xuICAgICAgICByZW0gPT09IDAgPyAnJyA6IGAtJHtudW1zW3JlbV19YFxuICAgICAgfWBcbiAgICB9XG5cbiAgICBjb25zdCB4ID0gbnVtIC0gTWF0aC5mbG9vcihudW0gLyAxMDApICogMTAwXG4gICAgcmV0dXJuIGAke251bXNbTWF0aC5mbG9vcihudW0gLyAxMDApXX0gJHtncm91cHNbMF19JHtcbiAgICAgIHggPT09IDAgPyAndGgnIDogYCAke211bHQoeCl9YFxuICAgIH1gXG4gIH0oZikpXG4gIGNvbnN0IHggPSBuIC0gZiAqIDEwICoqIChtYWcgLSBnICsgMSlcbiAgcmV0dXJuIGAke219ICR7Z3JvdXBzW2ldfSR7eCA9PT0gMCA/ICd0aCcgOiBgICR7d29yZGluYWwoeCl9YH1gXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XG4gKiBvZnRlbiBiZSB0aGUgb3V0cHV0IGZyb20gYEpTT04uc3RyaW5naWZ5KClgLCB0aG91Z2ggcmVwcmVzZW50YXRpb25zXG4gKiBhcmUgYWxzbyBpbmNsdWRlZCBmb3IgdHlwZXMgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IHN1cHBvcnQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdHVybiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gQSByZWFzb25hYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJ1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSByZXR1cm4gYFN5bWJvbCgke3ZhbHVlLmRlc2NyaXB0aW9ufSlgXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVycm9yIHV0aWxpdGllc1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgZmFpbHVyZSByZXBseS4gVGhlIGNvbmRpdGlvblxuICogZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZXBseSB3aWxsIGJlIGZhdGFsIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb24gU2hvdWxkIGJlIGB0cnVlYCBmb3IgYSBmYXRhbCBmYWlsdXJlIG9yXG4gKiAgICAgYGZhbHNlYCBmb3IgYSBub24tZmF0YWwgZmFpbHVyZS5cbiAqIEByZXR1cm5zIFRoZSByZXBseSBmdW5jdGlvbiBmb3IgZmF0YWwgb3Igbm9uLWZhdGFsIGZhaWx1cmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbHlGbihjb25kaXRpb24pIHtcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IGZhdGFsUmVwbHkgOiBmYWlsUmVwbHlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCBmb3Igbm9uLWJhY2t0cmFja2VkIGVycm9ycyBmcm9tIHVuZGVybHlpbmdcbiAqIHBhcnNlcnMuIFRoZSAnZicgaXMgZm9yICdmbGF0JzsgdGhpcyBmdW5jdGlvbiBwcm9kdWNlcyBhIG5vbi1uZXN0ZWRcbiAqIGVycm9yIHdob3NlIG1lc3NhZ2UgaXMgYmFzZWQgdXBvbiB3aGV0aGVyIGBtYCBleGlzdHMgb3Igbm90LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgZ2VuZXJhdGVkIGJ5IHRoZSB1bmRlcmx5aW5nXG4gKiAgICAgcGFyc2VyLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgZXJyb3IgbGlzdCB0aGF0IGRvZXMgbm90IHRha2UgYmFja3RyYWNraW5nXG4gKiAgICAgaW50byBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmVycm9yKG0sIGVycm9ycykge1xuICByZXR1cm4gbSA9PSBudWxsID8gZXJyb3JzIDogZXhwZWN0ZWQobSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCBmb3IgYmFja3RyYWNrZWQgZXJyb3JzIGZyb20gdW5kZXJseWluZ1xuICogcGFyc2Vycy4gVGhlICduJyBpcyBmb3IgbmVzdGVkOyB0aGlzIGZ1bmN0aW9uIHByb2R1Y2VzIGEgbmVzdGVkXG4gKiBlcnJvciB0aGF0IGluc3RlYWQgYmUgYSBjb21wb3VuZCBlcnJvciBpZiBgbWAgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QgdGhhdCB0YWtlcyBiYWNrdHJhY2tpbmcgaW50b1xuICogICAgIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXJyb3IobSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIG0gPT0gbnVsbCA/IG5lc3RlZChjdHgsIGVycm9ycykgOiBjb21wb3VuZChtLCBjdHgsIGVycm9ycylcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCB0aGF0IHdpbGwgb25seSByZWNvcmQgYmFja3RyYWNraW5nXG4gKiBpbmZvcm1hdGlvbiBpZiB0aGUgcHJvdmlkZWQgY29uZGl0aW9uIGlzIHRydWUuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kIElmIGB0cnVlYCwgdGhlIG5ldyBlcnJvciBsaXN0IHdpbGwgaW5jbHVkZVxuICogICAgIGJhY2t0cmFja2luZyBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZXJyb3IoY29uZCwgbSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGNvbmQgPyBuZXJyb3IobSwgY3R4LCBlcnJvcnMpIDogZmVycm9yKG0sIGVycm9ycylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleCh2YWx1ZSwgZGlnaXRzID0gMikge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbFxuICAgID8gJ251bGwnXG4gICAgOiAoJzAnLnJlcGVhdChkaWdpdHMpICsgdmFsdWUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkpLnN1YnN0cigtZGlnaXRzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhleCh2aWV3LCBzdGFydCwgbGVuZ3RoKSB7XG4gIGNvbnN0IGJ5dGVzID0gW11cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKHN0YXJ0LCBNYXRoLm1pbihzdGFydCArIGxlbmd0aCwgdmlldy5ieXRlTGVuZ3RoKSkpIHtcbiAgICBieXRlcy5wdXNoKGhleCh2aWV3LmdldFVpbnQ4KGkpKSlcbiAgfVxuICByZXR1cm4gYnl0ZXMuam9pbignICcpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9