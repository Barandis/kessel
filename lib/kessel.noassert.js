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
/*! exports provided: formatter, argFormatter, argCharFormatter, argFnFormatter, argGenFormatter, argNumFormatter, argParFormatter, argStrFormatter, ordFormatter, ordCharFormatter, ordFnFormatter, ordNumFormatter, ordParFormatter, ordStrFormatter, assertChar, assertFunction, assertGenFunction, assertString, assertArray, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser, assertParsers */
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
/*! exports provided: attempt, seqB, chainB, applyB, leftB, rightB, repeatB, manyTillB, blockB, pipeB, betweenB */
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
 * @returns {Parser} A parser that executes `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */

const repeatB = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;

    if (pres.status === Fail) {
      const err = index === context.index ? pres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, pres.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(context, err, index);
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
 * If `p` fails non-fatally before `end` succeeds, this parser will
 * backtrack to the point where `p` was executed the first time and will
 * fail non-fatally.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} end The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @returns {Parser} A parser which will execute `end` and then `p` zero
 *     or more times until `end` succeeds.
 */

const manyTillB = (p, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  while (true) {
    const [endrep, [endctx, endres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(end(context));
    context = endctx;
    if (endres.status === Fatal) return endrep;
    if (endres.status === Ok) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;

    if (pres.status === Fail) {
      const err = index === pctx.index ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, endres.errors) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, endres.errors));
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, err, index);
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
 * @param {function():*} genFn A generator function that takes no
 *     arguments and returns whatever should be used as the returned
 *     parser's result. This generator function can `yield` only
 *     `Parser`s; otherwise an error is thrown.
 * @returns {Parser} A parser that executes the generator function,
 *     executes parsers as they are yielded, and results in the return
 *     value of the generator.
 */

const blockB = genFn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  const gen = genFn();
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
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(context, errors);

    if (pres.status === Fail) {
      const err = index === context.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(context, err, index);
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
      if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(context, errors);

      if (pres.status === Fail) {
        const err = index === context.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, errors);
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(context, err, index);
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
 * `pre` was executed and fail non-fatally.
 *
 * @param {Parser} pre The first parser to execute.
 * @param {Parser} post The last parser to execute.
 * @param {Parser} p The second parser to execute and whose result
 *     becomes the result of the new parser.
 * @returns {Parser} A parser which executes `pre`, `p`, and `post` in
 *     order and then returns the result of `p`.
 */

const betweenB = (pre, post, p) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  var _pres$errors4;

   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [prerep, [prectx, preres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(pre(ctx));
  if (preres.status !== Ok) return prerep;
  const [pctx, pres] = p(prectx);
  let errors = ((_pres$errors4 = pres.errors) === null || _pres$errors4 === void 0 ? void 0 : _pres$errors4.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(preres.errors, pres.errors) : [];
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, errors);

  if (pres.status === Fail) {
    const err = index === pctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(pctx, errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, err, index);
  }

  const [postctx, postres] = post(pctx);

  if (postres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(postctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, postres.errors));
  }

  if (postres.status === Fail) {
    errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, postres.errors);
    const err = index === postctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(postctx, errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(postctx, err, index);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(postctx, pres.value);
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
/*! exports provided: seq, left, right, block, many, many1, skip, skipMany, skipMany1, sep, sep1, end, sepEndBy1, repeat, between, until, pipe, assocL, assoc1L, assocR, assoc1R */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipMany", function() { return skipMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipMany1", function() { return skipMany1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sep", function() { return sep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sep1", function() { return sep1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepEndBy1", function() { return sepEndBy1; });
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
 * A parser that executes `p` zero or more times until it fails,
 * discarding the results.
 *
 * This parser cannot fail non-fatally; however, if `p` ever fails
 * fatally, then so will this parser.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */

const skipMany = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  let context = ctx;

  while (true) {
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
    }

    if (pres.status === Fail) break;
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, null);
});
/**
 * A parser that executes `p` one or more times until it fails,
 * discarding the results.
 *
 * This parser can fail non-fatally if `p` does not succeed at least
 * once. It can fail fatally if `p` ever fails fatally.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */

const skipMany1 = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

  while (true) {
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, null);
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

const sepEndBy1 = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
    if (context.index === index) throw new TypeError(loopMessage('sepEndBy1'));
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
/*! exports provided: alpha, any, anyOf, char, charI, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, satisfyM, upper, always, failNormally, failFatally, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringI, alt, def, empty, not, opt, peek, applyB, attempt, betweenB, blockB, chainB, leftB, manyTillB, pipeB, repeatB, rightB, seqB, apply, chain, compact, fifth, first, fourth, join, map, nth, second, third, value, assoc1L, assoc1R, assocL, assocR, between, block, end, left, many, many1, pipe, repeat, right, sep, sep1, sepEndBy1, seq, skip, skipMany, skipMany1, until, Status, failReply, failure, fatalReply, okReply, parse, parser, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["manyTillB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["pipeB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["repeatB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["rightB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seqB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["seqB"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["many"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["many1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sep", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["sep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sep1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["sep1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepEndBy1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["sepEndBy1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["seq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["skip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["skipMany"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["skipMany1"]; });

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

const charParser = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  return fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx);
});
/**
 * A parser that reads a single character from input and succeeds if
 * that character is `c`.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     throw an error.
 * @returns {Parser} A parser that will succeed if `c` is the next
 *     character in the input.
 */


const char = c => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(ch => c === ch)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].char(c));
});
/**
 * A parser that reads a single character from input and succeeds if
 * that character is `c`. This differs from `char` in that the
 * comparison done by this parser is case-insensitive.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     throw an error.
 * @returns {Parser} A parser that will succeed if `c` (or its
 *     other-cased counterpart) is the next character in the input.
 */

const charI = c => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(ch => c.toLowerCase() === ch.toLowerCase())(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].charI(c));
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
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */

const satisfy = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  return charParser(fn)(ctx);
});
/**
 * A parser that reads a single character and passes it to the provided
 * function. If the function returns `true`, this parser succeeds with
 * that character as the result. If the function returns `false`, this
 * parser fails and consumes no input and signals an error with the
 * provided message.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @param {string} message The error message to use if the parser fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */

const satisfyM = (fn, message) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
   false && false;
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(message));
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
 * @returns {Parser} A parser that will succeed if the next input
 *     character is between `start` and `end` (inclusive).
 */

const range = (s, e) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
   false && false;

  const fn = c => c >= s && c <= e;

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].range(s, e));
});
/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 *
 * @type {Parser}
 */

const any = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].any);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width);
});
/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 *
 * @type {Parser}
 */

const eof = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].eof);
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
 * @returns {Parser} A parser that succeeds if the next character is one
 *     of the characters in `chars`.
 */

const anyOf = cs => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  const {
    index,
    view
  } = ctx;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  const arr = [...cs];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].anyOf(arr));
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
 * @returns {Parser} A parser that succeeds if the next character is not
 *     one of the characters in `chars`.
 */

const noneOf = cs => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  const {
    index,
    view
  } = ctx;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  const arr = [...cs];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].noneOf(arr)) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII digit.
 *
 * @type {Parser}
 */

const digit = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].digit);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 *
 * @type {Parser}
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].hex);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 *
 * @type {Parser}
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= '0' && c <= '7';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].octal);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII letter.
 *
 * @type {Parser}
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].letter);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII alphanumeric character.
 *
 * @type {Parser}
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].alpha);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII uppercase letter.
 *
 * @type {Parser}
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].upper);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII lowercase letter.
 *
 * @type {Parser}
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].lower);
});

/***/ }),

/***/ "./src/parsers/misc.js":
/*!*****************************!*\
  !*** ./src/parsers/misc.js ***!
  \*****************************/
/*! exports provided: failNormally, failFatally, always */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failNormally", function() { return failNormally; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failFatally", function() { return failFatally; });
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
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const failNormally = msg => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(msg));
});
/**
 * A parser that fails without consuming input, setting the generic
 * error message to whatever is passed in. This signifies a fatal error,
 * one that cannot be recovered from without backtracking.
 *
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */

const failFatally = msg => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(msg));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jaGFpbmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvY2hhci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3JlZ2V4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmb3JtYXR0ZXIiLCJ0eXBlIiwidmFsdWUiLCJzdHJpbmdpZnkiLCJjaGFyRm9ybWF0dGVyIiwiZm5Gb3JtYXR0ZXIiLCJnZW5Gb3JtYXR0ZXIiLCJzdHJGb3JtYXR0ZXIiLCJhcnJGb3JtYXR0ZXIiLCJzdHJBcnJGb3JtYXR0ZXIiLCJzdHJSZWdGb3JtdHRlciIsIm51bUZvcm1hdHRlciIsInBhckZvcm1hdHRlciIsImFyZ0Zvcm1hdHRlciIsIm9yZGVyIiwibXVsdGlwbGUiLCJ3b3JkaW5hbCIsImFyZ0NoYXJGb3JtYXR0ZXIiLCJhcmdGbkZvcm1hdHRlciIsImFyZ0dlbkZvcm1hdHRlciIsImFyZ051bUZvcm1hdHRlciIsImFyZ1BhckZvcm1hdHRlciIsImFyZ1N0ckZvcm1hdHRlciIsIm9yZEZvcm1hdHRlciIsIm9yZCIsIm9yZENoYXJGb3JtYXR0ZXIiLCJvcmRGbkZvcm1hdHRlciIsIm9yZE51bUZvcm1hdHRlciIsIm9yZFBhckZvcm1hdHRlciIsIm9yZFN0ckZvcm1hdHRlciIsImZhaWxBc3NlcnQiLCJuYW1lIiwiRXJyb3IiLCJhc3NlcnRDaGFyIiwiY2hhckxlbmd0aCIsImFzc2VydEZ1bmN0aW9uIiwicGFyc2VyIiwiY3JlYXRlZCIsImFzc2VydEdlbkZ1bmN0aW9uIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYXNzZXJ0U3RyaW5nIiwiYXNzZXJ0QXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJhc3NlcnROdW1iZXIiLCJhc3NlcnRQYXJzZXIiLCJhc3NlcnRQYXJzZXJzIiwidmFsdWVzIiwiaSIsImVudW1lcmF0ZSIsIm9yZGluYWwiLCJPayIsIkZhaWwiLCJGYXRhbCIsIlN0YXR1cyIsImFsdCIsImFyZ3MiLCJwcyIsInNsaWNlIiwibSIsImxlbmd0aCIsInBvcCIsImN0eCIsImhhc00iLCJBU1NFUlQiLCJlcnJvcnMiLCJleHBlY3RlZCIsInAiLCJwcmVwIiwicGN0eCIsInByZXMiLCJkdXAiLCJzdGF0dXMiLCJtZXJnZSIsImZhdGFsUmVwbHkiLCJmYWlsUmVwbHkiLCJvcHQiLCJyZXBseSIsIm9rUmVwbHkiLCJkZWYiLCJ4IiwiZmVycm9yIiwicGVlayIsImluZGV4IiwibmVycm9yIiwiZW1wdHkiLCJmbiIsInJlcGx5Rm4iLCJub3QiLCJ1bmRlZmluZWQiLCJhdHRlbXB0IiwiRXJyb3JUeXBlIiwiTmVzdGVkIiwiY29tcG91bmQiLCJzZXFCIiwiY29udGV4dCIsImVycm9yIiwiYmVycm9yIiwicHVzaCIsImNoYWluQiIsInEiLCJxcmVwIiwicWN0eCIsInFyZXMiLCJhcHBseUIiLCJsZWZ0QiIsInJpZ2h0QiIsInJlcGVhdEIiLCJuIiwiXyIsInJhbmdlIiwiZXJyIiwibmVzdGVkIiwibWFueVRpbGxCIiwiZW5kIiwiZW5kcmVwIiwiZW5kY3R4IiwiZW5kcmVzIiwiYmxvY2tCIiwiZ2VuRm4iLCJnZW4iLCJuZXh0VmFsdWUiLCJkb25lIiwibmV4dCIsInBpcGVCIiwiYmV0d2VlbkIiLCJwcmUiLCJwb3N0IiwicHJlcmVwIiwicHJlY3R4IiwicHJlcmVzIiwicG9zdGN0eCIsInBvc3RyZXMiLCJqb2luIiwidiIsImNvbXBhY3QiLCJmaWx0ZXIiLCJudGgiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJtYXAiLCJhcHBseSIsIm1lcnJvciIsImNoYWluIiwibG9vcE1lc3NhZ2UiLCJzZXEiLCJsZWZ0IiwicmlnaHQiLCJibG9jayIsImciLCJtYW55IiwidmlldyIsImJ5dGVMZW5ndGgiLCJtYW55MSIsInNraXAiLCJza2lwTWFueSIsInNraXBNYW55MSIsInNlcCIsInMiLCJzY3R4Iiwic3JlcyIsIlR5cGVFcnJvciIsInNlcDEiLCJzZXBFbmRCeTEiLCJyZXBlYXQiLCJiZXR3ZWVuIiwiZSIsImVjdHgiLCJlcmVzIiwidW50aWwiLCJwaXBlIiwib3BGb3JtYXR0ZXIiLCJhc3NvY0wiLCJvIiwib3BzIiwib2N0eCIsIm9yZXMiLCJhc3NvYzFMIiwiYXNzb2NSIiwiYXNzb2MxUiIsImlzVHlwZWRBcnJheSIsIlVpbnQ4QXJyYXkiLCJVaW50OENsYW1wZWRBcnJheSIsIlVpbnQxNkFycmF5IiwiVWludDMyQXJyYXkiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsImlucHV0IiwibWVzc2FnZSIsInN0cmluZ1RvVmlldyIsIkRhdGFWaWV3IiwiYnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJ0cmFjayIsInBhcnNlIiwic3VjY2VlZGVkIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmb3JtYXRFcnJvcnMiLCJydW4iLCJyZXN1bHQiLCJ0YWIiLCJ6ZXJvV2lkdGgiLCJFeHBlY3RlZCIsIlVuZXhwZWN0ZWQiLCJHZW5lcmljIiwiQ29tcG91bmQiLCJPdGhlciIsImxhYmVsIiwidW5leHBlY3RlZCIsImdlbmVyaWMiLCJvdGhlciIsImVycm9yczEiLCJlcnJvcnMyIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsInNob3ciLCJtYXhXaWR0aCIsImluZGVudCIsInNwIiwibmV3Q29sbm8iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwiZm9ybWF0TmVzdGVkIiwibmVzdGVkcyIsIm5lc3RlZE1zZ3MiLCJmb3JtYXQiLCJlbnN1cmVOZXdsaW5lcyIsInRleHQiLCJjb3VudCIsInJhd0xpbmUiLCJ2aWV3VG9TdHJpbmciLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmaW5kIiwiY29tbWFTZXBhcmF0ZSIsInVuZXhwTXNnIiwiZXhwTXNnIiwiZ2VuZXJpY01zZyIsIm5lc3RlZE1zZyIsImNvbXBvdW5kTXNnIiwidW5rbm93bk1zZyIsImVvZk1zZyIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwic3RyaW5ncyIsImFscGhhIiwiYWxwaGFVIiwiYW55IiwiYW55T2YiLCJhcnJheSIsImFueVN0cmluZyIsImNoYXIiLCJxdW90ZSIsImNoYXJJIiwiZGlnaXQiLCJlb2YiLCJoZXgiLCJsZXR0ZXIiLCJsZXR0ZXJVIiwibG93ZXIiLCJsb3dlclUiLCJuZXdsaW5lVSIsIm5vbmVPZiIsIm9jdGFsIiwicmVnZXgiLCJyZSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInNwYWNlc1UiLCJzcGFjZXMxVSIsInNwYWNlVSIsInN0cmluZyIsInN0ciIsInN0cmluZ0kiLCJ1cHBlciIsInVwcGVyVSIsImV4cGVjdGVkcyIsImNoYXJQYXJzZXIiLCJ3aWR0aCIsIm5leHRDaGFyIiwiY3ByZXAiLCJjcGN0eCIsImNwcmVzIiwiY2giLCJ0b0xvd2VyQ2FzZSIsInNhdGlzZnkiLCJzYXRpc2Z5TSIsImNzIiwiYXJyIiwiaW5jbHVkZXMiLCJmYWlsTm9ybWFsbHkiLCJtc2ciLCJmYWlsRmF0YWxseSIsImFsd2F5cyIsInJlTGV0dGVyIiwicmVBbHBoYSIsInJlVXBwZXIiLCJyZUxvd2VyIiwicmVTcGFjZSIsInJlVXNwYWNlIiwicmVTcGFjZXMiLCJyZVVzcGFjZXMiLCJyZVNwYWNlczEiLCJyZVVzcGFjZXMxIiwicmVOZXdsaW5lIiwicmVVbmV3bGluZSIsInJlZ2V4UGFyc2VyIiwicmVzdCIsIlJlZ0V4cCIsInNvdXJjZSIsImZsYWdzIiwicmVhbmNob3IiLCJuZXdTb3VyY2UiLCJycHJlcCIsInJwY3R4IiwicnByZXMiLCJzdHJpbmdQYXJzZXIiLCJuZXh0Q2hhcnMiLCJzcHJlcCIsInNwY3R4Iiwic3ByZXMiLCJjaGFycyIsImFsbCIsImVuY29kZXIiLCJUZXh0RW5jb2RlciIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsInN0ZXAiLCJpbmNsdXNpdmUiLCJhYnMiLCJmb3J3YXJkIiwiY3VycmVudCIsImZpbmlzaGVkIiwiaXRlcmFibGUiLCJpdGVyYXRvciIsIlN5bWJvbCIsImJ5dGVzIiwiZnJvbSIsImRlY29kZSIsImVuY29kZSIsInZpZXdMZW5ndGgiLCJtZXNzYWdlcyIsIm1zZ3MiLCJsYXN0IiwicHJvcCIsInRyYWNrZWQiLCJXZWFrU2V0IiwiZGVmaW5lUHJvcGVydHkiLCJhZGQiLCJoYXMiLCJiaW5kIiwic3VmZml4ZXMiLCJudW1zIiwib25lcyIsInRlbnMiLCJncm91cHMiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWFnIiwibG9nMTAiLCJmIiwibXVsdCIsIm51bSIsInJlbSIsImRlc2NyaXB0aW9uIiwiSlNPTiIsImFydGljbGlmeSIsImNvbmRpdGlvbiIsImNvbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWtCQTtBQUtBO0NBc0JBO0FBQ0E7O0FBRUE7QUFRQTtBQWFBO0NBc0NBO0FBQ0E7O0FBRUE7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O0FBQ0E7O0FBQ08sU0FBU3lCLE1BQVQsQ0FBZ0J6QixDQUFoQixFQUFtQkcsR0FBbkIsRUFBd0JHLE1BQXhCLEVBQWdDO0FBQ3JDLFNBQU9OLENBQUMsSUFBSSxJQUFMLEdBQVlxRCxxREFBTSxDQUFDbEQsR0FBRCxFQUFNRyxNQUFOLENBQWxCLEdBQWtDNEIsdURBQVEsQ0FBQ2xDLENBQUQsRUFBSUcsR0FBSixFQUFTRyxNQUFULENBQWpEO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNnQyxNQUFULENBQWdCb1QsSUFBaEIsRUFBc0IxVixDQUF0QixFQUF5QkcsR0FBekIsRUFBOEJHLE1BQTlCLEVBQXNDO0FBQzNDLFNBQU9vVixJQUFJLEdBQUdqVSxNQUFNLENBQUN6QixDQUFELEVBQUlHLEdBQUosRUFBU0csTUFBVCxDQUFULEdBQTRCZ0IsTUFBTSxDQUFDdEIsQ0FBRCxFQUFJTSxNQUFKLENBQTdDO0FBQ0QsQyIsImZpbGUiOiJrZXNzZWwubm9hc3NlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBwYXJzZXIgfSBmcm9tICcuL2NvcmUnXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBlbnVtZXJhdGUsIG9yZGluYWwsIHN0cmluZ2lmeSwgd29yZGluYWwgfSBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZm9ybWF0dGVyIGZ1bmN0aW9uIG91dCBvZiBhIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgdGhhdCB0aGUgdmFsdWUgc2hvdWxkIGJlLlxuICogQHJldHVybnMge2Z1bmN0aW9uKCopOnN0cmluZ30gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB2YWx1ZSBvZiBhbnlcbiAqICAgICB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdHRlciA9IHR5cGUgPT5cbiAgdmFsdWUgPT4gYGV4cGVjdGVkICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXG5cbmNvbnN0IGNoYXJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnKVxuY29uc3QgZm5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nKVxuY29uc3QgZ2VuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGdlbmVyYXRvciBmdW5jdGlvbicpXG5jb25zdCBzdHJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nJylcbmNvbnN0IGFyckZvcm1hdHRlciA9IGZvcm1hdHRlcignYW4gYXJyYXknKVxuY29uc3Qgc3RyQXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzJylcbmNvbnN0IHN0clJlZ0Zvcm10dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbicpXG5jb25zdCBudW1Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgbnVtYmVyJylcbmNvbnN0IHBhckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBwYXJzZXInKVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZvcm1hdHRlciBmdW5jdGlvbiBvdXQgb2YgYSB0eXBlIGFuZCBhIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJdIFRoZSBwb3NpdGlvbiBvZiB0aGUgdmFsdWUgd2l0aGluIGFuIGFyZ3VtZW50XG4gKiAgICAgbGlzdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW211bHRpcGxlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGVyZSBpcyBtb3JlIHRoYW4gb25lXG4gKiAgICAgYXJndW1lbnQgaW4gdGhlIGZ1bmN0aW9uIHdob3NlIGVycm9yIGlzIGJlaW5nIGZvcm1hdHRlZC4gSWYgdGhpc1xuICogICAgIGlzIGZhbHNlLCB0aGUgYG9yZGVyYCB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6c3RyaW5nfSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIGFueVxuICogICAgIHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgYXJnRm9ybWF0dGVyID0gKHR5cGUsIG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT4gdmFsdWUgPT5cbiAgYGV4cGVjdGVkICR7XG4gICAgbXVsdGlwbGUgPyBgJHt3b3JkaW5hbChvcmRlcil9IGAgOiAnJ1xuICB9YXJndW1lbnQgdG8gYmUgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuZXhwb3J0IGNvbnN0IGFyZ0NoYXJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnRm5Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnR2VuRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIGdlbmVyYXRvciBmdW5jdGlvbicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdOdW1Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgbnVtYmVyJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ1BhckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBwYXJzZXInLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnU3RyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHN0cmluZycsIG9yZGVyLCBtdWx0aXBsZSlcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmb3JtYXR0ZXIgZnVuY3Rpb24gb3V0IG9mIGEgdHlwZSBhbmQgYSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSB0aGF0IHRoZSB2YWx1ZSBzaG91bGQgYmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JkIFRoZSBwb3NpdGlvbiBvZiB0aGUgdmFsdWUgd2l0aGluIGFhbiBhcmd1bWVudFxuICogICAgIGxpc3QsIGEgYmxvY2sgb2YgY29kZSwgZXRjLlxuICogQHJldHVybnMge2Z1bmN0aW9uKCopOnN0cmluZ30gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB2YWx1ZSBvZiBhbnlcbiAqICAgICB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IG9yZEZvcm1hdHRlciA9ICh0eXBlLCBvcmQpID0+IHZhbHVlID0+XG4gIGBleHBlY3RlZCAke29yZH0gYXJndW1lbnQgdG8gYmUgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuZXhwb3J0IGNvbnN0IG9yZENoYXJGb3JtYXR0ZXIgPSBvcmQgPT5cbiAgb3JkRm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZEZuRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBmdW5jdGlvbicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmROdW1Gb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIG51bWJlcicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRQYXJGb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRTdHJGb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHN0cmluZycsIG9yZClcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOnN0cmluZ30gZm9ybWF0dGVyXG4gKi9cbmZ1bmN0aW9uIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzaW5nbGUtY2hhcmFjdGVyIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDaGFyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBjaGFyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNoYXJMZW5ndGgodmFsdWUpICE9PSAxKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBub24tcGFyc2VyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBmbkZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8IHBhcnNlci5jcmVhdGVkKHZhbHVlKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEdlbkZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBnZW5Gb3JtYXR0ZXIpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmcobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBhcnJGb3JtYXR0ZXIpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHNpbmdsZS1jaGFyYWN0ZXJcbiAqIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyQXJyRm9ybWF0dGVyKSB7XG4gIGlmICghKFxuICAgIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgJiYgdmFsdWUuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgJiYgY2hhckxlbmd0aChjKSA9PT0gMSlcbiAgICB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPclJlZ0V4cChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyUmVnRm9ybXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZydcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gbnVtRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBwYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCAhcGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGFuIGFycmF5IGNvbnRhaW5zIG9ubHkgcGFyc2Vycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geypbXX0gdmFsdWVzIFRoZSBhcnJheSBvZiB2YWx1ZXMgYmVpbmcgY2hlY2tlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFBhcnNlcnMobmFtZSwgdmFsdWVzKSB7XG4gIGZvciAoY29uc3QgW2ksIHZhbHVlXSBvZiBlbnVtZXJhdGUodmFsdWVzKSkge1xuICAgIGFzc2VydFBhcnNlcihuYW1lLCB2YWx1ZSwgb3JkUGFyRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSlcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBmYXRhbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWQsIG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCBmZXJyb3IsIG5lcnJvciwgcmVwbHlGbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYWlsLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBwYXJzZXJzIG9uZSBhdCBhIHRpbWUgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmVcbiAqIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLiBPbiBmYWlsdXJlIChmYXRhbCBvciBvdGhlcndpc2UpLCBlcnJvclxuICogbWVzc2FnZXMgZnJvbSBhbGwgcGFyc2VycyB0aGF0IGhhZCBmYWlsZWQgYXJlIG1lcmdlZCBpbnRvIGBhbHRgJ3NcbiAqIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfHN0cmluZ30gYXJncyBUaGUgcGFyc2VycyB0byBleGVjdXRlLCBvbmUgYXQgYSB0aW1lLFxuICogICAgIHVudGlsIG9uZSBzdWNjZWVkcywgb25lIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLiBUaGUgbGFzdFxuICogICAgIGFyZ3VtZW50ICptYXkqIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgdGhlIGV4cGVjdGVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZSBpbiBwbGFjZSBvZiB0aGUgY29sbGVjdGVkIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzXG4gKiAgICAgb2YgdGhlIGNvbnN0aXR1ZW50IHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIGNvbnRhaW5lZCBwYXJzZXJzIHVudGlsXG4gKiAgICAgb25lIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgYWx0ID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdhbHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpKSlcblxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuXG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBlcnJvcnMpXG4gICAgfVxuICAgIHJldHVybiBmYWlsUmVwbHkoY3R4LCBlcnJvcnMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyLCBzdWNjZWVkaW5nIHdoZXRoZXIgaXRcbiAqIGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBleGVjdXRlZCBhbmRcbiAqICAgICB0aGVuIGhhdmUgaXRzIHJlc3VsdCBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIGZhaWxzLlxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seSBpZlxuICogICAgIGl0cyBjb250YWluZWQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgb3B0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3B0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ29wdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGVycm9ycylcblxuICAvLyBJZiB0aGUgb3B0aW9uYWwgcGFyc2VyIGZhaWxzLCB3ZSBhZGQgdGhlIGVycm9yIG1lc3NhZ2UgZXZlbiB0aG91Z2hcbiAgLy8gdGhlIGVuZCByZXN1bHQgb2YgYG9wdGAgaXMgc3VjY2Vzcy4gVGhpcyBsZXRzIHNlcXVlbmNpbmcgcGFyc2Vyc1xuICAvLyBhZGQgdGhlIG9wdCBwYXJzZXIncyBleHBlY3RlZCB0byBlcnJvciBtZXNzYWdlcyBpZiBhIGxhdGVyIHBhcnNlclxuICAvLyBpbiB0aGUgc2VxdWVuY2UgZmFpbHMuXG4gIGNvbnN0IHJlcGx5ID0gb2tSZXBseShwY3R4LCBudWxsKVxuICByZXBseVsxXS5lcnJvcnMgPSBlcnJvcnNcbiAgcmV0dXJuIHJlcGx5XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgZWl0aGVyIHdpdGggdGhlIHN1cHBsaWVkIHBhcnNlcidzIHN1Y2Nlc3NmdWxcbiAqIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHQgdmFsdWUgYHhgLlxuICogVGhpcyBwYXJzZXIgb25seSBmYWlscyBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZiA9IChwLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2RlZicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdkZWYnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG4gIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cbiAqIFN1Y2Nlc3Mgb3IgZmFpbHVyZSBhcmUgc3RpbGwgcmV0dXJuZWQsIHRob3VnaCBmYXRhbCBmYWlsdXJlIGlzXG4gKiBjb252ZXJ0ZWQgdG8gbm9uLWZhdGFsIGR1ZSB0byB0aGUgZmFjdCB0aGF0IG5vIGlucHV0IGlzIGNvbnN1bWVkLlxuICpcbiAqIElmIHRoZSBjb25zaXR1ZW50IHBhcnNlciBmYWlscyBmYXRhbGx5LCBhIG5lc3RlZCBlcnJvciBtZXNzYWdlIHdpbGxcbiAqIGJlIGNyZWF0ZWQgdG8gdHJhY2sgdGhlIGFjdHVhbCBlcnJvciBjYXVzZSBiZWZvcmUgdGhpcyBwYXJzZXJcbiAqIGF1dG9tYXRpY2FsbHkgYmFja3RyYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgb3IgZmFpbHNcbiAqICAgICB3aXRoIGl0LCBidXQgd2hpY2ggY29uc3VtZXMgbm8gaW5wdXQgZWl0aGVyIHdheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBlZWsgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdwZWVrJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3BlZWsnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBva1JlcGx5KHBjdHgsIHByZXMudmFsdWUsIGluZGV4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycyksIGluZGV4KVxuICB9XG4gIC8vIFRoaXMgcGFyc2VyIGltcGxlbWVudHMgYXV0b21hdGljIGJhY2t0cmFja2luZywgc28gaWYgaXRzIHBhcnNlclxuICAvLyBmYWlscyBmYXRhbGx5LCBpdCBoYXMgdG8gdHJhY2sgdGhhdCB0aHJvdWdoIGEgbmVzdGVkIGVycm9yXG4gIHJldHVybiBmYWlsUmVwbHkocGN0eCwgbmVycm9yKG0sIHBjdHgsIHByZXMuZXJyb3JzKSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscywgdGhpc1xuICogcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlIG9uIGZhaWx1cmUgaWYgdGhhdFxuICogZmFpbHVyZSB3YXMgY2F1c2VkIGJ5IGEgc3VjY2VzcyB3aXRoIGlucHV0IGNvbnN1bWVkLiBBbiBlcnJvciBtZXNzYWdlXG4gKiBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXMgdGhlIG9wdGlvbmFsXG4gKiBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGNvbnN1bWVzXG4gKiAgICAgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3QgZW1wdHkgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbXB0eScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbXB0eScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPayAmJiBwY3R4LmluZGV4ID09PSBpbmRleCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgbnVsbClcbiAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgYnV0IHdoaWNoIGRvZXNcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiBgcGAgc3VjY2VlZHMsIHRoaXMgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBBblxuICogZXJyb3IgbWVzc2FnZSBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXNcbiAqIHRoZSBvcHRpb25hbCBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIHdoZW4gaXRcbiAqICAgICBmYWlscywgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGUgcGFyc2VyIGNvbnRleHQsIHdoZXRoZXIgb3Igbm90IGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbm90JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ25vdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPa1xuICAgID8gZmFpbFJlcGx5KHBjdHgsIGZlcnJvcihtLCB1bmRlZmluZWQpLCBpbmRleClcbiAgICA6IG9rUmVwbHkocGN0eCwgbnVsbCwgaW5kZXgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ1BhckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0R2VuRnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRQYXJzZXJzLFxuICBhc3NlcnRTdHJpbmcsXG4gIGZvcm1hdHRlcixcbiAgb3JkRm5Gb3JtYXR0ZXIsXG4gIG9yZE51bUZvcm1hdHRlcixcbiAgb3JkUGFyRm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBmYXRhbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgY29tcG91bmQsIEVycm9yVHlwZSwgZXhwZWN0ZWQsIG1lcmdlLCBuZXN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQge1xuICBiZXJyb3IsXG4gIGR1cCxcbiAgZmVycm9yLFxuICBuZXJyb3IsXG4gIG9yZGluYWwsXG4gIHJhbmdlLFxuICByZXBseUZuLFxuICBzdHJpbmdpZnksXG59IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYWlsLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBiYWNrdHJhY2tzIHdoZW4gaXRzIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseSBhbmRcbiAqIHRyYW5zZm9ybXMgdGhhdCBmYXRhbCBmYWlsdXJlIGludG8gYSBub24tZmF0YWwgb25lLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBmZXcgd2F5cyB0byBjYXVzZSBhIGNvbnRhaW5lZCBwYXJzZXIgdG8gYmFja3RyYWNrXG4gKiBhZnRlciBhIGZhdGFsIGZhaWx1cmUgKGBwZWVrYCBhbHNvIGRvZXMgdGhhdCBhcyBhIHNpZGUgZWZmZWN0LCBldGMuKS5cbiAqIEFsbCBvZiB0aGUgYEJgIGJhY2t0cmFja2luZyBwYXJzZXJzIGJhY2t0cmFjayBvbmx5IGlmIHRoZSBmYXRhbFxuICogZmFpbHVyZSB3YXMgY2F1c2VkIGJ5IGEgY29udGFpbmVkIHBhcnNlcidzIG5vbi1mYXRhbCBmYWlsdXJlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgZmF0YWwgZmFpbHVyZXMgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgICBpbnRvIG5vbi1mYXRhbCBmYWlsdXJlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy4gSWYgdGhlIHBhcnNlciBiYWNrdHJhY2tzLCB0aGlzIGluc3RlYWQgYmVjb21lcyB0aGUgdGV4dCBvZlxuICogICAgIHRoZSBnZW5lcmF0ZWQgY29tcG91bmQgZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgY2Fubm90IGZhaWwgZmF0YWxseS4gSWYgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlciBmYWlscyBmYXRhbGx5LCB0aGlzIG9uZSB3aWxsIGluc3RlYWQgZmFpbCBub24tZmF0YWxseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGF0dGVtcHQgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhdHRlbXB0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2F0dGVtcHQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIG5lcnJvcihtLCBwY3R4LCBwcmVzLmVycm9ycyksIGluZGV4KVxuICB9XG4gIGlmIChoYXNNKSB7XG4gICAgaWYgKHByZXMuZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBwcmVzLmVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKSB7XG4gICAgICBjb25zdCB7IGN0eCwgZXJyb3JzIH0gPSBwcmVzLmVycm9yc1swXVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBjb21wb3VuZChtLCBjdHgsIGVycm9ycyksIGluZGV4KVxuICAgIH1cbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGV4cGVjdGVkKG0pLCBpbmRleClcbiAgfVxuICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIHByZXMuZXJyb3JzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lIGZhaWxzLiBJbiB0aGVcbiAqIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzIHRoZVxuICogcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSBhZnRlciBhbGwgb2YgdGhlIGVhcmxpZXJcbiAqIHBhcnNlcnMgc3VjY2VlZGVkLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgdGhlXG4gKiB2ZXJ5IGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcnxzdHJpbmd9IHBzIFRoZSBwYXJzZXJzIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbGFzdFxuICogICAgIGFyZ3VtZW50ICptYXkqIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgdGhlIGV4cGVjdGVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZSAob3IgY29tcG91bmQgZXJyb3IgbWVzc2FnZSwgaW4gdGhlIGNhc2Ugb2ZcbiAqICAgICBiYWNrdHJhY2tpbmcgaGFwcGVuaW5nKSBpbiBwbGFjZSBvZiB0aGUgY29sbGVjdGVkIGV4cGVjdGVkIGVycm9yXG4gKiAgICAgbWVzc2FnZXMgb2YgdGhlIGNvbnN0aXR1ZW50IHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdFxuICogICAgIGEgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxQiA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IG0gPSB0eXBlb2YgcHNbcHMubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdzZXFCJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCBhcmdzLmxlbmd0aCA+IDEpKSlcblxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgICAgfVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gYmVycm9yKHBjdHguaW5kZXggIT09IGluZGV4LCBtLCBwY3R4LCBlcnJvcnMpXG4gICAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSByZXN1bHQgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZCBwYXJzZXJcbiAqIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlIHBhcnNlclxuICogcmV0dXJucyB0aGF0IHJlc3VsdC5cbiAqXG4gKiBJZiB0aGUgcGFyc2VyIHJldHVybmVkIGJ5IGBmbmAgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYHBgIHN1Y2NlZWRzLFxuICogdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgYW5kXG4gKiB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCwgcGFzcyB0aGUgcmVzdWx0IHRvXG4gKiAgICAgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24ncyByZXR1cm4gdmFsdWUgYXMgYVxuICogICAgIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluQiA9IChwLCBmbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjaGFpbkInLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW5CJywgZm4sIGFyZ0ZuRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NoYWluQicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHEgPSBmbihwcmVzLnZhbHVlKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICdjaGFpbkInLCBxLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBwYXJzZXInKSxcbiAgKVxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gZHVwKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShxY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcbiAgY29uc3QgZXJyb3IgPSBiZXJyb3IocWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWxSZXBseShxY3R4LCBlcnJvciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYHFgIHRvIHRoZSBmdW5jdGlvblxuICogcmV0dXJuZWQgYnkgYHBgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gKiAgICAgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgQSBwYXJzZXIgd2hpY2ggcHJvdmlkZXMgYSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHlCID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHlCJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseUInLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXBwbHlCJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3FjdHgsIHFyZXNdID0gcShwY3R4KVxuICBjb25zdCBlcnJvcnMgPSBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHFjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICBjb25zdCBlcnJvciA9IGJlcnJvcihxY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcWN0eCwgZXJyb3JzKVxuICAgIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyb3IsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgZm4gPSBxcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAnYXBwbHlCJywgZm4sIGZvcm1hdHRlcignc2Vjb25kIGFyZ3VtZW50IHRvIHJldHVybiBhIGZ1bmN0aW9uJyksXG4gIClcbiAgcmV0dXJuIG9rUmVwbHkocWN0eCwgZm4ocHJlcy52YWx1ZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHBgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBgcWAgYW5kIHJldHVybnMgdGhlXG4gKiAgICAgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnRCID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdEInLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnRCJywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2xlZnRCJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3FjdHgsIHFyZXNdID0gcShwY3R4KVxuICBpZiAocXJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2tSZXBseShxY3R4LCBwcmVzLnZhbHVlKVxuXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocWN0eCwgZmVycm9yKG0sIGVycm9ycykpXG5cbiAgY29uc3QgZXJyb3IgPSBiZXJyb3IocWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWxSZXBseShxY3R4LCBlcnJvciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHFgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBgcWAgYW5kIHJldHVybnMgdGhlXG4gKiAgICAgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodEIgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0QicsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyaWdodEInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IGR1cChxKHBjdHgpKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcXJlcFxuXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocWN0eCwgZmVycm9yKG0sIGVycm9ycykpXG5cbiAgY29uc3QgZXJyb3IgPSBiZXJyb3IocWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWxSZXBseShxY3R4LCBlcnJvciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsIGNvbGxlY3RpbmcgdGhlXG4gKiBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYWZ0ZXIgaW5pdGlhbGx5IHN1Y2NlZWRpbmcgb25jZSBvciBtb3JlLCB0aGlzIHBhcnNlclxuICogd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgdGhlIGZpcnN0IHRpbWUgYW5kXG4gKiB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gZXhlY3V0ZSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gZXhlY3V0ZSB0aGUgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmVwZWF0QiA9IChwLCBuKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmVwZWF0QicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ3JlcGVhdEInLCBuLCBvcmROdW1Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleFxuICAgICAgICA/IHByZXMuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKGNvbnRleHQsIHByZXMuZXJyb3JzKVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShjb250ZXh0LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYSBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgYW5cbiAqIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2ZcbiAqIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiAqZmlyc3QqLCBzbyB0aGUgcmVzdWx0cyBvZiB0aGUgdHdvIHBhcnNlcnMgd2lsbCBub3Qgb3ZlcmxhcC5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgbm9uLWZhdGFsbHkgYmVmb3JlIGBlbmRgIHN1Y2NlZWRzLCB0aGlzIHBhcnNlciB3aWxsXG4gKiBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgdGhlIGZpcnN0IHRpbWUgYW5kIHdpbGxcbiAqIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyLiBJdHMgcmVzdWx0cyBhcmUgcHVzaGVkIGludG8gYW5cbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZW5kIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLiBJdHMgcmVzdWx0IGlzIGRpc2NhcmRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgZW5kYCBhbmQgdGhlbiBgcGAgemVyb1xuICogICAgIG9yIG1vcmUgdGltZXMgdW50aWwgYGVuZGAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55VGlsbEIgPSAocCwgZW5kKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGxCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGxCJywgZW5kLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbZW5kcmVwLCBbZW5kY3R4LCBlbmRyZXNdXSA9IGR1cChlbmQoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGVuZGN0eFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGVuZHJlcFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBPaykgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IHBjdHguaW5kZXhcbiAgICAgICAgPyBtZXJnZShwcmVzLmVycm9ycywgZW5kcmVzLmVycm9ycylcbiAgICAgICAgOiBuZXN0ZWQocGN0eCwgbWVyZ2UocHJlcy5lcnJvcnMsIGVuZHJlcy5lcnJvcnMpKVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYW55IG9mIHRoZSB5aWVsZGVkIHBhcnNlcnMgZmFpbCwgIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvXG4gKiB0aGUgcG9pbnQgd2hlcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbFxuICogbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbigpOip9IGdlbkZuIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqICAgICBhcmd1bWVudHMgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkXG4gKiAgICAgcGFyc2VyJ3MgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5XG4gKiAgICAgYFBhcnNlcmBzOyBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBibG9ja0IgPSBnZW5GbiA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEdlbkZ1bmN0aW9uKCdibG9ja0InLCBnZW5GbilcblxuICBjb25zdCBnZW4gPSBnZW5GbigpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBbXVxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSlcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Jsb2NrQicsIHZhbHVlLCB2ID0+IGBleHBlY3RlZCAke1xuICAgICAgb3JkaW5hbChpICsgMSlcbiAgICB9IHlpZWxkIHRvIGJlIHRvIGEgcGFyc2VyOyBmb3VuZCAke3N0cmluZ2lmeSh2KX1gKVxuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gdmFsdWUoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShjb250ZXh0LCBlcnJvcnMpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChjb250ZXh0LCBlcnJvcnMpXG4gICAgICByZXR1cm4gZmFpbFJlcGx5KGNvbnRleHQsIGVyciwgaW5kZXgpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXMgdGhvc2VcbiAqIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mIHBhcnNlcnMgdG9cbiAqIGV4ZWN1dGUuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoaXMgcGFyc2VyJ3NcbiAqIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYWxsIG9mIHRoZSBlYXJsaWVyXG4gKiBwYXJzZXJzIHN1Y2NlZWRlZCwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIHRoZVxuICogdmVyeSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGUgZnVuY3Rpb25cbiAqICAgICBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGwgb3RoZXJcbiAqICAgICBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBleGVjdXRlIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgcGlwZUIgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBmbiA9IHBzLnBvcCgpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdwaXBlQicsIHBzKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdwaXBlQicsIGZuLCBvcmRGbkZvcm1hdHRlcihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSxcbiAgICApXG5cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KGNvbnRleHQsIGVycm9ycylcbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChjb250ZXh0LCBlcnJvcnMpXG4gICAgICAgIHJldHVybiBmYWlsUmVwbHkoY29udGV4dCwgZXJyLCBpbmRleClcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgaXRzIHByZSwgY29udGVudCwgYW5kIHBvc3QgcGFyc2VycyBpbiBvcmRlclxuICogYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKlxuICogSWYgYW55IHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gd2hlcmVcbiAqIGBwcmVgIHdhcyBleGVjdXRlZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZSBhbmQgd2hvc2UgcmVzdWx0XG4gKiAgICAgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYHByZWAsIGBwYCwgYW5kIGBwb3N0YCBpblxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuQiA9IChwcmUsIHBvc3QsIHApID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHByZSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBwb3N0LCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHAsIG9yZFBhckZvcm1hdHRlcignM3JkJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcmVwLCBbcHJlY3R4LCBwcmVyZXNdXSA9IGR1cChwcmUoY3R4KSlcbiAgaWYgKHByZXJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcmVwXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChwcmVjdHgpXG4gIGxldCBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UocHJlcmVzLmVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZXJyb3JzKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcGN0eC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChwY3R4LCBlcnJvcnMpXG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnIsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgW3Bvc3RjdHgsIHBvc3RyZXNdID0gcG9zdChwY3R4KVxuICBpZiAocG9zdHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsUmVwbHkocG9zdGN0eCwgbWVyZ2UoZXJyb3JzLCBwb3N0cmVzLmVycm9ycykpXG4gIH1cbiAgaWYgKHBvc3RyZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgZXJyb3JzID0gbWVyZ2UoZXJyb3JzLCBwb3N0cmVzLmVycm9ycylcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcG9zdGN0eC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChwb3N0Y3R4LCBlcnJvcnMpXG4gICAgcmV0dXJuIGZhaWxSZXBseShwb3N0Y3R4LCBlcnIsIGluZGV4KVxuICB9XG4gIHJldHVybiBva1JlcGx5KHBvc3RjdHgsIHByZXMudmFsdWUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydEFycmF5LFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbiAgZm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkLCBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCwgcmVwbHlGbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCBhbmQgcmV0dXJuIGBwYCdzIHJlc3VsdHMgam9pbmVkXG4gKiB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyByZXF1aXJlcyB0aGF0IGBwYCByZXR1cm5zIGFuXG4gKiBhcnJheTsgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgaXQgZG9lcyBub3QuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXR1cm4gYW4gYXJyYXkgb2ZcbiAqICAgICBzdHJpbmdzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIHJldHVybnMgYSBzaW5nbGVcbiAqICAgICBzdHJpbmcgbWFkZSBmcm9tIGpvaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBhcnJheSBvZiBzdHJpbmdzXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgLlxuICovXG5leHBvcnQgY29uc3Qgam9pbiA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2pvaW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnam9pbicsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdqb2luJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2LmpvaW4oJycpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIGFuZCByZXR1cm4gaXRzIHJlc3VsdHMgbWludXMgYW55XG4gKiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcmVzdWx0cy4gVGhpcyByZXF1aXJlcyB0aGF0IGBwYCByZXR1cm5zIGFuXG4gKiBhcnJheTsgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgaXQgZG9lcyBub3QuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXR1cm4gYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgcmV0dXJucyBpdHMgcmVzdWx0c1xuICogICAgIG1pbnVzIGFueSBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjb21wYWN0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NvbXBhY3QnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnY29tcGFjdCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdi5maWx0ZXIoeCA9PiB4ICE9IG51bGwpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBidXQsIG9uIHN1Y2Nlc3MsIHJldHVybnMgYHhgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS4gSXRzIHJlc3VsdCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0aGF0IHRoZSBuZXcgcGFyc2VyIHdpbGwgcmVzdWx0IGluIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGBwYCBidXQgcmV0dXJuIGB4YCBvblxuICogICAgIHN1Y2Nlc3MuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWx1ZSA9IChwLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3ZhbHVlJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3ZhbHVlJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgeClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBgbmB0aCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgMC1iYXNlZCBpbmRleCBvZiB0aGUgcmVzdWx0IGVsZW1lbnQgdG8gcmV0dXJuLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBgbmB0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBudGggPSAocCwgbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdudGgnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ250aCcsIG4sIGFyZ051bUZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdudGgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheShcbiAgICAnbnRoJywgdiwgZm9ybWF0dGVyKCdmaXJzdCBhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSxcbiAgKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbbl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpcnN0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZpcnN0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZpcnN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2WzBdKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIHNlY29uZCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHNlY29uZCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmQgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZWNvbmQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2Vjb25kJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ3NlY29uZCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdlsxXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSB0aGlyZCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHRoaXJkID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndGhpcmQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndGhpcmQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgndGhpcmQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvdXJ0aCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvdXJ0aCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdmb3VydGgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZm91cnRoJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2WzNdKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlmdGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgZmlmdGggPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmaWZ0aCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdmaWZ0aCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmaWZ0aCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdls0XSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIHBhc3NlcyBpdHMgcmVzdWx0IHRvXG4gKiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoZVxuICogcmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgdGhlIGBmbWFwYCBvcGVyYXRpb24gZnJvbSBIYXNrZWxsJ3MgYEZ1bmN0b3JgIGNsYXNzLiBJdCdzXG4gKiB1c2VkIGFzIGEgYmFzaXMgZm9yIGxpZnRpbmcgZnVuY3Rpb25zIGludG8gYSBQYXJzZXIgY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKToqfSBmbiBBIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYCBhbmQgd2hvc2UgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgICBjcmVhdGVkIHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHN1Y2NlZWQgd2l0aCB0aGF0XG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXAgPSAocCwgZm4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFwJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ21hcCcsIGZuLCBhcmdGbkZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdtYXAnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuICByZXR1cm4gb2tSZXBseShwY3R4LCBmbihwcmVzLnZhbHVlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcWAgdG8gdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIGA8Kj5gIGZyb20gSGFza2VsbCdzIGBBcHBsaWNhdGl2ZWBcbiAqIGNsYXNzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAqICAgICBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBBIHBhcnNlciB3aGljaCBwcm92aWRlcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHkgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHknLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXBwbHknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgZm4gPSBxcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAnYXBwbHknLCBmbiwgZm9ybWF0dGVyKCdzZWNvbmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgZnVuY3Rpb24nKSxcbiAgKVxuICByZXR1cm4gb2tSZXBseShxY3R4LCBmbihwcmVzLnZhbHVlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHJlc3VsdCBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkIHBhcnNlclxuICogdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGUgcGFyc2VyXG4gKiByZXR1cm5zIHRoYXQgcmVzdWx0LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIHRoZSBmdW5jdGlvbi1wcm92aWRlZCBwYXJzZXIgZmFpbHNcbiAqIGFmdGVyIHRoZSBvdGhlciBwYXJzZXIgY29uc3VtZXMgaW5wdXQsIGV2ZW4gaWYgdGhhdCBmYWlsdXJlIGlzXG4gKiBub24tZmF0YWwuXG4gKlxuICogVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGBNb25hZGAgY2xhc3MncyBgYmluZGAgb3BlcmF0aW9uXG4gKiAoZ2VuZXJhbGx5IHdyaXR0ZW4gYD4+PWAgaW4gSGFza2VsbCkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZSBhcyBhIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgdGhlIGlucHV0IHRvLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW4gPSAocCwgZm4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY2hhaW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW4nLCBmbiwgYXJnRm5Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnY2hhaW4nLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHEgPSBmbihwcmVzLnZhbHVlKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICdjaGFpbicsIHEsIGZvcm1hdHRlcignc2Vjb25kIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICApXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxuICB9XG4gIHJldHVybiBxcmVwXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ0dlbkZvcm1hdHRlcixcbiAgYXJnTnVtRm9ybWF0dGVyLFxuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydEdlbkZ1bmN0aW9uLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBmYXRhbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWQsIG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCByYW5nZSwgcmVwbHlGbiwgc3RyaW5naWZ5LCB3b3JkaW5hbCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG5jb25zdCB7IE9rLCBGYWlsLCBGYXRhbCB9ID0gU3RhdHVzXG5cbmZ1bmN0aW9uIGxvb3BNZXNzYWdlKG5hbWUpIHtcbiAgcmV0dXJuIGBbJHtuYW1lfV06IGluZmluaXRlIGxvb3AgZGV0ZWN0ZWQ7IGBcbiAgICArICduZWl0aGVyIGNvbnRlbnQgbm9yIHNlcGFyYXRvciBwYXJzZXIgY29uc3VtZWQgaW5wdXQnXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lIGZhaWxzLiBJbiB0aGVcbiAqIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzIHRoZVxuICogcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGFueSBpbnB1dCB3YXMgY29uc3VtZWQgYmVmb3JlIGFueSBvZlxuICogaXRzIHBhcnNlcnMgZmFpbCwgZXZlbiBpZiB0aGF0IGZhaWx1cmUgaXRzZWxmIHdhcyBub24tZmF0YWwuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ8c3RyaW5nfSBhcmdzIFRoZSBwYXJzZXJzIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbGFzdFxuICogICAgIGFyZ3VtZW50ICptYXkqIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgdGhlIGV4cGVjdGVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZSBpbiBwbGFjZSBvZiB0aGUgY29sbGVjdGVkIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzXG4gKiAgICAgb2YgdGhlIGNvbnN0aXR1ZW50IHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdFxuICogICAgIGEgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdzZXEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpKSlcblxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgICBsZXQgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogW11cbiAgICBsZXQgY29udGV4dCA9IGN0eFxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgY29udGV4dC5pbmRleCAhPT0gaW5kZXgpXG4gICAgICAgIHJldHVybiBmbihjb250ZXh0LCBlcnJvcnMpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgcmV0dXJuc1xuICogdGhlIHJlc3VsdCBvZiBgcGAuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBhcHBsaWNhdGl2ZSBgPCpgXG4gKiBpbiBIYXNrZWxsLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbGVmdCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGVmdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIGNvbnN0IGZuID0gcHJlcy5zdGF0dXMgPT09IEZhdGFsID8gZmF0YWxSZXBseSA6IGZhaWxSZXBseVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocXJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHFjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihxY3R4LCBoYXNNID8gbWVycm9yIDogbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShxY3R4LCBwcmVzLnZhbHVlKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluIG9yZGVyIGFuZCByZXR1cm5zXG4gKiB0aGUgcmVzdWx0IG9mIGBxYC4gVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGFwcGxpY2F0aXZlIGAqPmBcbiAqIGluIEhhc2tlbGwuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3JpZ2h0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxY3R4LnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxuICB9XG4gIHJldHVybiBxcmVwXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGEgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkIHdpbGwgYmVcbiAqIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuIGJlXG4gKiBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIElmIGFueSB5aWVsZGVkIHBhcnNlciBmYWlscyBhZnRlciBhbm90aGVyIHlpZWxkZWQgcGFyc2VyIGhhcyBjb25zdW1lZFxuICogaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIGFuIGVycm9yIHRvIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZyBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vIGFyZ3VtZW50c1xuICogICAgIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZCBwYXJzZXInc1xuICogICAgIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seSBgUGFyc2VyYHM7XG4gKiAgICAgb3RoZXJ3aXNlIGFuIGVycm9yIGlzIHRocm93bi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcbiAqICAgICBleGVjdXRlcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIGluIHRoZSByZXR1cm5cbiAqICAgICB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgYmxvY2sgPSAoZywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0R2VuRnVuY3Rpb24oJ2Jsb2NrJywgZywgYXJnR2VuRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2Jsb2NrJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGdlbiA9IGcoKVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogW11cbiAgbGV0IG5leHRWYWx1ZVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUpXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdibG9jaycsIHZhbHVlLCB2ID0+IGBleHBlY3RlZCAke1xuICAgICAgd29yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHZhbHVlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAoIWhhc00pIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgICAgcmV0dXJuIGZuKHBjdHgsIGVycm9ycylcbiAgICB9XG4gICAgbmV4dFZhbHVlID0gcHJlcy52YWx1ZVxuICAgIGkrK1xuICB9XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW50byBhbiBhcnJheSB0aGF0IGlzIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBmYWlsIG5vbi1mYXRhbGx5OyBob3dldmVyLCBpZiBgcGAgZXZlciBmYWlsc1xuICogZmF0YWxseSwgdGhlbiBzbyB3aWxsIHRoaXMgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ21hbnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIHRoZSByZXN1bHRzIGludG8gYW4gYXJyYXkgdGhhdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW4gZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdFxuICogb25jZS4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBgcGAgZXZlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkIG9uZSBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbWFueTEgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55MScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdtYW55MScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGRpc2NhcmRzIGFueSBzdWNjZXNzZnVsIHJlc3VsdCB3aGlsZVxuICogc3RpbGwgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRvIGJlIGRpc2NhcmRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBjb25zdW1lIGlucHV0IGFzIGBwYCBkb2VzIG9uXG4gKiAgICAgc3VjY2VzcywgYnV0IHdpbGwgcHJvZHVjZSBubyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdza2lwJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzIHVudGlsIGl0IGZhaWxzLFxuICogZGlzY2FyZGluZyB0aGUgcmVzdWx0cy5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW5ub3QgZmFpbCBub24tZmF0YWxseTsgaG93ZXZlciwgaWYgYHBgIGV2ZXIgZmFpbHNcbiAqIGZhdGFsbHksIHRoZW4gc28gd2lsbCB0aGlzIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwTWFueSA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NraXBNYW55JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NraXBNYW55JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBkaXNjYXJkaW5nIHRoZSByZXN1bHRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbiBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGBwYCBldmVyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwTWFueTEgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdza2lwTWFueTEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2tpcE1hbnkxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2guIFRoZSByZXN1bHRzIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmRcbiAqIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgbm9uLWZhdGFsbHksIGFzIG1hdGNoaW5nIGBwYCB6ZXJvIHRpbWVzIGlzXG4gKiB2YWxpZC4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXAnLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2VwJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHNjdHhcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXAnKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIG9uZSBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2guIFRoZSByZXN1bHRzIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmRcbiAqIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgaWYgYHBgIGRvZXNuJ3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJdFxuICogd2lsbCBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcDEgPSAocCwgcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXAxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXAxJywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NlcDEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY29udGV4dClcbiAgICBjb250ZXh0ID0gc2N0eFxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGhhc00gPyBtZXJyb3IgOiBzcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcDEnKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzYCBpblxuICogYmV0d2VlbiBlYWNoIGFuZCBvcHRpb25hbGx5IGFmdGVyIHRoZSBsYXN0IG1hdGNoIG9mIGBwYC4gVGhlIHJlc3VsdHNcbiAqIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmQgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBub24tZmF0YWxseSwgYXMgbWF0Y2hpbmcgYHBgIHplcm8gdGltZXMgaXNcbiAqIHZhbGlkLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGVpdGhlciBgcGAgb3IgYHNgIGV2ZXIgZmFpbCBmYXRhbGx5LlxuICpcbiAqIElmIGBwYCBhbmQgYHNgIGJvdGggc3VjY2VlZCB3aXRob3V0IGNvbnN1bWluZyBjb250ZW50LCB0aGF0IHdvdWxkXG4gKiBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmQgPSAocCwgcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbmQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZCcsIHMsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbmQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCBbXSlcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY29udGV4dClcbiAgICBjb250ZXh0ID0gc2N0eFxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGhhc00gPyBtZXJyb3IgOiBzcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ2VuZCcpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyh7IC4uLmNvbnRleHQsIGluZGV4IH0pXG4gIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoc2N0eCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzYCBpblxuICogYmV0d2VlbiBlYWNoIGFuZCBvcHRpb25hbGx5IGFmdGVyIHRoZSBsYXN0IG1hdGNoIG9mIGBwYC4gVGhlIHJlc3VsdHNcbiAqIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmQgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIEl0XG4gKiB3aWxsIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkxID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwRW5kQnkxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeTEnLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2VwRW5kQnkxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHNjdHhcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBFbmRCeTEnKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoeyAuLi5jb250ZXh0LCBpbmRleCB9KVxuICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgaGFzTSA/IG1lcnJvciA6IHNyZXMuZXJyb3JzKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHNjdHgsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcywgY29sbGVjdGluZyB0aGVcbiAqIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LlxuICpcbiAqIElmIGBwYCBmYWlscyBhZnRlciBhbnkgaW5wdXQgaGFzIGJlZW4gY29uc3VtZWQgYnkgYSBwcmlvciBleGVjdXRpb25cbiAqIG9mIGBwYCwgdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gZXhlY3V0ZSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gZXhlY3V0ZSB0aGUgcGFyc2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKHAsIG4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmVwZWF0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdyZXBlYXQnLCBuLCBhcmdOdW1Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmVwZWF0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGl0cyBzdGFydCwgY29udGVudCwgYW5kIGVuZCBwYXJzZXJzIGluIG9yZGVyXG4gKiBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBJZiBlaXRoZXIgYHBgIG9yIGBlYCBmYWlscyBhZnRlciBhIHByaW9yIHBhcnNlciBoYXMgY29uc3VtZWRcbiAqIGlucHV0LCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGxhc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGUgbmV3IHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gdGhlIGNvcnJlY3RcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgYmV0d2VlbiA9IChzLCBlLCBwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBlLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmV0d2VlbicsIG0sIGFyZ1N0ckZvcm1hdHRlcig0LCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY3R4KVxuICBpZiAoc3Jlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHNyZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4oc2N0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogc3Jlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKHNjdHgpXG4gIGNvbnN0IGVycm9ycyA9IGhhc01cbiAgICA/IGV4cGVjdGVkKG0pXG4gICAgOiBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2Uoc3Jlcy5lcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihwY3R4LCBlcnJvcnMpXG4gIH1cblxuICBjb25zdCBbZWN0eCwgZXJlc10gPSBlKHBjdHgpXG4gIGlmIChlcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4oZXJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IGVjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihlY3R4LCBoYXNNID8gZXJyb3JzIDogbWVyZ2UoZXJyb3JzLCBlcmVzLmVycm9ycykpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoZWN0eCwgcHJlcy52YWx1ZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYSBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgYW5cbiAqIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2ZcbiAqIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiAqZmlyc3QqLCBzbyB0aGUgcmVzdWx0cyBvZiB0aGUgdHdvIHBhcnNlcnMgd2lsbCBub3Qgb3ZlcmxhcC5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYmVmb3JlIGBlYCBzdWNjZWVkcyBidXQgYWZ0ZXIgcHJpb3IgZXhlY3V0aW9ucyBvZiBgcGBcbiAqIGhhdmUgY29uc3VtZWQgaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqICAgICB1bnRpbCBgZWAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnRpbCA9IChwLCBlLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3VudGlsJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCd1bnRpbCcsIGUsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd1bnRpbCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW2VjdHgsIGVyZXNdID0gZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBlY3R4XG4gICAgaWYgKGVyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkoZWN0eCwgaGFzTSA/IG1lcnJvciA6IGVyZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogbWVyZ2UocHJlcy5lcnJvcnMsIGVyZXMuZXJyb3JzKSlcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UgYW5kIHBhc3NlcyB0aG9zZVxuICogcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2YgcGFyc2VycyB0b1xuICogZXhlY3V0ZS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhpcyBwYXJzZXInc1xuICogcmVzdWx0LlxuICpcbiAqIE5vdGUgdGhhdCwgdW5saWtlIGBzZXF1ZW5jZWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCpcbiAqIGRpc2NhcmRlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gKiB0byBgZm5gIG5vIG1hdHRlciB0aGUgcmVzdWx0cyBmcm9tIHRoZSBwYXJzZXJzLlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBhZnRlciBwcmlvciBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQsXG4gKiB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBpcyBlcXVpdmFsZW50IHRvIHRoZSBhcHBsaWNhdGl2ZSBsaWZ0IG9wZXJhdGlvbiwgbGlmdGluZ1xuICogbXVsdGktcGFyYW1ldGVyIGZ1bmN0aW9ucyBpbnRvIHRoZSBjb250ZXh0IG9mIGEgcGFyc2VyLiBJdCBhY3RzIGxpa2VcbiAqIGBsaWZ0QTJgIGlmIHR3byBwYXJzZXJzIGFyZSBwYXNzZWQgaW4sIGBsaWZ0QTNgIGlmIHRocmVlIGFyZSBwYXNzZWRcbiAqIGluLCBldGMuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOip8c3RyaW5nKX0gYXJncyBBbiBhcnJheSBvZiBwYXJzZXJzXG4gKiAgICAgdG8gYmUgZXhlY3V0ZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIsIGZvbGxvd2VkIGJ5IGEgZnVuY3Rpb25cbiAqICAgICB3aGljaCB3aWxsIHJlY2VpdmUgYXMgcGFyYW1ldGVycyB0aGUgcmVzdWx0cyBvZiBlYWNoIHBhcnNlci4gSXRzXG4gKiAgICAgcmV0dXJuIHZhbHVlIHdpbGwgYmVjb21lIHRoZSByZXN1bHQgb2YgdGhpcyBwYXJzZXIuIEEgc2luZ2xlXG4gKiAgICAgZnVuY3Rpb24gbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGNvbWUgYWZ0ZXIgdGhlIHBhcnNlcnMuXG4gKiAgICAgT3B0aW9uYWxseSwgYSBzdHJpbmcgbWF5IGJlIHRoZSBsYXN0IGFyZ3VtZW50OyBpZiBpdCBpcyBwcmVzZW50LFxuICogICAgIGl0IHJlcGxhY2VzIHRoZSBkZWZhdWx0IGVycm9yIG1lc3NhZ2UgaW4gdGhlIGV2ZW50IHRoYXQgdGhlXG4gKiAgICAgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGV4ZWN1dGUgaXRzIHBhcnNlcnMgaW4gb3JkZXIsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG4gIGNvbnN0IGZuID0gcHMucG9wKClcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+IGFzc2VydFBhcnNlcihcbiAgICAgICdwaXBlJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCB0cnVlKSxcbiAgICApKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbigncGlwZScsIGZuLCBhcmdGbkZvcm1hdHRlcihwcy5sZW5ndGggKyAxLCB0cnVlKSlcblxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgICAgIHJldHVybiBmbihwY3R4LCBlcnJvcnMpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCBmbiguLi52YWx1ZXMpKVxuICB9KVxufVxuXG4vKipcbiAqIFByaXZhdGUgZm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgYXNzZXJ0aW9uIG1lc3NhZ2VzIGFib3V0IG9wIHBhcnNlcnNcbiAqIG5vdCByZXR1cm5pbmcgZnVuY3Rpb25zXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG9yZCBUaGUgbnVtYmVyIG9mIHRoZSBvcCBwYXJzZXIgdGhhdCBmYWlscyB0byBwcm9kdWNlXG4gKiAgICAgYSBmdW5jdGlvblxuICogQHJldHVybnMge3N0cmluZ30gQW4gYXBwcm9wcmlhdGUgYXNzZXJ0aW9uIGZhaWx1cmUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gb3BGb3JtYXR0ZXIob3JkKSB7XG4gIHJldHVybiB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHtvcmR9IG9wIHBhcnNlciB0byByZXR1cm4gYSBmdW5jdGlvbjsgZm91bmQgJHtcbiAgICBzdHJpbmdpZnkodmFsdWUpXG4gIH1gXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9gLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb2AgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gbyBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2NMID0gKHAsIG8sIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2NMJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXNzb2NMJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvY3R4LCBvcmVzXSA9IG8oY29udGV4dClcbiAgICBjb250ZXh0ID0gb2N0eFxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KG9jdHgsIGhhc00gPyBtZXJyb3IgOiBvcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2NMJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGgpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgLCBlYWNoIHNlcGFyYXRlZFxuICogYnkgYG9gLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb2AgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBPdGhlcndpc2UgaXQgY2FuIG9ubHkgZmFpbCBmYXRhbGx5IGlmIGBwYCBvciBgb2AgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2MxTCA9IChwLCBvLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMUwnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMUwnLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXNzb2MxTCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgaGFzTSA/IG1lcnJvciA6IG9yZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvYzFMJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGgpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb2AsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2NSID0gKHAsIG8sIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2NSJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY1InLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXNzb2NSJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvY3R4LCBvcmVzXSA9IG8oY29udGV4dClcbiAgICBjb250ZXh0ID0gb2N0eFxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KG9jdHgsIGhhc00gPyBtZXJyb3IgOiBvcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2NSJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb2AgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBPdGhlcndpc2UgaXQgY2FuIG9ubHkgZmFpbCBmYXRhbGx5IGlmIGBwYCBvciBgb2AgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc29jMVIgPSAocCwgbywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFSJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFSJywgbywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2Fzc29jMVInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvY3R4LCBvcmVzXSA9IG8oY29udGV4dClcbiAgICBjb250ZXh0ID0gb2N0eFxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KG9jdHgsIGhhc00gPyBtZXJyb3IgOiBvcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2MxUicsIG9yZXMudmFsdWUsIG9wRm9ybWF0dGVyKHdvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gob3Jlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZvcm1hdEVycm9ycyB9IGZyb20gJy4vZXJyb3InXG5pbXBvcnQgeyBkdXAsIHN0cmluZ1RvVmlldywgdHJhY2sgfSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Vycm9yLmpzJykuRXJyb3JMaXN0fSBFcnJvckxpc3QgKi9cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIG9uZSBvZiB0aGUgdHlwZXNcbiAqIG9mIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MTZBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50MTZBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXlcbn1cblxuLyoqXG4gKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBwYXJzaW5nIG9wZXJhdGlvbi5cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0dXMgPSB7XG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSB3YXMgc3VjY2Vzc2Z1bC4gKi9cbiAgT2s6ICdvaycsXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuICovXG4gIEZhaWw6ICdmYWlsJyxcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCBhbmQgY29uc3VtZWQgaW5wdXQuICovXG4gIEZhdGFsOiAnZmF0YWwnLFxufVxuXG4vKipcbiAqIFRoZSBjb250ZXh0IG9mIGEgcGFyc2VyLiBUaGlzIG9iamVjdCBjb250YWlucyB0aGUgaW5wdXQgdGV4dCBhbmQgYVxuICogcG9pbnRlciB0byB0aGUgY3VycmVudCBsb2NhdGlvbiB3aXRoaW4gaXQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29udGV4dFxuICogQHByb3BlcnR5IHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IHdoZXJlIHRoZVxuICogICAgIG5leHQgcGFyc2luZyBvcGVyYXRpb24gd2lsbCB0YWtlIHBsYWNlIChvciB3aGVyZSB0aGUgbGFzdCBvbmVcbiAqICAgICByZXN1bHRlZCBpbiBhbiBlcnJvcikuXG4gKi9cblxuLyoqXG4gKiBBIHJlc3VsdCBmcm9tIGEgcGFyc2VyIGFwcGxpY2F0aW9uLCBzdWNjZXNzZnVsIG9yIG5vdC4gVGhpcyBpc1xuICogZXNzZW50aWFsbHkgYSB1bmlvbiBvZiBzdWNjZXNzZnVsIHZhbHVlIGFuZCBmYWlsdXJlIGVycm9yLCB3aXRoIHRoZVxuICogYHN0YXR1c2AgcHJvcGVydHkgdG8gZGV0ZXJtaW5lIHdoaWNoIGlzIHZhbGlkLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJlc3VsdFxuICogQHByb3BlcnR5IHtTdGF0dXN9IHN0YXR1cyBUaGUgc3RhdHVzIG9mIHRoZSBsYXN0IGF0dGVtcHRlZCBwYXJzZSBvZlxuICogICAgIHRoZSBpbnB1dCB0ZXh0LlxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgb2YgYSBzdWNjZXNzZnVsIHBhcnNlLlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWRcbiAqICAgICBkdXJpbmcgYW4gdW5zdWNjZXNzZnVsIHBhcnNlLlxuICovXG5cbi8qKlxuICogVGhlIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIGluY2x1ZGluZyB0aGVcbiAqIGNvbnRleHQgYW5kIHRoZSByZXN1bHQuXG4gKiBAdHlwZWRlZiB7W0NvbnRleHQsIFJlc3VsdF19IFJlcGx5XG4gKi9cblxuLyoqXG4gKiBBIHR5cGVkIGFycmF5IG9mIGFueSBidWlsdC1pbiBraW5kLlxuICpcbiAqIEB0eXBlZGVmXG4gKiAgIHsoVWludDhBcnJheXxVaW50OENsYW1wZWRBcnJheXxVaW50MTZBcnJheXxVaW50MzJBcnJheXxJbnQ4QXJyYXl8XG4gKiAgIEludDE2QXJyYXl8SW50MzJBcnJheXxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5KX0gVHlwZWRBcnJheVxuICovXG5cbi8qKlxuICogSW5wdXQgdGV4dCB0byBiZSBwYXJzZWQuXG4gKlxuICogQHR5cGVkZWYgeyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IElucHV0XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSBwYXJzZXIgY29udGV4dC4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhXG4gKiBuZXcgY29udGV4dCBpcyBvbmx5IGNyZWF0ZWQgYmVmb3JlIHBhcnNpbmcsIGluIHRoZSBgcGFyc2VgIGZ1bmN0aW9uLlxuICogQW55IGZ1cnRoZXIgY29udGV4dHMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgY29udGV4dCB1c2luZyB7QGxpbmsgb2t9LFxuICoge0BsaW5rIGVycm9yfSwgb3Ige0BsaW5rIGZhdGFsfS5cbiAqXG4gKiBAcGFyYW0ge0lucHV0fSBpbnB1dCBUaGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtDb250ZXh0fSBBbiBlbXB0eSBwYXJzZXIgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoaW5wdXQpIHtcbiAgY29uc3QgbWVzc2FnZSA9ICdQYXJzZXIgaW5wdXQgbXVzdCBiZSBhIHN0cmluZywgYSB0eXBlZCBhcnJheSwgYW4gYXJyYXkgJ1xuICAgICsgYGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXc7IHBhcnNlciBpbnB1dCB3YXMgJHt0eXBlb2YgaW5wdXR9YFxuXG4gIGNvbnN0IHZpZXcgPSAoaW5wdXQgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gc3RyaW5nVG9WaWV3KGlucHV0KVxuICAgIH1cbiAgICBpZiAoaXNUeXBlZEFycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyhpbnB1dC5idWZmZXIpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0KVxuICAgIH1cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9KShpbnB1dClcblxuICByZXR1cm4ge1xuICAgIHZpZXcsXG4gICAgaW5kZXg6IDAsXG4gIH1cbn1cblxuLyoqXG4gKiBBIHBhcnNpbmcgZnVuY3Rpb24uIFRoaXMgaXMgc2ltcGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhcnNlclxuICogY29udGV4dCwgdXBkYXRlcyBpdCBzb21laG93IChnZW5lcmFsbHkgYnkgcmVhZGluZyBhIGNoYXJhY3RlciksIGFuZFxuICogcmV0dXJucyB0aGUgdXBkYXRlZCBjb250ZXh0LlxuICpcbiAqIEBjYWxsYmFjayBQYXJzZXJcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGJlZm9yZSB0aGUgcGFyc2VyIGlzIHJ1bi5cbiAqIEByZXR1cm5zIHtSZXBseX0gVGhlIHVwZGF0ZWQgY29udGV4dCBhZnRlciB0aGUgcGFyc2VyIGlzIGFwcGxpZWQgYW5kXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGF0IHBhcnNlciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYFBhcnNlcmAuIFRoaXMgZmFjdG9yeSBzaW1wbHkgdGFrZXMgYSBwYXJzZXIgZnVuY3Rpb25cbiAqIGFuZCByZXR1cm5zIHRoZSBzYW1lIHBhcnNlciBmdW5jdGlvbjsgdGhlIHB1cnBvc2Ugb2YgdGhlIGZhY3RvcnkgaXNcbiAqIHRvIHRyYWNrIHBhcnNlcnMgdGhhdCBpdCBoYXMgY3JlYXRlZC5cbiAqXG4gKiBJZiBhc3NlcnRpb25zIGFyZSBlbmFibGVkLCB0aGlzIHdpbGwgbWVhbiB0aGF0IGFueSBwYXJzZXIgY29tYmluYXRvclxuICogd2lsbCBhc3NlcnQgdGhhdCB0aGUgcGFyc2VyIHRoYXQgaXMgcGFzc2VkIHRvIGl0IHdhcyBjcmVhdGVkIGJ5IHRoaXNcbiAqIGZhY3RvcnkgZnVuY3Rpb24uIEFueSBvdGhlciB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbiB0byBiZSB0aHJvd24sXG4gKiBldmVuIGlmIGl0IGFjY2VwdHMgdGhlIHJpZ2h0IGtpbmQgb2YgYXJndW1lbnQgYW5kIHJldHVybnMgdGhlIHByb3BlclxuICogcmV0dXJuIHZhbHVlLiBJZiBhc3NlcnRpb25zIGFyZSBub3QgZW5hYmxlZCwgdGhpcyBjaGVjayB3aWxsIG5vdCBiZVxuICogZG9uZS5cbiAqXG4gKiBFdmVyeSBwYXJzZXIgaW4gdGhpcyBsaWJyYXJ5IGlzIGNyZWF0ZWQgd2l0aCBgbWFrZVBhcnNlcmAsIHNvIGFueSBvZlxuICogdGhvc2Ugb3IgYW55IHBhcnNlciBjb21wb3NlZCBmcm9tIHRob3NlIHdpbGwgd29yayBhdXRvbWF0aWNhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBmbiBBIHBhcnNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IFRoZSBzYW1lIHBhcnNlciBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlciA9IHRyYWNrKGZuID0+IGZuKVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IHJlcGx5IGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIHN1Y2NlZWRlZC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1udWxsXSBUaGUgbmV3IHJlc3VsdCBvZiB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBwYXJzZXJcbiAqICAgICB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgc3VjY2VlZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2tSZXBseShjdHgsIHZhbHVlID0gbnVsbCwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5PaywgdmFsdWUgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyByZXBseSBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmdcbiAqIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzPVtdXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udGV4dFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWxSZXBseShjdHgsIGVycm9ycyA9IFtdLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhaWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IHJlcGx5IGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aGlsZSBjb25zdW1pbmdcbiAqIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250ZXh0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmF0YWxSZXBseShjdHgsIGVycm9ycyA9IFtdLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhdGFsLCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBUaGlzIGlucHV0IGNhbiBiZSBhIHN0cmluZywgYSB0eXBlZCBhcnJheSxcbiAqIGFuIGFycmF5IGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXcuIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGZpbmFsIHBhcnNlclxuICogY29udGV4dCByZXR1cm5lZCBieSB0aGUgcGFyc2VyIGFmdGVyIGJlaW5nIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0ge0lucHV0fSBpbnB1dCBUaGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtSZXBseX0gVGhlIGZpbmFsIGNvbnRleHQgYWZ0ZXIgYWxsIHBhcnNlcnMgaGF2ZSBiZWVuXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGUgZmluYWwgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UocGFyc2VyLCBpbnB1dCkge1xuICByZXR1cm4gcGFyc2VyKGNvbnRleHQoaW5wdXQpKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0YXR1cyBvZiB0aGUgZ2l2ZW4gcmVwbHkuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7U3RhdHVzfSBUaGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXR1cyhyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGludm9jYXRpb24gb2YgYHBhcnNlYCB3YXMgc3VjY2Vzc2Z1bC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHBhcnNlciBzdWNjZWVkZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGRpZCBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZWVkZWQocmVwbHkpIHtcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1cyA9PT0gU3RhdHVzLk9rXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyXG4gKiBkaWQgbm90IHN1Y2NlZWQsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogTm90ZSB0aGF0IGBudWxsYCBpcyBhIHBvc3NpYmxlIHJlc3VsdCBmcm9tIHNvbWUgaW5kaXZpZHVhbCBwYXJzZXJzXG4gKiAoYHNraXBgLCBgbG9va0FoZWFkYCwgZXRjLikuIFRoZSBwcm9wZXIgd2F5IHRvIHRlbGwgaWYgYSBwYXJzZXJcbiAqIHN1Y2NlZWRlZCBpbiB0aGUgZmlyc3QgcGxhY2UgaXMgdG8gdXNlIGBzdWNjZWVkZWRgLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdmFsdWUgZnJvbSB0aGUgcGFyc2UgaWYgaXQgd2FzIHN1Y2Nlc3NmdWwsXG4gKiAgICAgb3IgYG51bGxgIGlmIGl0IHdhcyBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzKHJlcGx5KSB7XG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gcmVwbHlbMV0udmFsdWUgOiBudWxsXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBzdHJpbmcgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYW5cbiAqIHVuc3VjY2Vzc2Z1bCBpbnZvY2F0aW9uIG9mIGBwYXJzZWAuIElmIHRoZSBwYXJzZXIgd2FzIGFjdHVhbGx5XG4gKiBzdWNjZXNzZnVsLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nIGRldGFpbGluZyB0aGUgY2lyY3Vtc3RhbmNlcyBvZlxuICogICAgIHRoZSBwYXJzZXIgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmUocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyBudWxsIDogZm9ybWF0RXJyb3JzKHJlcGx5KVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFJldHVybnMgdGhlIHBhcnNlZCB2YWx1ZSBpZiB0aGUgcGFyc2VyXG4gKiBzdWNjZWVkcywgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBwYXJzZXIncyBlcnJvciBtZXNzYWdlIGlmXG4gKiBpdCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0ge0lucHV0fSBpbnB1dCBUaGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IGZyb20gdGhlIHBhcnNlciBhcHBsaWNhdGlvbiwgaWYgdGhlIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLlxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXJzZXIgZmFpbHMuIFRoZSBlcnJvciBtZXNzYWdlIHdpbGwgYmUgYVxuICogICAgIGRldGFpbGVkIHJlY29yZCBvZiB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGFyc2VyLCBpbnB1dCkge1xuICBjb25zdCBbcmVwbHksIFtfLCByZXN1bHRdXSA9IGR1cChwYXJzZXIoY29udGV4dChpbnB1dCkpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSB7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihmb3JtYXRFcnJvcnMocmVwbHkpKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgY2hhckxlbmd0aCxcbiAgY29tbWFTZXBhcmF0ZSxcbiAgbmV4dENoYXJXaWR0aCxcbiAgdmlld1RvU3RyaW5nLFxufSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5Db250ZXh0fSBDb250ZXh0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuUmVzdWx0fSBSZXN1bHQgKi9cblxuY29uc3QgdGFiID0gL1xcdC9ndVxuY29uc3QgemVyb1dpZHRoID0gLyg/OlxccHtNbn18XFxwe0NmfSkvZ3VcblxuLyoqXG4gKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgdHlwZSBvZiBhbiBlcnJvci5cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFcnJvclR5cGUgPSB7XG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBleHBlY3RlZCByZXN1bHQuIFByb2R1Y2VkIGJ5IHRoZSB2YXN0XG4gICAqIG1ham9yaXR5IG9mIHBhcnNlcnMuXG4gICAqL1xuICBFeHBlY3RlZDogJ2V4cGVjdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgcmVzdWx0IHRoYXQgd2FzIG5vdCBleHBlY3RlZC4gVHlwaWNhbGx5XG4gICAqIHByb2R1Y2VkIGJ5IHBhcnNlcnMgc3VjaCBhcyBgdW5leHBlY3RlZGAgYW5kIGBub3RGb2xsb3dlZEJ5YC5cbiAgICovXG4gIFVuZXhwZWN0ZWQ6ICd1bmV4cGVjdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUeXBpY2FsbHkgcHJvZHVjZWRcbiAgICogYnkgcGFyc2VycyBzdWNoIGFzIGBmYWlsYCBhbmQgYGZhaWxGYXRhbGx5YC5cbiAgICovXG4gIEdlbmVyaWM6ICdnZW5lcmljJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGVycm9yIHdpdGhpbiBhbm90aGVyIGVycm9yLiBUaGlzIGlzXG4gICAqIGdlbmVyYWxseSB1c2VkIGZvciBhbiBlcnJvciB0aGF0IGNhdXNlZCBiYWNrdHJhY2tpbmcsIHdoZXJlIHRoZVxuICAgKiBwYXJlbnQgZXJyb3IgaXMgcmVwb3J0ZWQgYWZ0ZXIgYmFja3RyYWNraW5nLlxuICAgKi9cbiAgTmVzdGVkOiAnbmVzdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgbmVzdGVkIGVycm9yIHdpdGggaXRzIG93biBzZXBhcmF0ZSBlcnJvclxuICAgKiBtZXNzYWdlLiBUaGlzIGlzIHByb2R1Y2VkIHNwZWNpZmljYWxseSBieSB0aGUgYGNvbXBvdW5kYCBwYXJzZXIuXG4gICAqL1xuICBDb21wb3VuZDogJ2NvbXBvdW5kJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIHNvbWUgb3RoZXIga2luZCBvZiBlcnJvciBtZXNzYWdlIHRvIGJlXG4gICAqIGRpc3BsYXllZCBpbiBhIGN1c3RvbSBlcnJvciBmb3JtYXR0ZXIuXG4gICAqL1xuICBPdGhlcjogJ290aGVyJyxcbn1cblxuLyoqXG4gKiBBIGxpc3Qgb2YgZXJyb3JzLiBUaGlzIGNhbiBjb25zaXN0IG9mIGFueSBlcnJvciBtZXNzYWdlcyB0aGF0IGFwcGx5XG4gKiB0byBhIHBhcnRpY3VsYXIgaW5kZXggb3IgbmVzdGVkL2NvbXBvdW5kIGVycm9ycyB0aGF0IHBvaW50IGJhY2sgdG9cbiAqIHRoZSBzYW1lIGluZGV4IGJ1dCBhcHBseSB0byBhIGRpZmZlcmVudCBvbmUuXG4gKiBAdHlwZWRlZiB7KE5lc3RlZEVycm9yfENvbXBvdW5kRXJyb3J8TG9jYWxFcnJvcilbXX0gRXJyb3JMaXN0XG4gKi9cblxuLyoqXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgYXQgdGhlIGxvY2F0aW9uIHJlZmVycmVkIHRvIGJ5IHRoZSBjdXJyZW50XG4gKiBjb250ZXh0LiBUaGUgdHlwZSBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVyZSB0aGUgbGFiZWwgc2hvdWxkIGJlXG4gKiBwb3NpdGlvbmVkIGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExvY2FsRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXJyb3IuXG4gKi9cblxuLyoqXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgaW4gYSBkaWZmZXJlbnQgbG9jYXRpb24gdGhhbiB0aGUgb25lIHJlZmVycmVkXG4gKiB0byBieSB0aGUgY3VycmVudCBjb250ZXh0LiBUaGUgbW9zdCB0eXBpY2FsIHJlYXNvbiBmb3IgdGhpcyBoYXBwZW5pbmdcbiAqIGlzIGJhY2t0cmFja2luZzsgdGhlIGxvY2FsIGVycm9yIGNhbiB0cmFjayB0aGUgY3VycmVudFxuICogKHBvc3QtYmFja3RyYWNrKSBsb2NhdGlvbiB3aGlsZSB0aGUgbmVzdGVkIGVycm9yIHJldGFpbnMgaW5mb3JtdGlvblxuICogZnJvbSB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGJhY2t0cmFja2luZyBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmVzdGVkRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXG4gKiAgICAgYEVycm9yVHlwZS5OZXN0ZWRgLlxuICogQHByb3BlcnR5IHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWxcbiAqICAgICBlcnJvciBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbVxuICogICAgIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYGN0eGAuXG4gKi9cblxuLyoqXG4gKiBBIG5lc3RlZCBlcnJvciB0aGF0IGhhcyBpdHMgb3duIGxhYmVsLiBUaGlzIGlzIHNpbXBseSBmb3IgcHJvZHVjaW5nXG4gKiBuaWNlciBlcnJvciBtZXNzYWdlczsgdGhpcyBlcnJvciBpcyB0eXBpY2FsbHkgb25seSBwcm9kdWNlZCBieSB0aGVcbiAqIGBiYWNrbGFiZWxgIHBhcnNlci5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb21wb3VuZEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxuICogICAgIGBFcnJvclR5cGUuQ29tcG91bmRgLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGVycm9yLiBUaGlzXG4gKiAgICAgaXMgdHlwaWNhbGx5IHVzZWQgYXMgYSBzb3J0IG9mIGhlYWRlciBvdmVyIHRoZSBuZXN0ZWQgbWVzc2FnZXNcbiAqICAgICB1bmRlciB0aGlzIGNvbXBvdW5kIGVycm9yLlxuICogQHByb3BlcnR5IHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWxcbiAqICAgICBlcnJvciBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbVxuICogICAgIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYGN0eGAuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGVycm9yIGxpc3QgY29udGFpbmluZyBvbmUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RlZChsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkV4cGVjdGVkLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLiBJdCBpcyBleHBlY3RlZCB0aGF0IG9uZSBhcnJheSBvZlxuICogZXJyb3IgbWVzc2FnZXMgbWF5IGhhdmUgbXVsdGlwbGUgdW5leHBlY3RlZCBlcnJvcnMsIGJ1dCBvbmx5IHRoZVxuICogZmlyc3Qgd2lsbCBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGZvdW5kIGJ1dCB3YXNcbiAqICAgICBub3QgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSB1bmV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmV4cGVjdGVkKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuVW5leHBlY3RlZCwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUaGVyZSBjYW4gYmUgbW9yZSB0aGFuIG9uZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIGluIGFuIGFycmF5IG9mIGVycm9yIG1lc3NhZ2VzLCBidXQgb25seSB0aGUgZmlyc3Qgd2lsbFxuICogYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIGdlbmVyaWMgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZ2VuZXJpYyB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpYyhsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkdlbmVyaWMsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvdGhlciBlcnJvci4gVGhlc2UgZXJyb3JzIGFyZSBub3QgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0XG4gKiBmb3JtYXR0ZXIgYXQgYWxsIGFuZCBhcmUgb25seSB1c2VmdWwgZm9yIGN1c3RvbSBmb3JtYXR0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgb3RoZXIgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgcGFyc2UgZXJyb3Igb2YgdGhlIG90aGVyIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdGhlcihsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLk90aGVyLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXN0ZWQgZXJyb3IuIFRoaXMgdGFrZXMgYW4gZXJyb3IgbGlzdCBhbmQgd3JhcHMgaXQgd2l0aFxuICogY29udGV4dCBpbmZvcm1hdGlvbi4gSWYgdGhlIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZVxuICogbmVzdGVkIGVycm9yLCB0aGF0IGVycm9yIGlzIHNpbXBseSByZXR1cm5lZDsgYSBzaW5nbGUgbmVzdGVkIGVycm9yXG4gKiB3aWxsIG5vdCBiZSBuZXN0ZWQgaW4gYW5vdGhlciBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBuZXN0ZWQgZXJyb3JcbiAqICAgICBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgcG9zaXRpb24gcG9pbnRlZCB0byBieSB0aGUgZ2l2ZW4gY29udGV4dC5cbiAqIEByZXR1cm5zIHtbTmVzdGVkRXJyb3JdfSBBIG5ldyBuZXN0ZWQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXN0ZWQoY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IGVycm9yc1xuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLk5lc3RlZCwgY3R4LCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGNvbXBvdW5kIGVycm9yLiBUaGlzIHdyYXBzIGFuIGVycm9yIGxpc3QganVzdCBhcyBhXG4gKiBuZXN0ZWQgZXJyb3IgZG9lcywgZXhjZXB0IGl0IGFsc28gYXR0YWNoZXMgYSBtZXNzYWdlIHRvIGl0LiBJZiB0aGVcbiAqIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZSBuZXN0ZWQgZXJyb3IsIGl0cyBpbmZvcm1hdGlvbiBpc1xuICogdXNlZCB0byBjcmVhdGUgYSBuZXcgY29tcG91bmQgZXJyb3Igd2l0aG91dCBhbnkgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhdHRhY2hlZCB0byB0aGUgbmVzdGVkIGVycm9yLlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBjb21wb3VuZFxuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBjb250ZXh0LlxuICogQHJldHVybnMge1tDb21wb3VuZEVycm9yXX0gQSBuZXcgY29tcG91bmQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3VuZChsYWJlbCwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IFt7XG4gICAgICB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsXG4gICAgICBjdHg6IGVycm9ycy5jdHgsXG4gICAgICBlcnJvcnM6IGVycm9ycy5lcnJvcnMsXG4gICAgICBsYWJlbCxcbiAgICB9XVxuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLCBjdHgsIGVycm9ycywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIGFycmF5cyBvZiBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnMxPVtdXSBUaGUgZmlyc3QgYXJyYXkgb2YgZXJyb3JzLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnMyPVtdXSBUaGUgc2Vjb25kIGFycmF5IG9mIGVycm9ycy5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlcnJvcnMgZnJvbVxuICogICAgIHRoZSBmaXJzdCB0d28gYXJyYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoZXJyb3JzMSA9IFtdLCBlcnJvcnMyID0gW10pIHtcbiAgcmV0dXJuIFsuLi5lcnJvcnMxLCAuLi5lcnJvcnMyXVxufVxuXG4vLyAjcmVnaW9uIEZvcm1hdHRpbmcgdXRpbGl0eSBmdW5jdGlvbnNcblxuLy8gI3JlZ2lvbiBUeXBlZGVmcyBmb3Igb2JqZWN0IHJldHVybiB0eXBlc1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmFsdWF0aW9uIG9mIGEgYnl0ZSB0byBzZWVcbiAqIGlmIGl0IGlzIChvciBzdGFydHMpIGEgbmV3bGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXdsaW5lSW5mb1xuICogQHByb3BlcnR5IHtib29sZWFufSBuZXdsaW5lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzY2FubmVkIGJ5dGUgd2FzXG4gKiAgICAgZWl0aGVyIGEgbmV3bGluZSBvciB0aGUgYmVnaW5uaW5nIG9mIGEgbXVsdGktYnl0ZSBuZXdsaW5lLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNraXAgVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IHRoZSBuZXh0IGNoYXJhY3RlclxuICogICAgIGNvbnRhaW5zLiBUaGlzIGlzIHJldHVybmVkIGFjY3VyYXRlbHkgd2hldGhlciBvciBub3QgdGhhdFxuICogICAgIGNoYXJhY3RlciBpcyBhIG5ld2xpbmUuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnQgYW5kIGVuZCBpbmRleGVzIG9mIGFcbiAqIGxpbmUgd2l0aGluIGEgZGF0YSB2aWV3LCBhcyB3ZWxsIGFzIHRoZSBudW1iZXIgb2YgdGhhdCBsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExpbmVJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBhbHdheXMgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgZGF0YSB2aWV3IGl0c2VsZiwgb3IgdGhlIGZpcnN0IGJ5dGUgYWZ0ZXIgYSBuZXdsaW5lXG4gKiAgICAgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVuZCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGxhc3RcbiAqICAgICBieXRlIG9mIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgZWl0aGVyIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBpbiB0aGUgZGF0YSB2aWV3IG9yIHRoZSBieXRlIGltbWVkaWF0ZWx5IHByZWNlZGluZyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIGEgbmV3bGluZSBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZW5vIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSBib3VuZGVkIGJ5XG4gKiAgICAgaW5kZXhlcyBgc3RhcnRgIGFuZCBgZW5kYC4gVGhpcyBudW1iZXIgaXMgMS1iYXNlZCwgYXMgaXQgaXMgdXNlZFxuICogICAgIGZvciBkaXNwbGF5IG9mIGFuIGVycm9yIHBvc2l0aW9uIGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkanVzdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmRleCB0aGF0IHJlc3VsdHNcbiAqIGZyb20gdGFiIGV4cGFuc2lvbi5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWJiZWRMaW5lSW5mb1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGxpbmUgVGhlIHN0cmluZyBvZiB0ZXh0IHJlcHJlc2VudGluZyBvbmUgbGluZSxcbiAqICAgICB3aXRoIHRhYiBjaGFyYWN0ZXJzIHJlcGxhY2VkIGJ5IHRoZSBhcHByb3ByaWF0ZSBudW1iZXIgb2Ygc3BhY2VzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbEluZGV4IFRoZSBjaGFyYWN0ZXIgaW5kZXggcGFzc2VkIGludG8gdGhlXG4gKiAgICAgZnVuY3Rpb24sIGFkanVzdGVkIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGFicyBhbmRcbiAqICAgICB0aGUgc3BhY2VzIHVzZWQgdG8gcmVwbGFjZSB0aGVtLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgY29sdW1uIGluZGV4IGFuZCBsaW5lXG4gKiBsZW5ndGggYWZ0ZXIgYWNjb3VudGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbEluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbG5vIFRoZSBhZGp1c3RlZCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXJcbiAqICAgICBwb2ludGVkIHRvIGJ5IHRoZSBgY2hhckluZGV4YCBwYXJhbWV0ZXIuIFRoaXMgaXMgYWRqdXN0ZWQgYnkgYW55XG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRoYXQgbWF5IGFwcGVhciBpbiB0aGUgbGluZSBhbmQgaXMgdHVybmVkXG4gKiAgICAgaW50byBhIDEtYmFzZWQgbnVtYmVyIGZvciBkaXNwbGF5IGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3JcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoaXMgaXMgcmV0dXJuZWQgc29sZWx5IHRvIGJlIHBhc3NlZCBpbnRvXG4gKiAgICAgb3RoZXIgZnVuY3Rpb25zIHdobyB0aGVuIHdvbid0IGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhlIHdpZHRoIG9mXG4gKiAgICAgdGhlIGxpbmUgYWNjb3VudGluZyBmb3IgdGhvc2Ugc2FtZSB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKi9cblxuLyoqXG4gICogT2JqZWN0IGNvbnRhaW5pbmcgbGluZSBhbmQgY29sdW1uIG51bWJlcnMuXG4gICpcbiAgKiBAdHlwZWRlZiB7b2JqZWN0fSBQb3NpdGlvblxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5XG4gICogICAgIHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcuXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiBUaGUgY29sdW1uIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvXG4gICogICAgIGJ5IHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcsIGFkanVzdGVkIGZvciBjaGFyYWN0ZXIgd2lkdGggYW5kXG4gICogICAgIHRhYiBzaXplLlxuICAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gY2FsbGVkIGJ5IGBmb3JtYXRFcnJvcnNgIHRvIGRvIHRoZSBhY3R1YWwgZm9ybWF0dGluZy4gQVxuICogZGVmYXVsdCBmb3JtYXR0ZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYnV0IGNhbiBiZSByZXBsYWNlZCBpZlxuICogZGVzaXJlZC5cbiAqXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGVyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgYmVpbmcgdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gYHZpZXdgIG9mIHRoZSBieXRlIHdoZXJlIHRoZVxuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlIHRhYnNcbiAqICAgICBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIGRpc3BsYXkgd2lkdGggb2YgdGhlIGxpbmUgd2hlcmVcbiAqICAgICB0aGUgZXJyb3Igb2NjdXJyZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmVcbiAqICAgICB0cnVuY2F0ZWQgd2l0aCBlbGxpcHNlcyBiZWZvcmUgYW5kL29yIGFmdGVyLlxuICogQHJldHVybnMge3N0cmluZ30gQSBtdWx0aS1saW5lIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIHN1cHBsaWVkXG4gKiB2aWV3IGlzIGEgbmV3bGluZS4gQW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXMgaXMgcmV0dXJuZWQ7XG4gKiBgbmV3bGluZWAgaXMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhhdCBjaGFyYWN0ZXIgaXMgYVxuICogbmV3bGluZTsgYHNraXBgIGlzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIChhbmQgdGhlcmVmb3JlIGhvdyBtYW55XG4gKiBieXRlcyB0byBza2lwIHVudGlsIHRoZSBuZXh0IGNoYXJhY3RlciB0byBjaGVjaykuXG4gKlxuICogQWxsIFVuaWNvZGUgbmV3bGluZXMgKENSLCBMRiwgRkYsIFZULCBORUwsIExTLCBhbmQgUFMpIGFyZSBoYW5kbGVkLFxuICogYWxvbmcgd2l0aCB0aGUgbXVsdGktY2hhcmFjdGVyIG5ld2xpbmUgQ1IrTEYuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbnRvIGB2aWV3YCBpbmRpY2F0aW5nIHRoZSBieXRlIHRvXG4gKiAgICAgY2hlY2sgdG8gc2VlIGlmIGl0J3MgYSBuZXdsaW5lLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TmV3bGluZUluZm99IE5ld2xpbmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3bGluZShpbmRleCwgdmlldykge1xuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcbiAgaWYgKGJ5dGUgPT09IDB4MGEgfHwgYnl0ZSA9PT0gMHgwYiB8fCBieXRlID09PSAweDBjKSB7XG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XG4gIH1cblxuICBpZiAoYnl0ZSA9PT0gMHgwZCkge1xuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHgwZCAmJiBuZXh0Qnl0ZSA9PT0gMHgwYSkge1xuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XG4gIH1cblxuICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcblxuICAgIGlmIChieXRlID09PSAweGMyICYmIG5leHRCeXRlID09PSAweDg1KSByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAyKSB7XG4gICAgICBjb25zdCB0aGlyZEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMilcbiAgICAgIGlmIChieXRlID09PSAweGUyICYmIG5leHRCeXRlID09PSAweDgwXG4gICAgICAgICYmICh0aGlyZEJ5dGUgPT09IDB4YTggfHwgdGhpcmRCeXRlID09PSAweGE5KSkge1xuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAzIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBuZXdsaW5lOiBmYWxzZSwgc2tpcDogbmV4dENoYXJXaWR0aChpbmRleCwgdmlldykgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgaW5kZXhlcyBvZiB0aGUgbGluZSBpbiB0aGUgZ2l2ZW5cbiAqIHZpZXcgdGhhdCBjb250YWlucyB0aGUgYnl0ZSBwb2ludGVkIGF0IGJ5IGBpbmRleGAuIEl0IGRvZXMgdGhpcyBieVxuICogZGV0ZXJtaW5pbmcgd2hlcmUgbmV3bGluZXMgYXJlIGFuZCB0aGVuIGZpZ3VyaW5nIG91dCB3aGljaCBvbmVzIGNvbWVcbiAqIGNsb3Nlc3QgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5kZXguIFRoZSBudW1iZXIgb2YgbmV3bGluZXMgdGhhdCBjYW1lXG4gKiBiZWZvcmUgdGhlIGluZGV4IChhbmQgdGhlcmVmb3JlIHRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSB3aXRoIHRoZVxuICogaW5kZXgpIGlzIGFsc28gY291bnRlZC5cbiAqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRocmVlIHByb3BlcnRpZXM6IGBzdGFydGAgaXMgdGhlIGluZGV4IG9mIHRoZVxuICogZmlyc3QgYnl0ZSBvZiB0aGUgbGluZSwgYGVuZGAgaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGJ5dGUgb2YgdGhlXG4gKiBsaW5lIChub3QgY291bnRpbmcgdGhlIG5ld2xpbmUpLCBhbmQgYGxpbmVub2AgaXMgdGhlIGxpbmUgbnVtYmVyXG4gKiB3aGVyZSB0aGUgaW5kZXggYXBwZWFycy4gYGxpbmVub2AgaXMgMS1pbmRleGVkIHNpbmNlIGl0IGlzIG1lYW50IGZvclxuICogZGlzcGxheSBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBsaW5lXG4gKiAgICAgaW5kZXggaW5mb3JtYXRpb24gaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge0xpbmVJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydGluZyBhbmQgZW5kaW5nXG4gKiAgICAgaW5kZXhlcyBvZiB0aGUgbGluZSBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KSB7XG4gIGxldCBzdGFydCA9IDBcbiAgbGV0IGxpbmVubyA9IDEgLy8gMS1iYXNlZFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAoaSA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGNvbnN0IHsgbmV3bGluZSwgc2tpcCB9ID0gaXNOZXdsaW5lKGksIHZpZXcpXG4gICAgaWYgKG5ld2xpbmUpIHtcbiAgICAgIGlmIChpICsgc2tpcCA+IGluZGV4KSB7XG4gICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQ6IGkgLSAxLCBsaW5lbm8gfVxuICAgICAgfVxuICAgICAgbGluZW5vKytcbiAgICAgIHN0YXJ0ID0gaSArIHNraXBcbiAgICB9XG4gICAgaSArPSBza2lwXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZDogdmlldy5ieXRlTGVuZ3RoIC0gMSwgbGluZW5vIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjaGFyYWN0ZXIgaW5kZXggKGFzIG9wcG9zZWQgdG8gYnl0ZSBpbmRleCkgd2l0aGluIGFcbiAqIHNpbmdsZSBsaW5lIG9mIHRleHQgb2YgdGhlIGNoYXJhY3RlciBwb2ludGVkIHRvIGJ5IGBpbmRleGAgd2l0aGluXG4gKiBgdmlld2AuIFRoZSBgc3RhcnRgIHBhcmFtZXRlciBzZXRzIHRoZSBmaXJzdCBieXRlIG9mIGEgXCJsaW5lXCIgd2l0aGluXG4gKiB0aGUgdmlldyBhbmQgY2FuIGJlIGNhbGN1bGF0ZWQgd2l0aCB7QGxpbmsgZ2V0TGluZUluZGV4ZXN9IGFib3ZlLlxuICpcbiAqIEluIGxpbmVzIHdpdGggb25seSBzaW5nbGUtYnl0ZSBjaGFyYWN0ZXJzLCB0aGUgY2hhcmFjdGVyIGluZGV4IHdpbGxcbiAqIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyBgaW5kZXggLSBzdGFydGAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHRvIGFkanVzdCB3aGVuIG11bHRpLWJ5dGUgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBjaGFyYWN0ZXJcbiAqICAgICBpbmRleCBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBieXRlIG9mIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgaW5kZXgsIHdpdGhpbiBhIHNpbmdsZSBsaW5lIG9mIHRleHQsIG9mIHRoZVxuICogICAgIGNoYXJhY3RlciB3aG9zZSBmaXJzdCBieXRlIGlzIGJlaW5nIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpIHtcbiAgbGV0IGNoYXJJbmRleCA9IDBcbiAgbGV0IGJ5dGVJbmRleCA9IHN0YXJ0XG4gIHdoaWxlIChieXRlSW5kZXggPCBpbmRleCAmJiBieXRlSW5kZXggPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBieXRlSW5kZXggKz0gbmV4dENoYXJXaWR0aChieXRlSW5kZXgsIHZpZXcpXG4gICAgY2hhckluZGV4KytcbiAgfVxuICByZXR1cm4gY2hhckluZGV4XG59XG5cbi8qKlxuICogRXhwYW5kcyB0YWJzIGludG8gc3BhY2VzIGFuZCBjYWxjdWxhdGVzIHRoZSBjb2x1bW4gaW5kZXggb2YgdGhlXG4gKiBpbmRleGVkIGNoYXJhY3RlciBhZGp1c3RpbmcgZm9yIHRob3NlIHNwYWNlcy4gVGhlIG51bWJlciBvZiBzcGFjZXMgaW5cbiAqIGVhY2ggdGFiIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCBgdGFiU2l6ZWAuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogYGxpbmVgIGlzIHRoZVxuICogaW5wdXQgbGluZSB3aXRoIHRhYnMgZXhwYW5kZWQgaW50byBzcGFjZXMsIGFuZCBgY29sSW5kZXhgIGlzIHRoZVxuICogaW5kZXggb2YgdGhlIGNvbHVtbiB0aGF0IGhhcyB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgYXQgYnkgdGhlXG4gKiBjaGFyYWN0ZXIgaW5kZXguXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNoYXJJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0XG4gKiAgICAgd2l0aGluIHRoZSBsaW5lLlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyB0YWJpZmllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBzcGFjZXMgdGhhdCBjYW4gcmVwbGFjZVxuICogICAgIGEgdGFiLiBOb3RlIHRoYXQgdGFicyBhcmUgdHJlYXRlZCBhcyBzdG9wczsgdGhleSB3aWxsIGJlIG9mXG4gKiAgICAgdmFyeWluZyBzaXplcyB0aGF0IHJlc3VsdHMgaW4gdGhlbSBhbHdheXMgZW5kaW5nIGF0IGEgY29sdW1uIHRoYXRcbiAqICAgICBpcyBhIG11bHRpcGxlIG9mIGB0YWJTaXplYC5cbiAqIEByZXR1cm5zIHtUYWJiZWRMaW5lSW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxpbmUgYWZ0ZXIgcmVwbGFjaW5nXG4gKiAgICAgdGFicyB3aXRoIHNwYWNlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhYmlmeShjaGFySW5kZXgsIGxpbmUsIHRhYlNpemUpIHtcbiAgY29uc3QgdGFiSW5kZXhlcyA9IFtdXG4gIGxldCB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXG4gIHdoaWxlICh0YWJNYXRjaCAhPT0gbnVsbCkge1xuICAgIHRhYkluZGV4ZXMucHVzaCh0YWJNYXRjaC5pbmRleClcbiAgICB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXG4gIH1cblxuICAvLyByZXBsYWNlIGVhY2ggdGFiIHdpdGggdGhlIGNvcmVjdCBudW1iZXIgb2Ygc3BhY2VzLCBzaGlmdGluZyB0aGVcbiAgLy8gcmVtYWluaW5nIGluZGV4ZXMgYnkgdGhhdCBhbW91bnRcbiAgbGV0IG9mZnNldCA9IDBcbiAgbGV0IHByZUluZGV4T2Zmc2V0ID0gMFxuICBsZXQgcmVzdWx0ID0gbGluZVxuXG4gIGZvciAoY29uc3QgdGFiSW5kZXggb2YgdGFiSW5kZXhlcykge1xuICAgIGNvbnN0IGFjdHVhbEluZGV4ID0gdGFiSW5kZXggKyBvZmZzZXRcbiAgICBjb25zdCBzcGFjZUNvdW50ID0gdGFiU2l6ZSAtIGFjdHVhbEluZGV4ICUgdGFiU2l6ZVxuICAgIGlmIChhY3R1YWxJbmRleCA8IGNoYXJJbmRleCArIHByZUluZGV4T2Zmc2V0KSB7XG4gICAgICBwcmVJbmRleE9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIH1cbiAgICBvZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIGFjdHVhbEluZGV4KSArICcgJy5yZXBlYXQoc3BhY2VDb3VudClcbiAgICAgICsgcmVzdWx0LnN1YnN0cmluZyhhY3R1YWxJbmRleCArIDEpXG4gIH1cbiAgcmV0dXJuIHsgbGluZTogcmVzdWx0LCBjb2xJbmRleDogcHJlSW5kZXhPZmZzZXQgKyBjaGFySW5kZXggfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGZpbmFsIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIHRvXG4gKiBieSB0aGUgY29sdW1uIGluZGV4LiBUaGlzIGNvbHVtbiBudW1iZXIgaXMgMS1iYXNlZCAoZm9yIGRpc3BsYXksIHRoZVxuICogc2FtZSBhcyB0aGUgbGluZSBudW1iZXIgZnJvbSBgZ2V0TGluZUluZGV4ZXNgKSBhbmQgaXMgYWRqdXN0ZWQgZm9yXG4gKiB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgc3VjaCBhcyBmb3JtYXR0aW5nIGNoYXJhY3RlcnMgYW5kIG5vbi1zcGFjaW5nXG4gKiBtYXJrcy5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0d28gcHJvcGV0aWVzOiBgY29sbm9gIGlzIHRoZVxuICogMS1pbmRleGVkIGNvbHVtbiBudW1iZXIsIGFuZCBgbGVuZ3RoYCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsaW5lXG4gKiBhZGp1c3RpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhlIGxhdHRlciBpcyBwcm92aWRlZCBzbyBpdFxuICogZG9lc24ndCBoYXZlIHRvIGJlIHJlY2FsY3VsYXRlZCBieSBgc2hvd2AuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgY29sdW1uIHdpdGhpbiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0LlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBwb3RlbnRpYWxseSBjb250YWluaW5nXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRvIGFjY291bnQgZm9yLlxuICogQHJldHVybnMge0NvbEluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpIHtcbiAgbGV0IGluZGV4ID0gY29sSW5kZXhcbiAgY29uc3QgbWF0Y2hlcyA9IFtdXG5cbiAgbGV0IG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgd2hpbGUgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgbWF0Y2hlcy5wdXNoKG1hdGNoLmluZGV4KVxuICAgIGlmIChtYXRjaC5pbmRleCA8IGluZGV4KSBpbmRleC0tXG4gICAgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB9XG4gIHJldHVybiB7XG4gICAgY29sbm86IGluZGV4ICsgMSwgLy8gMS1iYXNlZFxuICAgIGxlbmd0aDogY2hhckxlbmd0aChsaW5lKSAtIG1hdGNoZXMubGVuZ3RoLFxuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25lIGxpbmUgdGhhdCBpcyB0aGUgdGV4dCBhdCBhbmQgYXJvdW5kXG4gKiB0aGUgY29sdW1uIHRvIGJlIGRpc3BsYXllZCwgYW5kIG9uZSBsaW5lIHRoYXQgaXMgYSBjYXJldCBwb2ludGluZyB0b1xuICogdGhhdCBwYXJ0aWN1bGFyIGNvbHVtbi5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFkZHMgZWxsaXBzZXMgYXMgbmVlZGVkIHRvIHRoZSBmcm9udCBhbmQvb3IgdGhlIGJhY2sgb2ZcbiAqIHRoZSBsaW5lIGluIG9yZGVyIHRvIGdldCB0aGUgY29sdW1uIGludG8gdGhlIHZpc2libGUgYXJlYSwgYmFzZWQgb25cbiAqIHRoZSBgbWF4V2lkdGhgIG9mIHRoZSBsaW5lIHRvIGRpc3BsYXkuIFRoZSBgbGVuZ3RoYCBwYXJhbWV0ZXIgaXMgdGhlXG4gKiBgbGVuZ3RoYCByZXR1cm5lZCBieSBgZ2V0Q29sTnVtYmVyYCBhbmQgaXMgaGVyZSBqdXN0IHRvIGF2b2lkIGhhdmluZ1xuICogdG8gcmVjYWxjdWxhdGUgaXQgaW4gdGhpcyBmdW5jdGlvbiB3aGVuIGl0IGFscmVhZHkgbmVlZGVkIHRvIGJlXG4gKiBjYWxjdWxhdGVkIGluIHRoZSBvdGhlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIGZvcm1hdHRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yIHRhYnMgYW5kXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbG5vIFRoZSBjb2x1bW4gbnVtYmVyIHdoZXJlIHRoZSBjYXJldCBzaG91bGQgcG9pbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBvdGVudGlhbGx5IHRydW5jYXRlZCBsaW5lIG9mIHRleHQsIGZvbGxvd2VkIGJ5XG4gKiAgICAgYW5vdGhlciBsaW5lIGNvbnRhaW5pbmcgYSBjYXJldCBwb2ludGluZyBhdCB0aGUgZGVzaWduYXRlZFxuICogICAgIGNvbHVtbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudCA9IDApIHtcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICAvLyBGaXJzdCBjYXNlOiB0aGUgbGluZSBpcyBzaG9ydGVyIHRoYW4gbWF4V2lkdGguIERpc3BsYXkgdGhlIGxpbmVcbiAgLy8gd2l0aCB0aGUgY2FyZXQgcG9zaXRpb25lZCBiZWxvdyBpdC5cbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoICYmIGxlbmd0aCA8PSBtYXhXaWR0aCkge1xuICAgIHJldHVybiBgJHtzcH0ke2xpbmV9XFxuJHtzcH0keycgJy5yZXBlYXQoY29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gU2Vjb25kIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIHRvIGEgY2hhcmFjdGVyIGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLlxuICAvLyBEaXNwbGF5IHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYWZ0ZXIgaXQgYW5kIHBvc2l0aW9uXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoIC0gMykge1xuICAgIHJldHVybiBgJHtzcH0ke2xpbmUuc3Vic3RyaW5nKDAsIG1heFdpZHRoIC0gMyl9Li4uXFxuJHtzcH0ke1xuICAgICAgJyAnLnJlcGVhdChjb2xubyAtIDEpXG4gICAgfV5gXG4gIH1cblxuICAvLyBUaGlyZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyBhdCBhIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMylcbiAgLy8gY2hhcmFjdGVycyBidXQgaXMgaW4gdGhlIGxhc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gRGlzcGxheVxuICAvLyB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYmVmb3JlIGl0LCBjYWxjdWxhdGUgYSBuZXdcbiAgLy8gcG9zaXRpb24gZm9yIHRoZSBjYXJldCwgYW5kIHBvc2l0aW9uIGl0IGJlbG93IHRoZSBsaW5lLlxuICBpZiAoY29sbm8gPj0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBsZW5ndGggLSBtYXhXaWR0aCArIDNcbiAgICBjb25zdCBuZXdDb2xubyA9IGNvbG5vIC0gKGxlbmd0aCAtIG1heFdpZHRoKVxuICAgIHJldHVybiBgJHtzcH0uLi4ke2xpbmUuc3Vic3RyaW5nKHN0YXJ0KX1cXG4ke3NwfSR7JyAnLnJlcGVhdChuZXdDb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBGaW5hbCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiBtYXhXaWR0aCAtIDMgYW5kIHRoZSBjYXJldFxuICAvLyBkb2VzIG5vdCBwb2ludCB0byBhIGNoYXJhY3RlciB3aXRoaW4gZWl0aGVyIHRoZSBmaXJzdCBvciBsYXN0XG4gIC8vIChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIFNoaWZ0IHRoZSBsaW5lIHRvIG1ha2UgdGhlIGNhcmV0IHBvaW50XG4gIC8vIGF0IHRoZSBtaWRkbGUgb2YgaXQsIGFkZCBgLi4uYCB0byB0aGUgc3RhcnQgKmFuZCogZW5kLCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBjb25zdCBzdGFydCA9IGNvbG5vIC0gMSAtIE1hdGguY2VpbChtYXhXaWR0aCAvIDIpICsgM1xuICBjb25zdCBlbmQgPSBjb2xubyAtIDEgKyBNYXRoLmZsb29yKG1heFdpZHRoIC8gMikgLSAzXG4gIHJldHVybiBgJHtzcH0uLi4ke1xuICAgIGxpbmUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpXG4gIH0uLi5cXG4ke3NwfSR7XG4gICAgJyAnLnJlcGVhdChNYXRoLmNlaWwobWF4V2lkdGggLyAyKSlcbiAgfV5gXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIHNldCBvZiBuZXN0ZWQgKG9yIGNvbXBvdW5kKSBlcnJvciBtZXNzYWdlcy5cbiAqXG4gKiBAcGFyYW0geyhOZXN0ZWRFcnJvcltdfENvbXBvdW5kRXJyb3JbXSl9IG5lc3RlZHMgQW4gYXJyYXkgb2YgZWl0aGVyXG4gKiAgICAgbmVzdGVkIG9yIGNvbXBvdW5kIGVycm9ycyB0byBmb3JtYXQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlIHRhYlxuICogICAgIHN0b3BzIGxheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZW50IFRoZSBudW1iZXIgb2Ygc3BhY2VzIHRvIGluZGVudCB0aGUgZXJyb3JcbiAqICAgICBtZXNzYWdlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBuZXN0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0TmVzdGVkKG5lc3RlZHMsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpIHtcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcbiAgY29uc3QgbmVzdGVkTXNncyA9IG5lc3RlZHMubWFwKG4gPT4ge1xuICAgIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IG4uY3R4XG4gICAgY29uc3QgbGFiZWwgPSBuLmxhYmVsXG4gICAgICA/IGBcXG4ke3NwfUNvdWxkIG5vdCBwYXJzZSAke24ubGFiZWx9IGJlY2F1c2U6XFxuXFxuYFxuICAgICAgOiBgXFxuJHtzcH1UaGUgcGFyc2VyIGJhY2t0cmFja2VkIGFmdGVyOlxcblxcbmBcbiAgICByZXR1cm4gbGFiZWwgKyBmb3JtYXQobi5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50ICsgMilcbiAgfSlcbiAgcmV0dXJuIG5lc3RlZE1zZ3Muam9pbignJylcbn1cblxuLyoqXG4gKiBFbnN1cmVzIHRoYXQgYSBzdHJpbmcgZW5kcyB3aXRoIGEgY2VydGFpbiBudW1iZXIgb2YgbmV3bGluZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHN0cmluZyB0aGF0IGlzIHN1cHBvc2VkIHRvIGhhdmUgYSBjZXJ0YWluXG4gKiAgICAgbnVtYmVyIG9mIG5ld2xpbmVzIGF0IHRoZSBlbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgYnV0IHdpdGggYGNvdW50YCBuZXdsaW5lcyBhdCB0aGVcbiAqICAgICBlbmQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZU5ld2xpbmVzKHRleHQsIGNvdW50KSB7XG4gIGxldCByZXN1bHQgPSB0ZXh0XG4gIHdoaWxlIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnXFxuJykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdCArICdcXG4nLnJlcGVhdChjb3VudClcbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBmb3JtYXR0ZXIgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHN0cmluZyB0aGF0IGhhcyB0aGUgZm9sbG93aW5nIHBhcnRzOlxuICpcbiAqIDEuIEEgcG9zaXRpb24gbGluZSB0aGF0IGdpdmVzIHRoZSBsaW5lIG51bWJlciBhbmQgY29sdW1uIG51bWJlciB3aGVyZVxuICogICAgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMi4gQSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGxvY2F0aW9uLiBUaGlzIHBhcnQgZ2VuZXJhdGVzXG4gKiAgICB0d28gbGluZXMgaW4gdGhlIGVycm9yIG1lc3NhZ2UuIFRoZSBmaXJzdCBpcyBlaXRoZXIgdGhlIGVudGlyZVxuICogICAgaW5wdXQgbGluZSBvciwgaWYgdGhhdCdzIHRvbyBsb25nLCBhIHBvcnRpb24gb2YgdGhlIGlucHV0IGxpbmVcbiAqICAgIHN0YXJ0ZWQgYW5kL29yIGVuZGVkIHdpdGggZWxsaXBzZXMgdGhhdCBjb250YWlucyB0aGUgZXJyb3JcbiAqICAgIGxvY2F0aW9uLiBUaGUgc2Vjb25kIGlzIGEgY2FyZXQgcG9zaXRpb25lZCB1bmRlcm5lYXRoIHRoZSBsb2NhdGlvblxuICogICAgaW4gdGhlIGZpcnN0IGxpbmUgdGhhdCBzaG93cyBleGFjdGx5IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIDMuIFRoZSBmaXJzdCB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UsIGlmIGFueS5cbiAqIDQuIEFsbCBvZiB0aGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXMgKGlmIGFueSksIHNlcGFyYXRlZCBieSAnb3InIGFuZFxuICogICAgY29tbW1hcyBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIG51bWJlciBvZiBtZXNzYWdlcy5cbiAqIDUuIFRoZSBmaXJzdCBvZiB0aGUgZ2VuZXJpYyBtZXNzYWdlcywgaWYgYW55LlxuICpcbiAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgZXJyb3IgaXMgaW5kaWNhdGVkIGJ5IHRoZSBgaW5kZXhgIHBhcmFtZXRlcixcbiAqIHdoaWNoIGlzIHRoZSBpbmRleCB3aXRoaW4gdGhlIGFycmF5IG9mIGJ5dGVzIGluIGB2aWV3YCB3aGVyZSB0aGVcbiAqIGVycm9yIG9jY3VycmVkLiBUaGUgY2FsY3VsYXRpb24gb2YgbGluZSBhbmQgY29sdW1uIG51bWJlciBmcm9tIHRoaXNcbiAqIGZsYXQgYXJyYXkgb2YgYnl0ZXMgdGFrZXMgdGhlIGZvbGxvd2luZyBpbnRvIGFjY291bnQ6XG4gKlxuICogKiBNdWx0aS1ieXRlIGNoYXJhY3RlcnMgKGV2ZXJ5dGhpbmcgaXMgVVRGLTggYXdhcmUsIHNvIGNoYXJhY3RlcnMgY2FuXG4gKiAgIGJlIDEsIDIsIDMsIG9yIDQgYnl0ZXMgbG9uZylcbiAqICogTXVsdGktY2hhcmFjdGVyIGFuZCBzaW5nbGUtY2hhcmFjdGVyIG11bHRpLWJ5dGUgbGluZSBlbmRpbmdzXG4gKiAqIFRhYnMsIHdoaWNoIGFyZSBleHBhbmRlZCBpbnRvIGEgbnVtYmVyIG9mIHNwYWNlcyBzZXQgYnkgdGhlXG4gKiAgIGB0YWJTaXplYCBwYXJhbWV0ZXJcbiAqICogWmVyby13aWR0aCBjaGFyYWN0ZXJzLCBzdWNoIGFzIHplcm8td2lkdGggc3BhY2VzIGFuZCBqb2luZXJzLCBSVExcbiAqICAgb3IgTFRSIGZvcm1hdHRpbmcgY2hhcmFjdGVycywgYW5kIGRpYWNyaXRpY3MgKEhlYnJldyBvciBUaGFpIHZvd2VsXG4gKiAgIG1hcmtzLCB1bWxhdXRzIG92ZXIgTGF0aW4gY2hhcmFjdGVycywgZXRjLilcbiAqXG4gKiBUaGUgb3V0cHV0IGlzIGEgc2luZ2xlIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSA1IGVsZW1lbnRzIGFib3ZlLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogVGhlIGZvbGxvd2luZyB0d28gbGluZXMgb2YgY29kZSB1c2VzIGBzdHJpbmdUb1ZpZXdgLCBhbiBpbnRlcm5hbFxuICogdXRpbGl0eSBmdW5jdGlvbiB0aGF0LCBhcyBpdHMgbmFtZSBzdWdnZXN0cywgdHVybnMgYSBzdHJpbmcgaW50byBhXG4gKiBVVEYtOCBkYXRhIHZpZXcuIEl0J3MgY2FsbGVkIGJ5IGBwYXJzZWAgaXRzZWxmLCBzbyBpbiByZWFsIHdvcmxkXG4gKiB1c2FnZSwgaXQncyBub3QgbmVjZXNzYXJ5IHRvIGtub3cuXG4gKlxuICogYGBgXG4gKiBjb25zdCB2aWV3ID0gc3RyaW5nVG9WaWV3KCdcXHRPbm9tYXRvcG9laWFcXHRcXHRcXHRcXHTguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIcnKVxuICogY29uc3QgbWVzc2FnZSA9IGZvcm1hdChbZXhwZWN0ZWQoJ2EgZGlnaXQnKV0sIDI5LCB2aWV3LCA0LCA3MilcbiAqIGBgYFxuICpcbiAqIEZyb20gdGhpcyBjYWxsIHRvIGBmb3JtYXRgLCB0aGUgZm9sbG93aW5nIG11bHRpLWxpbmUgc3RyaW5nIHdpbGwgYmVcbiAqIHByb2R1Y2VkOlxuICpcbiAqIGBgYFxuICogUGFyc2UgZXJyb3IgYXQgKGxpbmUgMSwgY29sdW1uIDM3KTpcbiAqXG4gKiAgICAgT25vbWF0b3BvZWlhICAgICAgICAgICAgICAgIOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4h1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXlxuICogRXhwZWN0ZWQgYSBkaWdpdFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdG8gYmUgZm9ybWF0dGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbiB0aGUgdmlldyB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlXG4gKiAgICAgdGFiIHN0b3BzIGxheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4V2lkdGg9NzJdIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZW50PTBdIFRoZSBudW1iZXIgb2Ygc3BhY2VzIHRoZSBtZXNzYWdlIHNob3VsZCBiZVxuICogICAgIGluZGVudGVkLiBUaGlzIHNob3VsZCBiZSAwIGFuZCBpbmNyZWFzZWQgb25seSBmb3IgbmVzdGVkIGVycm9ycy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChcbiAgZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSA9IDgsIG1heFdpZHRoID0gNzIsIGluZGVudCA9IDAsXG4pIHtcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgbGVuZ3RoIH0gPSBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpXG5cbiAgY29uc3QgcG9zaXRpb24gPSBgJHtzcH1QYXJzZSBlcnJvciBhdCAobGluZSAke2xpbmVub30sIGNvbHVtbiAke2NvbG5vfSk6YFxuICBjb25zdCBkaXNwbGF5ID0gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50KVxuICBjb25zdCBnZW5lcmljID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkdlbmVyaWMpXG4gIGNvbnN0IHVuZXhwZWN0ZWQgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuVW5leHBlY3RlZClcbiAgY29uc3QgZXhwZWN0ZWQgPSBjb21tYVNlcGFyYXRlKFxuICAgIGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkV4cGVjdGVkKVxuICAgICAgLm1hcChlcnJvciA9PiBlcnJvci5sYWJlbCksXG4gIClcblxuICBjb25zdCBuZXN0ZWQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWQpXG4gIGNvbnN0IGNvbXBvdW5kID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuQ29tcG91bmQpXG5cbiAgY29uc3QgdW5leHBNc2cgPSB1bmV4cGVjdGVkID8gYCR7c3B9VW5leHBlY3RlZCAke3VuZXhwZWN0ZWQubGFiZWx9XFxuYCA6ICcnXG4gIGNvbnN0IGV4cE1zZyA9IGV4cGVjdGVkLmxlbmd0aCA/IGAke3NwfUV4cGVjdGVkICR7ZXhwZWN0ZWR9XFxuYCA6ICcnXG4gIGNvbnN0IGdlbmVyaWNNc2cgPSBnZW5lcmljID8gYCR7c3B9JHtnZW5lcmljLmxhYmVsfVxcbmAgOiAnJ1xuXG4gIGNvbnN0IG5lc3RlZE1zZyA9IGZvcm1hdE5lc3RlZChuZXN0ZWQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXG4gIGNvbnN0IGNvbXBvdW5kTXNnID0gZm9ybWF0TmVzdGVkKGNvbXBvdW5kLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxuXG4gIGNvbnN0IHVua25vd25Nc2cgPSBlcnJvcnMubGVuZ3RoID09PSAwID8gYCR7c3B9VW5rbm93biBlcnJvcihzKVxcbmAgOiAnJ1xuICBjb25zdCBlb2ZNc2cgPSBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcbiAgICA/IGAke3NwfU5vdGU6IGZhaWx1cmUgb2NjdXJyZWQgYXQgdGhlIGVuZCBvZiBpbnB1dFxcbmAgOiAnJ1xuXG4gIHJldHVybiBlbnN1cmVOZXdsaW5lcyhcbiAgICBgJHtwb3NpdGlvbn1cXG5cXG4ke2Rpc3BsYXl9XFxuJHt1bmV4cE1zZ30ke2V4cE1zZ30ke2dlbmVyaWNNc2d9JHt1bmtub3duTXNnfWBcbiAgICAgICsgYCR7ZW9mTXNnfSR7Y29tcG91bmRNc2d9JHtuZXN0ZWRNc2d9YCxcbiAgICAyLFxuICApXG59XG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBBY2NlcHRzIGEgcGFyc2VyIGNvbnRleHQgYW5kIHByb2R1Y2VzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBpdC5cbiAqXG4gKiBBIGRlZmF1bHQgZm9ybWF0dGVyIGlzIHByb3ZpZGVkIGJ1dCBhbiBhbHRlcm5hdGUgb25lIGNhbiBiZSBwYXNzZWRcbiAqIGluLiBUaGUgc2FtZSBnb2VzIGZvciB0YWIgc2l6ZSAodXNlZCB0byBleHBhbmQgdGFicyBpbiBwYXJzZWQgdGV4dDtcbiAqIGRlZmF1bHRzIHRvIDggaW4gdGhlIGRlZmF1bHQgZm9ybWF0dGVyKSBhbmQgbWF4IHdpZHRoIChmb3IgdGhlIGVycm9yXG4gKiBtZXNzYWdlIGl0c2VsZjsgZGVmYXVsdHMgdG8gNzIgaW4gdGhlIGRlZmF1bHQgZm9ybWF0dGVyKS5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgcmVwbHkgcmV0dXJuZWQgYnkgdGhlIHBhcnNlciB3aGVuIHRoZSBlcnJvclxuICogICAgIGhhcHBlbmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplXSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlIHRhYnNcbiAqICAgICBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aF0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtGb3JtYXR0ZXJ9IFtmb3JtYXR0ZXI9Zm9ybWF0XSBUaGUgZnVuY3Rpb24gdG8gd2hpY2ggdGhlXG4gKiAgICAgYWN0dWFsIGZvcm1hdHRpbmcgaXMgZGVsZWdhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JzKHJlcGx5LCB0YWJTaXplLCBtYXhXaWR0aCwgZm9ybWF0dGVyID0gZm9ybWF0KSB7XG4gIGNvbnN0IFtjdHgsIHJlc3VsdF0gPSByZXBseVxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgcmV0dXJuIGZvcm1hdHRlcihyZXN1bHQuZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIG5leHQgYnl0ZSBvZiB0aGUgc3VwcGxpZWQgY29udGV4dC4gVGhlXG4gKiBwb3NpdGlvbiBpcyBhbiBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMgdGhhdCBhcmVcbiAqIHRoZSAxLWJhc2VkIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzIG9mIHRoZSBieXRlIGF0IHRoZSBjb250ZXh0J3NcbiAqIGluZGV4IHdpdGhpbiB0aGUgY29udGV4dCdzIGRhdGEgdmlldy5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCB3aG9zZSBjdXJyZW50IHBvc2l0aW9uIGlzIGJlaW5nXG4gKiAgICAgY2FsY3VsYXRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXG4gKiAgICAgdGFicyBzdG9wLiBUaGUgY3VycmVudCBwb3NpdGlvbidzIGNvbHVtbiBudW1iZXIgaXMgYWRqdXN0ZWQgYmFzZWRcbiAqICAgICBvbiB0aGlzIHBhcmFtZXRlciB3aGVuIHRhYiBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICogQHJldHVybnMge1Bvc2l0aW9ufSBBIHR3by1wcm9wZXJ0eSBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gXG4gKiAgICAgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKGN0eCwgdGFiU2l6ZSA9IDgpIHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIF8gfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICByZXR1cm4geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sbm8gfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUlNcblxuZXhwb3J0IHtcbiAgYWxwaGEsXG4gIGFueSxcbiAgYW55T2YsXG4gIGNoYXIsXG4gIGNoYXJJLFxuICBkaWdpdCxcbiAgZW9mLFxuICBoZXgsXG4gIGxldHRlcixcbiAgbG93ZXIsXG4gIG5vbmVPZixcbiAgb2N0YWwsXG4gIHJhbmdlLFxuICBzYXRpc2Z5LFxuICBzYXRpc2Z5TSxcbiAgdXBwZXIsXG59IGZyb20gJy4vcGFyc2Vycy9jaGFyJ1xuZXhwb3J0IHtcbiAgYWx3YXlzLFxuICBmYWlsTm9ybWFsbHksXG4gIGZhaWxGYXRhbGx5LFxufSBmcm9tICcuL3BhcnNlcnMvbWlzYydcbmV4cG9ydCB7XG4gIGFscGhhVSxcbiAgbGV0dGVyVSxcbiAgbG93ZXJVLFxuICBuZXdsaW5lLFxuICBuZXdsaW5lVSxcbiAgcmVnZXgsXG4gIHNwYWNlLFxuICBzcGFjZVUsXG4gIHNwYWNlcyxcbiAgc3BhY2VzMSxcbiAgc3BhY2VzMVUsXG4gIHNwYWNlc1UsXG4gIHVwcGVyVSxcbn0gZnJvbSAnLi9wYXJzZXJzL3JlZ2V4J1xuZXhwb3J0IHtcbiAgYWxsLFxuICBhbnlTdHJpbmcsXG4gIHN0cmluZyxcbiAgc3RyaW5nSSxcbn0gZnJvbSAnLi9wYXJzZXJzL3N0cmluZydcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTUJJTkFUT1JTXG5cbmV4cG9ydCB7XG4gIGFsdCxcbiAgZGVmLFxuICBlbXB0eSxcbiAgbm90LFxuICBvcHQsXG4gIHBlZWssXG59IGZyb20gJy4vY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUnXG5leHBvcnQge1xuICBhcHBseUIsXG4gIGF0dGVtcHQsXG4gIGJldHdlZW5CLFxuICBibG9ja0IsXG4gIGNoYWluQixcbiAgbGVmdEIsXG4gIG1hbnlUaWxsQixcbiAgcGlwZUIsXG4gIHJlcGVhdEIsXG4gIHJpZ2h0QixcbiAgc2VxQixcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9iYWNrdHJhY2tpbmcnXG5leHBvcnQge1xuICBhcHBseSxcbiAgY2hhaW4sXG4gIGNvbXBhY3QsXG4gIGZpZnRoLFxuICBmaXJzdCxcbiAgZm91cnRoLFxuICBqb2luLFxuICBtYXAsXG4gIG50aCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgdmFsdWUsXG59IGZyb20gJy4vY29tYmluYXRvcnMvY2hhaW5pbmcnXG5leHBvcnQge1xuICBhc3NvYzFMLFxuICBhc3NvYzFSLFxuICBhc3NvY0wsXG4gIGFzc29jUixcbiAgYmV0d2VlbixcbiAgYmxvY2ssXG4gIGVuZCxcbiAgbGVmdCxcbiAgbWFueSxcbiAgbWFueTEsXG4gIHBpcGUsXG4gIHJlcGVhdCxcbiAgcmlnaHQsXG4gIHNlcCxcbiAgc2VwMSxcbiAgc2VwRW5kQnkxLFxuICBzZXEsXG4gIHNraXAsXG4gIHNraXBNYW55LFxuICBza2lwTWFueTEsXG4gIHVudGlsLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcblxuZXhwb3J0IHtcbiAgU3RhdHVzLFxuICBmYWlsUmVwbHksXG4gIGZhaWx1cmUsXG4gIGZhdGFsUmVwbHksXG4gIG9rUmVwbHksXG4gIHBhcnNlLFxuICBwYXJzZXIsXG4gIHJ1bixcbiAgc3RhdHVzLFxuICBzdWNjZWVkZWQsXG4gIHN1Y2Nlc3MsXG59IGZyb20gJy4vY29yZSdcbmV4cG9ydCB7XG4gIEVycm9yVHlwZSxcbiAgY29tcG91bmQsXG4gIGV4cGVjdGVkLFxuICBmb3JtYXRFcnJvcnMsXG4gIGdlbmVyaWMsXG4gIGdldFBvc2l0aW9uLFxuICBtZXJnZSxcbiAgbmVzdGVkLFxuICBvdGhlcixcbiAgdW5leHBlY3RlZCxcbn0gZnJvbSAnLi9lcnJvcidcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IGNvbW1hU2VwYXJhdGUsIHF1b3RlIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgYWxwaGE6ICdhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcbiAgYWxwaGFVOiAnYSBVbmljb2RlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICBhbnk6ICdhbnkgY2hhcmFjdGVyJyxcbiAgYW55T2Y6IGFycmF5ID0+ICdhbnkgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcbiAgYW55U3RyaW5nOiBuID0+IGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgLFxuICBjaGFyOiBjID0+IHF1b3RlKGMpLFxuICBjaGFySTogYyA9PiBxdW90ZShjKSxcbiAgZGlnaXQ6ICdhIGRpZ2l0JyxcbiAgZW9mOiAnZW5kIG9mIGlucHV0JyxcbiAgaGV4OiAnYSBoZXhhZGVjaW1hbCBkaWdpdCcsXG4gIGxldHRlcjogJ2EgbGV0dGVyJyxcbiAgbGV0dGVyVTogJ2EgVW5pY29kZSBsZXR0ZXInLFxuICBsb3dlcjogJ2EgbG93ZXJjYXNlIGxldHRlcicsXG4gIGxvd2VyVTogJ2EgVW5pY29kZSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgbmV3bGluZTogJ2EgbmV3bGluZScsXG4gIG5ld2xpbmVVOiAnYSBVbmljb2RlIG5ld2xpbmUnLFxuICBub25lT2Y6IGFycmF5ID0+ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXG4gIG9jdGFsOiAnYW4gb2N0YWwgZGlnaXQnLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGBhIGNoYXJhY3RlciBiZXR3ZWVuICcke3N0YXJ0fScgYW5kICcke2VuZH0nYCxcbiAgcmVnZXg6IHJlID0+IGBhIHN0cmluZyBtYXRjaGluZyAke3JlfWAsXG4gIHNwYWNlOiAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHNwYWNlczogJ3plcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzVTogJ3plcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlczFVOiAnb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZVU6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICBzdHJpbmc6IHN0ciA9PiBxdW90ZShzdHIpLFxuICBzdHJpbmdJOiBzdHIgPT4gcXVvdGUoc3RyKSxcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcbiAgdXBwZXJVOiAnYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXInLFxufVxuXG5leHBvcnQgY29uc3QgZXhwZWN0ZWRzID0ge1xuICBhbHBoYTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYSksXG4gIGFscGhhVTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYVUpLFxuICBhbnk6IGV4cGVjdGVkKHN0cmluZ3MuYW55KSxcbiAgYW55T2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55T2YoYXJyYXkpKSxcbiAgYW55U3RyaW5nOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55U3RyaW5nKG4pKSxcbiAgY2hhcjogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXIoYykpLFxuICBjaGFySTogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXJJKGMpKSxcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxuICBlb2Y6IGV4cGVjdGVkKHN0cmluZ3MuZW9mKSxcbiAgaGV4OiBleHBlY3RlZChzdHJpbmdzLmhleCksXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxuICBsZXR0ZXJVOiBleHBlY3RlZChzdHJpbmdzLmxldHRlclUpLFxuICBsb3dlcjogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlciksXG4gIGxvd2VyVTogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlclUpLFxuICBuZXdsaW5lOiBleHBlY3RlZChzdHJpbmdzLm5ld2xpbmUpLFxuICBuZXdsaW5lVTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lVSksXG4gIG5vbmVPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lT2YoYXJyYXkpKSxcbiAgb2N0YWw6IGV4cGVjdGVkKHN0cmluZ3Mub2N0YWwpLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGV4cGVjdGVkKHN0cmluZ3MucmFuZ2Uoc3RhcnQsIGVuZCkpLFxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxuICBzcGFjZTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZSksXG4gIHNwYWNlczogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMpLFxuICBzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczEpLFxuICBzcGFjZXNVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlc1UpLFxuICBzcGFjZXMxVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxVSksXG4gIHNwYWNlVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZVUpLFxuICBzdHJpbmc6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZyhzdHIpKSxcbiAgc3RyaW5nSTogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nSShzdHIpKSxcbiAgdXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXIpLFxuICB1cHBlclU6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXJVKSxcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydENoYXIsXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRTdHJpbmcsXG4gIGFzc2VydFN0cmluZ09yQXJyYXksXG4gIG9yZENoYXJGb3JtYXR0ZXIsXG4gIG9yZEZuRm9ybWF0dGVyLFxuICBvcmRTdHJGb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IGR1cCwgbmV4dENoYXIgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIsIGZlZWRzIGl0IHRvIGEgZnVuY3Rpb24sIGFuZFxuICogc3VjY2VlZHMgb3IgZmFpbHMgYmFzZWQgb24gdGhlIHJldHVybiB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpc24ndCBhbnl0aGluZyBoZXJlIHRoYXQgY291bGRuJ3QgYmUgd3JpdHRlbiB3aXRoXG4gKiBgU3RyaW5nUGFyc2VyYCBpbnN0ZWFkLCBidXQgd2hlbiB3b3JraW5nIHdpdGggc2luZ2xlIGNoYXJhY3RlcnMgdGhlcmVcbiAqIGFyZSBjZXJ0YWluIGFzc3VtcHRpb25zIHRoYXQgY2FuIGJlIG1hZGUgKHN1Y2ggYXMgdGhlIG51bWJlciBvZlxuICogY2hhcmFjdGVycyB0aGF0IGhhdmUgdG8gYmUgcmVhZCBmcm9tIHRoZSBpbnB1dCB2aWV3KSB0aGF0IGFsbG93IGl0IHRvXG4gKiBiZSBhIGxpdHRsZSBtb3JlIGVmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuY29uc3QgY2hhclBhcnNlciA9IGZuID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGZhaWxSZXBseShjdHgpXG5cbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIHJldHVybiBmbihuZXh0KSA/IG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKSA6IGZhaWxSZXBseShjdHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kIHN1Y2NlZWRzIGlmXG4gKiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgdGhyb3cgYW4gZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgaXMgdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhciA9IGMgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdjaGFyJywgYylcblxuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IGR1cChjaGFyUGFyc2VyKGNoID0+IGMgPT09IGNoKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbFJlcGx5KGNwY3R4LCBleHBlY3RlZHMuY2hhcihjKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmQgc3VjY2VlZHMgaWZcbiAqIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC4gVGhpcyBkaWZmZXJzIGZyb20gYGNoYXJgIGluIHRoYXQgdGhlXG4gKiBjb21wYXJpc29uIGRvbmUgYnkgdGhpcyBwYXJzZXIgaXMgY2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICB0aHJvdyBhbiBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCAob3IgaXRzXG4gKiAgICAgb3RoZXItY2FzZWQgY291bnRlcnBhcnQpIGlzIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFySSA9IGMgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdjaGFySScsIGMpXG5cbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSBkdXAoY2hhclBhcnNlcihcbiAgICBjaCA9PiBjLnRvTG93ZXJDYXNlKCkgPT09IGNoLnRvTG93ZXJDYXNlKCksXG4gICkoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWxSZXBseShjcGN0eCwgZXhwZWN0ZWRzLmNoYXJJKGMpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgcGFzc2VzIGl0IHRvIHRoZSBwcm92aWRlZFxuICogZnVuY3Rpb24uIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhpcyBwYXJzZXIgc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIgYXMgdGhlIHJlc3VsdC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCwgdGhpc1xuICogcGFyc2VyIGZhaWxzIGFuZCBjb25zdW1lcyBubyBpbnB1dC5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBjYXVzZSBmb3IgYW4gZXJyb3Igc2luY2UgaXQncyBub3RcbiAqIGZlYXNpYmxlIHRvIGhhdmUgaXQgYW5hbHl6ZSB0aGUgZnVuY3Rpb24gdG8gc2VlIHdoYXQgaXQgZXhwZWN0cyB0b1xuICogbWF0Y2gsIHNvIG5vIGVycm9yIG1lc3NhZ2UgaXMgcHJvdmlkZWQgb24gZmFpbHVyZS4gVXNlXG4gKiBgbGFiZWwoc2F0aXNmeShmbiksIG1zZylgIG9yIHRoZSBlcXVpdmFsZW50IGBzYXRpc2Z5TChmbiwgbXNnKWAgdG9cbiAqIGFkZCBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc2F0aXNmeSA9IGZuID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3NhdGlzZnknLCBmbilcbiAgcmV0dXJuIGNoYXJQYXJzZXIoZm4pKGN0eClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGUgcHJvdmlkZWRcbiAqIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyIHN1Y2NlZWRzIHdpdGhcbiAqIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAsIHRoaXNcbiAqIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQgYW5kIHNpZ25hbHMgYW4gZXJyb3Igd2l0aCB0aGVcbiAqIHByb3ZpZGVkIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNhdGlzZnlNID0gKGZuLCBtZXNzYWdlKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5TScsIGZuLCBvcmRGbkZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ3NhdGlzZnlNJywgbWVzc2FnZSwgb3JkU3RyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbFJlcGx5KGNwY3R4LCBleHBlY3RlZChtZXNzYWdlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIGRldGVybWluZXMgd2hldGhlciBpdCBpc1xuICogYmV0d2VlbiAoYWNjb3JkaW5nIHRvIGNvZGUgcG9pbnRzKSBjaGFyYWN0ZXJzIGBzYCBhbmQgYGVgXG4gKiAoaW5jbHVzaXZlKS4gSWYgaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsXG4gKiBhbmQgaWYgaXQgaXMgbm90LCB0aGUgcGFyc2VyIGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIGBzYCBhbmQgYGVgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gQW4gZXJyb3Igd2lsbCBiZVxuICogdGhyb3duIGlmIHRoZXkgYXJlIG5vdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcyBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlIHJhbmdlXG4gKiAgICAgb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBlbmQgb2YgdGhlIHJhbmdlIG9mXG4gKiAgICAgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGJldHdlZW4gYHN0YXJ0YCBhbmQgYGVuZGAgKGluY2x1c2l2ZSkuXG4gKi9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzLCBlKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgcywgb3JkQ2hhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdyYW5nZScsIGUsIG9yZENoYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGZuID0gYyA9PiBjID49IHMgJiYgYyA8PSBlXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsUmVwbHkoY3BjdHgsIGV4cGVjdGVkcy5yYW5nZShzLCBlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBpbnB1dCBjaGFyYWN0ZXIgYW5kIHRoZW4gc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIuIEZhaWxzIG9ubHkgaWYgdGhlcmUgaXMgbm8gaW5wdXQgbGVmdCB0byByZWFkLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhbnkgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsUmVwbHkoY3R4LCBleHBlY3RlZHMuYW55KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgZG9lc1xuICogbm90IGV4aXN0IChpLmUuLCBpZiB0aGUgaW5kZXggaXMgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCkuXG4gKiBDb25zdW1lcyBub3RoaW5nIG9uIGVpdGhlciBzdWNjZXNzIG9yIGZhaWx1cmUuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGVvZiA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgcmV0dXJuIGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aFxuICAgID8gb2tSZXBseShjdHgsIG51bGwpXG4gICAgOiBmYWlsUmVwbHkoY3R4LCBleHBlY3RlZHMuZW9mKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2ggb2YgdGhlXG4gKiBjaGFyYWN0ZXJzIGluIGBjc2AsIHdoaWNoIGlzIGVpdGhlciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIG9yIGFcbiAqIHN0cmluZy4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZSBwYXJzZXJcbiAqIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjcyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5IG9yIGFcbiAqICAgICBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gYmUgYSBtZW1iZXIgZm9yXG4gKiAgICAgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgb25lXG4gKiAgICAgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueU9mID0gY3MgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmdPckFycmF5KCdhbnlPZicsIGNzKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgY29uc3QgYXJyID0gWy4uLmNzXVxuXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcbiAgICA/IG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxuICAgIDogZmFpbFJlcGx5KGN0eCwgZXhwZWN0ZWRzLmFueU9mKGFycikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaCBvZiB0aGVcbiAqIGNoYXJhY3RlcnMgaW4gYGNzYCwgd2hpY2ggaXMgZWl0aGVyIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgb3IgYVxuICogc3RyaW5nLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgKm5vdCogYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlXG4gKiBwYXJzZXIgd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXkgb3IgYVxuICogICAgIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBub3QgYmUgYSBtZW1iZXJcbiAqICAgICBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgbm90XG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub25lT2YgPSBjcyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yQXJyYXkoJ25vbmVPZicsIGNzKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgY29uc3QgYXJyID0gWy4uLmNzXVxuXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcbiAgICA/IGZhaWxSZXBseShjdHgsIGV4cGVjdGVkcy5ub25lT2YoYXJyKSlcbiAgICA6IG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBkaWdpdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgZGlnaXQgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsUmVwbHkoY3BjdHgsIGV4cGVjdGVkcy5kaWdpdClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBoZXhhZGVjaW1hbCBkaWdpdC4gVGhpcyBwYXJzZXIgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBoZXggPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gICAgfHwgYyA+PSAnYScgJiYgYyA8PSAnZidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdGJ1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbFJlcGx5KGNwY3R4LCBleHBlY3RlZHMuaGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBvY3RhbCBkaWdpdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgb2N0YWwgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzcnXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsUmVwbHkoY3BjdHgsIGV4cGVjdGVkcy5vY3RhbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgbGV0dGVyLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXIgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsUmVwbHkoY3BjdHgsIGV4cGVjdGVkcy5sZXR0ZXIpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXIuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFscGhhID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gICAgfHwgYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWxSZXBseShjcGN0eCwgZXhwZWN0ZWRzLmFscGhhKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSB1cHBlcmNhc2UgbGV0dGVyLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCB1cHBlciA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWxSZXBseShjcGN0eCwgZXhwZWN0ZWRzLnVwcGVyKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBsb3dlcmNhc2UgbGV0dGVyLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsb3dlciA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWxSZXBseShjcGN0eCwgZXhwZWN0ZWRzLmxvd2VyKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGFzc2VydFN0cmluZyB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIG9rUmVwbHksIHBhcnNlciB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZ2VuZXJpYyB9IGZyb20gJ2tlc3NlbC9lcnJvcidcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWxOb3JtYWxseSA9IG1zZyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmFpbE5vcm1hbGx5JywgbXNnKVxuICByZXR1cm4gZmFpbFJlcGx5KGN0eCwgZ2VuZXJpYyhtc2cpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi4gVGhpcyBzaWduaWZpZXMgYSBmYXRhbCBlcnJvcixcbiAqIG9uZSB0aGF0IGNhbm5vdCBiZSByZWNvdmVyZWQgZnJvbSB3aXRob3V0IGJhY2t0cmFja2luZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIGZhdGFsbHkgd2l0aCB0aGVcbiAqICAgICBzdXBwbGllZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmFpbEZhdGFsbHkgPSBtc2cgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2ZhaWxGYXRhbGx5JywgbXNnKVxuICByZXR1cm4gZmF0YWxSZXBseShjdHgsIGdlbmVyaWMobXNnKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggYWx3YXlzIHN1Y2NlZWRzIHdpdGggdGhlIHN1cHBsaWVkIHZhbHVlLlxuICpcbiAqIFRoaXMgc2VydmVzIGFzIGEgcHJpbWl0aXZlIGZvciBib3RoIG1vbmFkcyBhbmQgYXBwbGljYXRpdmVzLiBJblxuICogSGFza2VsbCB0ZXJtcywgdGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGJvdGggYHB1cmVgIGluIHRoZVxuICogYEFwcGxpY2F0aXZlYCBjbGFzcyBhbmQgYHJldHVybmAgaW4gdGhlIGBNb25hZGAgY2xhc3MuXG4gKlxuICogSW4gb3RoZXIgd29yZHMsIGl0IGxpZnRzIGFuIGFyYml0cmFyeSB2YWx1ZSBpbnRvIGEgUGFyc2VyIGNvbnRleHQsXG4gKiB0dXJuaW5nIGl0IGludG8gYSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoYXQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB3aWxsIHJlc3VsdCB3aGVuIHRoaXMgcGFyc2VyIGlzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyB3aXRoIGB2YWx1ZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHdheXMgPSB4ID0+IHBhcnNlcihjdHggPT4gb2tSZXBseShjdHgsIHgpKVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nT3JSZWdFeHAgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZHVwLCBzdHJpbmdUb1ZpZXcsIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLy8gQWxsIG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIHVzZWQgaW4gdGhlIGRlcml2ZWQgcmVnZXggcGFyc2Vycy5cbi8vIFRoZXNlIGFyZSBoZXJlIHRvIGNyZWF0ZSBhbmQgY29tcGlsZSB0aGVtIG9uY2UsIHVwb24gaW5pdGlhbCBsb2FkLCB0b1xuLy8gc3BlZWQgcGFyc2luZyBsYXRlci5cblxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMZXR0ZXIgPSAvXlxccHtBbHBoYWJldGljfS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBvciBudW1iZXIgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVBbHBoYSA9IC9eKD86XFxwe0FscGhhYmV0aWN9fFxccHtOfSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlVXBwZXIgPSAvXig/OlxccHtVcHBlcmNhc2V9fFxccHtMdH0pL3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbG93ZXJjYXNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlTG93ZXIgPSAvXlxccHtMb3dlcmNhc2V9L3Vcbi8qKiBNYXRjaGVzIGEgc2luZ2xlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlU3BhY2UgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx0IF0pL1xuLyoqIE1hdGNoZXMgYSBzaW5nbGUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlVXNwYWNlID0gL14oPzpcXHJcXG58XFxwe1doaXRlX1NwYWNlfSkvdVxuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVNwYWNlcyA9IC9eW1xcclxcblxcdCBdKi9cbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlVXNwYWNlcyA9IC9eXFxwe1doaXRlX1NwYWNlfSovdVxuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzMSA9IC9eW1xcclxcblxcdCBdKy9cbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzMSA9IC9eXFxwe1doaXRlX1NwYWNlfSsvdVxuLyoqIE1hdGNoZXMgYW55IGNvbnZlbnRpb25hbCBuZXdsaW5lIChcXHIsIFxcbiwgb3IgXFxyXFxuKS4gKi9cbmNvbnN0IHJlTmV3bGluZSA9IC9eKD86XFxyXFxufFxccnxcXG4pL1xuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBuZXdsaW5lIGNoYXJhY3RlciwgcGx1cyBcXHJcXG4uICovXG5jb25zdCByZVVuZXdsaW5lID0gL14oPzpcXHJcXG58W1xcclxcblxcdTAwODVcXHUyMDI4XFx1MjAyOV0pL3VcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCBhbmQgbWF0Y2hlcyBpdCBhcyBmYXJcbiAqIGFzIGl0IGNhbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqXG4gKiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHJlZ2V4IGJlZ2lucyB3aXRoIGEgYF5gIC4gVGhlIGBnYCBmbGFnIGlzXG4gKiBpZ25vcmVkIGluIHRoYXQgb25seSB0aGUgZmlyc3QgbWF0Y2ggaXMgcHJvY2Vzc2VkIGFuZCByZXR1cm5lZC4gVGhpc1xuICogZW5zdXJlcyB0aGF0IHRoZSBtYXRjaCBpcyBvbmx5IGFnYWluc3QgdGhlIHRleHQgZGlyZWN0bHkgYXQgdGhlXG4gKiBjdXJyZW50IHBvaW50ZXIgbG9jYXRpb24uXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBtYXRjaCBhZ2FpbnN0IHRoZVxuICogICAgIGlucHV0IHRleHQgc3RhcnRpbmcgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXG4gKiAgICAgZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbiBhbmQgc3VjY2VlZHNcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxuICovXG5jb25zdCByZWdleFBhcnNlciA9IHJlID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgcmVzdCA9IHZpZXdUb1N0cmluZyhpbmRleCwgdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXgsIHZpZXcpXG5cbiAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxuICByZXR1cm4gbWF0Y2hcbiAgICA/IG9rUmVwbHkoY3R4LCBtYXRjaFswXSwgaW5kZXggKyBzdHJpbmdUb1ZpZXcobWF0Y2hbMF0pLmJ5dGVMZW5ndGgpXG4gICAgOiBmYWlsUmVwbHkoY3R4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSBzdXBwbGllZCByZWd1bGFyIGV4cHJlc3Npb24gdG9cbiAqIHRoZSBpbnB1dCB0ZXh0IGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJZiB0aGVyZSBpcyBhIG1hdGNoLCBhbnlcbiAqIG1hdGNoaW5nIHRleHQgaXMgcmV0dXJuZWQgYXMgYSBzdWNjZXNzZnVsIHJlc3VsdC4gTm8gdGV4dCBpcyBjb25zdW1lZFxuICogdXBvbiBmYWlsdXJlLlxuICpcbiAqIEEgc3RyaW5nIGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBwYXJzZXIuIElmIG9uZSBpcywgaXQgaXMgY29udmVydGVkXG4gKiBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGhvdXQgZmxhZ3MuXG4gKlxuICogSWYgYSBzdGFydCBhbmNob3IgKF4pIGlzIG5vdCBpbmNsdWRlZCwgb25lIHdpbGwgYmUgYWRkZWQuIElmIHRoZSBgZ2BcbiAqIGZsYWcgaXMgaW5jbHVkZWQsIGl0J2xsIGZ1bmN0aW9uYWxseSBiZSBpZ25vcmVkIGFzIG9ubHkgdGhlIGZpcnN0XG4gKiBtYXRjaCB3aWxsIGJlIGNvbnNpZGVyZWQgYW55d2F5LiBUaGVzZSB0d28gcnVsZXMgZW5zdXJlIHRoYXQgdGhlXG4gKiBtYXRjaCBpcyBvbmx5IGF0dGVtcHRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHRleHQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvIGFcbiAqICAgICByZWd1bGFyIGV4cHJlc3Npb24gd2l0aCBubyBmbGFncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCByZWdleCA9IHJlID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JSZWdFeHAoJ3JlZ2V4JywgcmUpXG5cbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xuICBsZXQgcmVnZXggPSB0eXBlb2YgcmUgPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChyZSkgOiByZVxuXG4gIC8vIE5leHQsIG1ha2Ugc3VyZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHN0YXJ0cyB3aXRoIGEgXiBhbmNob3JcbiAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxuICBjb25zdCByZWFuY2hvciA9IHNvdXJjZVswXSAhPT0gJ14nXG4gIGlmIChyZWFuY2hvcikge1xuICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChuZXdTb3VyY2UsIGZsYWdzKVxuICB9XG5cbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVnZXgpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5yZWdleChyZWdleCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbGV0dGVyLiBBIGxldHRlciBmb3IgdGhpcyBwdXJwb3NlIGlzIGFueSBjaGFyYWN0ZXIgd2l0aCB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlTGV0dGVyKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMubGV0dGVyVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYWxwaGFudW1lcmljLiBBIGNoYXJhY3RlciBpcyBhbHBoYW51bWVyaWMgaWYgaXQgaGFzIGVpdGhlciB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5IG9yIHRoZSBVbmljb2RlIGBOdW1iZXJgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVBbHBoYSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLmFscGhhVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgZWl0aGVyIGFuIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpc1xuICogdXBwZXJjYXNlIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgVXBwZXJjYXNlYCBwcm9wZXJ0eSBhbmQgaXMgdGl0bGVjYXNlXG4gKiBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYExldHRlciwgVGl0bGVjYXNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgdXBwZXJVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlVXBwZXIpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy51cHBlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXMgbG93ZXJjYXNlIGlmIGl0IGhhcyB0aGVcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZUxvd2VyKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMubG93ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgdGhpcyBwYXJzZXJcbiAqIHJlY29nbml6ZXMgYXJlIHNwYWNlLCB0YWIsIGFuZCBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKGBcXHJgLCBgXFxuYCxcbiAqIG9yIGBcXHJcXG5gKS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVTcGFjZSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLnNwYWNlKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBBIGNoYXJhY3RlciBpcyB3aGl0ZXNwYWNlIGZvciB0aGVcbiAqIHB1cnBvc2Ugb2YgdGhpcyBwYXJzZXIgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBXaGl0ZV9TcGFjZWAgcHJvcGVydHkuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBhbHNvIHJlY29nbml6ZSB0aGUgdHdvLWNoYXJhY3RlciBjb21iaW5hdGlvbiBgXFxyXFxuYFxuICogYXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2Ygd2hpdGVzcGFjZS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlVXNwYWNlKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMuc3BhY2VVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlclxuICogYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm8gd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCxcbiAqIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZSBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycGN0eCwgX10gPSByZWdleFBhcnNlcihyZVNwYWNlcykoY3R4KVxuICByZXR1cm4gb2tSZXBseShycGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm9cbiAqIHdoaXRlc3BhY2VzIGlzIGVub3VnaCB0byBtYWtlIGl0IHN1Y2NlZWQsIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZVxuICogaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3RcbiAqIHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlc1UgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBfXSA9IHJlZ2V4UGFyc2VyKHJlVXNwYWNlcykoY3R4KVxuICByZXR1cm4gb2tSZXBseShycGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsXG4gKiBvbmx5IGZhaWwgaWYgdGhlcmUgaXMgbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPblxuICogc3VjY2VzcywgaXQgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczEgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBycHJlc10gPSByZWdleFBhcnNlcihyZVNwYWNlczEpKGN0eClcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IG9rUmVwbHkocnBjdHgsIG51bGwpXG4gICAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5zcGFjZXMxKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBycHJlc10gPSByZWdleFBhcnNlcihyZVVzcGFjZXMxKShjdHgpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBva1JlcGx5KHJwY3R4LCBudWxsKVxuICAgIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMuc3BhY2VzMVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlTmV3bGluZSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLm5ld2xpbmUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIGluIFVuaWNvZGUgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxuICpcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcbiAqICogYE5FTGAgKG5leHQgbGluZSwgYFUrMDA4NWApXG4gKiAqIGBMU2AgKGxpbmUgc2VwYXJhdG9yLCBgVSsyMDI4YClcbiAqICogYFBTYCAocGFyYWdyYXBoIHNlcGFyYXRvciwgYFUrMjAyOWApXG4gKlxuICogVGhpcyBkb2VzIG5vdCBpbmNsdWRlIHRoZSBjaGFyYWN0ZXJzIGBcXGZgIG9yIGBcXHZgLCB3aGljaCB3aGlsZSBiZWluZ1xuICogdmVydGljYWwgc2VwYXJhdG9ycywgYXJlbid0IHJlYWxseSBuZXdsaW5lcyBpbiB0aGUgdHJhZGl0aW9uYWwgc2Vuc2UuXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZVVuZXdsaW5lKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMubmV3bGluZVUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0TnVtYmVyLCBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgZHVwLCBuZXh0Q2hhcnMsIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGUgY3VycmVudFxuICogcG9zaXRpb24gaW4gdGhlIHRleHQuIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgZXF1YWwgaW4gbGVuZ3RoIHRvXG4gKiBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXG4gKiAgICAgc2hvdWxkIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIHJlYWRcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSByZWFkIHN0cmluZyBwYXNzZXNcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICovXG5jb25zdCBzdHJpbmdQYXJzZXIgPSAobGVuZ3RoLCBmbikgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGlmIChsZW5ndGggPCAxKSByZXR1cm4gb2tSZXBseShjdHgsICcnKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZmFpbFJlcGx5KGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICA/IGZhaWxSZXBseShjdHgpXG4gICAgOiBva1JlcGx5KGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZSBpbnB1dFxuICogYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGUgc3RyaW5nIG1hdGNoIG11c3QgYmVcbiAqIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmUgcmVjb2duaXplZFxuICogcHJvcGVybHkuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nID0gc3RyID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzdHJpbmcnLCBzdHIpXG5cbiAgY29uc3QgW3NwcmVwLCBbc3BjdHgsIHNwcmVzXV0gPSBkdXAoc3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcbiAgKShjdHgpKVxuICByZXR1cm4gc3ByZXMuc3RhdHVzID09PSBPayA/IHNwcmVwIDogZmFpbFJlcGx5KHNwY3R4LCBleHBlY3RlZHMuc3RyaW5nKHN0cikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGUgaW5wdXRcbiAqIGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhpcyBtYXRjaCBpcyAqbm90KlxuICogY2FzZS1zZW5zaXRpdmUuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBjYXNlLWluc2Vuc2l0aXZlbHkgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ0kgPSBzdHIgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ3N0cmluZ0knLCBzdHIpXG5cbiAgY29uc3QgW3NwcmVwLCBbc3BjdHgsIHNwcmVzXV0gPSBkdXAoc3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyLnRvTG93ZXJDYXNlKCkgPT09IGNoYXJzLnRvTG93ZXJDYXNlKCksXG4gICkoY3R4KSlcbiAgcmV0dXJuIHNwcmVzLnN0YXR1cyA9PT0gT2sgPyBzcHJlcCA6IGZhaWxSZXBseShzcGN0eCwgZXhwZWN0ZWRzLnN0cmluZ0koc3RyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB0aGUgcmVtYWluZGVyIG9mIHRoZSBpbnB1dCB0ZXh0IGFuZCByZXN1bHRzIGluXG4gKiB0aGF0IHRleHQuIFN1Y2NlZWRzIGlmIGFscmVhZHkgYXQgRU9GLCByZXN1bHRpbmcgaW4gYW4gZW1wdHkgc3RyaW5nLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhbGwgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcbiAgcmV0dXJuIG9rUmVwbHkoY3R4LCB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nIHRoZW0gKGFzIGFcbiAqIHN0cmluZykgYXMgaXRzIHJlc3VsdC4gVGhlIHBhcnNlciB3aWxsIGZhaWwgaWYgdGhlcmUgYXJlIG5vdCB0aGF0XG4gKiBtYW55IGNoYXJhY3RlcnMgbGVmdCB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZWFkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyB0aGF0IG1hbnkgY2hhcmFjdGVycyBhbmQgam9pbnNcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlTdHJpbmcgPSBuID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdhbnlTdHJpbmcnLCBuKVxuXG4gIGNvbnN0IFtzcHJlcCwgW3NwY3R4LCBzcHJlc11dID0gZHVwKHN0cmluZ1BhcnNlcihuLCAoKSA9PiB0cnVlKShjdHgpKVxuICByZXR1cm4gc3ByZXMuc3RhdHVzID09PSBPayA/IHNwcmVwIDogZmFpbFJlcGx5KHNwY3R4LCBleHBlY3RlZHMuYW55U3RyaW5nKG4pKVxufSlcbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG4vLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIHBhcnNlciB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IGNvbXBvdW5kLCBleHBlY3RlZCwgbmVzdGVkIH0gZnJvbSAnLi9lcnJvcidcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlcGx5fSBSZXBseSAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3InKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcyBpbnRvIGEgVUNTLTIgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG5cbi8qKlxuICogQW4gaXRlcmF0b3IgdGhhdCBjb3ZlcnMgYSByYW5nZSBmcm9tIGEgc3RhcnRpbmcgdmFsdWUgdG8gYW4gZW5kaW5nXG4gKiB2YWx1ZSwgc3RlcHBpbmcgYnkgYSBjZXJ0YWluIHZhbHVlIGJldHdlZW4gZWFjaC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBmaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbGFzdCBudW1iZXIgb2YgdGhlIHJhbmdlLiBCeSBkZWZhdWx0IHRoaXNcbiAqICAgICBudW1iZXIgZm9ybXMgdGhlIHVwcGVyIGJvdW5kIG9mIHRoZSByYW5nZSB3aXRob3V0IGJlaW5nIGluY2x1ZGVkXG4gKiAgICAgaW4gaXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIG51bWJlciB0byBpbmNyZWFzZSB0aGUgeWllbGRlZCB2YWx1ZSBieVxuICogICAgIGR1cmluZyBlYWNoIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1c2l2ZT1mYWxzZV0gRGV0ZXJtaW5lcyB3aGV0aGVyIGBlbmRgIHNob3VsZCBiZVxuICogICAgIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHJhbmdlLlxuICogQHlpZWxkcyB7bnVtYmVyfSBUaGUgdmFsdWVzIHRoYXQgbWFrZSB1cCB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgaW5jbHVzaXZlKSB7XG4gIGNvbnN0IHMgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IHN0YXJ0IDogMFxuICBjb25zdCBlID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBlbmQgOiBzdGFydFxuICBjb25zdCBwID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInID8gc3RlcCA9PT0gMCA/IDEgOiBNYXRoLmFicyhzdGVwKSA6IDFcbiAgY29uc3QgaSA9IHR5cGVvZiBzdGVwID09PSAnbnVtYmVyJ1xuICAgID8gISFpbmNsdXNpdmUgOiB0eXBlb2YgZW5kID09PSAnbnVtYmVyJ1xuICAgICAgPyAhIXN0ZXAgOiAhIWVuZFxuXG4gIGNvbnN0IGZvcndhcmQgPSBzIDwgZVxuICBsZXQgY3VycmVudCA9IHNcblxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IHtcbiAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgcmV0dXJuIGkgPyBjdXJyZW50ID4gZSA6IGN1cnJlbnQgPj0gZVxuICAgIH1cbiAgICByZXR1cm4gaSA/IGN1cnJlbnQgPCBlIDogY3VycmVudCA8PSBlXG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXG4gIHdoaWxlICghZmluaXNoZWQoKSkge1xuICAgIHlpZWxkIGN1cnJlbnRcbiAgICBjdXJyZW50ID0gZm9yd2FyZCA/IGN1cnJlbnQgKyBwIDogY3VycmVudCAtIHBcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbn1cblxuLyoqXG4gKiBBbiBpdGVyYXRvciB0aGF0IHBhaXJzIHZhbHVlcyBpbiBhbiBpdGVyYWJsZSB3aXRoIHRoZWlyIGluZGV4ZXMgaW4gYVxuICogc2VyaWVzIG9mIHR3by1lbGVtZW50IGFycmF5cy4gVGhlIGZpcnN0IGFycmF5IGVsZW1lbnQgaXMgdGhlIGluZGV4O1xuICogdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgZnJvbSB0aGUgaXRlcmFibGUuXG4gKlxuICogRm9yIGFycmF5cywgdGhpcyBjYW4gYmUgZG9uZSB3aXRoIGBhcnJheS5lbnRyaWVzKClgLCB3aGljaCBwcm9kdWNlc1xuICogdHdvLWVsZW1lbnQgYXJyYXlzIGluIHRoZSBzYW1lIGZvcm1hdC4gSG93ZXZlciwgdGhpcyBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uIHdpbGwgd29yayB3aXRoIGFueSBraW5kIG9mIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlXG4gKiBgSXRlcmFibGVgIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSBBbiBpdGVyYWJsZSBvYmplY3Qgd2hvc2UgZWxlbWVudHMgd2lsbFxuICogICAgIGJlIHBhaXJlZCB3aXRoIHRoZWlyIGluZGV4ZXMuXG4gKiBAeWllbGRzIHtbbnVtYmVyLCAqXX0gVGhlIGl0ZXJhYmxlJ3MgdmFsdWVzLCBwYWlyZWQgd2l0aCB0aGVpclxuICogICAgIGluZGV4ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqZW51bWVyYXRlKGl0ZXJhYmxlKSB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpXG4gIGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KClcbiAgbGV0IGluZGV4ID0gMFxuXG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICB5aWVsZCBbaW5kZXgrKywgcmVzdWx0LnZhbHVlXVxuICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHBvcnRpb24gb2YgYSBVVEYtOCBkYXRhIHZpZXcgYXMgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB0byBiZSB0aGUgZmlyc3QgaW4gdGhlXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBpbmNsdWRlIGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dCBmcm9tIHdoaWNoXG4gKiAgICAgdGhlIGdlbmVyYXRlZCBzdHJpbmcgaXMgdGFrZW4uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIFVDUy0yIChyZWd1bGFyIEphdmFTY3JpcHQgc3RyaW5nKSByZXByZXNlbnRhdGlvblxuICogICAgIG9mIHRoZSBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoZSBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aWV3VG9TdHJpbmcoaW5kZXgsIGxlbmd0aCwgdmlldykge1xuICBjb25zdCBieXRlcyA9IFVpbnQ4QXJyYXkuZnJvbShcbiAgICB7IGxlbmd0aCB9LFxuICAgIChfLCBpKSA9PiB2aWV3LmdldFVpbnQ4KGluZGV4ICsgaSksXG4gIClcbiAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGJ5dGVzKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBVVEYtOCBkYXRhIHZpZXcgb2YgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZSBpbnRvIGEgVVRGLTggZGF0YSB2aWV3LlxuICogQHJldHVybnMge0RhdGFWaWV3fSBBIGRhdGEgdmlldyBvdmVyIHRoZSBVVEYtOCBieXRlcyBvZiB0aGUgaW5wdXRcbiAqICAgICBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ZpZXcoc3RyKSB7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcoZW5jb2Rlci5lbmNvZGUoc3RyKS5idWZmZXIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuIFRoaXMgY2FuIGRpZmZlclxuICogZnJvbSB0aGUgbnVtYmVyIG9mIFVDUy0yIGNoYXJhY3RlcnMgaW4gdGhlIHNhbWUgc3RyaW5nLCBtZWFuaW5nIHRoaXNcbiAqIHZhbHVlIGNhbiBkaWZmZXIgZnJvbSB0aGUgYGxlbmd0aGAgcHJvcGVydHkgb2YgdGhlIHNhbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyBvZiB3aGljaCB0byBnZXQgdGhlIGNoYXJhY3RlciBsZW5ndGguXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgVVRGLTggY2hhcmFjdGVycyBpbiB0aGF0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJMZW5ndGgoc3RyKSB7XG4gIHJldHVybiBbLi4uc3RyXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIGN1cnJlbnRseSBpbmRleGVkIGluIHRoZSB2aWV3LFxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgd2l0aGluIHRoZSB2aWV3IHRoYXQgaXNcbiAqICAgICB0aGUgZmlyc3QgKGFuZCBwZXJoYXBzIG9ubHkpIGJ5dGUgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcmV0dXJucyB7KDF8MnwzfDQpfSBUaGUgbnVtYmVyIG9mIGJ5dGVzIGNvbnRhaW5lZCBpbiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmICgoYnl0ZSAmIDB4ODApID4+IDcgPT09IDApIHJldHVybiAxXG4gIGlmICgoYnl0ZSAmIDB4ZTApID4+IDUgPT09IDBiMTEwKSByZXR1cm4gMlxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTApIHJldHVybiAzXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMSkgcmV0dXJuIDRcbiAgLy8gSG9wZWZ1bGx5IHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBoZXJlIGluIGNhc2Ugb25lIG9mIHRob3NlIGhpZ2hcbiAgLy8gYXNjaWkgY29kZXMgaXMgdXNlZFxuICByZXR1cm4gMVxufVxuXG4vKipcbiAqIENvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcihzKSBpbiB0aGUgZGF0YSB2aWV3LlxuICpcbiAqIEB0eXBlZGVmIE5leHRDaGFySW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmV0dXJuZWQgY2hhcmFjdGVyKHMpLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5leHQgVGhlIG5leHQgY2hhcmFjdGVyKHMpLlxuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGF0IHRoZSBpbmRleGVkIHBvc2l0aW9uIHdpdGhpbiB0aGUgZGF0YSB2aWV3LlxuICogVGhpcyBjaGFyYWN0ZXIgbWF5IGJlIGEgMS0sIDItLCAzLSwgb3IgNC1ieXRlIGNoYXJhY3RlciBkZXBlbmRpbmcgb25cbiAqIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IHdpZHRoID0gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldylcbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGBjb3VudGAgY2hhcmFjdGVycyBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvblxuICogd2l0aGluIHRoZSB2aWV3LiBFYWNoIG9mIHRoZXNlIGNoYXJhY3RlcnMgbWF5IGJlIDEtLCAyLSwgMy0sIG9yXG4gKiA0LWJ5dGUgY2hhcmFjdGVycyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGVpciBmaXJzdCBieXRlcy4gSWZcbiAqIHRoZXJlIGFyZSBub3QgZW5vdWdoIGNoYXJhY3RlcnMgbGVmdCwgdGhvc2UgcmVtYWluaW5nIHdpbGwgYmVcbiAqIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXG4gKiAgICAgdGhlIGZpcnN0IGRlc2lyZWQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJldHVybi5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlXG4gKiAgICAgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBjb3VudCkge1xuICBjb25zdCB2aWV3TGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoXG4gIGxldCB3aWR0aCA9IDBcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UoY291bnQpKSB7XG4gICAgY29uc3QgaSA9IGluZGV4ICsgd2lkdGhcbiAgICBpZiAoaSA+PSB2aWV3TGVuZ3RoKSBicmVha1xuICAgIHdpZHRoICs9IG5leHRDaGFyV2lkdGgoaSwgdmlldylcbiAgfVxuICBpZiAoaW5kZXggKyB3aWR0aCA+PSB2aWV3TGVuZ3RoKSB7XG4gICAgd2lkdGggPSB2aWV3TGVuZ3RoIC0gaW5kZXhcbiAgfVxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxufVxuXG4vKipcbiAqIFN1cnJvdW5kcyB0aGUgc3VwcGxpZWQgc3RyaW5nIGluIHNpbmdsZSBxdW90ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN1cnJvdW5kIGluIHNpbmdsZSBxdW90ZXMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGxlZCBhbmQgdHJhaWxlZCBieSBzaW5nbGUgcXVvdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVvdGUoc3RyKSB7XG4gIHJldHVybiBgJyR7c3RyfSdgXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0d28gY29waWVzIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIHNvcnQgb2YgZW11bGF0ZXMgKmFzLXBhdHRlcm5zKiBpbiBhIGxpbWl0ZWQgd2F5IGluIEphdmFTY3JpcHQuXG4gKiBJbiBsYW5ndWFnZXMgbGlrZSBIYXNrZWxsIGFuZCBNTCwgd2hlbiBwYXR0ZXJuIG1hdGNoaW5nIGlzIGRvbmUsXG4gKiB0aGVyZSBpcyBhIGNvbnN0cnVjdCB0byBiZSBhYmxlIHRvIHJldGFpbiBhIGxhcmdlciBwYXJ0IG9mIHRoZVxuICogZGVzdHJ1Y3R1cmVkIHBhdHRlcm4gd2hpbGUgYWxzbyBicmVha2luZyBpdCBkb3duIGZ1cnRoZXIuIEluIEhhc2tlbGwsXG4gKlxuICogYGBgaGFza2VsbFxuICogKGhlYWQgOiB0YWlsKSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogd2lsbCBhc3NpZ24gYDFgIHRvIGBoZWFkYCwgYW5kIGBbMiwgMywgNCwgNV1gIHRvIGB0YWlsYC4gVGhpcyBjYW4gYmVcbiAqIGRvbmUgaW4gSmF2YVNjcmlwdCBhcyB3ZWxsLCBsaWtlIHRoaXM6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgW2hlYWQsIC4uLnRhaWxdID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBIb3dldmVyLCBIYXNrZWxsIGNhbiBnbyBmYXJ0aGVyOiBpdCBjYW4gYWxzbyBhc3NpZ24gdGhlIGVudGlyZSBsaXN0XG4gKiBhcyBhIHdob2xlIHRvIGFub3RoZXIgdmFyaWFibGUgd2hpbGUgc3RpbGwgYXNzaWduaW5nIGl0cyBlbGVtZW50cyBhc1xuICogYWJvdmUuIEl0J3MgZG9uZSBsaWtlIHRoaXM6XG4gKlxuICogYGBgaGFza2VsbFxuICogbGlzdCBAIChoZWFkIDogdGFpbCkgPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIFRoaXMgd2lsbCwgaW4gYWRkaXRpb24gdG8gdGhlIGFzc2lnbm1lbnRzIGFib3ZlLCBhc3NpZ24gYFsxLCAyLCAzLCA0LFxuICogNV1gIHRvIGBsaXN0YC4gVGhlIGBAYCBzaWduIGlzIHJlYWQgKmFzKiwgYW5kIHRoaXMgY29uc3RydWN0IGlzXG4gKiBjYWxsZWQgYW4gKmFzLXBhdHRlcm4qIChwZXJoYXBzIGJlY2F1c2UgdGhlIE1MIHdheSBvZiBkb2luZyBpdCB1c2VzXG4gKiB0aGUgYGFzYCBrZXl3b3JkIGluc3RlYWQgb2YgdGhlIGBAYCBzeW1ib2wpLlxuICpcbiAqIFRoZXJlIGlzIG5vIGZhY2lsaXR5IHRvIGRvIHRoaXMgaW4gSmF2YVNjcmlwdC4gQnV0IHRoZXJlIGFyZSBtYW55XG4gKiBwbGFjZXMgaW4gdGhpcyBsaWJyYXJ5IHdoZXJlIGEgYFJlcGx5YCBpcyBkZXNjdHVyY3R1cmVkIGludG8gaXRzXG4gKiBgQ29udGV4dGAgYW5kIGBSZXN1bHRgIGVsZW1lbnRzLCB5ZXQgdGhlcmUgaXMgYSBuZWVkIHRvIGNvbmRpdGlvbmFsbHlcbiAqIHVzZSB0aGUgZW50aXJlIGBSZXBseWAgYXMgd2VsbCAobm9ybWFsbHkgdG8gcmV0dXJuIGl0IGlmIHNvbWVcbiAqIGNvbmRpdGlvbiBpcyBtZXQpLiBSYXRoZXIgdGhhbiBjcmVhdGUgYSBuZXcgYFJlcGx5YCBmcm9tIHRoZXNlIHBhcnRzLFxuICogYHR3aW5gIGNhbiBiZSB1c2VkIHRvIGR1cGxpY2F0ZSB0aGUgcmVmZXJlbmNlcyB0byB0aGUgYFJlcGx5YC4gVGhlblxuICogb25seSAqb25lKiBvZiB0aGUgZHVwbGljYXRlIHJlZmVyZW5jZXMgY2FuIGJlIGRlc3RydWN0dXJlZCwgd2hpbGUgdGhlXG4gKiBvdGhlciBvbmUgaXMgcmV0YWluZWQgYXMgYSB3aG9sZS5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocGFyc2VyKGN0eCkpXG4gKiBgYGBcbiAqXG4gKiBBcy1wYXR0ZXJucyBjYW4gYmUgdXNlZCBvbiBwaWVjZXMgb2YgYSBwYXR0ZXJuIGluc3RlYWQgb2YgdGhlIGVudGlyZVxuICogcGF0dGVybiwgYW5kIGB0d2luYCBjYW5ub3QgZG8gdGhhdC4gQnV0IGl0IHNlcnZlcyBmb3Igd2hhdCBpcyBuZWVkZWRcbiAqIGluIEtlc3NlbC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSB2YWx1ZSBBIHJlcGx5IHRoYXQgbmVlZHMgdG8gYmUgZGVzdHJ1Y3R1cmVkIHdoaWxlXG4gKiAgICAgbWFpbnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIHdob2xlLlxuICogQHJldHVybnMge1tSZXBseSwgUmVwbHldfSBBbiBhcnJheSBjb250YWluaW5nIHR3byBjb3BpZXMgb2YgdGhlXG4gKiAgICAgcmVwbHkuIE9uZSBjYW4gYmUgZGVzdHJ1Y3R1cmVkIHdoaWxlIHRoZSBvdGhlciBpcyByZXRhaW5lZCB3aG9sZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGR1cCh2YWx1ZSkge1xuICByZXR1cm4gW3ZhbHVlLCB2YWx1ZV1cbn1cblxuLyoqXG4gKiBDb21tYS1zZXBhcmF0ZXMgKGFzIG5lZWRlZCkgdGhlIHN0cmluZ3MgaW4gdGhlIHByb3ZpZGVkIGFycmF5LiBJZlxuICogdGhlIGFycmF5IGlzIGVtcHR5LCB0aGUgcmVzdWx0IHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nOyBpZiB0aGUgYXJyYXlcbiAqIGhhcyBvbmx5IG9uZSBlbGVtZW50LCB0aGF0IGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZC4gSWYgdGhlIGFycmF5IGhhc1xuICogdHdvIGVsZW1lbnRzLCB0aGV5IHdpbGwgYmUgam9pbmVkIHdpdGggJyBvciAnIGJldHdlZW4gdGhlbS4gSWYgdGhlXG4gKiBhcnJheSBpcyBsb25nZXIgdGhhbiB0aGF0LCBhbGwgZWxlbWVudHMgd2lsbCBiZSBjb21tYS1zZXBhcmF0ZWQgd2l0aFxuICogYW4gYWRkaXRpb25hbCAnb3InIGJldHdlZW4gdGhlIGxhc3QgdHdvIGVsZW1lbnRzIChPeGZvcmQgY29tbWFcbiAqIHN0eWxlKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBtZXNzYWdlcyBUaGUgc3RyaW5ncyB0aGF0IG5lZWQgdG8gYmUgam9pbmVkIGludG9cbiAqICAgICBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbWVzc2FnZXMgam9pbmVkIGludG8gYSBzaW5nbGUgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWFTZXBhcmF0ZShtZXNzYWdlcykge1xuICBzd2l0Y2ggKG1lc3NhZ2VzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuICcnXG4gICAgY2FzZSAxOiByZXR1cm4gbWVzc2FnZXNbMF1cbiAgICBjYXNlIDI6IHJldHVybiBtZXNzYWdlcy5qb2luKCcgb3IgJylcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMuc2xpY2UoKVxuICAgICAgY29uc3QgbGFzdCA9IG1zZ3MucG9wKClcbiAgICAgIHJldHVybiBgJHttc2dzLmpvaW4oJywgJyl9LCBvciAke2xhc3R9YFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEF1Z21lbnRzIGEgZmFjdG9yeSBmdW5jdGlvbiB0byBiZSBhYmxlIHRvIGRldGVybWluZSB3aGV0aGVyIGl0XG4gKiBjcmVhdGVkIGFuIGFyYml0cmFyeSBvYmplY3QuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIGlzIGFzc2lnbmVkIGFuXG4gKiBhZGRpdGlvbmFsIHByb3BlcnR5IChieSBkZWZhdWx0IG5hbWVkIGBjcmVhdGVkYCwgY2FuIGJlIGNoYW5nZWQgYnlcbiAqIHBhc3NpbmcgaW4gdGhlIGBwcm9wYCBhcmd1bWVudCkgd2hpY2ggaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBvYmplY3QgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZSBmYWN0b3J5IGNyZWF0ZWQgaXQgb3IgYGZhbHNlYCBpZiBpdFxuICogZGlkIG5vdC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgYXVnbWVudGVkIHdpdGhcbiAqICAgICB0aGUgbmV3IHByb3BlcnR5LlxuICogQHBhcmFtIHtzdHJpbmd8c3ltYm9sfSBbcHJvcD0nY3JlYXRlZCddIFRoZSBwcm9wZXJ0eSB0aGF0IHdpbGwgYmVcbiAqICAgICBhZGRlZCB0byB0aGUgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gVGhlIGF1Z21lbnRlZCBmYWN0b3J5IGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2soZm4sIHByb3AgPSAnY3JlYXRlZCcpIHtcbiAgY29uc3QgdHJhY2tlZCA9IG5ldyBXZWFrU2V0KClcblxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVkID0gZm4oLi4uYXJncylcbiAgICAgIHRyYWNrZWQuYWRkKGNyZWF0ZWQpXG4gICAgICByZXR1cm4gY3JlYXRlZFxuICAgIH0sXG4gICAgcHJvcCxcbiAgICB7IHZhbHVlOiB0cmFja2VkLmhhcy5iaW5kKHRyYWNrZWQpIH0sXG4gIClcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIG51bWJlciB0byBpdHMgc3RyaW5nIG9yZGluYWwgZm9ybSAoaS5lLiwgYDFgIGJlY29tZXNcbiAqIGAnMXN0J2AsIGAxNzI5YCBiZWNvbWVzIGAnMTcyOXRoJ2AsIGV0Yy4pXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIG51bWJlciBpbiBpdHMgb3JkaW5hbCBmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gIGNvbnN0IHN1ZmZpeGVzID0gWyd0aCcsICdzdCcsICduZCcsICdyZCddXG4gIGNvbnN0IHYgPSBuICUgMTAwXG4gIHJldHVybiBuICsgKHN1ZmZpeGVzWyh2IC0gMjApICUgMTBdID8/IHN1ZmZpeGVzW3ZdID8/IHN1ZmZpeGVzWzBdKVxufVxuXG5jb25zdCBudW1zID0gW1xuICAnemVybycsICdvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZScsICdzaXgnLCAnc2V2ZW4nLCAnZWlnaHQnLFxuICAnbmluZScsICd0ZW4nLCAnZWxldmVuJywgJ3R3ZWx2ZScsICd0aGlydGVlbicsICdmb3VydGVlbicsICdmaWZ0ZWVuJyxcbiAgJ3NpeHRlZW4nLCAnc2V2ZW50ZWVuJywgJ2VpZ2h0ZWVuJywgJ25pbmV0ZWVuJyxcbl1cbmNvbnN0IG9uZXMgPSBbXG4gICd6ZXJvdGgnLCAnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdmaWZ0aCcsICdzaXh0aCcsICdzZXZlbnRoJyxcbiAgJ2VpZ2h0aCcsICduaW50aCcsICd0ZW50aCcsICdlbGV2ZW50aCcsICd0d2VsZnRoJywgJ3RoaXJ0ZWVudGgnLFxuICAnZm91cnRlZW50aCcsICdmaWZ0ZWVudGgnLCAnc2l4dGVlbnRoJywgJ3NldmVudGVlbnRoJywgJ2VpZ2h0ZWVudGgnLFxuICAnbmluZXRlZW50aCcsXG5dXG5jb25zdCB0ZW5zID0gW1xuICAndHdlbnQnLCAndGhpcnQnLCAnZm9ydCcsICdmaWZ0JywgJ3NpeHQnLCAnc2V2ZW50JywgJ2VpZ2h0JywgJ25pbmV0Jyxcbl1cbmNvbnN0IGdyb3VwcyA9IFtcbiAgJ2h1bmRyZWQnLCAndGhvdXNhbmQnLCAnbWlsbGlvbicsICdiaWxsaW9uJywgJ3RyaWxsaW9uJywgJ3F1YWRyaWxsaW9uJyxcbl1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIG51bWJlciBpbnRvIGl0cyB3b3JkLWJhc2VkIG9yZGluYWwgZm9ybSAoaS5lLiwgYDFgIGJlY29tZXNcbiAqIGAnZmlyc3QnYCwgYDE3MjlgIGJlY29tZXMgYCdvbmUgdGhvdXNhbmQgc2V2ZW4gaHVuZHJlZFxuICogdHdlbnR5LW5pbnRoJ2AsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gY29udmVydCBpbnRvIGFuIG9yZGluYWwuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBudW1iZXIgaW4gaXRzIHdvcmQtYmFzZWQgb3JkaW5hbCBmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd29yZGluYWwobikge1xuICBpZiAobiA8IDAgfHwgbiA+IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgJHtOdW1iZXIuTUFYX1NBRkVfSU5URUdFUn1gKVxuICB9XG4gIGNvbnN0IG1hZyA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChuKSlcblxuICBpZiAobiA8IDIwKSByZXR1cm4gb25lc1tuXVxuICBpZiAobWFnID09PSAxKSB7XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IobiAvIDEwKSAtIDJcbiAgICByZXR1cm4gbiAlIDEwID09PSAwID8gYCR7dGVuc1tpXX1pZXRoYCA6IGAke3RlbnNbaV19eS0ke29uZXNbbiAlIDEwXX1gXG4gIH1cbiAgaWYgKG1hZyA9PT0gMikge1xuICAgIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4gLyAxMCAqKiBtYWcpXG4gICAgY29uc3QgeCA9IG4gLSBmICogMTAgKiogbWFnXG4gICAgcmV0dXJuIGAke251bXNbZl19ICR7Z3JvdXBzWzBdfSR7eCA9PT0gMCA/ICd0aCcgOiBgICR7d29yZGluYWwoeCl9YH1gXG4gIH1cblxuICBjb25zdCBnID0gbWFnICUgMyArIDFcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IobWFnIC8gMylcbiAgY29uc3QgZiA9IE1hdGguZmxvb3IobiAvIDEwICoqIChtYWcgLSBnICsgMSkpXG4gIGNvbnN0IG0gPSAoZnVuY3Rpb24gbXVsdChudW0pIHtcbiAgICBpZiAobnVtIDwgMjApIHJldHVybiBudW1zW251bV1cblxuICAgIGNvbnN0IHJlbSA9IG51bSAlIDEwXG4gICAgaWYgKG51bSA8IDEwMCkge1xuICAgICAgcmV0dXJuIGAke3RlbnNbTWF0aC5mbG9vcihudW0gLyAxMCkgLSAyXX15JHtcbiAgICAgICAgcmVtID09PSAwID8gJycgOiBgLSR7bnVtc1tyZW1dfWBcbiAgICAgIH1gXG4gICAgfVxuXG4gICAgY29uc3QgeCA9IG51bSAtIE1hdGguZmxvb3IobnVtIC8gMTAwKSAqIDEwMFxuICAgIHJldHVybiBgJHtudW1zW01hdGguZmxvb3IobnVtIC8gMTAwKV19ICR7Z3JvdXBzWzBdfSR7XG4gICAgICB4ID09PSAwID8gJ3RoJyA6IGAgJHttdWx0KHgpfWBcbiAgICB9YFxuICB9KGYpKVxuICBjb25zdCB4ID0gbiAtIGYgKiAxMCAqKiAobWFnIC0gZyArIDEpXG4gIHJldHVybiBgJHttfSAke2dyb3Vwc1tpXX0ke3ggPT09IDAgPyAndGgnIDogYCAke3dvcmRpbmFsKHgpfWB9YFxufVxuXG4vKipcbiAqIFJldHVybnMgYSByZWFzb25hYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZhbHVlLiBUaGlzIHdpbGwgbW9zdFxuICogb2Z0ZW4gYmUgdGhlIG91dHB1dCBmcm9tIGBKU09OLnN0cmluZ2lmeSgpYCwgdGhvdWdoIHJlcHJlc2VudGF0aW9uc1xuICogYXJlIGFsc28gaW5jbHVkZWQgZm9yIHR5cGVzIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBzdXBwb3J0LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHR1cm4gaW50byBhIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcmVhc29uYWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCdcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwYXJzZXIuY3JlYXRlZCh2YWx1ZSkgPyAncGFyc2VyJyA6ICdmdW5jdGlvbidcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgcmV0dXJuIGBTeW1ib2woJHt2YWx1ZS5kZXNjcmlwdGlvbn0pYFxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpXG59XG5cbi8qKlxuICogQWRkcyB0aGUgYXBwcm9wcmlhdGUgaW5kZWZpbml0ZSBhcnRpY2xlICgnYScgb3IgJ2FuJykgdG8gYSB3b3JkIGJhc2VkXG4gKiBvbiBpdHMgZmlyc3QgbGV0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBwcmVwZW5kIGFuIGFydGljbGUgdG8uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggdGhlIHByZXBlbmRlZCBhcnRpY2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsaWZ5KHN0cikge1xuICByZXR1cm4gJ2FlaW91QUVJT1UnLmluY2x1ZGVzKHN0clswXSkgPyBgYW4gJHtzdHJ9YCA6IGBhICR7c3RyfWBcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVycm9yIHV0aWxpdGllc1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgZmFpbHVyZSByZXBseS4gVGhlIGNvbmRpdGlvblxuICogZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZXBseSB3aWxsIGJlIGZhdGFsIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb24gU2hvdWxkIGJlIGB0cnVlYCBmb3IgYSBmYXRhbCBmYWlsdXJlIG9yXG4gKiAgICAgYGZhbHNlYCBmb3IgYSBub24tZmF0YWwgZmFpbHVyZS5cbiAqIEByZXR1cm5zIFRoZSByZXBseSBmdW5jdGlvbiBmb3IgZmF0YWwgb3Igbm9uLWZhdGFsIGZhaWx1cmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbHlGbihjb25kaXRpb24pIHtcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IGZhdGFsUmVwbHkgOiBmYWlsUmVwbHlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCBmb3Igbm9uLWJhY2t0cmFja2VkIGVycm9ycyBmcm9tIHVuZGVybHlpbmdcbiAqIHBhcnNlcnMuIFRoZSAnZicgaXMgZm9yICdmbGF0JzsgdGhpcyBmdW5jdGlvbiBwcm9kdWNlcyBhIG5vbi1uZXN0ZWRcbiAqIGVycm9yIHdob3NlIG1lc3NhZ2UgaXMgYmFzZWQgdXBvbiB3aGV0aGVyIGBtYCBleGlzdHMgb3Igbm90LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgZ2VuZXJhdGVkIGJ5IHRoZSB1bmRlcmx5aW5nXG4gKiAgICAgcGFyc2VyLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgZXJyb3IgbGlzdCB0aGF0IGRvZXMgbm90IHRha2UgYmFja3RyYWNraW5nXG4gKiAgICAgaW50byBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmVycm9yKG0sIGVycm9ycykge1xuICByZXR1cm4gbSA9PSBudWxsID8gZXJyb3JzIDogZXhwZWN0ZWQobSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCBmb3IgYmFja3RyYWNrZWQgZXJyb3JzIGZyb20gdW5kZXJseWluZ1xuICogcGFyc2Vycy4gVGhlICduJyBpcyBmb3IgbmVzdGVkOyB0aGlzIGZ1bmN0aW9uIHByb2R1Y2VzIGEgbmVzdGVkXG4gKiBlcnJvciB0aGF0IGluc3RlYWQgYmUgYSBjb21wb3VuZCBlcnJvciBpZiBgbWAgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QgdGhhdCB0YWtlcyBiYWNrdHJhY2tpbmcgaW50b1xuICogICAgIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXJyb3IobSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIG0gPT0gbnVsbCA/IG5lc3RlZChjdHgsIGVycm9ycykgOiBjb21wb3VuZChtLCBjdHgsIGVycm9ycylcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCB0aGF0IHdpbGwgb25seSByZWNvcmQgYmFja3RyYWNraW5nXG4gKiBpbmZvcm1hdGlvbiBpZiB0aGUgcHJvdmlkZWQgY29uZGl0aW9uIGlzIHRydWUuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kIElmIGB0cnVlYCwgdGhlIG5ldyBlcnJvciBsaXN0IHdpbGwgaW5jbHVkZVxuICogICAgIGJhY2t0cmFja2luZyBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZXJyb3IoY29uZCwgbSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGNvbmQgPyBuZXJyb3IobSwgY3R4LCBlcnJvcnMpIDogZmVycm9yKG0sIGVycm9ycylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=