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
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
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
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors, index);
  } // This parser implements automatic backtracking, so if its parser
  // fails fatally, it has to track that through a nested error


  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(m, pctx, pres.errors) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(pctx, pres.errors), index);
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
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors;
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, errors);
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
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : undefined;
  const [pctx, pres] = p(ctx);
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, errors, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, null, index);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('attempt', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('attempt', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (pres.status === Ok) return prep;

  if (pres.status === Fatal || pctx.index !== index) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["back"])(m, pctx, pres.errors), index);
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
     true && ps.forEach((p, i) => Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('seqB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(i + 1, args.length > 1)));
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
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nonback"])(m, pres.errors));
      }

      if (pres.status === Fail) {
        const err = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["combined"])(pctx.index !== index, m, pctx, errors);
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, err, index);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chainB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chainB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('chainB', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  const index = ctx.index;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nonback"])(m, pres.errors));
  }

  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chainB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('second argument to return a parser'));
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));
  if (qres.status === Ok) return qrep;
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nonback"])(m, errors));
  const err = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["combined"])(qctx.index !== index, m, qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(qctx, err, index);
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
 * @returns {Parser} A parser that executes `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */

const applyB = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('applyB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('applyB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(qctx, errors);

  if (qres.status === Fail) {
    const err = index === qctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(qctx, err, index);
  }

  const fn = qres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('applyB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('2nd argument to return a function'));
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
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of the first.
 */

const leftB = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('leftB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('leftB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);
  if (qres.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(qctx, pres.value);
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(qctx, errors);
  const err = index === qctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(qctx, err, index);
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
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of the second.
 */

const rightB = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rightB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rightB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));
  if (qres.status === Ok) return qrep;
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(qctx, errors);
  const err = index === qctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(qctx, err, index);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('repeatB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('repeatB', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordNumFormatter"])('2nd'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTillB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTillB', end, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertGenFunction"])('blockB', genFn);
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('blockB', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParsers"])('pipeB', ps);
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipeB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(ps.length + 1)));
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

   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', pre, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', post, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('3rd'));
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

const replyFn = cond => cond ? kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"] : kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"];
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const [qctx, qres] = q(pctx);

  if (qres.status !== Ok) {
    const fn = replyFn(qres.status === Fatal || qctx.index !== index);
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
    const fn = replyFn(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('second argument to return a parser'));
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));

  if (qres.status !== Ok) {
    const fn = replyFn(qres.status === Fatal || qctx.index !== index);
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

const replyFn = cond => cond ? kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"] : kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"];
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
        const fn = replyFn(pres.status === Fatal || context.index !== index);
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
    const fn = replyFn(qres.status === Fatal || qctx.index !== index);
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
    const fn = replyFn(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));

  if (qres.status !== Ok) {
    const fn = replyFn(qctx.status === Fatal || qctx.index !== index);
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
      const fn = replyFn(pres.status === Fatal || pctx.index !== index);
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
    const fn = replyFn(pres.status === Fatal);
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
    const fn = replyFn(pres.status === Fatal);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skipMany', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('skipMany', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skipMany1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('skipMany1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sep', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sep', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('sep', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sep1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sep1', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('sep1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  let index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('end', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('end', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('end', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy1', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('sepEndBy1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  let index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('repeat', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('repeat', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argNumFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('repeat', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal || pctx.index !== index);
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
    const fn = replyFn(sres.status === Fatal);
    return fn(sctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : sres.errors);
  }

  const [pctx, pres] = p(sctx);
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : ((_pres$errors3 = pres.errors) === null || _pres$errors3 === void 0 ? void 0 : _pres$errors3.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(sres.errors, pres.errors) : [];

  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal || pctx.index !== index);
    return fn(pctx, errors);
  }

  const [ectx, eres] = e(pctx);

  if (eres.status !== Ok) {
    const fn = replyFn(eres.status === Fatal || ectx.index !== index);
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
      const fn = replyFn(pctx.index !== index);
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
        const fn = replyFn(pres.status === Fatal || pctx.index !== index);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocL', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocL', o, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('assocL', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(4, true));
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assocL', ores.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1L', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1L', o, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('assoc1L', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal);
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assoc1L', ores.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocR', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocR', o, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('assocR', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(4, true));
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assocR', ores.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1R', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1R', o, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('assoc1R', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal);
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assoc1R', ores.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('char', c);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('charI', c);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfy', fn);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfyM', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('satisfyM', message, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordStrFormatter"])('2nd'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordCharFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordCharFormatter"])('2nd'));

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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('failNormally', msg);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('failFatally', msg);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('string', str);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('stringI', str);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('anyString', n);
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(n, () => true)(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anyString(n));
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: encoder, decoder, range, enumerate, viewToString, stringToView, charLength, nextCharWidth, nextChar, nextChars, quote, dup, commaSeparate, track, ordinal, wordinal, stringify, articlify, replyFn, nonback, back, combined */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonback", function() { return nonback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "back", function() { return back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combined", function() { return combined; });
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
 * parsers.
 *
 * @param {string} m The message used to create the new error. This will
 *     only be used if it's actually present.
 * @param {ErrorList} errors The errors generated by the underlying
 *     parser.
 * @returns {ErrorList} A new error list that does not take backtracking
 *     into account.
 */

function nonback(m, errors) {
  return m == null ? errors : Object(_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(m);
}
/**
 * Generates an error list for backtracked errors from underlying
 * parsers.
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

function back(m, ctx, errors) {
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

function combined(cond, m, ctx, errors) {
  return cond ? back(m, ctx, errors) : nonback(m, errors);
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jaGFpbmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvY2hhci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3JlZ2V4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmb3JtYXR0ZXIiLCJ0eXBlIiwidmFsdWUiLCJzdHJpbmdpZnkiLCJjaGFyRm9ybWF0dGVyIiwiZm5Gb3JtYXR0ZXIiLCJnZW5Gb3JtYXR0ZXIiLCJzdHJGb3JtYXR0ZXIiLCJhcnJGb3JtYXR0ZXIiLCJzdHJBcnJGb3JtYXR0ZXIiLCJzdHJSZWdGb3JtdHRlciIsIm51bUZvcm1hdHRlciIsInBhckZvcm1hdHRlciIsImFyZ0Zvcm1hdHRlciIsIm9yZGVyIiwibXVsdGlwbGUiLCJ3b3JkaW5hbCIsImFyZ0NoYXJGb3JtYXR0ZXIiLCJhcmdGbkZvcm1hdHRlciIsImFyZ0dlbkZvcm1hdHRlciIsImFyZ051bUZvcm1hdHRlciIsImFyZ1BhckZvcm1hdHRlciIsImFyZ1N0ckZvcm1hdHRlciIsIm9yZEZvcm1hdHRlciIsIm9yZCIsIm9yZENoYXJGb3JtYXR0ZXIiLCJvcmRGbkZvcm1hdHRlciIsIm9yZE51bUZvcm1hdHRlciIsIm9yZFBhckZvcm1hdHRlciIsIm9yZFN0ckZvcm1hdHRlciIsImZhaWxBc3NlcnQiLCJuYW1lIiwiRXJyb3IiLCJhc3NlcnRDaGFyIiwiY2hhckxlbmd0aCIsImFzc2VydEZ1bmN0aW9uIiwicGFyc2VyIiwiY3JlYXRlZCIsImFzc2VydEdlbkZ1bmN0aW9uIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYXNzZXJ0U3RyaW5nIiwiYXNzZXJ0QXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJhc3NlcnROdW1iZXIiLCJhc3NlcnRQYXJzZXIiLCJhc3NlcnRQYXJzZXJzIiwidmFsdWVzIiwiaSIsImVudW1lcmF0ZSIsIm9yZGluYWwiLCJPayIsIkZhaWwiLCJGYXRhbCIsIlN0YXR1cyIsImFsdCIsImFyZ3MiLCJwcyIsInNsaWNlIiwibSIsImxlbmd0aCIsInBvcCIsImN0eCIsImhhc00iLCJBU1NFUlQiLCJmb3JFYWNoIiwicCIsImVycm9ycyIsImV4cGVjdGVkIiwicHJlcCIsInBjdHgiLCJwcmVzIiwiZHVwIiwic3RhdHVzIiwibWVyZ2UiLCJmYXRhbFJlcGx5IiwiZmFpbFJlcGx5Iiwib3B0IiwicmVwbHkiLCJva1JlcGx5IiwiZGVmIiwieCIsInBlZWsiLCJpbmRleCIsImNvbXBvdW5kIiwibmVzdGVkIiwiZW1wdHkiLCJub3QiLCJ1bmRlZmluZWQiLCJhdHRlbXB0IiwiYmFjayIsIkVycm9yVHlwZSIsIk5lc3RlZCIsInNlcUIiLCJjb250ZXh0Iiwibm9uYmFjayIsImVyciIsImNvbWJpbmVkIiwicHVzaCIsImNoYWluQiIsImZuIiwicmVwbHlGbiIsInEiLCJxcmVwIiwicWN0eCIsInFyZXMiLCJhcHBseUIiLCJsZWZ0QiIsInJpZ2h0QiIsInJlcGVhdEIiLCJuIiwiXyIsInJhbmdlIiwibWFueVRpbGxCIiwiZW5kIiwiZW5kcmVwIiwiZW5kY3R4IiwiZW5kcmVzIiwiYmxvY2tCIiwiZ2VuRm4iLCJnZW4iLCJuZXh0VmFsdWUiLCJkb25lIiwibmV4dCIsInYiLCJwaXBlQiIsImJldHdlZW5CIiwicHJlIiwicG9zdCIsInByZXJlcCIsInByZWN0eCIsInByZXJlcyIsInBvc3RjdHgiLCJwb3N0cmVzIiwiY29uZCIsImpvaW4iLCJjb21wYWN0IiwiZmlsdGVyIiwibnRoIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwibWFwIiwiYXBwbHkiLCJtZXJyb3IiLCJjaGFpbiIsImxvb3BNZXNzYWdlIiwic2VxIiwibGVmdCIsInJpZ2h0IiwiYmxvY2siLCJnIiwibWFueSIsInZpZXciLCJieXRlTGVuZ3RoIiwibWFueTEiLCJza2lwIiwic2tpcE1hbnkiLCJza2lwTWFueTEiLCJzZXAiLCJzIiwic2N0eCIsInNyZXMiLCJUeXBlRXJyb3IiLCJzZXAxIiwic2VwRW5kQnkxIiwicmVwZWF0IiwiYmV0d2VlbiIsImUiLCJlY3R4IiwiZXJlcyIsInVudGlsIiwicGlwZSIsIm9wRm9ybWF0dGVyIiwiYXNzb2NMIiwibyIsIm9wcyIsIm9jdHgiLCJvcmVzIiwiYXNzb2MxTCIsImFzc29jUiIsImFzc29jMVIiLCJpc1R5cGVkQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJpbnB1dCIsIm1lc3NhZ2UiLCJzdHJpbmdUb1ZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsIkFycmF5QnVmZmVyIiwidHJhY2siLCJwYXJzZSIsInN1Y2NlZWRlZCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiZm9ybWF0RXJyb3JzIiwicnVuIiwicmVzdWx0IiwidGFiIiwiemVyb1dpZHRoIiwiRXhwZWN0ZWQiLCJVbmV4cGVjdGVkIiwiR2VuZXJpYyIsIkNvbXBvdW5kIiwiT3RoZXIiLCJsYWJlbCIsInVuZXhwZWN0ZWQiLCJnZW5lcmljIiwib3RoZXIiLCJlcnJvcnMxIiwiZXJyb3JzMiIsImlzTmV3bGluZSIsImJ5dGUiLCJnZXRVaW50OCIsIm5ld2xpbmUiLCJuZXh0Qnl0ZSIsInRoaXJkQnl0ZSIsIm5leHRDaGFyV2lkdGgiLCJnZXRMaW5lSW5kZXhlcyIsInN0YXJ0IiwibGluZW5vIiwiZ2V0Q2hhckluZGV4IiwiY2hhckluZGV4IiwiYnl0ZUluZGV4IiwidGFiaWZ5IiwibGluZSIsInRhYlNpemUiLCJ0YWJJbmRleGVzIiwidGFiTWF0Y2giLCJleGVjIiwib2Zmc2V0IiwicHJlSW5kZXhPZmZzZXQiLCJ0YWJJbmRleCIsImFjdHVhbEluZGV4Iiwic3BhY2VDb3VudCIsInN1YnN0cmluZyIsImNvbEluZGV4IiwiZ2V0Q29sTnVtYmVyIiwibWF0Y2hlcyIsIm1hdGNoIiwiY29sbm8iLCJzaG93IiwibWF4V2lkdGgiLCJpbmRlbnQiLCJzcCIsIm5ld0NvbG5vIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImZvcm1hdE5lc3RlZCIsIm5lc3RlZHMiLCJuZXN0ZWRNc2dzIiwiZm9ybWF0IiwiZW5zdXJlTmV3bGluZXMiLCJ0ZXh0IiwiY291bnQiLCJyYXdMaW5lIiwidmlld1RvU3RyaW5nIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmluZCIsImVycm9yIiwiY29tbWFTZXBhcmF0ZSIsInVuZXhwTXNnIiwiZXhwTXNnIiwiZ2VuZXJpY01zZyIsIm5lc3RlZE1zZyIsImNvbXBvdW5kTXNnIiwidW5rbm93bk1zZyIsImVvZk1zZyIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwic3RyaW5ncyIsImFscGhhIiwiYWxwaGFVIiwiYW55IiwiYW55T2YiLCJhcnJheSIsImFueVN0cmluZyIsImNoYXIiLCJxdW90ZSIsImNoYXJJIiwiZGlnaXQiLCJlb2YiLCJoZXgiLCJsZXR0ZXIiLCJsZXR0ZXJVIiwibG93ZXIiLCJsb3dlclUiLCJuZXdsaW5lVSIsIm5vbmVPZiIsIm9jdGFsIiwicmVnZXgiLCJyZSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInNwYWNlc1UiLCJzcGFjZXMxVSIsInNwYWNlVSIsInN0cmluZyIsInN0ciIsInN0cmluZ0kiLCJ1cHBlciIsInVwcGVyVSIsImV4cGVjdGVkcyIsImNoYXJQYXJzZXIiLCJ3aWR0aCIsIm5leHRDaGFyIiwiY3ByZXAiLCJjcGN0eCIsImNwcmVzIiwiY2giLCJ0b0xvd2VyQ2FzZSIsInNhdGlzZnkiLCJzYXRpc2Z5TSIsImNzIiwiYXJyIiwiaW5jbHVkZXMiLCJmYWlsTm9ybWFsbHkiLCJtc2ciLCJmYWlsRmF0YWxseSIsImFsd2F5cyIsInJlTGV0dGVyIiwicmVBbHBoYSIsInJlVXBwZXIiLCJyZUxvd2VyIiwicmVTcGFjZSIsInJlVXNwYWNlIiwicmVTcGFjZXMiLCJyZVVzcGFjZXMiLCJyZVNwYWNlczEiLCJyZVVzcGFjZXMxIiwicmVOZXdsaW5lIiwicmVVbmV3bGluZSIsInJlZ2V4UGFyc2VyIiwicmVzdCIsIlJlZ0V4cCIsInNvdXJjZSIsImZsYWdzIiwicmVhbmNob3IiLCJuZXdTb3VyY2UiLCJycHJlcCIsInJwY3R4IiwicnByZXMiLCJzdHJpbmdQYXJzZXIiLCJuZXh0Q2hhcnMiLCJzcHJlcCIsInNwY3R4Iiwic3ByZXMiLCJjaGFycyIsImFsbCIsImVuY29kZXIiLCJUZXh0RW5jb2RlciIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsInN0ZXAiLCJpbmNsdXNpdmUiLCJhYnMiLCJmb3J3YXJkIiwiY3VycmVudCIsImZpbmlzaGVkIiwiaXRlcmFibGUiLCJpdGVyYXRvciIsIlN5bWJvbCIsImJ5dGVzIiwiZnJvbSIsImRlY29kZSIsImVuY29kZSIsInZpZXdMZW5ndGgiLCJtZXNzYWdlcyIsIm1zZ3MiLCJsYXN0IiwicHJvcCIsInRyYWNrZWQiLCJXZWFrU2V0IiwiZGVmaW5lUHJvcGVydHkiLCJhZGQiLCJoYXMiLCJiaW5kIiwic3VmZml4ZXMiLCJudW1zIiwib25lcyIsInRlbnMiLCJncm91cHMiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWFnIiwibG9nMTAiLCJmIiwibXVsdCIsIm51bSIsInJlbSIsImRlc2NyaXB0aW9uIiwiSlNPTiIsImFydGljbGlmeSIsImNvbmRpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QztBQUVBLFNBQU87QUFBRUEsUUFBSSxFQUFFTCxNQUFSO0FBQWdCbUQsVUFBTSxFQUFFL0I7QUFBeEIsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzl2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUytCLElBQVQsQ0FBYy9CLENBQWQsRUFBaUJHLEdBQWpCLEVBQXNCSyxNQUF0QixFQUE4QjtBQUNuQyxTQUFPUixDQUFDLElBQUksSUFBTCxHQUFZMEIscURBQU0sQ0FBQ3ZCLEdBQUQsRUFBTUssTUFBTixDQUFsQixHQUFrQ2lCLHVEQUFRLENBQUN6QixDQUFELEVBQUlHLEdBQUosRUFBU0ssTUFBVCxDQUFqRDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTOEIsUUFBVCxDQUFrQnFDLElBQWxCLEVBQXdCM0UsQ0FBeEIsRUFBMkJHLEdBQTNCLEVBQWdDSyxNQUFoQyxFQUF3QztBQUM3QyxTQUFPbUUsSUFBSSxHQUFHNUMsSUFBSSxDQUFDL0IsQ0FBRCxFQUFJRyxHQUFKLEVBQVNLLE1BQVQsQ0FBUCxHQUEwQjRCLE9BQU8sQ0FBQ3BDLENBQUQsRUFBSVEsTUFBSixDQUE1QztBQUNELEMiLCJmaWxlIjoia2Vzc2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgcGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgZW51bWVyYXRlLCBvcmRpbmFsLCBzdHJpbmdpZnksIHdvcmRpbmFsIH0gZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZvcm1hdHRlciBmdW5jdGlvbiBvdXQgb2YgYSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZS5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbigqKTpzdHJpbmd9IEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgdmFsdWUgb2YgYW55XG4gKiAgICAgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXIgPSB0eXBlID0+XG4gIHZhbHVlID0+IGBleHBlY3RlZCAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5jb25zdCBjaGFyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJylcbmNvbnN0IGZuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGZ1bmN0aW9uJylcbmNvbnN0IGdlbkZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBnZW5lcmF0b3IgZnVuY3Rpb24nKVxuY29uc3Qgc3RyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZycpXG5jb25zdCBhcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2FuIGFycmF5JylcbmNvbnN0IHN0ckFyckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2YgY2hhcmFjdGVycycpXG5jb25zdCBzdHJSZWdGb3JtdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24nKVxuY29uc3QgbnVtRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG51bWJlcicpXG5jb25zdCBwYXJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgcGFyc2VyJylcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmb3JtYXR0ZXIgZnVuY3Rpb24gb3V0IG9mIGEgdHlwZSBhbmQgYSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSB0aGF0IHRoZSB2YWx1ZSBzaG91bGQgYmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW29yZGVyXSBUaGUgcG9zaXRpb24gb2YgdGhlIHZhbHVlIHdpdGhpbiBhbiBhcmd1bWVudFxuICogICAgIGxpc3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFttdWx0aXBsZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZVxuICogICAgIGFyZ3VtZW50IGluIHRoZSBmdW5jdGlvbiB3aG9zZSBlcnJvciBpcyBiZWluZyBmb3JtYXR0ZWQuIElmIHRoaXNcbiAqICAgICBpcyBmYWxzZSwgdGhlIGBvcmRlcmAgd2lsbCBiZSBpZ25vcmVkLlxuICogQHJldHVybnMge2Z1bmN0aW9uKCopOnN0cmluZ30gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB2YWx1ZSBvZiBhbnlcbiAqICAgICB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGFyZ0Zvcm1hdHRlciA9ICh0eXBlLCBvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+IHZhbHVlID0+XG4gIGBleHBlY3RlZCAke1xuICAgIG11bHRpcGxlID8gYCR7d29yZGluYWwob3JkZXIpfSBgIDogJydcbiAgfWFyZ3VtZW50IHRvIGJlICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXG5cbmV4cG9ydCBjb25zdCBhcmdDaGFyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ0ZuRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIGZ1bmN0aW9uJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ0dlbkZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBnZW5lcmF0b3IgZnVuY3Rpb24nLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnTnVtRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIG51bWJlcicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdQYXJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgcGFyc2VyJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ1N0ckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBzdHJpbmcnLCBvcmRlciwgbXVsdGlwbGUpXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZm9ybWF0dGVyIGZ1bmN0aW9uIG91dCBvZiBhIHR5cGUgYW5kIGEgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgdGhhdCB0aGUgdmFsdWUgc2hvdWxkIGJlLlxuICogQHBhcmFtIHtzdHJpbmd9IG9yZCBUaGUgcG9zaXRpb24gb2YgdGhlIHZhbHVlIHdpdGhpbiBhYW4gYXJndW1lbnRcbiAqICAgICBsaXN0LCBhIGJsb2NrIG9mIGNvZGUsIGV0Yy5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbigqKTpzdHJpbmd9IEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgdmFsdWUgb2YgYW55XG4gKiAgICAgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBvcmRGb3JtYXR0ZXIgPSAodHlwZSwgb3JkKSA9PiB2YWx1ZSA9PlxuICBgZXhwZWN0ZWQgJHtvcmR9IGFyZ3VtZW50IHRvIGJlICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXG5cbmV4cG9ydCBjb25zdCBvcmRDaGFyRm9ybWF0dGVyID0gb3JkID0+XG4gIG9yZEZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRGbkZvcm1hdHRlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkTnVtRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBudW1iZXInLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkUGFyRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBwYXJzZXInLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkU3RyRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBzdHJpbmcnLCBvcmQpXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpzdHJpbmd9IGZvcm1hdHRlclxuICovXG5mdW5jdGlvbiBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBbJHtuYW1lfV06ICR7Zm9ybWF0dGVyKHZhbHVlKX1gKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc2luZ2xlLWNoYXJhY3RlciBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q2hhcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gY2hhckZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjaGFyTGVuZ3RoKHZhbHVlKSAhPT0gMSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgbm9uLXBhcnNlciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRGdW5jdGlvbihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gZm5Gb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCBwYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIGdlbmVyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRHZW5GdW5jdGlvbihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gZ2VuRm9ybWF0dGVyKSB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gYXJyRm9ybWF0dGVyKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzaW5nbGUtY2hhcmFjdGVyXG4gKiBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yQXJyYXkobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckFyckZvcm1hdHRlcikge1xuICBpZiAoIShcbiAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICYmIHZhbHVlLmV2ZXJ5KGMgPT4gdHlwZW9mIGMgPT09ICdzdHJpbmcnICYmIGNoYXJMZW5ndGgoYykgPT09IDEpXG4gICAgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICApKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JSZWdFeHAobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0clJlZ0Zvcm10dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnXG4gICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROdW1iZXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IG51bUZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFBhcnNlcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gcGFyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgfHwgIXBhcnNlci5jcmVhdGVkKHZhbHVlKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhbiBhcnJheSBjb250YWlucyBvbmx5IHBhcnNlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqW119IHZhbHVlcyBUaGUgYXJyYXkgb2YgdmFsdWVzIGJlaW5nIGNoZWNrZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRQYXJzZXJzKG5hbWUsIHZhbHVlcykge1xuICBmb3IgKGNvbnN0IFtpLCB2YWx1ZV0gb2YgZW51bWVyYXRlKHZhbHVlcykpIHtcbiAgICBhc3NlcnRQYXJzZXIobmFtZSwgdmFsdWUsIG9yZFBhckZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSkpXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ1BhckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGNvbXBvdW5kLCBleHBlY3RlZCwgbWVyZ2UsIG5lc3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYWlsLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBwYXJzZXJzIG9uZSBhdCBhIHRpbWUgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmVcbiAqIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLiBPbiBmYWlsdXJlIChmYXRhbCBvciBvdGhlcndpc2UpLCBlcnJvclxuICogbWVzc2FnZXMgZnJvbSBhbGwgcGFyc2VycyB0aGF0IGhhZCBmYWlsZWQgYXJlIG1lcmdlZCBpbnRvIGBhbHRgJ3NcbiAqIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfHN0cmluZ30gYXJncyBUaGUgcGFyc2VycyB0byBleGVjdXRlLCBvbmUgYXQgYSB0aW1lLFxuICogICAgIHVudGlsIG9uZSBzdWNjZWVkcywgb25lIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLiBUaGUgbGFzdFxuICogICAgIGFyZ3VtZW50ICptYXkqIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgdGhlIGV4cGVjdGVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZSBpbiBwbGFjZSBvZiB0aGUgY29sbGVjdGVkIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzXG4gKiAgICAgb2YgdGhlIGNvbnN0aXR1ZW50IHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIGNvbnRhaW5lZCBwYXJzZXJzIHVudGlsXG4gKiAgICAgb25lIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgYWx0ID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdhbHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpKSlcblxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuXG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBlcnJvcnMpXG4gICAgfVxuICAgIHJldHVybiBmYWlsUmVwbHkoY3R4LCBlcnJvcnMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyLCBzdWNjZWVkaW5nIHdoZXRoZXIgaXRcbiAqIGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBleGVjdXRlZCBhbmRcbiAqICAgICB0aGVuIGhhdmUgaXRzIHJlc3VsdCBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIGZhaWxzLlxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seSBpZlxuICogICAgIGl0cyBjb250YWluZWQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgb3B0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3B0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ29wdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGVycm9ycylcblxuICAvLyBJZiB0aGUgb3B0aW9uYWwgcGFyc2VyIGZhaWxzLCB3ZSBhZGQgdGhlIGVycm9yIG1lc3NhZ2UgZXZlbiB0aG91Z2hcbiAgLy8gdGhlIGVuZCByZXN1bHQgb2YgYG9wdGAgaXMgc3VjY2Vzcy4gVGhpcyBsZXRzIHNlcXVlbmNpbmcgcGFyc2Vyc1xuICAvLyBhZGQgdGhlIG9wdCBwYXJzZXIncyBleHBlY3RlZCB0byBlcnJvciBtZXNzYWdlcyBpZiBhIGxhdGVyIHBhcnNlclxuICAvLyBpbiB0aGUgc2VxdWVuY2UgZmFpbHMuXG4gIGNvbnN0IHJlcGx5ID0gb2tSZXBseShwY3R4LCBudWxsKVxuICByZXBseVsxXS5lcnJvcnMgPSBlcnJvcnNcbiAgcmV0dXJuIHJlcGx5XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgZWl0aGVyIHdpdGggdGhlIHN1cHBsaWVkIHBhcnNlcidzIHN1Y2Nlc3NmdWxcbiAqIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHQgdmFsdWUgYHhgLlxuICogVGhpcyBwYXJzZXIgb25seSBmYWlscyBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZiA9IChwLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2RlZicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdkZWYnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG4gIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKiBTdWNjZXNzIG9yIGZhaWx1cmUgYXJlIHN0aWxsIHJldHVybmVkLCB0aG91Z2ggZmF0YWwgZmFpbHVyZSBpc1xuICogY29udmVydGVkIHRvIG5vbi1mYXRhbCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBubyBpbnB1dCBpcyBjb25zdW1lZC5cbiAqXG4gKiBJZiB0aGUgY29uc2l0dWVudCBwYXJzZXIgZmFpbHMgZmF0YWxseSwgYSBuZXN0ZWQgZXJyb3IgbWVzc2FnZSB3aWxsXG4gKiBiZSBjcmVhdGVkIHRvIHRyYWNrIHRoZSBhY3R1YWwgZXJyb3IgY2F1c2UgYmVmb3JlIHRoaXMgcGFyc2VyXG4gKiBhdXRvbWF0aWNhbGx5IGJhY2t0cmFja3MuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBleGVjdXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIG9yIGZhaWxzXG4gKiAgICAgd2l0aCBpdCwgYnV0IHdoaWNoIGNvbnN1bWVzIG5vIGlucHV0IGVpdGhlciB3YXkuXG4gKi9cbmV4cG9ydCBjb25zdCBwZWVrID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncGVlaycsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdwZWVrJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2tSZXBseShwY3R4LCBwcmVzLnZhbHVlLCBpbmRleClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycywgaW5kZXgpXG4gIH1cbiAgLy8gVGhpcyBwYXJzZXIgaW1wbGVtZW50cyBhdXRvbWF0aWMgYmFja3RyYWNraW5nLCBzbyBpZiBpdHMgcGFyc2VyXG4gIC8vIGZhaWxzIGZhdGFsbHksIGl0IGhhcyB0byB0cmFjayB0aGF0IHRocm91Z2ggYSBuZXN0ZWQgZXJyb3JcbiAgcmV0dXJuIGZhaWxSZXBseShcbiAgICBwY3R4LFxuICAgIGhhc00gPyBjb21wb3VuZChtLCBwY3R4LCBwcmVzLmVycm9ycykgOiBuZXN0ZWQocGN0eCwgcHJlcy5lcnJvcnMpLFxuICAgIGluZGV4LFxuICApXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscywgdGhpc1xuICogcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlIG9uIGZhaWx1cmUgaWYgdGhhdFxuICogZmFpbHVyZSB3YXMgY2F1c2VkIGJ5IGEgc3VjY2VzcyB3aXRoIGlucHV0IGNvbnN1bWVkLiBBbiBlcnJvciBtZXNzYWdlXG4gKiBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXMgdGhlIG9wdGlvbmFsXG4gKiBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGNvbnN1bWVzXG4gKiAgICAgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3QgZW1wdHkgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbXB0eScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbXB0eScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPayAmJiBwY3R4LmluZGV4ID09PSBpbmRleCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgbnVsbClcbiAgY29uc3QgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnNcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZXJyb3JzKVxuICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9ycylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXQgd2hpY2ggZG9lc1xuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIGBwYCBzdWNjZWVkcywgdGhpcyBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkuXG4gKlxuICogVGhpcyBwYXJzZXIsIGJ5IGRlZmF1bHQsIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEFuXG4gKiBlcnJvciBtZXNzYWdlIGNhbiBiZSBzcGVjaWZpZWQgYnkgcGFzc2luZyB0aGUgZXhwZWN0ZWQgbWVzc2FnZSBpbiBhc1xuICogdGhlIG9wdGlvbmFsIHNlY29uZCBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgd2hlbiBpdFxuICogICAgIGZhaWxzLCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgY29udGV4dCwgd2hldGhlciBvciBub3QgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBub3QgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdub3QnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbm90JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHVuZGVmaW5lZFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPa1xuICAgID8gZmFpbFJlcGx5KHBjdHgsIGVycm9ycywgaW5kZXgpXG4gICAgOiBva1JlcGx5KHBjdHgsIG51bGwsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ0ZuRm9ybWF0dGVyLFxuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydEdlbkZ1bmN0aW9uLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0UGFyc2VycyxcbiAgYXNzZXJ0U3RyaW5nLFxuICBmb3JtYXR0ZXIsXG4gIG9yZEZuRm9ybWF0dGVyLFxuICBvcmROdW1Gb3JtYXR0ZXIsXG4gIG9yZFBhckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGNvbXBvdW5kLCBFcnJvclR5cGUsIGV4cGVjdGVkLCBtZXJnZSwgbmVzdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHtcbiAgYmFjayxcbiAgY29tYmluZWQsXG4gIGR1cCxcbiAgbm9uYmFjayxcbiAgb3JkaW5hbCxcbiAgcmFuZ2UsXG4gIHJlcGx5Rm4sXG4gIHN0cmluZ2lmeSxcbn0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGJhY2t0cmFja3Mgd2hlbiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5IGFuZFxuICogdHJhbnNmb3JtcyB0aGF0IGZhdGFsIGZhaWx1cmUgaW50byBhIG5vbi1mYXRhbCBvbmUuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhlIGZldyB3YXlzIHRvIGNhdXNlIGEgY29udGFpbmVkIHBhcnNlciB0byBiYWNrdHJhY2tcbiAqIGFmdGVyIGEgZmF0YWwgZmFpbHVyZSAoYHBlZWtgIGFsc28gZG9lcyB0aGF0IGFzIGEgc2lkZSBlZmZlY3QsIGV0Yy4pLlxuICogQWxsIG9mIHRoZSBgQmAgYmFja3RyYWNraW5nIHBhcnNlcnMgYmFja3RyYWNrIG9ubHkgaWYgdGhlIGZhdGFsXG4gKiBmYWlsdXJlIHdhcyBjYXVzZWQgYnkgYSBjb250YWluZWQgcGFyc2VyJ3Mgbm9uLWZhdGFsIGZhaWx1cmUuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSBmYXRhbCBmYWlsdXJlcyB3aWxsIGJlIGNvbnZlcnRlZFxuICogICAgIGludG8gbm9uLWZhdGFsIGZhaWx1cmVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLiBJZiB0aGUgcGFyc2VyIGJhY2t0cmFja3MsIHRoaXMgaW5zdGVhZCBiZWNvbWVzIHRoZSB0ZXh0IG9mXG4gKiAgICAgdGhlIGdlbmVyYXRlZCBjb21wb3VuZCBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBjYW5ub3QgZmFpbCBmYXRhbGx5LiBJZiBpdHMgY29udGFpbmVkXG4gKiAgICAgcGFyc2VyIGZhaWxzIGZhdGFsbHksIHRoaXMgb25lIHdpbGwgaW5zdGVhZCBmYWlsIG5vbi1mYXRhbGx5LlxuICovXG5leHBvcnQgY29uc3QgYXR0ZW1wdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2F0dGVtcHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXR0ZW1wdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleCkge1xuICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgYmFjayhtLCBwY3R4LCBwcmVzLmVycm9ycyksIGluZGV4KVxuICB9XG4gIGlmIChoYXNNKSB7XG4gICAgaWYgKHByZXMuZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBwcmVzLmVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKSB7XG4gICAgICBjb25zdCB7IGN0eCwgZXJyb3JzIH0gPSBwcmVzLmVycm9yc1swXVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBjb21wb3VuZChtLCBjdHgsIGVycm9ycyksIGluZGV4KVxuICAgIH1cbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGV4cGVjdGVkKG0pLCBpbmRleClcbiAgfVxuICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIHByZXMuZXJyb3JzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lIGZhaWxzLiBJbiB0aGVcbiAqIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzIHRoZVxuICogcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSBhZnRlciBhbGwgb2YgdGhlIGVhcmxpZXJcbiAqIHBhcnNlcnMgc3VjY2VlZGVkLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgdGhlXG4gKiB2ZXJ5IGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcnxzdHJpbmd9IHBzIFRoZSBwYXJzZXJzIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbGFzdFxuICogICAgIGFyZ3VtZW50ICptYXkqIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgdGhlIGV4cGVjdGVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZSAob3IgY29tcG91bmQgZXJyb3IgbWVzc2FnZSwgaW4gdGhlIGNhc2Ugb2ZcbiAqICAgICBiYWNrdHJhY2tpbmcgaGFwcGVuaW5nKSBpbiBwbGFjZSBvZiB0aGUgY29sbGVjdGVkIGV4cGVjdGVkIGVycm9yXG4gKiAgICAgbWVzc2FnZXMgb2YgdGhlIGNvbnN0aXR1ZW50IHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdFxuICogICAgIGEgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxQiA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IG0gPSB0eXBlb2YgcHNbcHMubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdzZXFCJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCBhcmdzLmxlbmd0aCA+IDEpKSlcblxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBub25iYWNrKG0sIHByZXMuZXJyb3JzKSlcbiAgICAgIH1cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgICBjb25zdCBlcnIgPSBjb21iaW5lZChwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgZXJyb3JzKVxuICAgICAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVyciwgaW5kZXgpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHJlc3VsdCBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkIHBhcnNlclxuICogdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGUgcGFyc2VyXG4gKiByZXR1cm5zIHRoYXQgcmVzdWx0LlxuICpcbiAqIElmIHRoZSBwYXJzZXIgcmV0dXJuZWQgYnkgYGZuYCBmYWlscyBub24tZmF0YWxseSBhZnRlciBgcGAgc3VjY2VlZHMsXG4gKiB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCBhbmRcbiAqIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cbiAqICAgICBJdCB1c2VzIHRoaXMgcmVzdWx0IHRvIGRldGVybWluZSBhIHNlY29uZCBwYXJzZXIsIHdoaWNoIGl0XG4gKiAgICAgcmV0dXJucy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgLCBwYXNzIHRoZSByZXN1bHQgdG9cbiAqICAgICB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzIHJldHVybiB2YWx1ZSBhcyBhXG4gKiAgICAgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2NoYWluQicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdjaGFpbkInLCBmbiwgYXJnRm5Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnY2hhaW5CJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBub25iYWNrKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHEgPSBmbihwcmVzLnZhbHVlKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICdjaGFpbkInLCBxLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBwYXJzZXInKSxcbiAgKVxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gZHVwKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShxY3R4LCBub25iYWNrKG0sIGVycm9ycykpXG4gIGNvbnN0IGVyciA9IGNvbWJpbmVkKHFjdHguaW5kZXggIT09IGluZGV4LCBtLCBxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcWAgdG8gdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgcGAuXG4gKlxuICogSWYgYHBgIHN1Y2NlZWRzIGFuZCBgcWAgZmFpbHMsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZVxuICogcG9pbnQgd2hlcmUgYHBgIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAqICAgICBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBBIHBhcnNlciB3aGljaCBwcm92aWRlcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmVzdWx0cyBpblxuICogICAgIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYCB3aGVuIHRoZSB2YWx1ZVxuICogICAgIHJldHVybmVkIGJ5IGBwYCBpcyBwYXNzZWQgaW50byBpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5QiA9IChwLCBxKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHlCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHlCJywgcSwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocWN0eCwgZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcWN0eC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChxY3R4LCBlcnJvcnMpXG4gICAgcmV0dXJuIGZhaWxSZXBseShxY3R4LCBlcnIsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgZm4gPSBxcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAnYXBwbHlCJywgZm4sIGZvcm1hdHRlcignMm5kIGFyZ3VtZW50IHRvIHJldHVybiBhIGZ1bmN0aW9uJyksXG4gIClcbiAgcmV0dXJuIG9rUmVwbHkocWN0eCwgZm4ocHJlcy52YWx1ZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHBgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICovXG5leHBvcnQgY29uc3QgbGVmdEIgPSAocCwgcSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnRCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdEInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rUmVwbHkocWN0eCwgcHJlcy52YWx1ZSlcblxuICBjb25zdCBlcnJvcnMgPSBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHFjdHgsIGVycm9ycylcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcWN0eC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluIG9yZGVyIGFuZCB0aGVuXG4gKiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcWAuXG4gKlxuICogSWYgYHBgIHN1Y2NlZWRzIGFuZCBgcWAgZmFpbHMsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZVxuICogcG9pbnQgd2hlcmUgYHBgIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXR1cm5zIHRoZVxuICogICAgIHJlc3VsdCBvZiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgY29uc3QgcmlnaHRCID0gKHAsIHEpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gZHVwKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShxY3R4LCBlcnJvcnMpXG5cbiAgY29uc3QgZXJyID0gaW5kZXggPT09IHFjdHguaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQocWN0eCwgZXJyb3JzKVxuICByZXR1cm4gZmFpbFJlcGx5KHFjdHgsIGVyciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsIGNvbGxlY3RpbmcgdGhlXG4gKiBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYWZ0ZXIgaW5pdGlhbGx5IHN1Y2NlZWRpbmcgb25jZSBvciBtb3JlLCB0aGlzIHBhcnNlclxuICogd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgdGhlIGZpcnN0IHRpbWUgYW5kXG4gKiB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gZXhlY3V0ZSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gZXhlY3V0ZSB0aGUgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmVwZWF0QiA9IChwLCBuKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmVwZWF0QicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ3JlcGVhdEInLCBuLCBvcmROdW1Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleFxuICAgICAgICA/IHByZXMuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKGNvbnRleHQsIHByZXMuZXJyb3JzKVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShjb250ZXh0LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYSBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgYW5cbiAqIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2ZcbiAqIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiAqZmlyc3QqLCBzbyB0aGUgcmVzdWx0cyBvZiB0aGUgdHdvIHBhcnNlcnMgd2lsbCBub3Qgb3ZlcmxhcC5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgbm9uLWZhdGFsbHkgYmVmb3JlIGBlbmRgIHN1Y2NlZWRzLCB0aGlzIHBhcnNlciB3aWxsXG4gKiBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgdGhlIGZpcnN0IHRpbWUgYW5kIHdpbGxcbiAqIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyLiBJdHMgcmVzdWx0cyBhcmUgcHVzaGVkIGludG8gYW5cbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZW5kIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLiBJdHMgcmVzdWx0IGlzIGRpc2NhcmRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgZW5kYCBhbmQgdGhlbiBgcGAgemVyb1xuICogICAgIG9yIG1vcmUgdGltZXMgdW50aWwgYGVuZGAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55VGlsbEIgPSAocCwgZW5kKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGxCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGxCJywgZW5kLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbZW5kcmVwLCBbZW5kY3R4LCBlbmRyZXNdXSA9IGR1cChlbmQoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGVuZGN0eFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGVuZHJlcFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBPaykgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IHBjdHguaW5kZXhcbiAgICAgICAgPyBtZXJnZShwcmVzLmVycm9ycywgZW5kcmVzLmVycm9ycylcbiAgICAgICAgOiBuZXN0ZWQocGN0eCwgbWVyZ2UocHJlcy5lcnJvcnMsIGVuZHJlcy5lcnJvcnMpKVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYW55IG9mIHRoZSB5aWVsZGVkIHBhcnNlcnMgZmFpbCwgIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvXG4gKiB0aGUgcG9pbnQgd2hlcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbFxuICogbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbigpOip9IGdlbkZuIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqICAgICBhcmd1bWVudHMgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkXG4gKiAgICAgcGFyc2VyJ3MgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5XG4gKiAgICAgYFBhcnNlcmBzOyBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBibG9ja0IgPSBnZW5GbiA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEdlbkZ1bmN0aW9uKCdibG9ja0InLCBnZW5GbilcblxuICBjb25zdCBnZW4gPSBnZW5GbigpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBbXVxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSlcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Jsb2NrQicsIHZhbHVlLCB2ID0+IGBleHBlY3RlZCAke1xuICAgICAgb3JkaW5hbChpICsgMSlcbiAgICB9IHlpZWxkIHRvIGJlIHRvIGEgcGFyc2VyOyBmb3VuZCAke3N0cmluZ2lmeSh2KX1gKVxuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gdmFsdWUoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShjb250ZXh0LCBlcnJvcnMpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChjb250ZXh0LCBlcnJvcnMpXG4gICAgICByZXR1cm4gZmFpbFJlcGx5KGNvbnRleHQsIGVyciwgaW5kZXgpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXMgdGhvc2VcbiAqIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mIHBhcnNlcnMgdG9cbiAqIGV4ZWN1dGUuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoaXMgcGFyc2VyJ3NcbiAqIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYWxsIG9mIHRoZSBlYXJsaWVyXG4gKiBwYXJzZXJzIHN1Y2NlZWRlZCwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIHRoZVxuICogdmVyeSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGUgZnVuY3Rpb25cbiAqICAgICBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGwgb3RoZXJcbiAqICAgICBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBleGVjdXRlIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgcGlwZUIgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBmbiA9IHBzLnBvcCgpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdwaXBlQicsIHBzKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdwaXBlQicsIGZuLCBvcmRGbkZvcm1hdHRlcihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSxcbiAgICApXG5cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KGNvbnRleHQsIGVycm9ycylcbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChjb250ZXh0LCBlcnJvcnMpXG4gICAgICAgIHJldHVybiBmYWlsUmVwbHkoY29udGV4dCwgZXJyLCBpbmRleClcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgaXRzIHByZSwgY29udGVudCwgYW5kIHBvc3QgcGFyc2VycyBpbiBvcmRlclxuICogYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKlxuICogSWYgYW55IHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gd2hlcmVcbiAqIGBwcmVgIHdhcyBleGVjdXRlZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZSBhbmQgd2hvc2UgcmVzdWx0XG4gKiAgICAgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYHByZWAsIGBwYCwgYW5kIGBwb3N0YCBpblxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuQiA9IChwcmUsIHBvc3QsIHApID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHByZSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBwb3N0LCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHAsIG9yZFBhckZvcm1hdHRlcignM3JkJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcmVwLCBbcHJlY3R4LCBwcmVyZXNdXSA9IGR1cChwcmUoY3R4KSlcbiAgaWYgKHByZXJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcmVwXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChwcmVjdHgpXG4gIGxldCBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UocHJlcmVzLmVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZXJyb3JzKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcGN0eC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChwY3R4LCBlcnJvcnMpXG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnIsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgW3Bvc3RjdHgsIHBvc3RyZXNdID0gcG9zdChwY3R4KVxuICBpZiAocG9zdHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsUmVwbHkocG9zdGN0eCwgbWVyZ2UoZXJyb3JzLCBwb3N0cmVzLmVycm9ycykpXG4gIH1cbiAgaWYgKHBvc3RyZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgZXJyb3JzID0gbWVyZ2UoZXJyb3JzLCBwb3N0cmVzLmVycm9ycylcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcG9zdGN0eC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChwb3N0Y3R4LCBlcnJvcnMpXG4gICAgcmV0dXJuIGZhaWxSZXBseShwb3N0Y3R4LCBlcnIsIGluZGV4KVxuICB9XG4gIHJldHVybiBva1JlcGx5KHBvc3RjdHgsIHByZXMudmFsdWUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydEFycmF5LFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbiAgZm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBmYXRhbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWQsIG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhdGFsIH0gPSBTdGF0dXNcblxuY29uc3QgcmVwbHlGbiA9IGNvbmQgPT4gY29uZCA/IGZhdGFsUmVwbHkgOiBmYWlsUmVwbHlcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIGFuZCByZXR1cm4gYHBgJ3MgcmVzdWx0cyBqb2luZWRcbiAqIHRvZ2V0aGVyIGludG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIHJlcXVpcmVzIHRoYXQgYHBgIHJldHVybnMgYW5cbiAqIGFycmF5OyBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBpdCBkb2VzIG5vdC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IGlzIGV4cGVjdGVkIHRvIHJldHVybiBhbiBhcnJheSBvZlxuICogICAgIHN0cmluZ3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgcmV0dXJucyBhIHNpbmdsZVxuICogICAgIHN0cmluZyBtYWRlIGZyb20gam9pbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlIGFycmF5IG9mIHN0cmluZ3NcbiAqICAgICByZXR1cm5lZCBieSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBqb2luID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignam9pbicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdqb2luJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2pvaW4nLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHYuam9pbignJykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAgYW5kIHJldHVybiBpdHMgcmVzdWx0cyBtaW51cyBhbnlcbiAqIGBudWxsYCBvciBgdW5kZWZpbmVkYCByZXN1bHRzLiBUaGlzIHJlcXVpcmVzIHRoYXQgYHBgIHJldHVybnMgYW5cbiAqIGFycmF5OyBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBpdCBkb2VzIG5vdC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IGlzIGV4cGVjdGVkIHRvIHJldHVybiBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCByZXR1cm5zIGl0cyByZXN1bHRzXG4gKiAgICAgbWludXMgYW55IGBudWxsYCBvciBgdW5kZWZpbmVkYCByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3QgY29tcGFjdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2NvbXBhY3QnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnY29tcGFjdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdjb21wYWN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2LmZpbHRlcih4ID0+IHggIT0gbnVsbCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGJ1dCwgb24gc3VjY2VzcywgcmV0dXJucyBgeGAgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LiBJdHMgcmVzdWx0IGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgdGhlIG5ldyBwYXJzZXIgd2lsbCByZXN1bHQgaW4gaWYgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgYHBgIGJ1dCByZXR1cm4gYHhgIG9uXG4gKiAgICAgc3VjY2Vzcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHZhbHVlID0gKHAsIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndmFsdWUnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndmFsdWUnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuICByZXR1cm4gb2tSZXBseShwY3R4LCB4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIGBuYHRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSAwLWJhc2VkIGluZGV4IG9mIHRoZSByZXN1bHQgZWxlbWVudCB0byByZXR1cm4uXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGBuYHRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG50aCA9IChwLCBuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ250aCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcignbnRoJywgbiwgYXJnTnVtRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ250aCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KFxuICAgICdudGgnLCB2LCBmb3JtYXR0ZXIoJ2ZpcnN0IGFyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpLFxuICApXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdltuXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZpcnN0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZmlyc3QnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZmlyc3QnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlyc3QnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMF0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlY29uZCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzZWNvbmQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnc2Vjb25kJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2WzFdKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgdGhpcmQgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgdGhpcmQgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCd0aGlyZCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd0aGlyZCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCd0aGlyZCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdlsyXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBmb3VydGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmb3VydGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgZm91cnRoID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZm91cnRoJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZvdXJ0aCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmb3VydGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbM10pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlmdGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaWZ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWZ0aCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpZnRoJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZpZnRoJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZpZnRoJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2WzRdKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgcGFzc2VzIGl0cyByZXN1bHQgdG9cbiAqIHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhlXG4gKiByZXN1bHQuXG4gKlxuICogVGhpcyBpcyB0aGUgYGZtYXBgIG9wZXJhdGlvbiBmcm9tIEhhc2tlbGwncyBgRnVuY3RvcmAgY2xhc3MuIEl0J3NcbiAqIHVzZWQgYXMgYSBiYXNpcyBmb3IgbGlmdGluZyBmdW5jdGlvbnMgaW50byBhIFBhcnNlciBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOip9IGZuIEEgbWFwcGluZyBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgIGFuZCB3aG9zZSByZXR1cm4gdmFsdWUgd2lsbCBiZSB0aGUgcmVzdWx0IG9mIHRoZVxuICogICAgIGNyZWF0ZWQgcGFyc2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgc3VjY2VlZCB3aXRoIHRoYXRcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgaXRzIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcCA9IChwLCBmbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYXAnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignbWFwJywgZm4sIGFyZ0ZuRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ21hcCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHBjdHgsIGZuKHByZXMudmFsdWUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBxYCB0byB0aGUgZnVuY3Rpb25cbiAqIHJldHVybmVkIGJ5IGBwYC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBgcWAgZmFpbHMgYWZ0ZXIgYHBgIGNvbnN1bWVzIGlucHV0LFxuICogZXZlbiBpZiBgcWAncyBmYWlsdXJlIHdhcyBub24tZmF0YWwuXG4gKlxuICogVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgYDwqPmAgZnJvbSBIYXNrZWxsJ3MgYEFwcGxpY2F0aXZlYFxuICogY2xhc3MuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICogICAgIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIEEgcGFyc2VyIHdoaWNoIHByb3ZpZGVzIGEgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBgcWAgYW5kIHJlc3VsdHMgaW5cbiAqICAgICB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAgd2hlbiB0aGUgdmFsdWVcbiAqICAgICByZXR1cm5lZCBieSBgcGAgaXMgcGFzc2VkIGludG8gaXQuXG4gKi9cbmV4cG9ydCBjb25zdCBhcHBseSA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FwcGx5JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseScsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhcHBseScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgW3FjdHgsIHFyZXNdID0gcShwY3R4KVxuICBpZiAocXJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHFyZXMuc3RhdHVzID09PSBGYXRhbCB8fCBxY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICByZXR1cm4gZm4ocWN0eCwgaGFzTSA/IG1lcnJvciA6IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBmbiA9IHFyZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICdhcHBseScsIGZuLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBmdW5jdGlvbicpLFxuICApXG4gIHJldHVybiBva1JlcGx5KHFjdHgsIGZuKHByZXMudmFsdWUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgcmVzdWx0IGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWQgcGFyc2VyXG4gKiB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZSBwYXJzZXJcbiAqIHJldHVybnMgdGhhdCByZXN1bHQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgdGhlIGZ1bmN0aW9uLXByb3ZpZGVkIHBhcnNlciBmYWlsc1xuICogYWZ0ZXIgdGhlIG90aGVyIHBhcnNlciBjb25zdW1lcyBpbnB1dCwgZXZlbiBpZiB0aGF0IGZhaWx1cmUgaXNcbiAqIG5vbi1mYXRhbC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyB0aGUgYE1vbmFkYCBjbGFzcydzIGBiaW5kYCBvcGVyYXRpb25cbiAqIChnZW5lcmFsbHkgd3JpdHRlbiBgPj49YCBpbiBIYXNrZWxsKS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9IChwLCBmbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjaGFpbicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdjaGFpbicsIGZuLCBhcmdGbkZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdjaGFpbicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgcSA9IGZuKHByZXMudmFsdWUpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoXG4gICAgJ2NoYWluJywgcSwgZm9ybWF0dGVyKCdzZWNvbmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgcGFyc2VyJyksXG4gIClcblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IGR1cChxKHBjdHgpKVxuICBpZiAocXJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHFyZXMuc3RhdHVzID09PSBGYXRhbCB8fCBxY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICByZXR1cm4gZm4ocWN0eCwgaGFzTSA/IG1lcnJvciA6IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycykpXG4gIH1cbiAgcmV0dXJuIHFyZXBcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdGbkZvcm1hdHRlcixcbiAgYXJnR2VuRm9ybWF0dGVyLFxuICBhcmdOdW1Gb3JtYXR0ZXIsXG4gIGFyZ1BhckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0R2VuRnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRTdHJpbmcsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCwgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAsIHJhbmdlLCBzdHJpbmdpZnksIHdvcmRpbmFsIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuZnVuY3Rpb24gbG9vcE1lc3NhZ2UobmFtZSkge1xuICByZXR1cm4gYFske25hbWV9XTogaW5maW5pdGUgbG9vcCBkZXRlY3RlZDsgYFxuICAgICsgJ25laXRoZXIgY29udGVudCBub3Igc2VwYXJhdG9yIHBhcnNlciBjb25zdW1lZCBpbnB1dCdcbn1cblxuY29uc3QgcmVwbHlGbiA9IGNvbmQgPT4gY29uZCA/IGZhdGFsUmVwbHkgOiBmYWlsUmVwbHlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYSBzZXF1ZW5jZS4gRWFjaCBzdXBwbGllZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqIGluIG9yZGVyIHVudGlsIGVpdGhlciB0aGV5IGFsbCBzdWNjZWVkIG9yIHRoZSBmaXJzdCBvbmUgZmFpbHMuIEluIHRoZVxuICogZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0IGJlY29tZXMgdGhlXG4gKiByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYW55IGlucHV0IHdhcyBjb25zdW1lZCBiZWZvcmUgYW55IG9mXG4gKiBpdHMgcGFyc2VycyBmYWlsLCBldmVuIGlmIHRoYXQgZmFpbHVyZSBpdHNlbGYgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcnxzdHJpbmd9IGFyZ3MgVGhlIHBhcnNlcnMgdG8gYmUgZXhlY3V0ZWQuIFRoZSBsYXN0XG4gKiAgICAgYXJndW1lbnQgKm1heSogYmUgYSBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgYmVjb21lcyB0aGUgZXhwZWN0ZWRcbiAqICAgICBlcnJvciBtZXNzYWdlIGluIHBsYWNlIG9mIHRoZSBjb2xsZWN0ZWQgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXNcbiAqICAgICBvZiB0aGUgY29uc3RpdHVlbnQgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0XG4gKiAgICAgYSB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXEgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+XG4gICAgICBhc3NlcnRQYXJzZXIoJ3NlcScsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgdHJ1ZSkpKVxuXG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuICAgIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICAgIGNvbnRleHQgPSBwY3R4XG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBjb250ZXh0LmluZGV4ICE9PSBpbmRleClcbiAgICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIGVycm9ycylcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluIG9yZGVyIGFuZCByZXR1cm5zXG4gKiB0aGUgcmVzdWx0IG9mIGBwYC4gVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGFwcGxpY2F0aXZlIGA8KmBcbiAqIGluIEhhc2tlbGwuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXR1cm5zIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0ID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdCcsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdsZWZ0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgY29uc3QgZm4gPSBwcmVzLnN0YXR1cyA9PT0gRmF0YWwgPyBmYXRhbFJlcGx5IDogZmFpbFJlcGx5XG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHFjdHgsIHByZXMudmFsdWUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gb3JkZXIgYW5kIHJldHVybnNcbiAqIHRoZSByZXN1bHQgb2YgYHFgLiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyB0aGUgYXBwbGljYXRpdmUgYCo+YFxuICogaW4gSGFza2VsbC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBgcWAgZmFpbHMgYWZ0ZXIgYHBgIGNvbnN1bWVzIGlucHV0LFxuICogZXZlbiBpZiBgcWAncyBmYWlsdXJlIHdhcyBub24tZmF0YWwuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgY29uc3QgcmlnaHQgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmlnaHQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBTdGF0dXMuT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IGR1cChxKHBjdHgpKVxuICBpZiAocXJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHFjdHguc3RhdHVzID09PSBGYXRhbCB8fCBxY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICByZXR1cm4gZm4ocWN0eCwgaGFzTSA/IG1lcnJvciA6IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycykpXG4gIH1cbiAgcmV0dXJuIHFyZXBcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXG4gKlxuICogSWYgYW55IHlpZWxkZWQgcGFyc2VyIGZhaWxzIGFmdGVyIGFub3RoZXIgeWllbGRlZCBwYXJzZXIgaGFzIGNvbnN1bWVkXG4gKiBpbnB1dCwgdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxuICogY2F1c2UgYW4gZXJyb3IgdG8gYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRzXG4gKiAgICAgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5IGBQYXJzZXJgcztcbiAqICAgICBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBibG9jayA9IChnLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRHZW5GdW5jdGlvbignYmxvY2snLCBnLCBhcmdHZW5Gb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmxvY2snLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgZ2VuID0gZygpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSlcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Jsb2NrJywgdmFsdWUsIHYgPT4gYGV4cGVjdGVkICR7XG4gICAgICB3b3JkaW5hbChpICsgMSlcbiAgICB9IHlpZWxkIHRvIGJlIHRvIGEgcGFyc2VyOyBmb3VuZCAke3N0cmluZ2lmeSh2KX1gKVxuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gdmFsdWUoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmICghaGFzTSkgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgICByZXR1cm4gZm4ocGN0eCwgZXJyb3JzKVxuICAgIH1cbiAgICBuZXh0VmFsdWUgPSBwcmVzLnZhbHVlXG4gICAgaSsrXG4gIH1cbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzIHVudGlsIGl0IGZhaWxzLFxuICogY29sbGVjdGluZyB0aGUgcmVzdWx0cyBpbnRvIGFuIGFycmF5IHRoYXQgaXMgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGZhaWwgbm9uLWZhdGFsbHk7IGhvd2V2ZXIsIGlmIGBwYCBldmVyIGZhaWxzXG4gKiBmYXRhbGx5LCB0aGVuIHNvIHdpbGwgdGhpcyBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgZXhlY3V0ZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbWFueSA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnknLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbWFueScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW50byBhbiBhcnJheSB0aGF0IGlzIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbiBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGBwYCBldmVyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgZXhlY3V0ZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55MSA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnkxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ21hbnkxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgZGlzY2FyZHMgYW55IHN1Y2Nlc3NmdWwgcmVzdWx0IHdoaWxlXG4gKiBzdGlsbCBjb25zdW1pbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdG8gYmUgZGlzY2FyZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGNvbnN1bWUgaW5wdXQgYXMgYHBgIGRvZXMgb25cbiAqICAgICBzdWNjZXNzLCBidXQgd2lsbCBwcm9kdWNlIG5vIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXAgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdza2lwJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NraXAnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuICByZXR1cm4gb2tSZXBseShwY3R4LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBkaXNjYXJkaW5nIHRoZSByZXN1bHRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBmYWlsIG5vbi1mYXRhbGx5OyBob3dldmVyLCBpZiBgcGAgZXZlciBmYWlsc1xuICogZmF0YWxseSwgdGhlbiBzbyB3aWxsIHRoaXMgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXBNYW55ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcE1hbnknLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2tpcE1hbnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGRpc2NhcmRpbmcgdGhlIHJlc3VsdHMuXG4gKlxuICogVGhpcyBwYXJzZXIgY2FuIGZhaWwgbm9uLWZhdGFsbHkgaWYgYHBgIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIEl0IGNhbiBmYWlsIGZhdGFsbHkgaWYgYHBgIGV2ZXIgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIG9uZSBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXBNYW55MSA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NraXBNYW55MScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdza2lwTWFueTEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2AgaW5cbiAqIGJldHdlZW4gZWFjaC4gVGhlIHJlc3VsdHMgb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZFxuICogcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBub24tZmF0YWxseSwgYXMgbWF0Y2hpbmcgYHBgIHplcm8gdGltZXMgaXNcbiAqIHZhbGlkLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGVpdGhlciBgcGAgb3IgYHNgIGV2ZXIgZmFpbCBmYXRhbGx5LlxuICpcbiAqIElmIGBwYCBhbmQgYHNgIGJvdGggc3VjY2VlZCB3aXRob3V0IGNvbnN1bWluZyBjb250ZW50LCB0aGF0IHdvdWxkXG4gKiBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXAgPSAocCwgcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXAnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcCcsIHMsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzZXAnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCBbXSlcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY29udGV4dClcbiAgICBjb250ZXh0ID0gc2N0eFxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGhhc00gPyBtZXJyb3IgOiBzcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcCcpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2AgaW5cbiAqIGJldHdlZW4gZWFjaC4gVGhlIHJlc3VsdHMgb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZFxuICogcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIEl0XG4gKiB3aWxsIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwMSA9IChwLCBzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcDEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcDEnLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2VwMScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgaGFzTSA/IG1lcnJvciA6IHNyZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwMScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2ggYW5kIG9wdGlvbmFsbHkgYWZ0ZXIgdGhlIGxhc3QgbWF0Y2ggb2YgYHBgLiBUaGUgcmVzdWx0c1xuICogb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZCByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIG5vdCBmYWlsIG5vbi1mYXRhbGx5LCBhcyBtYXRjaGluZyBgcGAgemVybyB0aW1lcyBpc1xuICogdmFsaWQuIEl0IGNhbiBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuZCA9IChwLCBzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZW5kJywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2VuZCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgaGFzTSA/IG1lcnJvciA6IHNyZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnZW5kJykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKHsgLi4uY29udGV4dCwgaW5kZXggfSlcbiAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGhhc00gPyBtZXJyb3IgOiBzcmVzLmVycm9ycylcbiAgfVxuICByZXR1cm4gb2tSZXBseShzY3R4LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIG9uZSBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2ggYW5kIG9wdGlvbmFsbHkgYWZ0ZXIgdGhlIGxhc3QgbWF0Y2ggb2YgYHBgLiBUaGUgcmVzdWx0c1xuICogb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZCByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIG5vdCBmYWlsIGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSXRcbiAqIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGVpdGhlciBgcGAgb3IgYHNgIGV2ZXIgZmFpbCBmYXRhbGx5LlxuICpcbiAqIElmIGBwYCBhbmQgYHNgIGJvdGggc3VjY2VlZCB3aXRob3V0IGNvbnN1bWluZyBjb250ZW50LCB0aGF0IHdvdWxkXG4gKiBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBFbmRCeTEgPSAocCwgcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeTEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5MScsIHMsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzZXBFbmRCeTEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY29udGV4dClcbiAgICBjb250ZXh0ID0gc2N0eFxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGhhc00gPyBtZXJyb3IgOiBzcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEVuZEJ5MScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyh7IC4uLmNvbnRleHQsIGluZGV4IH0pXG4gIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoc2N0eCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLCBjb2xsZWN0aW5nIHRoZVxuICogc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuXG4gKlxuICogSWYgYHBgIGZhaWxzIGFmdGVyIGFueSBpbnB1dCBoYXMgYmVlbiBjb25zdW1lZCBieSBhIHByaW9yIGV4ZWN1dGlvblxuICogb2YgYHBgLCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBleGVjdXRlIG11bHRpcGxlIHRpbWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBleGVjdXRlIHRoZSBwYXJzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBlYXQgPSAocCwgbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyZXBlYXQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ3JlcGVhdCcsIG4sIGFyZ051bUZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyZXBlYXQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgaXRzIHN0YXJ0LCBjb250ZW50LCBhbmQgZW5kIHBhcnNlcnMgaW4gb3JkZXJcbiAqIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIElmIGVpdGhlciBgcGAgb3IgYGVgIGZhaWxzIGFmdGVyIGEgcHJpb3IgcGFyc2VyIGhhcyBjb25zdW1lZFxuICogaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBzIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZSBUaGUgbGFzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseSBhbmQgd2hvc2UgcmVzdWx0IGJlY29tZXNcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgcGFyc2VycyBpbiB0aGUgY29ycmVjdFxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuID0gKHMsIGUsIHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHMsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIGUsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHAsIGFyZ1BhckZvcm1hdHRlcigzLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiZXR3ZWVuJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjdHgpXG4gIGlmIChzcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4oc3Jlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihzY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBzcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoc2N0eClcbiAgY29uc3QgZXJyb3JzID0gaGFzTVxuICAgID8gZXhwZWN0ZWQobSlcbiAgICA6IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShzcmVzLmVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtlY3R4LCBlcmVzXSA9IGUocGN0eClcbiAgaWYgKGVyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihlcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgZWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKGVjdHgsIGhhc00gPyBlcnJvcnMgOiBtZXJnZShlcnJvcnMsIGVyZXMuZXJyb3JzKSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShlY3R4LCBwcmVzLnZhbHVlKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBhIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBhblxuICogZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZlxuICogdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqICpmaXJzdCosIHNvIHRoZSByZXN1bHRzIG9mIHRoZSB0d28gcGFyc2VycyB3aWxsIG5vdCBvdmVybGFwLlxuICpcbiAqIElmIGBwYCBmYWlscyBiZWZvcmUgYGVgIHN1Y2NlZWRzIGJ1dCBhZnRlciBwcmlvciBleGVjdXRpb25zIG9mIGBwYFxuICogaGF2ZSBjb25zdW1lZCBpbnB1dCwgdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyLiBJdHMgcmVzdWx0cyBhcmUgcHVzaGVkIGludG8gYW5cbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZSBUaGUgZW5kIHBhcnNlci4gUGFyc2luZyBlbmRzIHdoZW4gdGhpcyBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIHplcm8gb3IgbW9yZSB0aW1lc1xuICogICAgIHVudGlsIGBlYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsID0gKHAsIGUsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndW50aWwnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3VudGlsJywgZSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VudGlsJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbZWN0eCwgZXJlc10gPSBlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IGVjdHhcbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShlY3R4LCBoYXNNID8gbWVycm9yIDogZXJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChlcmVzLnN0YXR1cyA9PT0gT2spIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgZXJlcy5lcnJvcnMpKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzIHRob3NlXG4gKiByZXN1bHRzIHRvIGEgZnVuY3Rpb24gb2YgdGhlIHNhbWUgYXJpdHkgYXMgdGhlIG51bWJlciBvZiBwYXJzZXJzIHRvXG4gKiBleGVjdXRlLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGlzIHBhcnNlcidzXG4gKiByZXN1bHQuXG4gKlxuICogTm90ZSB0aGF0LCB1bmxpa2UgYHNlcXVlbmNlYCwgYG51bGxgIHBhcnNlciByZXN1bHRzIGFyZSAqbm90KlxuICogZGlzY2FyZGVkLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAqIHRvIGBmbmAgbm8gbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXG4gKlxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIGFmdGVyIHByaW9yIHBhcnNlcnMgaGF2ZSBjb25zdW1lZCBpbnB1dCxcbiAqIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGFwcGxpY2F0aXZlIGxpZnQgb3BlcmF0aW9uLCBsaWZ0aW5nXG4gKiBtdWx0aS1wYXJhbWV0ZXIgZnVuY3Rpb25zIGludG8gdGhlIGNvbnRleHQgb2YgYSBwYXJzZXIuIEl0IGFjdHMgbGlrZVxuICogYGxpZnRBMmAgaWYgdHdvIHBhcnNlcnMgYXJlIHBhc3NlZCBpbiwgYGxpZnRBM2AgaWYgdGhyZWUgYXJlIHBhc3NlZFxuICogaW4sIGV0Yy5cbiAqXG4gKiBAcGFyYW0gey4uLihQYXJzZXJ8ZnVuY3Rpb24oLi4uKik6KnxzdHJpbmcpfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnNcbiAqICAgICB0byBiZSBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvblxuICogICAgIHdoaWNoIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHNcbiAqICAgICByZXR1cm4gdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGVcbiAqICAgICBmdW5jdGlvbiBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgY29tZSBhZnRlciB0aGUgcGFyc2Vycy5cbiAqICAgICBPcHRpb25hbGx5LCBhIHN0cmluZyBtYXkgYmUgdGhlIGxhc3QgYXJndW1lbnQ7IGlmIGl0IGlzIHByZXNlbnQsXG4gKiAgICAgaXQgcmVwbGFjZXMgdGhlIGRlZmF1bHQgZXJyb3IgbWVzc2FnZSBpbiB0aGUgZXZlbnQgdGhhdCB0aGVcbiAqICAgICBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgZXhlY3V0ZSBpdHMgcGFyc2VycyBpbiBvcmRlcixcbiAqICAgICBmZWVkIHRoZSByZXN1bHRzIHRvIGl0cyBmdW5jdGlvbiwgYW5kIHJlc3VsdCBpbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBpcGUgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcbiAgY29uc3QgZm4gPSBwcy5wb3AoKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgICBBU1NFUlQgJiYgcHMuZm9yRWFjaCgocCwgaSkgPT4gYXNzZXJ0UGFyc2VyKFxuICAgICAgJ3BpcGUnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpLFxuICAgICkpXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdwaXBlJywgZm4sIGFyZ0ZuRm9ybWF0dGVyKHBzLmxlbmd0aCArIDEsIHRydWUpKVxuXG4gICAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGxldCBjb250ZXh0ID0gY3R4XG4gICAgbGV0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IFtdXG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICAgIGNvbnRleHQgPSBwY3R4XG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgICAgcmV0dXJuIGZuKHBjdHgsIGVycm9ycylcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogUHJpdmF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciBhc3NlcnRpb24gbWVzc2FnZXMgYWJvdXQgb3AgcGFyc2Vyc1xuICogbm90IHJldHVybmluZyBmdW5jdGlvbnNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gb3JkIFRoZSBudW1iZXIgb2YgdGhlIG9wIHBhcnNlciB0aGF0IGZhaWxzIHRvIHByb2R1Y2VcbiAqICAgICBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBbiBhcHByb3ByaWF0ZSBhc3NlcnRpb24gZmFpbHVyZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBvcEZvcm1hdHRlcihvcmQpIHtcbiAgcmV0dXJuIHZhbHVlID0+IGBleHBlY3RlZCAke29yZH0gb3AgcGFyc2VyIHRvIHJldHVybiBhIGZ1bmN0aW9uOyBmb3VuZCAke1xuICAgIHN0cmluZ2lmeSh2YWx1ZSlcbiAgfWBcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdCBhc3NvY2lhdGl2ZVxuICogYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb2AsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY0wgPSAocCwgbywgeCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jTCcsIG8sIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhc3NvY0wnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoNCwgdHJ1ZSkpXG5cbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgaGFzTSA/IG1lcnJvciA6IG9yZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvY0wnLCBvcmVzLnZhbHVlLCBvcEZvcm1hdHRlcih3b3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIE90aGVyd2lzZSBpdCBjYW4gb25seSBmYWlsIGZhdGFsbHkgaWYgYHBgIG9yIGBvYCBmYWlscyBmYXRhbGx5LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9gIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG8gVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvYzFMID0gKHAsIG8sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxTCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxTCcsIG8sIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhc3NvYzFMJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbb2N0eCwgb3Jlc10gPSBvKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG9jdHhcbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShvY3R4LCBoYXNNID8gbWVycm9yIDogb3Jlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICAgJ2Fzc29jMUwnLCBvcmVzLnZhbHVlLCBvcEZvcm1hdHRlcih3b3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgLCBlYWNoIHNlcGFyYXRlZFxuICogYnkgYG9gLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodCBhc3NvY2lhdGl2ZVxuICogYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9gIHJlc3VsdHMgdG8gdGhlIHJlc3VsdHNcbiAqIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cbiAqIElmIHRoZXJlIGFyZSB6ZXJvIG1hdGNoZXMgb2YgYHBgLCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGB4YCBiZWNvbWVzXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9gIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG8gVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb2AgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9gIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY1IgPSAocCwgbywgeCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY1InLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jUicsIG8sIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhc3NvY1InLCBtLCBhcmdTdHJGb3JtYXR0ZXIoNCwgdHJ1ZSkpXG5cbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgaGFzTSA/IG1lcnJvciA6IG9yZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvY1InLCBvcmVzLnZhbHVlLCBvcEZvcm1hdHRlcih3b3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIE90aGVyd2lzZSBpdCBjYW4gb25seSBmYWlsIGZhdGFsbHkgaWYgYHBgIG9yIGBvYCBmYWlscyBmYXRhbGx5LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9gIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG8gVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2MxUiA9IChwLCBvLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMVInLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMVInLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXNzb2MxUicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgaGFzTSA/IG1lcnJvciA6IG9yZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvYzFSJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZm9ybWF0RXJyb3JzIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IGR1cCwgc3RyaW5nVG9WaWV3LCB0cmFjayB9IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xuICogb2YgdHlwZWQgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxufVxuXG4vKipcbiAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3RhdHVzIG9mIHRoZSBsYXN0IHBhcnNpbmcgb3BlcmF0aW9uLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IHtcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIHdhcyBzdWNjZXNzZnVsLiAqL1xuICBPazogJ29rJyxcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC4gKi9cbiAgRmFpbDogJ2ZhaWwnLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cbiAgRmF0YWw6ICdmYXRhbCcsXG59XG5cbi8qKlxuICogVGhlIGNvbnRleHQgb2YgYSBwYXJzZXIuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBpbnB1dCB0ZXh0IGFuZCBhXG4gKiBwb2ludGVyIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIHdpdGhpbiBpdC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb250ZXh0XG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgd2hlcmUgdGhlXG4gKiAgICAgbmV4dCBwYXJzaW5nIG9wZXJhdGlvbiB3aWxsIHRha2UgcGxhY2UgKG9yIHdoZXJlIHRoZSBsYXN0IG9uZVxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGlzIGlzXG4gKiBlc3NlbnRpYWxseSBhIHVuaW9uIG9mIHN1Y2Nlc3NmdWwgdmFsdWUgYW5kIGZhaWx1cmUgZXJyb3IsIHdpdGggdGhlXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVzdWx0XG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXG4gKiAgICAgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiBhIHN1Y2Nlc3NmdWwgcGFyc2UuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxuICogICAgIGR1cmluZyBhbiB1bnN1Y2Nlc3NmdWwgcGFyc2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgb2JqZWN0IHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgaW5jbHVkaW5nIHRoZVxuICogY29udGV4dCBhbmQgdGhlIHJlc3VsdC5cbiAqIEB0eXBlZGVmIHtbQ29udGV4dCwgUmVzdWx0XX0gUmVwbHlcbiAqL1xuXG4vKipcbiAqIEEgdHlwZWQgYXJyYXkgb2YgYW55IGJ1aWx0LWluIGtpbmQuXG4gKlxuICogQHR5cGVkZWZcbiAqICAgeyhVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcbiAqICAgSW50MTZBcnJheXxJbnQzMkFycmF5fEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXkpfSBUeXBlZEFycmF5XG4gKi9cblxuLyoqXG4gKiBJbnB1dCB0ZXh0IHRvIGJlIHBhcnNlZC5cbiAqXG4gKiBAdHlwZWRlZiB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gSW5wdXRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBjb250ZXh0LiBUaGlzIGlzIG5vdCBleHBvcnRlZCBiZWNhdXNlIGFcbiAqIG5ldyBjb250ZXh0IGlzIG9ubHkgY3JlYXRlZCBiZWZvcmUgcGFyc2luZywgaW4gdGhlIGBwYXJzZWAgZnVuY3Rpb24uXG4gKiBBbnkgZnVydGhlciBjb250ZXh0cyBhcmUgZGVyaXZlZCBmcm9tIHRoZSBjb250ZXh0IHVzaW5nIHtAbGluayBva30sXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxuICpcbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge0NvbnRleHR9IEFuIGVtcHR5IHBhcnNlciBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dChpbnB1dCkge1xuICBjb25zdCBtZXNzYWdlID0gJ1BhcnNlciBpbnB1dCBtdXN0IGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LCBhbiBhcnJheSAnXG4gICAgKyBgYnVmZmVyLCBvciBhIGRhdGEgdmlldzsgcGFyc2VyIGlucHV0IHdhcyAke3R5cGVvZiBpbnB1dH1gXG5cbiAgY29uc3QgdmlldyA9IChpbnB1dCA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpc1R5cGVkQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH0pKGlucHV0KVxuXG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBpbmRleDogMCxcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXG4gKiBjb250ZXh0LCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXG4gKiByZXR1cm5zIHRoZSB1cGRhdGVkIGNvbnRleHQuXG4gKlxuICogQGNhbGxiYWNrIFBhcnNlclxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYmVmb3JlIHRoZSBwYXJzZXIgaXMgcnVuLlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgdXBkYXRlZCBjb250ZXh0IGFmdGVyIHRoZSBwYXJzZXIgaXMgYXBwbGllZCBhbmRcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoYXQgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgUGFyc2VyYC4gVGhpcyBmYWN0b3J5IHNpbXBseSB0YWtlcyBhIHBhcnNlciBmdW5jdGlvblxuICogYW5kIHJldHVybnMgdGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uOyB0aGUgcHVycG9zZSBvZiB0aGUgZmFjdG9yeSBpc1xuICogdG8gdHJhY2sgcGFyc2VycyB0aGF0IGl0IGhhcyBjcmVhdGVkLlxuICpcbiAqIElmIGFzc2VydGlvbnMgYXJlIGVuYWJsZWQsIHRoaXMgd2lsbCBtZWFuIHRoYXQgYW55IHBhcnNlciBjb21iaW5hdG9yXG4gKiB3aWxsIGFzc2VydCB0aGF0IHRoZSBwYXJzZXIgdGhhdCBpcyBwYXNzZWQgdG8gaXQgd2FzIGNyZWF0ZWQgYnkgdGhpc1xuICogZmFjdG9yeSBmdW5jdGlvbi4gQW55IG90aGVyIHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93bixcbiAqIGV2ZW4gaWYgaXQgYWNjZXB0cyB0aGUgcmlnaHQga2luZCBvZiBhcmd1bWVudCBhbmQgcmV0dXJucyB0aGUgcHJvcGVyXG4gKiByZXR1cm4gdmFsdWUuIElmIGFzc2VydGlvbnMgYXJlIG5vdCBlbmFibGVkLCB0aGlzIGNoZWNrIHdpbGwgbm90IGJlXG4gKiBkb25lLlxuICpcbiAqIEV2ZXJ5IHBhcnNlciBpbiB0aGlzIGxpYnJhcnkgaXMgY3JlYXRlZCB3aXRoIGBtYWtlUGFyc2VyYCwgc28gYW55IG9mXG4gKiB0aG9zZSBvciBhbnkgcGFyc2VyIGNvbXBvc2VkIGZyb20gdGhvc2Ugd2lsbCB3b3JrIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IGZuIEEgcGFyc2VyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gVGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3QgcGFyc2VyID0gdHJhY2soZm4gPT4gZm4pXG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgcmVwbHkgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2Ugc3VjY2VlZGVkLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIHBhcnNlclxuICogICAgIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBzdWNjZWVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBva1JlcGx5KGN0eCwgdmFsdWUgPSBudWxsLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLk9rLCB2YWx1ZSB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IHJlcGx5IGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZ1xuICogaW5wdXQuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250ZXh0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbFJlcGx5KGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmFpbCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgcmVwbHkgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdoaWxlIGNvbnN1bWluZ1xuICogaW5wdXQuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W10gVGhlIGVycm9ycyBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRleHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9Y3R4LmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGUgbGF0ZXN0XG4gKiAgICAgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYXRhbFJlcGx5KGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmF0YWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFRoaXMgaW5wdXQgY2FuIGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LFxuICogYW4gYXJyYXkgYnVmZmVyLCBvciBhIGRhdGEgdmlldy4gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgZmluYWwgcGFyc2VyXG4gKiBjb250ZXh0IHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgYWZ0ZXIgYmVpbmcgcnVuLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgZmluYWwgY29udGV4dCBhZnRlciBhbGwgcGFyc2VycyBoYXZlIGJlZW5cbiAqICAgICBhcHBsaWVkIGFuZCB0aGUgcmVzdWx0IG9mIHRoZSBmaW5hbCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShwYXJzZXIsIGlucHV0KSB7XG4gIHJldHVybiBwYXJzZXIoY29udGV4dChpbnB1dCkpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtTdGF0dXN9IFRoZSBzdGF0dXMgb2YgdGhlIGdpdmVuIHJlcGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdHVzKHJlcGx5KSB7XG4gIHJldHVybiByZXBseVsxXS5zdGF0dXNcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gaW52b2NhdGlvbiBvZiBgcGFyc2VgIHdhcyBzdWNjZXNzZnVsLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcGFyc2VyIHN1Y2NlZWRlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgZGlkIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2NlZWRlZChyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzID09PSBTdGF0dXMuT2tcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuIElmIHRoZSBwYXJzZXJcbiAqIGRpZCBub3Qgc3VjY2VlZCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAqXG4gKiBOb3RlIHRoYXQgYG51bGxgIGlzIGEgcG9zc2libGUgcmVzdWx0IGZyb20gc29tZSBpbmRpdmlkdWFsIHBhcnNlcnNcbiAqIChgc2tpcGAsIGBsb29rQWhlYWRgLCBldGMuKS4gVGhlIHByb3BlciB3YXkgdG8gdGVsbCBpZiBhIHBhcnNlclxuICogc3VjY2VlZGVkIGluIHRoZSBmaXJzdCBwbGFjZSBpcyB0byB1c2UgYHN1Y2NlZWRlZGAuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB2YWx1ZSBmcm9tIHRoZSBwYXJzZSBpZiBpdCB3YXMgc3VjY2Vzc2Z1bCxcbiAqICAgICBvciBgbnVsbGAgaWYgaXQgd2FzIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2Nlc3MocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyByZXBseVsxXS52YWx1ZSA6IG51bGxcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgZXJyb3IgbWVzc2FnZSBhcyBhIHN0cmluZyBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBhblxuICogdW5zdWNjZXNzZnVsIGludm9jYXRpb24gb2YgYHBhcnNlYC4gSWYgdGhlIHBhcnNlciB3YXMgYWN0dWFsbHlcbiAqIHN1Y2Nlc3NmdWwsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmcgZGV0YWlsaW5nIHRoZSBjaXJjdW1zdGFuY2VzIG9mXG4gKiAgICAgdGhlIHBhcnNlciBmYWlsdXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZShyZXBseSkge1xuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IG51bGwgOiBmb3JtYXRFcnJvcnMocmVwbHkpXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gUmV0dXJucyB0aGUgcGFyc2VkIHZhbHVlIGlmIHRoZSBwYXJzZXJcbiAqIHN1Y2NlZWRzLCBvciB0aHJvd3MgYW4gZXhjZXB0aW9uIHdpdGggdGhlIHBhcnNlcidzIGVycm9yIG1lc3NhZ2UgaWZcbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgZnJvbSB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLCBpZiB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBhcnNlciBmYWlscy4gVGhlIGVycm9yIG1lc3NhZ2Ugd2lsbCBiZSBhXG4gKiAgICAgZGV0YWlsZWQgcmVjb3JkIG9mIHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwYXJzZXIsIGlucHV0KSB7XG4gIGNvbnN0IFtyZXBseSwgW18sIHJlc3VsdF1dID0gZHVwKHBhcnNlcihjb250ZXh0KGlucHV0KSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEVycm9ycyhyZXBseSkpXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBjaGFyTGVuZ3RoLFxuICBjb21tYVNlcGFyYXRlLFxuICBuZXh0Q2hhcldpZHRoLFxuICB2aWV3VG9TdHJpbmcsXG59IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5SZXN1bHR9IFJlc3VsdCAqL1xuXG5jb25zdCB0YWIgPSAvXFx0L2d1XG5jb25zdCB6ZXJvV2lkdGggPSAvKD86XFxwe01ufXxcXHB7Q2Z9KS9ndVxuXG4vKipcbiAqIEEgc3RyaW5nIGRlZmluaW5nIHRoZSB0eXBlIG9mIGFuIGVycm9yLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVycm9yVHlwZSA9IHtcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGV4cGVjdGVkIHJlc3VsdC4gUHJvZHVjZWQgYnkgdGhlIHZhc3RcbiAgICogbWFqb3JpdHkgb2YgcGFyc2Vycy5cbiAgICovXG4gIEV4cGVjdGVkOiAnZXhwZWN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSByZXN1bHQgdGhhdCB3YXMgbm90IGV4cGVjdGVkLiBUeXBpY2FsbHlcbiAgICogcHJvZHVjZWQgYnkgcGFyc2VycyBzdWNoIGFzIGB1bmV4cGVjdGVkYCBhbmQgYG5vdEZvbGxvd2VkQnlgLlxuICAgKi9cbiAgVW5leHBlY3RlZDogJ3VuZXhwZWN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFR5cGljYWxseSBwcm9kdWNlZFxuICAgKiBieSBwYXJzZXJzIHN1Y2ggYXMgYGZhaWxgIGFuZCBgZmFpbEZhdGFsbHlgLlxuICAgKi9cbiAgR2VuZXJpYzogJ2dlbmVyaWMnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXJyb3Igd2l0aGluIGFub3RoZXIgZXJyb3IuIFRoaXMgaXNcbiAgICogZ2VuZXJhbGx5IHVzZWQgZm9yIGFuIGVycm9yIHRoYXQgY2F1c2VkIGJhY2t0cmFja2luZywgd2hlcmUgdGhlXG4gICAqIHBhcmVudCBlcnJvciBpcyByZXBvcnRlZCBhZnRlciBiYWNrdHJhY2tpbmcuXG4gICAqL1xuICBOZXN0ZWQ6ICduZXN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBuZXN0ZWQgZXJyb3Igd2l0aCBpdHMgb3duIHNlcGFyYXRlIGVycm9yXG4gICAqIG1lc3NhZ2UuIFRoaXMgaXMgcHJvZHVjZWQgc3BlY2lmaWNhbGx5IGJ5IHRoZSBgY29tcG91bmRgIHBhcnNlci5cbiAgICovXG4gIENvbXBvdW5kOiAnY29tcG91bmQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgc29tZSBvdGhlciBraW5kIG9mIGVycm9yIG1lc3NhZ2UgdG8gYmVcbiAgICogZGlzcGxheWVkIGluIGEgY3VzdG9tIGVycm9yIGZvcm1hdHRlci5cbiAgICovXG4gIE90aGVyOiAnb3RoZXInLFxufVxuXG4vKipcbiAqIEEgbGlzdCBvZiBlcnJvcnMuIFRoaXMgY2FuIGNvbnNpc3Qgb2YgYW55IGVycm9yIG1lc3NhZ2VzIHRoYXQgYXBwbHlcbiAqIHRvIGEgcGFydGljdWxhciBpbmRleCBvciBuZXN0ZWQvY29tcG91bmQgZXJyb3JzIHRoYXQgcG9pbnQgYmFjayB0b1xuICogdGhlIHNhbWUgaW5kZXggYnV0IGFwcGx5IHRvIGEgZGlmZmVyZW50IG9uZS5cbiAqIEB0eXBlZGVmIHsoTmVzdGVkRXJyb3J8Q29tcG91bmRFcnJvcnxMb2NhbEVycm9yKVtdfSBFcnJvckxpc3RcbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBhdCB0aGUgbG9jYXRpb24gcmVmZXJyZWQgdG8gYnkgdGhlIGN1cnJlbnRcbiAqIGNvbnRleHQuIFRoZSB0eXBlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXJlIHRoZSBsYWJlbCBzaG91bGQgYmVcbiAqIHBvc2l0aW9uZWQgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTG9jYWxFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBlcnJvci5cbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBpbiBhIGRpZmZlcmVudCBsb2NhdGlvbiB0aGFuIHRoZSBvbmUgcmVmZXJyZWRcbiAqIHRvIGJ5IHRoZSBjdXJyZW50IGNvbnRleHQuIFRoZSBtb3N0IHR5cGljYWwgcmVhc29uIGZvciB0aGlzIGhhcHBlbmluZ1xuICogaXMgYmFja3RyYWNraW5nOyB0aGUgbG9jYWwgZXJyb3IgY2FuIHRyYWNrIHRoZSBjdXJyZW50XG4gKiAocG9zdC1iYWNrdHJhY2spIGxvY2F0aW9uIHdoaWxlIHRoZSBuZXN0ZWQgZXJyb3IgcmV0YWlucyBpbmZvcm10aW9uXG4gKiBmcm9tIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgYmFja3RyYWNraW5nIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXN0ZWRFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcbiAqICAgICBgRXJyb3JUeXBlLk5lc3RlZGAuXG4gKiBAcHJvcGVydHkge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbFxuICogICAgIGVycm9yIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tXG4gKiAgICAgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgY3R4YC5cbiAqL1xuXG4vKipcbiAqIEEgbmVzdGVkIGVycm9yIHRoYXQgaGFzIGl0cyBvd24gbGFiZWwuIFRoaXMgaXMgc2ltcGx5IGZvciBwcm9kdWNpbmdcbiAqIG5pY2VyIGVycm9yIG1lc3NhZ2VzOyB0aGlzIGVycm9yIGlzIHR5cGljYWxseSBvbmx5IHByb2R1Y2VkIGJ5IHRoZVxuICogYGJhY2tsYWJlbGAgcGFyc2VyLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbXBvdW5kRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXG4gKiAgICAgYEVycm9yVHlwZS5Db21wb3VuZGAuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZXJyb3IuIFRoaXNcbiAqICAgICBpcyB0eXBpY2FsbHkgdXNlZCBhcyBhIHNvcnQgb2YgaGVhZGVyIG92ZXIgdGhlIG5lc3RlZCBtZXNzYWdlc1xuICogICAgIHVuZGVyIHRoaXMgY29tcG91bmQgZXJyb3IuXG4gKiBAcHJvcGVydHkge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbFxuICogICAgIGVycm9yIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tXG4gKiAgICAgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgY3R4YC5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZXJyb3IgbGlzdCBjb250YWluaW5nIG9uZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGV4cGVjdGVkLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZXhwZWN0ZWQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGVjdGVkKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuRXhwZWN0ZWQsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuIEl0IGlzIGV4cGVjdGVkIHRoYXQgb25lIGFycmF5IG9mXG4gKiBlcnJvciBtZXNzYWdlcyBtYXkgaGF2ZSBtdWx0aXBsZSB1bmV4cGVjdGVkIGVycm9ycywgYnV0IG9ubHkgdGhlXG4gKiBmaXJzdCB3aWxsIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZm91bmQgYnV0IHdhc1xuICogICAgIG5vdCBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIHVuZXhwZWN0ZWQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXhwZWN0ZWQobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5VbmV4cGVjdGVkLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFRoZXJlIGNhbiBiZSBtb3JlIHRoYW4gb25lIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgaW4gYW4gYXJyYXkgb2YgZXJyb3IgbWVzc2FnZXMsIGJ1dCBvbmx5IHRoZSBmaXJzdCB3aWxsXG4gKiBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgZ2VuZXJpYyBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBnZW5lcmljIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuR2VuZXJpYywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIG90aGVyIGVycm9yLiBUaGVzZSBlcnJvcnMgYXJlIG5vdCBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHRcbiAqIGZvcm1hdHRlciBhdCBhbGwgYW5kIGFyZSBvbmx5IHVzZWZ1bCBmb3IgY3VzdG9tIGZvcm1hdHRlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBvdGhlciBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBwYXJzZSBlcnJvciBvZiB0aGUgb3RoZXIgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG90aGVyKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuT3RoZXIsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5lc3RlZCBlcnJvci4gVGhpcyB0YWtlcyBhbiBlcnJvciBsaXN0IGFuZCB3cmFwcyBpdCB3aXRoXG4gKiBjb250ZXh0IGluZm9ybWF0aW9uLiBJZiB0aGUgc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlXG4gKiBuZXN0ZWQgZXJyb3IsIHRoYXQgZXJyb3IgaXMgc2ltcGx5IHJldHVybmVkOyBhIHNpbmdsZSBuZXN0ZWQgZXJyb3JcbiAqIHdpbGwgbm90IGJlIG5lc3RlZCBpbiBhbm90aGVyIG5lc3RlZCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIG5lc3RlZCBlcnJvclxuICogICAgIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBjb250ZXh0LlxuICogQHJldHVybnMge1tOZXN0ZWRFcnJvcl19IEEgbmV3IG5lc3RlZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lc3RlZChjdHgsIGVycm9ycykge1xuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxuICAgID8gZXJyb3JzXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuTmVzdGVkLCBjdHgsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgY29tcG91bmQgZXJyb3IuIFRoaXMgd3JhcHMgYW4gZXJyb3IgbGlzdCBqdXN0IGFzIGFcbiAqIG5lc3RlZCBlcnJvciBkb2VzLCBleGNlcHQgaXQgYWxzbyBhdHRhY2hlcyBhIG1lc3NhZ2UgdG8gaXQuIElmIHRoZVxuICogc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlIG5lc3RlZCBlcnJvciwgaXRzIGluZm9ybWF0aW9uIGlzXG4gKiB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBjb21wb3VuZCBlcnJvciB3aXRob3V0IGFueSBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGF0dGFjaGVkIHRvIHRoZSBuZXN0ZWQgZXJyb3IuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIGNvbXBvdW5kXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7W0NvbXBvdW5kRXJyb3JdfSBBIG5ldyBjb21wb3VuZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvdW5kKGxhYmVsLCBjdHgsIGVycm9ycykge1xuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxuICAgID8gW3tcbiAgICAgIHR5cGU6IEVycm9yVHlwZS5Db21wb3VuZCxcbiAgICAgIGN0eDogZXJyb3JzLmN0eCxcbiAgICAgIGVycm9yczogZXJyb3JzLmVycm9ycyxcbiAgICAgIGxhYmVsLFxuICAgIH1dXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsIGN0eCwgZXJyb3JzLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIE1lcmdlcyB0d28gYXJyYXlzIG9mIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9yczE9W11dIFRoZSBmaXJzdCBhcnJheSBvZiBlcnJvcnMuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9yczI9W11dIFRoZSBzZWNvbmQgYXJyYXkgb2YgZXJyb3JzLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVycm9ycyBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHR3byBhcnJheXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShlcnJvcnMxID0gW10sIGVycm9yczIgPSBbXSkge1xuICByZXR1cm4gWy4uLmVycm9yczEsIC4uLmVycm9yczJdXG59XG5cbi8vICNyZWdpb24gRm9ybWF0dGluZyB1dGlsaXR5IGZ1bmN0aW9uc1xuXG4vLyAjcmVnaW9uIFR5cGVkZWZzIGZvciBvYmplY3QgcmV0dXJuIHR5cGVzXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2YWx1YXRpb24gb2YgYSBieXRlIHRvIHNlZVxuICogaWYgaXQgaXMgKG9yIHN0YXJ0cykgYSBuZXdsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5ld2xpbmVJbmZvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG5ld2xpbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNjYW5uZWQgYnl0ZSB3YXNcbiAqICAgICBlaXRoZXIgYSBuZXdsaW5lIG9yIHRoZSBiZWdpbm5pbmcgb2YgYSBtdWx0aS1ieXRlIG5ld2xpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2tpcCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgdGhlIG5leHQgY2hhcmFjdGVyXG4gKiAgICAgY29udGFpbnMuIFRoaXMgaXMgcmV0dXJuZWQgYWNjdXJhdGVseSB3aGV0aGVyIG9yIG5vdCB0aGF0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGEgbmV3bGluZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydCBhbmQgZW5kIGluZGV4ZXMgb2YgYVxuICogbGluZSB3aXRoaW4gYSBkYXRhIHZpZXcsIGFzIHdlbGwgYXMgdGhlIG51bWJlciBvZiB0aGF0IGxpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTGluZUluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGFsd2F5cyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBkYXRhIHZpZXcgaXRzZWxmLCBvciB0aGUgZmlyc3QgYnl0ZSBhZnRlciBhIG5ld2xpbmVcbiAqICAgICBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kIFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgbGFzdFxuICogICAgIGJ5dGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBlaXRoZXIgdGhlIGxhc3RcbiAqICAgICBieXRlIGluIHRoZSBkYXRhIHZpZXcgb3IgdGhlIGJ5dGUgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgYSBuZXdsaW5lIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lbm8gVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIGJvdW5kZWQgYnlcbiAqICAgICBpbmRleGVzIGBzdGFydGAgYW5kIGBlbmRgLiBUaGlzIG51bWJlciBpcyAxLWJhc2VkLCBhcyBpdCBpcyB1c2VkXG4gKiAgICAgZm9yIGRpc3BsYXkgb2YgYW4gZXJyb3IgcG9zaXRpb24gaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyB0aGUgYWRqdXN0ZWQgbGluZSBhbmQgY29sdW1uIGluZGV4IHRoYXQgcmVzdWx0c1xuICogZnJvbSB0YWIgZXhwYW5zaW9uLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhYmJlZExpbmVJbmZvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGluZSBUaGUgc3RyaW5nIG9mIHRleHQgcmVwcmVzZW50aW5nIG9uZSBsaW5lLFxuICogICAgIHdpdGggdGFiIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBzcGFjZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sSW5kZXggVGhlIGNoYXJhY3RlciBpbmRleCBwYXNzZWQgaW50byB0aGVcbiAqICAgICBmdW5jdGlvbiwgYWRqdXN0ZWQgYnkgdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0YWJzIGFuZFxuICogICAgIHRoZSBzcGFjZXMgdXNlZCB0byByZXBsYWNlIHRoZW0uXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFuaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBjb2x1bW4gaW5kZXggYW5kIGxpbmVcbiAqIGxlbmd0aCBhZnRlciBhY2NvdW50aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29sSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sbm8gVGhlIGFkanVzdGVkIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlclxuICogICAgIHBvaW50ZWQgdG8gYnkgdGhlIGBjaGFySW5kZXhgIHBhcmFtZXRlci4gVGhpcyBpcyBhZGp1c3RlZCBieSBhbnlcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdGhhdCBtYXkgYXBwZWFyIGluIHRoZSBsaW5lIGFuZCBpcyB0dXJuZWRcbiAqICAgICBpbnRvIGEgMS1iYXNlZCBudW1iZXIgZm9yIGRpc3BsYXkgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhpcyBpcyByZXR1cm5lZCBzb2xlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqICAgICBvdGhlciBmdW5jdGlvbnMgd2hvIHRoZW4gd29uJ3QgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGUgd2lkdGggb2ZcbiAqICAgICB0aGUgbGluZSBhY2NvdW50aW5nIGZvciB0aG9zZSBzYW1lIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqL1xuXG4vKipcbiAgKiBPYmplY3QgY29udGFpbmluZyBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycy5cbiAgKlxuICAqIEB0eXBlZGVmIHtvYmplY3R9IFBvc2l0aW9uXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmUgVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG8gYnlcbiAgKiAgICAgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldy5cbiAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uIFRoZSBjb2x1bW4gbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG9cbiAgKiAgICAgYnkgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldywgYWRqdXN0ZWQgZm9yIGNoYXJhY3RlciB3aWR0aCBhbmRcbiAgKiAgICAgdGFiIHNpemUuXG4gICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBjYWxsZWQgYnkgYGZvcm1hdEVycm9yc2AgdG8gZG8gdGhlIGFjdHVhbCBmb3JtYXR0aW5nLiBBXG4gKiBkZWZhdWx0IGZvcm1hdHRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCBidXQgY2FuIGJlIHJlcGxhY2VkIGlmXG4gKiBkZXNpcmVkLlxuICpcbiAqIEBjYWxsYmFjayBGb3JtYXR0ZXJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGVycm9ycyBiZWluZyB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiBgdmlld2Agb2YgdGhlIGJ5dGUgd2hlcmUgdGhlXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xuICogICAgIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gZGlzcGxheSB3aWR0aCBvZiB0aGUgbGluZSB3aGVyZVxuICogICAgIHRoZSBlcnJvciBvY2N1cnJlZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZVxuICogICAgIHRydW5jYXRlZCB3aXRoIGVsbGlwc2VzIGJlZm9yZSBhbmQvb3IgYWZ0ZXIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIG11bHRpLWxpbmUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhcmFjdGVyIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3VwcGxpZWRcbiAqIHZpZXcgaXMgYSBuZXdsaW5lLiBBbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllcyBpcyByZXR1cm5lZDtcbiAqIGBuZXdsaW5lYCBpcyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGF0IGNoYXJhY3RlciBpcyBhXG4gKiBuZXdsaW5lOyBgc2tpcGAgaXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgKGFuZCB0aGVyZWZvcmUgaG93IG1hbnlcbiAqIGJ5dGVzIHRvIHNraXAgdW50aWwgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGNoZWNrKS5cbiAqXG4gKiBBbGwgVW5pY29kZSBuZXdsaW5lcyAoQ1IsIExGLCBGRiwgVlQsIE5FTCwgTFMsIGFuZCBQUykgYXJlIGhhbmRsZWQsXG4gKiBhbG9uZyB3aXRoIHRoZSBtdWx0aS1jaGFyYWN0ZXIgbmV3bGluZSBDUitMRi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGludG8gYHZpZXdgIGluZGljYXRpbmcgdGhlIGJ5dGUgdG9cbiAqICAgICBjaGVjayB0byBzZWUgaWYgaXQncyBhIG5ld2xpbmUuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXdsaW5lSW5mb30gTmV3bGluZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5kZXhlZCBieXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdsaW5lKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoYnl0ZSA9PT0gMHgwYSB8fCBieXRlID09PSAweDBiIHx8IGJ5dGUgPT09IDB4MGMpIHtcbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChieXRlID09PSAweDBkKSB7XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcbiAgICAgIGlmIChieXRlID09PSAweDBkICYmIG5leHRCeXRlID09PSAweDBhKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuXG4gICAgaWYgKGJ5dGUgPT09IDB4YzIgJiYgbmV4dEJ5dGUgPT09IDB4ODUpIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDIpIHtcbiAgICAgIGNvbnN0IHRoaXJkQnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAyKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4ZTIgJiYgbmV4dEJ5dGUgPT09IDB4ODBcbiAgICAgICAgJiYgKHRoaXJkQnl0ZSA9PT0gMHhhOCB8fCB0aGlyZEJ5dGUgPT09IDB4YTkpKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDMgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG5ld2xpbmU6IGZhbHNlLCBza2lwOiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyBpbmRleGVzIG9mIHRoZSBsaW5lIGluIHRoZSBnaXZlblxuICogdmlldyB0aGF0IGNvbnRhaW5zIHRoZSBieXRlIHBvaW50ZWQgYXQgYnkgYGluZGV4YC4gSXQgZG9lcyB0aGlzIGJ5XG4gKiBkZXRlcm1pbmluZyB3aGVyZSBuZXdsaW5lcyBhcmUgYW5kIHRoZW4gZmlndXJpbmcgb3V0IHdoaWNoIG9uZXMgY29tZVxuICogY2xvc2VzdCBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmRleC4gVGhlIG51bWJlciBvZiBuZXdsaW5lcyB0aGF0IGNhbWVcbiAqIGJlZm9yZSB0aGUgaW5kZXggKGFuZCB0aGVyZWZvcmUgdGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIHdpdGggdGhlXG4gKiBpbmRleCkgaXMgYWxzbyBjb3VudGVkLlxuICpcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhyZWUgcHJvcGVydGllczogYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlXG4gKiBmaXJzdCBieXRlIG9mIHRoZSBsaW5lLCBgZW5kYCBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgYnl0ZSBvZiB0aGVcbiAqIGxpbmUgKG5vdCBjb3VudGluZyB0aGUgbmV3bGluZSksIGFuZCBgbGluZW5vYCBpcyB0aGUgbGluZSBudW1iZXJcbiAqIHdoZXJlIHRoZSBpbmRleCBhcHBlYXJzLiBgbGluZW5vYCBpcyAxLWluZGV4ZWQgc2luY2UgaXQgaXMgbWVhbnQgZm9yXG4gKiBkaXNwbGF5IGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGxpbmVcbiAqICAgICBpbmRleCBpbmZvcm1hdGlvbiBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TGluZUluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmdcbiAqICAgICBpbmRleGVzIG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpIHtcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgbGluZW5vID0gMSAvLyAxLWJhc2VkXG4gIGxldCBpID0gMFxuXG4gIHdoaWxlIChpIDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgY29uc3QgeyBuZXdsaW5lLCBza2lwIH0gPSBpc05ld2xpbmUoaSwgdmlldylcbiAgICBpZiAobmV3bGluZSkge1xuICAgICAgaWYgKGkgKyBza2lwID4gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZDogaSAtIDEsIGxpbmVubyB9XG4gICAgICB9XG4gICAgICBsaW5lbm8rK1xuICAgICAgc3RhcnQgPSBpICsgc2tpcFxuICAgIH1cbiAgICBpICs9IHNraXBcbiAgfVxuICByZXR1cm4geyBzdGFydCwgZW5kOiB2aWV3LmJ5dGVMZW5ndGggLSAxLCBsaW5lbm8gfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNoYXJhY3RlciBpbmRleCAoYXMgb3Bwb3NlZCB0byBieXRlIGluZGV4KSB3aXRoaW4gYVxuICogc2luZ2xlIGxpbmUgb2YgdGV4dCBvZiB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgdG8gYnkgYGluZGV4YCB3aXRoaW5cbiAqIGB2aWV3YC4gVGhlIGBzdGFydGAgcGFyYW1ldGVyIHNldHMgdGhlIGZpcnN0IGJ5dGUgb2YgYSBcImxpbmVcIiB3aXRoaW5cbiAqIHRoZSB2aWV3IGFuZCBjYW4gYmUgY2FsY3VsYXRlZCB3aXRoIHtAbGluayBnZXRMaW5lSW5kZXhlc30gYWJvdmUuXG4gKlxuICogSW4gbGluZXMgd2l0aCBvbmx5IHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMsIHRoZSBjaGFyYWN0ZXIgaW5kZXggd2lsbFxuICogYWx3YXlzIGJlIHRoZSBzYW1lIGFzIGBpbmRleCAtIHN0YXJ0YC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvblxuICogaXMgdG8gYWRqdXN0IHdoZW4gbXVsdGktYnl0ZSBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGNoYXJhY3RlclxuICogICAgIGluZGV4IGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCwgd2l0aGluIGEgc2luZ2xlIGxpbmUgb2YgdGV4dCwgb2YgdGhlXG4gKiAgICAgY2hhcmFjdGVyIHdob3NlIGZpcnN0IGJ5dGUgaXMgYmVpbmcgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydCkge1xuICBsZXQgY2hhckluZGV4ID0gMFxuICBsZXQgYnl0ZUluZGV4ID0gc3RhcnRcbiAgd2hpbGUgKGJ5dGVJbmRleCA8IGluZGV4ICYmIGJ5dGVJbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGJ5dGVJbmRleCArPSBuZXh0Q2hhcldpZHRoKGJ5dGVJbmRleCwgdmlldylcbiAgICBjaGFySW5kZXgrK1xuICB9XG4gIHJldHVybiBjaGFySW5kZXhcbn1cblxuLyoqXG4gKiBFeHBhbmRzIHRhYnMgaW50byBzcGFjZXMgYW5kIGNhbGN1bGF0ZXMgdGhlIGNvbHVtbiBpbmRleCBvZiB0aGVcbiAqIGluZGV4ZWQgY2hhcmFjdGVyIGFkanVzdGluZyBmb3IgdGhvc2Ugc3BhY2VzLiBUaGUgbnVtYmVyIG9mIHNwYWNlcyBpblxuICogZWFjaCB0YWIgY2FuIGJlIHNwZWNpZmllZCB3aXRoIGB0YWJTaXplYC5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiBgbGluZWAgaXMgdGhlXG4gKiBpbnB1dCBsaW5lIHdpdGggdGFicyBleHBhbmRlZCBpbnRvIHNwYWNlcywgYW5kIGBjb2xJbmRleGAgaXMgdGhlXG4gKiBpbmRleCBvZiB0aGUgY29sdW1uIHRoYXQgaGFzIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCBhdCBieSB0aGVcbiAqIGNoYXJhY3RlciBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhckluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXRcbiAqICAgICB3aXRoaW4gdGhlIGxpbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIHRhYmlmaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHNwYWNlcyB0aGF0IGNhbiByZXBsYWNlXG4gKiAgICAgYSB0YWIuIE5vdGUgdGhhdCB0YWJzIGFyZSB0cmVhdGVkIGFzIHN0b3BzOyB0aGV5IHdpbGwgYmUgb2ZcbiAqICAgICB2YXJ5aW5nIHNpemVzIHRoYXQgcmVzdWx0cyBpbiB0aGVtIGFsd2F5cyBlbmRpbmcgYXQgYSBjb2x1bW4gdGhhdFxuICogICAgIGlzIGEgbXVsdGlwbGUgb2YgYHRhYlNpemVgLlxuICogQHJldHVybnMge1RhYmJlZExpbmVJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbGluZSBhZnRlciByZXBsYWNpbmdcbiAqICAgICB0YWJzIHdpdGggc3BhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFiaWZ5KGNoYXJJbmRleCwgbGluZSwgdGFiU2l6ZSkge1xuICBjb25zdCB0YWJJbmRleGVzID0gW11cbiAgbGV0IHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgd2hpbGUgKHRhYk1hdGNoICE9PSBudWxsKSB7XG4gICAgdGFiSW5kZXhlcy5wdXNoKHRhYk1hdGNoLmluZGV4KVxuICAgIHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgfVxuXG4gIC8vIHJlcGxhY2UgZWFjaCB0YWIgd2l0aCB0aGUgY29yZWN0IG51bWJlciBvZiBzcGFjZXMsIHNoaWZ0aW5nIHRoZVxuICAvLyByZW1haW5pbmcgaW5kZXhlcyBieSB0aGF0IGFtb3VudFxuICBsZXQgb2Zmc2V0ID0gMFxuICBsZXQgcHJlSW5kZXhPZmZzZXQgPSAwXG4gIGxldCByZXN1bHQgPSBsaW5lXG5cbiAgZm9yIChjb25zdCB0YWJJbmRleCBvZiB0YWJJbmRleGVzKSB7XG4gICAgY29uc3QgYWN0dWFsSW5kZXggPSB0YWJJbmRleCArIG9mZnNldFxuICAgIGNvbnN0IHNwYWNlQ291bnQgPSB0YWJTaXplIC0gYWN0dWFsSW5kZXggJSB0YWJTaXplXG4gICAgaWYgKGFjdHVhbEluZGV4IDwgY2hhckluZGV4ICsgcHJlSW5kZXhPZmZzZXQpIHtcbiAgICAgIHByZUluZGV4T2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgfVxuICAgIG9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgYWN0dWFsSW5kZXgpICsgJyAnLnJlcGVhdChzcGFjZUNvdW50KVxuICAgICAgKyByZXN1bHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4ICsgMSlcbiAgfVxuICByZXR1cm4geyBsaW5lOiByZXN1bHQsIGNvbEluZGV4OiBwcmVJbmRleE9mZnNldCArIGNoYXJJbmRleCB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZmluYWwgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgdG9cbiAqIGJ5IHRoZSBjb2x1bW4gaW5kZXguIFRoaXMgY29sdW1uIG51bWJlciBpcyAxLWJhc2VkIChmb3IgZGlzcGxheSwgdGhlXG4gKiBzYW1lIGFzIHRoZSBsaW5lIG51bWJlciBmcm9tIGBnZXRMaW5lSW5kZXhlc2ApIGFuZCBpcyBhZGp1c3RlZCBmb3JcbiAqIHplcm8td2lkdGggY2hhcmFjdGVycyBzdWNoIGFzIGZvcm1hdHRpbmcgY2hhcmFjdGVycyBhbmQgbm9uLXNwYWNpbmdcbiAqIG1hcmtzLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHR3byBwcm9wZXRpZXM6IGBjb2xub2AgaXMgdGhlXG4gKiAxLWluZGV4ZWQgY29sdW1uIG51bWJlciwgYW5kIGBsZW5ndGhgIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxpbmVcbiAqIGFkanVzdGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGUgbGF0dGVyIGlzIHByb3ZpZGVkIHNvIGl0XG4gKiBkb2Vzbid0IGhhdmUgdG8gYmUgcmVjYWxjdWxhdGVkIGJ5IGBzaG93YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY29sSW5kZXggVGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gd2l0aGluIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IHBvdGVudGlhbGx5IGNvbnRhaW5pbmdcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdG8gYWNjb3VudCBmb3IuXG4gKiBAcmV0dXJucyB7Q29sSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSkge1xuICBsZXQgaW5kZXggPSBjb2xJbmRleFxuICBjb25zdCBtYXRjaGVzID0gW11cblxuICBsZXQgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB3aGlsZSAobWF0Y2ggIT09IG51bGwpIHtcbiAgICBtYXRjaGVzLnB1c2gobWF0Y2guaW5kZXgpXG4gICAgaWYgKG1hdGNoLmluZGV4IDwgaW5kZXgpIGluZGV4LS1cbiAgICBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb2xubzogaW5kZXggKyAxLCAvLyAxLWJhc2VkXG4gICAgbGVuZ3RoOiBjaGFyTGVuZ3RoKGxpbmUpIC0gbWF0Y2hlcy5sZW5ndGgsXG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmUgbGluZSB0aGF0IGlzIHRoZSB0ZXh0IGF0IGFuZCBhcm91bmRcbiAqIHRoZSBjb2x1bW4gdG8gYmUgZGlzcGxheWVkLCBhbmQgb25lIGxpbmUgdGhhdCBpcyBhIGNhcmV0IHBvaW50aW5nIHRvXG4gKiB0aGF0IHBhcnRpY3VsYXIgY29sdW1uLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBlbGxpcHNlcyBhcyBuZWVkZWQgdG8gdGhlIGZyb250IGFuZC9vciB0aGUgYmFjayBvZlxuICogdGhlIGxpbmUgaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb2x1bW4gaW50byB0aGUgdmlzaWJsZSBhcmVhLCBiYXNlZCBvblxuICogdGhlIGBtYXhXaWR0aGAgb2YgdGhlIGxpbmUgdG8gZGlzcGxheS4gVGhlIGBsZW5ndGhgIHBhcmFtZXRlciBpcyB0aGVcbiAqIGBsZW5ndGhgIHJldHVybmVkIGJ5IGBnZXRDb2xOdW1iZXJgIGFuZCBpcyBoZXJlIGp1c3QgdG8gYXZvaWQgaGF2aW5nXG4gKiB0byByZWNhbGN1bGF0ZSBpdCBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gaXQgYWxyZWFkeSBuZWVkZWQgdG8gYmVcbiAqIGNhbGN1bGF0ZWQgaW4gdGhlIG90aGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgZm9ybWF0dGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3IgdGFicyBhbmRcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKiBAcGFyYW0ge251bWJlcn0gY29sbm8gVGhlIGNvbHVtbiBudW1iZXIgd2hlcmUgdGhlIGNhcmV0IHNob3VsZCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcG90ZW50aWFsbHkgdHJ1bmNhdGVkIGxpbmUgb2YgdGV4dCwgZm9sbG93ZWQgYnlcbiAqICAgICBhbm90aGVyIGxpbmUgY29udGFpbmluZyBhIGNhcmV0IHBvaW50aW5nIGF0IHRoZSBkZXNpZ25hdGVkXG4gKiAgICAgY29sdW1uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50ID0gMCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuXG4gIC8vIEZpcnN0IGNhc2U6IHRoZSBsaW5lIGlzIHNob3J0ZXIgdGhhbiBtYXhXaWR0aC4gRGlzcGxheSB0aGUgbGluZVxuICAvLyB3aXRoIHRoZSBjYXJldCBwb3NpdGlvbmVkIGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggJiYgbGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZX1cXG4ke3NwfSR7JyAnLnJlcGVhdChjb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBTZWNvbmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgdG8gYSBjaGFyYWN0ZXIgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuXG4gIC8vIERpc3BsYXkgdGhlIGZpcnN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBhZnRlciBpdCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggLSAzKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZS5zdWJzdHJpbmcoMCwgbWF4V2lkdGggLSAzKX0uLi5cXG4ke3NwfSR7XG4gICAgICAnICcucmVwZWF0KGNvbG5vIC0gMSlcbiAgICB9XmBcbiAgfVxuXG4gIC8vIFRoaXJkIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIGF0IGEgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKVxuICAvLyBjaGFyYWN0ZXJzIGJ1dCBpcyBpbiB0aGUgbGFzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBEaXNwbGF5XG4gIC8vIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBiZWZvcmUgaXQsIGNhbGN1bGF0ZSBhIG5ld1xuICAvLyBwb3NpdGlvbiBmb3IgdGhlIGNhcmV0LCBhbmQgcG9zaXRpb24gaXQgYmVsb3cgdGhlIGxpbmUuXG4gIGlmIChjb2xubyA+PSBsZW5ndGggLSBtYXhXaWR0aCArIDMpIHtcbiAgICBjb25zdCBzdGFydCA9IGxlbmd0aCAtIG1heFdpZHRoICsgM1xuICAgIGNvbnN0IG5ld0NvbG5vID0gY29sbm8gLSAobGVuZ3RoIC0gbWF4V2lkdGgpXG4gICAgcmV0dXJuIGAke3NwfS4uLiR7bGluZS5zdWJzdHJpbmcoc3RhcnQpfVxcbiR7c3B9JHsnICcucmVwZWF0KG5ld0NvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIEZpbmFsIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIG1heFdpZHRoIC0gMyBhbmQgdGhlIGNhcmV0XG4gIC8vIGRvZXMgbm90IHBvaW50IHRvIGEgY2hhcmFjdGVyIHdpdGhpbiBlaXRoZXIgdGhlIGZpcnN0IG9yIGxhc3RcbiAgLy8gKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gU2hpZnQgdGhlIGxpbmUgdG8gbWFrZSB0aGUgY2FyZXQgcG9pbnRcbiAgLy8gYXQgdGhlIG1pZGRsZSBvZiBpdCwgYWRkIGAuLi5gIHRvIHRoZSBzdGFydCAqYW5kKiBlbmQsIGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGNvbnN0IHN0YXJ0ID0gY29sbm8gLSAxIC0gTWF0aC5jZWlsKG1heFdpZHRoIC8gMikgKyAzXG4gIGNvbnN0IGVuZCA9IGNvbG5vIC0gMSArIE1hdGguZmxvb3IobWF4V2lkdGggLyAyKSAtIDNcbiAgcmV0dXJuIGAke3NwfS4uLiR7XG4gICAgbGluZS5zdWJzdHJpbmcoc3RhcnQsIGVuZClcbiAgfS4uLlxcbiR7c3B9JHtcbiAgICAnICcucmVwZWF0KE1hdGguY2VpbChtYXhXaWR0aCAvIDIpKVxuICB9XmBcbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEgc2V0IG9mIG5lc3RlZCAob3IgY29tcG91bmQpIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7KE5lc3RlZEVycm9yW118Q29tcG91bmRFcnJvcltdKX0gbmVzdGVkcyBBbiBhcnJheSBvZiBlaXRoZXJcbiAqICAgICBuZXN0ZWQgb3IgY29tcG91bmQgZXJyb3JzIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmUgdGFiXG4gKiAgICAgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRlbnQgVGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50IHRoZSBlcnJvclxuICogICAgIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIG5lc3RlZCBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBmb3JtYXROZXN0ZWQobmVzdGVkcywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuICBjb25zdCBuZXN0ZWRNc2dzID0gbmVzdGVkcy5tYXAobiA9PiB7XG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gbi5jdHhcbiAgICBjb25zdCBsYWJlbCA9IG4ubGFiZWxcbiAgICAgID8gYFxcbiR7c3B9Q291bGQgbm90IHBhcnNlICR7bi5sYWJlbH0gYmVjYXVzZTpcXG5cXG5gXG4gICAgICA6IGBcXG4ke3NwfVRoZSBwYXJzZXIgYmFja3RyYWNrZWQgYWZ0ZXI6XFxuXFxuYFxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxuICB9KVxuICByZXR1cm4gbmVzdGVkTXNncy5qb2luKCcnKVxufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhIHN0cmluZyBlbmRzIHdpdGggYSBjZXJ0YWluIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nIHRoYXQgaXMgc3VwcG9zZWQgdG8gaGF2ZSBhIGNlcnRhaW5cbiAqICAgICBudW1iZXIgb2YgbmV3bGluZXMgYXQgdGhlIGVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBidXQgd2l0aCBgY291bnRgIG5ld2xpbmVzIGF0IHRoZVxuICogICAgIGVuZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlTmV3bGluZXModGV4dCwgY291bnQpIHtcbiAgbGV0IHJlc3VsdCA9IHRleHRcbiAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCByZXN1bHQubGVuZ3RoIC0gMSlcbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgJ1xcbicucmVwZWF0KGNvdW50KVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGZvcm1hdHRlciBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaGFzIHRoZSBmb2xsb3dpbmcgcGFydHM6XG4gKlxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXG4gKiAgICB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAyLiBBIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgbG9jYXRpb24uIFRoaXMgcGFydCBnZW5lcmF0ZXNcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXG4gKiAgICBpbnB1dCBsaW5lIG9yLCBpZiB0aGF0J3MgdG9vIGxvbmcsIGEgcG9ydGlvbiBvZiB0aGUgaW5wdXQgbGluZVxuICogICAgc3RhcnRlZCBhbmQvb3IgZW5kZWQgd2l0aCBlbGxpcHNlcyB0aGF0IGNvbnRhaW5zIHRoZSBlcnJvclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXG4gKiAgICBpbiB0aGUgZmlyc3QgbGluZSB0aGF0IHNob3dzIGV4YWN0bHkgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMy4gVGhlIGZpcnN0IHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSwgaWYgYW55LlxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXG4gKiAgICBjb21tbWFzIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgbnVtYmVyIG9mIG1lc3NhZ2VzLlxuICogNS4gVGhlIGZpcnN0IG9mIHRoZSBnZW5lcmljIG1lc3NhZ2VzLCBpZiBhbnkuXG4gKlxuICogVGhlIHBvc2l0aW9uIG9mIHRoZSBlcnJvciBpcyBpbmRpY2F0ZWQgYnkgdGhlIGBpbmRleGAgcGFyYW1ldGVyLFxuICogd2hpY2ggaXMgdGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkgb2YgYnl0ZXMgaW4gYHZpZXdgIHdoZXJlIHRoZVxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xuICogZmxhdCBhcnJheSBvZiBieXRlcyB0YWtlcyB0aGUgZm9sbG93aW5nIGludG8gYWNjb3VudDpcbiAqXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cbiAqICAgYmUgMSwgMiwgMywgb3IgNCBieXRlcyBsb25nKVxuICogKiBNdWx0aS1jaGFyYWN0ZXIgYW5kIHNpbmdsZS1jaGFyYWN0ZXIgbXVsdGktYnl0ZSBsaW5lIGVuZGluZ3NcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcbiAqICAgYHRhYlNpemVgIHBhcmFtZXRlclxuICogKiBaZXJvLXdpZHRoIGNoYXJhY3RlcnMsIHN1Y2ggYXMgemVyby13aWR0aCBzcGFjZXMgYW5kIGpvaW5lcnMsIFJUTFxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcbiAqICAgbWFya3MsIHVtbGF1dHMgb3ZlciBMYXRpbiBjaGFyYWN0ZXJzLCBldGMuKVxuICpcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHR3byBsaW5lcyBvZiBjb2RlIHVzZXMgYHN0cmluZ1RvVmlld2AsIGFuIGludGVybmFsXG4gKiB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQsIGFzIGl0cyBuYW1lIHN1Z2dlc3RzLCB0dXJucyBhIHN0cmluZyBpbnRvIGFcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcbiAqIHVzYWdlLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8ga25vdy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZpZXcgPSBzdHJpbmdUb1ZpZXcoJ1xcdE9ub21hdG9wb2VpYVxcdFxcdFxcdFxcdOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4hycpXG4gKiBjb25zdCBtZXNzYWdlID0gZm9ybWF0KFtleHBlY3RlZCgnYSBkaWdpdCcpXSwgMjksIHZpZXcsIDQsIDcyKVxuICogYGBgXG4gKlxuICogRnJvbSB0aGlzIGNhbGwgdG8gYGZvcm1hdGAsIHRoZSBmb2xsb3dpbmcgbXVsdGktbGluZSBzdHJpbmcgd2lsbCBiZVxuICogcHJvZHVjZWQ6XG4gKlxuICogYGBgXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxuICpcbiAqICAgICBPbm9tYXRvcG9laWEgICAgICAgICAgICAgICAg4LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXG4gKiBFeHBlY3RlZCBhIGRpZ2l0XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0byBiZSBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIHRoZSB2aWV3IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmVcbiAqICAgICB0YWIgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aD03Ml0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRlbnQ9MF0gVGhlIG51bWJlciBvZiBzcGFjZXMgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXG4gKiAgICAgaW5kZW50ZWQuIFRoaXMgc2hvdWxkIGJlIDAgYW5kIGluY3JlYXNlZCBvbmx5IGZvciBuZXN0ZWQgZXJyb3JzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KFxuICBlcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplID0gOCwgbWF4V2lkdGggPSA3MiwgaW5kZW50ID0gMCxcbikge1xuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG5cbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxuICBjb25zdCB7IGNvbG5vLCBsZW5ndGggfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICBjb25zdCBwb3NpdGlvbiA9IGAke3NwfVBhcnNlIGVycm9yIGF0IChsaW5lICR7bGluZW5vfSwgY29sdW1uICR7Y29sbm99KTpgXG4gIGNvbnN0IGRpc3BsYXkgPSBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQpXG4gIGNvbnN0IGdlbmVyaWMgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuR2VuZXJpYylcbiAgY29uc3QgdW5leHBlY3RlZCA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5VbmV4cGVjdGVkKVxuICBjb25zdCBleHBlY3RlZCA9IGNvbW1hU2VwYXJhdGUoXG4gICAgZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuRXhwZWN0ZWQpXG4gICAgICAubWFwKGVycm9yID0+IGVycm9yLmxhYmVsKSxcbiAgKVxuXG4gIGNvbnN0IG5lc3RlZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZClcbiAgY29uc3QgY29tcG91bmQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5Db21wb3VuZClcblxuICBjb25zdCB1bmV4cE1zZyA9IHVuZXhwZWN0ZWQgPyBgJHtzcH1VbmV4cGVjdGVkICR7dW5leHBlY3RlZC5sYWJlbH1cXG5gIDogJydcbiAgY29uc3QgZXhwTXNnID0gZXhwZWN0ZWQubGVuZ3RoID8gYCR7c3B9RXhwZWN0ZWQgJHtleHBlY3RlZH1cXG5gIDogJydcbiAgY29uc3QgZ2VuZXJpY01zZyA9IGdlbmVyaWMgPyBgJHtzcH0ke2dlbmVyaWMubGFiZWx9XFxuYCA6ICcnXG5cbiAgY29uc3QgbmVzdGVkTXNnID0gZm9ybWF0TmVzdGVkKG5lc3RlZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgY29tcG91bmRNc2cgPSBmb3JtYXROZXN0ZWQoY29tcG91bmQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXG5cbiAgY29uc3QgdW5rbm93bk1zZyA9IGVycm9ycy5sZW5ndGggPT09IDAgPyBgJHtzcH1Vbmtub3duIGVycm9yKHMpXFxuYCA6ICcnXG4gIGNvbnN0IGVvZk1zZyA9IGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aFxuICAgID8gYCR7c3B9Tm90ZTogZmFpbHVyZSBvY2N1cnJlZCBhdCB0aGUgZW5kIG9mIGlucHV0XFxuYCA6ICcnXG5cbiAgcmV0dXJuIGVuc3VyZU5ld2xpbmVzKFxuICAgIGAke3Bvc2l0aW9ufVxcblxcbiR7ZGlzcGxheX1cXG4ke3VuZXhwTXNnfSR7ZXhwTXNnfSR7Z2VuZXJpY01zZ30ke3Vua25vd25Nc2d9YFxuICAgICAgKyBgJHtlb2ZNc2d9JHtjb21wb3VuZE1zZ30ke25lc3RlZE1zZ31gLFxuICAgIDIsXG4gIClcbn1cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIEFjY2VwdHMgYSBwYXJzZXIgY29udGV4dCBhbmQgcHJvZHVjZXMgYW4gZXJyb3IgbWVzc2FnZSBmcm9tIGl0LlxuICpcbiAqIEEgZGVmYXVsdCBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQgYnV0IGFuIGFsdGVybmF0ZSBvbmUgY2FuIGJlIHBhc3NlZFxuICogaW4uIFRoZSBzYW1lIGdvZXMgZm9yIHRhYiBzaXplICh1c2VkIHRvIGV4cGFuZCB0YWJzIGluIHBhcnNlZCB0ZXh0O1xuICogZGVmYXVsdHMgdG8gOCBpbiB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIpIGFuZCBtYXggd2lkdGggKGZvciB0aGUgZXJyb3JcbiAqIG1lc3NhZ2UgaXRzZWxmOyBkZWZhdWx0cyB0byA3MiBpbiB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIpLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSByZXBseSByZXR1cm5lZCBieSB0aGUgcGFyc2VyIHdoZW4gdGhlIGVycm9yXG4gKiAgICAgaGFwcGVuZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemVdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xuICogICAgIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge0Zvcm1hdHRlcn0gW2Zvcm1hdHRlcj1mb3JtYXRdIFRoZSBmdW5jdGlvbiB0byB3aGljaCB0aGVcbiAqICAgICBhY3R1YWwgZm9ybWF0dGluZyBpcyBkZWxlZ2F0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcnMocmVwbHksIHRhYlNpemUsIG1heFdpZHRoLCBmb3JtYXR0ZXIgPSBmb3JtYXQpIHtcbiAgY29uc3QgW2N0eCwgcmVzdWx0XSA9IHJlcGx5XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gZm9ybWF0dGVyKHJlc3VsdC5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCBieXRlIG9mIHRoZSBzdXBwbGllZCBjb250ZXh0LiBUaGVcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxuICogdGhlIDEtYmFzZWQgbGluZSBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGhlIGJ5dGUgYXQgdGhlIGNvbnRleHQnc1xuICogaW5kZXggd2l0aGluIHRoZSBjb250ZXh0J3MgZGF0YSB2aWV3LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHdob3NlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmVpbmdcbiAqICAgICBjYWxjdWxhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuIFRoZSBjdXJyZW50IHBvc2l0aW9uJ3MgY29sdW1uIG51bWJlciBpcyBhZGp1c3RlZCBiYXNlZFxuICogICAgIG9uIHRoaXMgcGFyYW1ldGVyIHdoZW4gdGFiIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oY3R4LCB0YWJTaXplID0gOCkge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgXyB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIHJldHVybiB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2xubyB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSU1xuXG5leHBvcnQge1xuICBhbHBoYSxcbiAgYW55LFxuICBhbnlPZixcbiAgY2hhcixcbiAgY2hhckksXG4gIGRpZ2l0LFxuICBlb2YsXG4gIGhleCxcbiAgbGV0dGVyLFxuICBsb3dlcixcbiAgbm9uZU9mLFxuICBvY3RhbCxcbiAgcmFuZ2UsXG4gIHNhdGlzZnksXG4gIHNhdGlzZnlNLFxuICB1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXG5leHBvcnQge1xuICBhbHdheXMsXG4gIGZhaWxOb3JtYWxseSxcbiAgZmFpbEZhdGFsbHksXG59IGZyb20gJy4vcGFyc2Vycy9taXNjJ1xuZXhwb3J0IHtcbiAgYWxwaGFVLFxuICBsZXR0ZXJVLFxuICBsb3dlclUsXG4gIG5ld2xpbmUsXG4gIG5ld2xpbmVVLFxuICByZWdleCxcbiAgc3BhY2UsXG4gIHNwYWNlVSxcbiAgc3BhY2VzLFxuICBzcGFjZXMxLFxuICBzcGFjZXMxVSxcbiAgc3BhY2VzVSxcbiAgdXBwZXJVLFxufSBmcm9tICcuL3BhcnNlcnMvcmVnZXgnXG5leHBvcnQge1xuICBhbGwsXG4gIGFueVN0cmluZyxcbiAgc3RyaW5nLFxuICBzdHJpbmdJLFxufSBmcm9tICcuL3BhcnNlcnMvc3RyaW5nJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ09NQklOQVRPUlNcblxuZXhwb3J0IHtcbiAgYWx0LFxuICBkZWYsXG4gIGVtcHR5LFxuICBub3QsXG4gIG9wdCxcbiAgcGVlayxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZSdcbmV4cG9ydCB7XG4gIGFwcGx5QixcbiAgYXR0ZW1wdCxcbiAgYmV0d2VlbkIsXG4gIGJsb2NrQixcbiAgY2hhaW5CLFxuICBsZWZ0QixcbiAgbWFueVRpbGxCLFxuICBwaXBlQixcbiAgcmVwZWF0QixcbiAgcmlnaHRCLFxuICBzZXFCLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2JhY2t0cmFja2luZydcbmV4cG9ydCB7XG4gIGFwcGx5LFxuICBjaGFpbixcbiAgY29tcGFjdCxcbiAgZmlmdGgsXG4gIGZpcnN0LFxuICBmb3VydGgsXG4gIGpvaW4sXG4gIG1hcCxcbiAgbnRoLFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICB2YWx1ZSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jaGFpbmluZydcbmV4cG9ydCB7XG4gIGFzc29jMUwsXG4gIGFzc29jMVIsXG4gIGFzc29jTCxcbiAgYXNzb2NSLFxuICBiZXR3ZWVuLFxuICBibG9jayxcbiAgZW5kLFxuICBsZWZ0LFxuICBtYW55LFxuICBtYW55MSxcbiAgcGlwZSxcbiAgcmVwZWF0LFxuICByaWdodCxcbiAgc2VwLFxuICBzZXAxLFxuICBzZXBFbmRCeTEsXG4gIHNlcSxcbiAgc2tpcCxcbiAgc2tpcE1hbnksXG4gIHNraXBNYW55MSxcbiAgdW50aWwsXG59IGZyb20gJy4vY29tYmluYXRvcnMvc2VxdWVuY2UnXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQQVJTRVIgVE9PTFMgQU5EIFVUSUxJVElFU1xuXG5leHBvcnQge1xuICBTdGF0dXMsXG4gIGZhaWxSZXBseSxcbiAgZmFpbHVyZSxcbiAgZmF0YWxSZXBseSxcbiAgb2tSZXBseSxcbiAgcGFyc2UsXG4gIHBhcnNlcixcbiAgcnVuLFxuICBzdGF0dXMsXG4gIHN1Y2NlZWRlZCxcbiAgc3VjY2Vzcyxcbn0gZnJvbSAnLi9jb3JlJ1xuZXhwb3J0IHtcbiAgRXJyb3JUeXBlLFxuICBjb21wb3VuZCxcbiAgZXhwZWN0ZWQsXG4gIGZvcm1hdEVycm9ycyxcbiAgZ2VuZXJpYyxcbiAgZ2V0UG9zaXRpb24sXG4gIG1lcmdlLFxuICBuZXN0ZWQsXG4gIG90aGVyLFxuICB1bmV4cGVjdGVkLFxufSBmcm9tICcuL2Vycm9yJ1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xuaW1wb3J0IHsgY29tbWFTZXBhcmF0ZSwgcXVvdGUgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICBhbHBoYTogJ2FuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICBhbHBoYVU6ICdhIFVuaWNvZGUgYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXG4gIGFueTogJ2FueSBjaGFyYWN0ZXInLFxuICBhbnlPZjogYXJyYXkgPT4gJ2FueSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnJheS5tYXAoYyA9PiBgJyR7Y30nYCkpLFxuICBhbnlTdHJpbmc6IG4gPT4gYGEgc3RyaW5nIG9mICR7bn0gY2hhcmFjdGVyc2AsXG4gIGNoYXI6IGMgPT4gcXVvdGUoYyksXG4gIGNoYXJJOiBjID0+IHF1b3RlKGMpLFxuICBkaWdpdDogJ2EgZGlnaXQnLFxuICBlb2Y6ICdlbmQgb2YgaW5wdXQnLFxuICBoZXg6ICdhIGhleGFkZWNpbWFsIGRpZ2l0JyxcbiAgbGV0dGVyOiAnYSBsZXR0ZXInLFxuICBsZXR0ZXJVOiAnYSBVbmljb2RlIGxldHRlcicsXG4gIGxvd2VyOiAnYSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgbG93ZXJVOiAnYSBVbmljb2RlIGxvd2VyY2FzZSBsZXR0ZXInLFxuICBuZXdsaW5lOiAnYSBuZXdsaW5lJyxcbiAgbmV3bGluZVU6ICdhIFVuaWNvZGUgbmV3bGluZScsXG4gIG5vbmVPZjogYXJyYXkgPT4gJ25vbmUgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcbiAgb2N0YWw6ICdhbiBvY3RhbCBkaWdpdCcsXG4gIHJhbmdlOiAoc3RhcnQsIGVuZCkgPT4gYGEgY2hhcmFjdGVyIGJldHdlZW4gJyR7c3RhcnR9JyBhbmQgJyR7ZW5kfSdgLFxuICByZWdleDogcmUgPT4gYGEgc3RyaW5nIG1hdGNoaW5nICR7cmV9YCxcbiAgc3BhY2U6ICdhIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcbiAgc3BhY2VzOiAnemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlczE6ICdvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXNVOiAnemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzMVU6ICdvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlVTogJ2EgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHN0cmluZzogc3RyID0+IHF1b3RlKHN0ciksXG4gIHN0cmluZ0k6IHN0ciA9PiBxdW90ZShzdHIpLFxuICB1cHBlcjogJ2FuIHVwcGVyY2FzZSBsZXR0ZXInLFxuICB1cHBlclU6ICdhIFVuaWNvZGUgdXBwZXJjYXNlIGxldHRlcicsXG59XG5cbmV4cG9ydCBjb25zdCBleHBlY3RlZHMgPSB7XG4gIGFscGhhOiBleHBlY3RlZChzdHJpbmdzLmFscGhhKSxcbiAgYWxwaGFVOiBleHBlY3RlZChzdHJpbmdzLmFscGhhVSksXG4gIGFueTogZXhwZWN0ZWQoc3RyaW5ncy5hbnkpLFxuICBhbnlPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5hbnlPZihhcnJheSkpLFxuICBhbnlTdHJpbmc6IG4gPT4gZXhwZWN0ZWQoc3RyaW5ncy5hbnlTdHJpbmcobikpLFxuICBjaGFyOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuY2hhcihjKSksXG4gIGNoYXJJOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuY2hhckkoYykpLFxuICBkaWdpdDogZXhwZWN0ZWQoc3RyaW5ncy5kaWdpdCksXG4gIGVvZjogZXhwZWN0ZWQoc3RyaW5ncy5lb2YpLFxuICBoZXg6IGV4cGVjdGVkKHN0cmluZ3MuaGV4KSxcbiAgbGV0dGVyOiBleHBlY3RlZChzdHJpbmdzLmxldHRlciksXG4gIGxldHRlclU6IGV4cGVjdGVkKHN0cmluZ3MubGV0dGVyVSksXG4gIGxvd2VyOiBleHBlY3RlZChzdHJpbmdzLmxvd2VyKSxcbiAgbG93ZXJVOiBleHBlY3RlZChzdHJpbmdzLmxvd2VyVSksXG4gIG5ld2xpbmU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZSksXG4gIG5ld2xpbmVVOiBleHBlY3RlZChzdHJpbmdzLm5ld2xpbmVVKSxcbiAgbm9uZU9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLm5vbmVPZihhcnJheSkpLFxuICBvY3RhbDogZXhwZWN0ZWQoc3RyaW5ncy5vY3RhbCksXG4gIHJhbmdlOiAoc3RhcnQsIGVuZCkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yYW5nZShzdGFydCwgZW5kKSksXG4gIHJlZ2V4OiByZSA9PiBleHBlY3RlZChzdHJpbmdzLnJlZ2V4KHJlKSksXG4gIHNwYWNlOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlKSxcbiAgc3BhY2VzOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlcyksXG4gIHNwYWNlczE6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMSksXG4gIHNwYWNlc1U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzVSksXG4gIHNwYWNlczFVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczFVKSxcbiAgc3BhY2VVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlVSksXG4gIHN0cmluZzogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nKHN0cikpLFxuICBzdHJpbmdJOiBzdHIgPT4gZXhwZWN0ZWQoc3RyaW5ncy5zdHJpbmdJKHN0cikpLFxuICB1cHBlcjogZXhwZWN0ZWQoc3RyaW5ncy51cHBlciksXG4gIHVwcGVyVTogZXhwZWN0ZWQoc3RyaW5ncy51cHBlclUpLFxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXNzZXJ0Q2hhcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydFN0cmluZyxcbiAgYXNzZXJ0U3RyaW5nT3JBcnJheSxcbiAgb3JkQ2hhckZvcm1hdHRlcixcbiAgb3JkRm5Gb3JtYXR0ZXIsXG4gIG9yZFN0ckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZHVwLCBuZXh0Q2hhciB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciwgZmVlZHMgaXQgdG8gYSBmdW5jdGlvbiwgYW5kXG4gKiBzdWNjZWVkcyBvciBmYWlscyBiYXNlZCBvbiB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzbid0IGFueXRoaW5nIGhlcmUgdGhhdCBjb3VsZG4ndCBiZSB3cml0dGVuIHdpdGhcbiAqIGBTdHJpbmdQYXJzZXJgIGluc3RlYWQsIGJ1dCB3aGVuIHdvcmtpbmcgd2l0aCBzaW5nbGUgY2hhcmFjdGVycyB0aGVyZVxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXG4gKiBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSByZWFkIGZyb20gdGhlIGlucHV0IHZpZXcpIHRoYXQgYWxsb3cgaXQgdG9cbiAqIGJlIGEgbGl0dGxlIG1vcmUgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5jb25zdCBjaGFyUGFyc2VyID0gZm4gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZmFpbFJlcGx5KGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIGZuKG5leHQpID8gb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZmFpbFJlcGx5KGN0eClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmQgc3VjY2VlZHMgaWZcbiAqIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICB0aHJvdyBhbiBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCBpcyB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFyID0gYyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ2NoYXInLCBjKVxuXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gZHVwKGNoYXJQYXJzZXIoY2ggPT4gYyA9PT0gY2gpKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsUmVwbHkoY3BjdHgsIGV4cGVjdGVkcy5jaGFyKGMpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZCBzdWNjZWVkcyBpZlxuICogdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBUaGlzIGRpZmZlcnMgZnJvbSBgY2hhcmAgaW4gdGhhdCB0aGVcbiAqIGNvbXBhcmlzb24gZG9uZSBieSB0aGlzIHBhcnNlciBpcyBjYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxuICogICAgIHRocm93IGFuIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIChvciBpdHNcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYXJJID0gYyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ2NoYXJJJywgYylcblxuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IGR1cChjaGFyUGFyc2VyKFxuICAgIGNoID0+IGMudG9Mb3dlckNhc2UoKSA9PT0gY2gudG9Mb3dlckNhc2UoKSxcbiAgKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbFJlcGx5KGNwY3R4LCBleHBlY3RlZHMuY2hhckkoYykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBwYXNzZXMgaXQgdG8gdGhlIHByb3ZpZGVkXG4gKiBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlciBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLCB0aGlzXG4gKiBwYXJzZXIgZmFpbHMgYW5kIGNvbnN1bWVzIG5vIGlucHV0LlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGNhdXNlIGZvciBhbiBlcnJvciBzaW5jZSBpdCdzIG5vdFxuICogZmVhc2libGUgdG8gaGF2ZSBpdCBhbmFseXplIHRoZSBmdW5jdGlvbiB0byBzZWUgd2hhdCBpdCBleHBlY3RzIHRvXG4gKiBtYXRjaCwgc28gbm8gZXJyb3IgbWVzc2FnZSBpcyBwcm92aWRlZCBvbiBmYWlsdXJlLiBVc2VcbiAqIGBsYWJlbChzYXRpc2Z5KGZuKSwgbXNnKWAgb3IgdGhlIGVxdWl2YWxlbnQgYHNhdGlzZnlMKGZuLCBtc2cpYCB0b1xuICogYWRkIGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzYXRpc2Z5ID0gZm4gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignc2F0aXNmeScsIGZuKVxuICByZXR1cm4gY2hhclBhcnNlcihmbikoY3R4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgcGFzc2VzIGl0IHRvIHRoZSBwcm92aWRlZFxuICogZnVuY3Rpb24uIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhpcyBwYXJzZXIgc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIgYXMgdGhlIHJlc3VsdC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCwgdGhpc1xuICogcGFyc2VyIGZhaWxzIGFuZCBjb25zdW1lcyBubyBpbnB1dCBhbmQgc2lnbmFscyBhbiBlcnJvciB3aXRoIHRoZVxuICogcHJvdmlkZWQgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc2F0aXNmeU0gPSAoZm4sIG1lc3NhZ2UpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3NhdGlzZnlNJywgZm4sIG9yZEZuRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnc2F0aXNmeU0nLCBtZXNzYWdlLCBvcmRTdHJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsUmVwbHkoY3BjdHgsIGV4cGVjdGVkKG1lc3NhZ2UpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIGl0IGlzXG4gKiBiZXR3ZWVuIChhY2NvcmRpbmcgdG8gY29kZSBwb2ludHMpIGNoYXJhY3RlcnMgYHNgIGFuZCBgZWBcbiAqIChpbmNsdXNpdmUpLiBJZiBpdCBpcywgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIHRoZSBzdWNjZXNzZnVsIHJlc3VsdCxcbiAqIGFuZCBpZiBpdCBpcyBub3QsIHRoZSBwYXJzZXIgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKlxuICogYHNgIGFuZCBgZWAgYXJlIGV4cGVjdGVkIHRvIGJlIHNpbmdsZSBjaGFyYWN0ZXJzLiBBbiBlcnJvciB3aWxsIGJlXG4gKiB0aHJvd24gaWYgdGhleSBhcmUgbm90LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiB0aGUgcmFuZ2VcbiAqICAgICBvZiBjaGFyYWN0ZXJzIHRvIG1hdGNoLiBJdCBpcyBpbmNsdWRlZCBpbiB0aGF0IHJhbmdlLlxuICogQHBhcmFtIHtzdHJpbmd9IGUgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIGVuZCBvZiB0aGUgcmFuZ2Ugb2ZcbiAqICAgICBjaGFyYWN0ZXJzIHRvIG1hdGNoLiBJdCBpcyBpbmNsdWRlZCBpbiB0aGF0IHJhbmdlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIG5leHQgaW5wdXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYmV0d2VlbiBgc3RhcnRgIGFuZCBgZW5kYCAoaW5jbHVzaXZlKS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKHMsIGUpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0Q2hhcigncmFuZ2UnLCBzLCBvcmRDaGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgZSwgb3JkQ2hhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gcyAmJiBjIDw9IGVcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWxSZXBseShjcGN0eCwgZXhwZWN0ZWRzLnJhbmdlKHMsIGUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGlucHV0IGNoYXJhY3RlciBhbmQgdGhlbiBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3Rlci4gRmFpbHMgb25seSBpZiB0aGVyZSBpcyBubyBpbnB1dCBsZWZ0IHRvIHJlYWQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFueSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGZhaWxSZXBseShjdHgsIGV4cGVjdGVkcy5hbnkpXG5cbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIHJldHVybiBva1JlcGx5KGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBkb2VzXG4gKiBub3QgZXhpc3QgKGkuZS4sIGlmIHRoZSBpbmRleCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0KS5cbiAqIENvbnN1bWVzIG5vdGhpbmcgb24gZWl0aGVyIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgZW9mID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoXG4gICAgPyBva1JlcGx5KGN0eCwgbnVsbClcbiAgICA6IGZhaWxSZXBseShjdHgsIGV4cGVjdGVkcy5lb2YpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaCBvZiB0aGVcbiAqIGNoYXJhY3RlcnMgaW4gYGNzYCwgd2hpY2ggaXMgZWl0aGVyIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgb3IgYVxuICogc3RyaW5nLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlIHBhcnNlclxuICogd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXkgb3IgYVxuICogICAgIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBiZSBhIG1lbWJlciBmb3JcbiAqICAgICB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBvbmVcbiAqICAgICBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgY29uc3QgYW55T2YgPSBjcyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yQXJyYXkoJ2FueU9mJywgY3MpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY3NdXG5cbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgID8gb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG4gICAgOiBmYWlsUmVwbHkoY3R4LCBleHBlY3RlZHMuYW55T2YoYXJyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoIG9mIHRoZVxuICogY2hhcmFjdGVycyBpbiBgY3NgLCB3aGljaCBpcyBlaXRoZXIgYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBvciBhXG4gKiBzdHJpbmcuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyAqbm90KiBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGVcbiAqIHBhcnNlciB3aWxsIHN1Y2NlZWQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY3MgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheSBvciBhXG4gKiAgICAgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIG5vdCBiZSBhIG1lbWJlclxuICogICAgIGZvciB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBub3RcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vbmVPZiA9IGNzID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JBcnJheSgnbm9uZU9mJywgY3MpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY3NdXG5cbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgID8gZmFpbFJlcGx5KGN0eCwgZXhwZWN0ZWRzLm5vbmVPZihhcnIpKVxuICAgIDogb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGRpZ2l0LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBkaWdpdCA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWxSZXBseShjcGN0eCwgZXhwZWN0ZWRzLmRpZ2l0KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGhleGFkZWNpbWFsIGRpZ2l0LiBUaGlzIHBhcnNlciBpcyBub3QgY2FzZSBzZW5zaXRpdmUuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGhleCA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsUmVwbHkoY3BjdHgsIGV4cGVjdGVkcy5oZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIG9jdGFsIGRpZ2l0LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBvY3RhbCA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnNydcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWxSZXBseShjcGN0eCwgZXhwZWN0ZWRzLm9jdGFsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBsZXR0ZXIuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxldHRlciA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneicgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWxSZXBseShjcGN0eCwgZXhwZWN0ZWRzLmxldHRlcilcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgYWxwaGFudW1lcmljIGNoYXJhY3Rlci5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgYWxwaGEgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgICB8fCBjID49ICcwJyAmJiBjIDw9ICc5J1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbFJlcGx5KGNwY3R4LCBleHBlY3RlZHMuYWxwaGEpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIHVwcGVyY2FzZSBsZXR0ZXIuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbFJlcGx5KGNwY3R4LCBleHBlY3RlZHMudXBwZXIpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGxvd2VyY2FzZSBsZXR0ZXIuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbFJlcGx5KGNwY3R4LCBleHBlY3RlZHMubG93ZXIpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBnZW5lcmljIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmFpbE5vcm1hbGx5ID0gbXNnID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdmYWlsTm9ybWFsbHknLCBtc2cpXG4gIHJldHVybiBmYWlsUmVwbHkoY3R4LCBnZW5lcmljKG1zZykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLiBUaGlzIHNpZ25pZmllcyBhIGZhdGFsIGVycm9yLFxuICogb25lIHRoYXQgY2Fubm90IGJlIHJlY292ZXJlZCBmcm9tIHdpdGhvdXQgYmFja3RyYWNraW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgZmF0YWxseSB3aXRoIHRoZVxuICogICAgIHN1cHBsaWVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsRmF0YWxseSA9IG1zZyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmFpbEZhdGFsbHknLCBtc2cpXG4gIHJldHVybiBmYXRhbFJlcGx5KGN0eCwgZ2VuZXJpYyhtc2cpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBhbHdheXMgc3VjY2VlZHMgd2l0aCB0aGUgc3VwcGxpZWQgdmFsdWUuXG4gKlxuICogVGhpcyBzZXJ2ZXMgYXMgYSBwcmltaXRpdmUgZm9yIGJvdGggbW9uYWRzIGFuZCBhcHBsaWNhdGl2ZXMuIEluXG4gKiBIYXNrZWxsIHRlcm1zLCB0aGlzIGZ1bmN0aW9uIHJlcHJlc2VudHMgYm90aCBgcHVyZWAgaW4gdGhlXG4gKiBgQXBwbGljYXRpdmVgIGNsYXNzIGFuZCBgcmV0dXJuYCBpbiB0aGUgYE1vbmFkYCBjbGFzcy5cbiAqXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgbGlmdHMgYW4gYXJiaXRyYXJ5IHZhbHVlIGludG8gYSBQYXJzZXIgY29udGV4dCxcbiAqIHR1cm5pbmcgaXQgaW50byBhIHBhcnNlciB0aGF0IHJldHVybnMgdGhhdCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHdpbGwgcmVzdWx0IHdoZW4gdGhpcyBwYXJzZXIgaXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIHdpdGggYHZhbHVlYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsd2F5cyA9IHggPT4gcGFyc2VyKGN0eCA9PiBva1JlcGx5KGN0eCwgeCkpXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBhc3NlcnRTdHJpbmdPclJlZ0V4cCB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBkdXAsIHN0cmluZ1RvVmlldywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vLyBBbGwgb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiB0aGUgZGVyaXZlZCByZWdleCBwYXJzZXJzLlxuLy8gVGhlc2UgYXJlIGhlcmUgdG8gY3JlYXRlIGFuZCBjb21waWxlIHRoZW0gb25jZSwgdXBvbiBpbml0aWFsIGxvYWQsIHRvXG4vLyBzcGVlZCBwYXJzaW5nIGxhdGVyLlxuXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxldHRlciA9IC9eXFxwe0FscGhhYmV0aWN9L3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIG9yIG51bWJlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUFscGhhID0gL14oPzpcXHB7QWxwaGFiZXRpY318XFxwe059KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVcHBlciA9IC9eKD86XFxwe1VwcGVyY2FzZX18XFxwe0x0fSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsb3dlcmNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMb3dlciA9IC9eXFxwe0xvd2VyY2FzZX0vdVxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVTcGFjZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHQgXSkvXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVc3BhY2UgPSAvXig/OlxcclxcbnxcXHB7V2hpdGVfU3BhY2V9KS91XG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzID0gL15bXFxyXFxuXFx0IF0qL1xuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzID0gL15cXHB7V2hpdGVfU3BhY2V9Ki91XG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMxID0gL15bXFxyXFxuXFx0IF0rL1xuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMxID0gL15cXHB7V2hpdGVfU3BhY2V9Ky91XG4vKiogTWF0Y2hlcyBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKFxcciwgXFxuLCBvciBcXHJcXG4pLiAqL1xuY29uc3QgcmVOZXdsaW5lID0gL14oPzpcXHJcXG58XFxyfFxcbikvXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIG5ld2xpbmUgY2hhcmFjdGVyLCBwbHVzIFxcclxcbi4gKi9cbmNvbnN0IHJlVW5ld2xpbmUgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx1MDA4NVxcdTIwMjhcXHUyMDI5XSkvdVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgdGFrZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IGFuZCBtYXRjaGVzIGl0IGFzIGZhclxuICogYXMgaXQgY2FuIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICpcbiAqIEl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgcmVnZXggYmVnaW5zIHdpdGggYSBgXmAgLiBUaGUgYGdgIGZsYWcgaXNcbiAqIGlnbm9yZWQgaW4gdGhhdCBvbmx5IHRoZSBmaXJzdCBtYXRjaCBpcyBwcm9jZXNzZWQgYW5kIHJldHVybmVkLiBUaGlzXG4gKiBlbnN1cmVzIHRoYXQgdGhlIG1hdGNoIGlzIG9ubHkgYWdhaW5zdCB0aGUgdGV4dCBkaXJlY3RseSBhdCB0aGVcbiAqIGN1cnJlbnQgcG9pbnRlciBsb2NhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlXG4gKiAgICAgaW5wdXQgdGV4dCBzdGFydGluZyBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmNvbnN0IHJlZ2V4UGFyc2VyID0gcmUgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCByZXN0ID0gdmlld1RvU3RyaW5nKGluZGV4LCB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleCwgdmlldylcblxuICBjb25zdCBtYXRjaCA9IHJlc3QubWF0Y2gocmUpXG4gIHJldHVybiBtYXRjaFxuICAgID8gb2tSZXBseShjdHgsIG1hdGNoWzBdLCBpbmRleCArIHN0cmluZ1RvVmlldyhtYXRjaFswXSkuYnl0ZUxlbmd0aClcbiAgICA6IGZhaWxSZXBseShjdHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHN1cHBsaWVkIHJlZ3VsYXIgZXhwcmVzc2lvbiB0b1xuICogdGhlIGlucHV0IHRleHQgYXQgdGhlIGN1cnJlbnQgbG9jYXRpb24uIElmIHRoZXJlIGlzIGEgbWF0Y2gsIGFueVxuICogbWF0Y2hpbmcgdGV4dCBpcyByZXR1cm5lZCBhcyBhIHN1Y2Nlc3NmdWwgcmVzdWx0LiBObyB0ZXh0IGlzIGNvbnN1bWVkXG4gKiB1cG9uIGZhaWx1cmUuXG4gKlxuICogQSBzdHJpbmcgY2FuIGJlIHBhc3NlZCB0byB0aGlzIHBhcnNlci4gSWYgb25lIGlzLCBpdCBpcyBjb252ZXJ0ZWRcbiAqIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aG91dCBmbGFncy5cbiAqXG4gKiBJZiBhIHN0YXJ0IGFuY2hvciAoXikgaXMgbm90IGluY2x1ZGVkLCBvbmUgd2lsbCBiZSBhZGRlZC4gSWYgdGhlIGBnYFxuICogZmxhZyBpcyBpbmNsdWRlZCwgaXQnbGwgZnVuY3Rpb25hbGx5IGJlIGlnbm9yZWQgYXMgb25seSB0aGUgZmlyc3RcbiAqIG1hdGNoIHdpbGwgYmUgY29uc2lkZXJlZCBhbnl3YXkuIFRoZXNlIHR3byBydWxlcyBlbnN1cmUgdGhhdCB0aGVcbiAqIG1hdGNoIGlzIG9ubHkgYXR0ZW1wdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgdGV4dC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0XG4gKiAgICAgdGhlIGlucHV0IHRleHQuIElmIHRoaXMgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgY29udmVydGVkIGludG8gYVxuICogICAgIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRoIG5vIGZsYWdzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgcmVndWxhclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlZ2V4ID0gcmUgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmdPclJlZ0V4cCgncmVnZXgnLCByZSlcblxuICAvLyBGaXJzdCwgY29udmVydCB0byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBpZiBpdCdzIGEgc3RyaW5nXG4gIGxldCByZWdleCA9IHR5cGVvZiByZSA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHJlKSA6IHJlXG5cbiAgLy8gTmV4dCwgbWFrZSBzdXJlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gc3RhcnRzIHdpdGggYSBeIGFuY2hvclxuICBjb25zdCB7IHNvdXJjZSwgZmxhZ3MgfSA9IHJlZ2V4XG4gIGNvbnN0IHJlYW5jaG9yID0gc291cmNlWzBdICE9PSAnXidcbiAgaWYgKHJlYW5jaG9yKSB7XG4gICAgY29uc3QgbmV3U291cmNlID0gJ14nICsgc291cmNlXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKG5ld1NvdXJjZSwgZmxhZ3MpXG4gIH1cblxuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZWdleCkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLnJlZ2V4KHJlZ2V4KSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsZXR0ZXIuIEEgbGV0dGVyIGZvciB0aGlzIHB1cnBvc2UgaXMgYW55IGNoYXJhY3RlciB3aXRoIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxldHRlclUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVMZXR0ZXIpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5sZXR0ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbHBoYW51bWVyaWMuIEEgY2hhcmFjdGVyIGlzIGFscGhhbnVtZXJpYyBpZiBpdCBoYXMgZWl0aGVyIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkgb3IgdGhlIFVuaWNvZGUgYE51bWJlcmAgcHJvcGVydHkuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFscGhhVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZUFscGhhKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMuYWxwaGFVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBlaXRoZXIgYW4gdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzXG4gKiB1cHBlcmNhc2UgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBVcHBlcmNhc2VgIHByb3BlcnR5IGFuZCBpcyB0aXRsZWNhc2VcbiAqIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgTGV0dGVyLCBUaXRsZWNhc2VgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCB1cHBlclUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVVcHBlcikoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLnVwcGVyVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpcyBsb3dlcmNhc2UgaWYgaXQgaGFzIHRoZVxuICogVW5pY29kZSBgTG93ZXJjYXNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgbG93ZXJVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlTG93ZXIpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5sb3dlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxuICogb3IgYFxcclxcbmApLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZVNwYWNlKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMuc3BhY2UpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIEEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2UgZm9yIHRoZVxuICogcHVycG9zZSBvZiB0aGlzIHBhcnNlciBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFdoaXRlX1NwYWNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGFsc28gcmVjb2duaXplIHRoZSB0d28tY2hhcmFjdGVyIGNvbWJpbmF0aW9uIGBcXHJcXG5gXG4gKiBhcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiB3aGl0ZXNwYWNlLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVVc3BhY2UpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5zcGFjZVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyXG4gKiBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVybyB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLFxuICogdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZXMgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBfXSA9IHJlZ2V4UGFyc2VyKHJlU3BhY2VzKShjdHgpXG4gIHJldHVybiBva1JlcGx5KHJwY3R4LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXG4gKiBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdFxuICogcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnBjdHgsIF9dID0gcmVnZXhQYXJzZXIocmVVc3BhY2VzKShjdHgpXG4gIHJldHVybiBva1JlcGx5KHJwY3R4LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGxcbiAqIG9ubHkgZmFpbCBpZiB0aGVyZSBpcyBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uXG4gKiBzdWNjZXNzLCBpdCBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnBjdHgsIHJwcmVzXSA9IHJlZ2V4UGFyc2VyKHJlU3BhY2VzMSkoY3R4KVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPa1xuICAgID8gb2tSZXBseShycGN0eCwgbnVsbClcbiAgICA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLnNwYWNlczEpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbCBvbmx5IGZhaWwgaWYgdGhlcmUgaXNcbiAqIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT24gc3VjY2VzcywgaXQgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZXMxVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnBjdHgsIHJwcmVzXSA9IHJlZ2V4UGFyc2VyKHJlVXNwYWNlczEpKGN0eClcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IG9rUmVwbHkocnBjdHgsIG51bGwpXG4gICAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5zcGFjZXMxVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgdGhpcyBwYXJzZXIgcmVjb2duaXplcyBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmdcbiAqIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxuICpcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVOZXdsaW5lKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMubmV3bGluZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgaW4gVW5pY29kZSBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICogKiBgTkVMYCAobmV4dCBsaW5lLCBgVSswMDg1YClcbiAqICogYExTYCAobGluZSBzZXBhcmF0b3IsIGBVKzIwMjhgKVxuICogKiBgUFNgIChwYXJhZ3JhcGggc2VwYXJhdG9yLCBgVSsyMDI5YClcbiAqXG4gKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNoYXJhY3RlcnMgYFxcZmAgb3IgYFxcdmAsIHdoaWNoIHdoaWxlIGJlaW5nXG4gKiB2ZXJ0aWNhbCBzZXBhcmF0b3JzLCBhcmVuJ3QgcmVhbGx5IG5ld2xpbmVzIGluIHRoZSB0cmFkaXRpb25hbCBzZW5zZS5cbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmVVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlVW5ld2xpbmUpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5uZXdsaW5lVSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBhc3NlcnROdW1iZXIsIGFzc2VydFN0cmluZyB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBkdXAsIG5leHRDaGFycywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggYSBwYXJ0aWN1bGFyIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50XG4gKiBwb3NpdGlvbiBpbiB0aGUgdGV4dC4gQSBzdHJpbmcgb2YgY2hhcmFjdGVycyBlcXVhbCBpbiBsZW5ndGggdG9cbiAqIGBsZW5ndGhgIGlzIHJlYWQgZnJvbSBpbnB1dCBhbmQgcGFzc2VkIHRvIGBmbmA7IGlmIGBmbmAgcmV0dXJuc1xuICogYHRydWVgLCB0aGVuIHRoZSBwYXJzZXIgc3VjY2VlZHMuXG4gKlxuICogVGhpcyBwYXJzZXIgYWx3YXlzIGZhaWxzIGlmIHRoZXJlIGFyZSBsZXNzIHRoYW4gYGxlbmd0aGAgY2hhcmFjdGVyc1xuICogbGVmdCBpbiB0aGUgaW5wdXQuIEl0IHdpbGwgYWx3YXlzIHBhc3MgaWYgYGxlbmd0aGAgaXMgMC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IHRoZSBwYXJzZXJcbiAqICAgICBzaG91bGQgcmVhZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTogYm9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgcmVhZFxuICogICAgIHN0cmluZyBpcyBwYXNzZWQuIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHJlYWQgc3RyaW5nIHBhc3Nlc1xuICogICAgIHRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKi9cbmNvbnN0IHN0cmluZ1BhcnNlciA9IChsZW5ndGgsIGZuKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgaWYgKGxlbmd0aCA8IDEpIHJldHVybiBva1JlcGx5KGN0eCwgJycpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsUmVwbHkoY3R4KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFycyhpbmRleCwgdmlldywgbGVuZ3RoKVxuICByZXR1cm4gY2hhckxlbmd0aChuZXh0KSAhPT0gbGVuZ3RoIHx8ICFmbihuZXh0KVxuICAgID8gZmFpbFJlcGx5KGN0eClcbiAgICA6IG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlIGlucHV0XG4gKiBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoZSBzdHJpbmcgbWF0Y2ggbXVzdCBiZVxuICogZXhhY3QgKGl0IGlzIGNhc2Utc2Vuc2l0aXZlKSwgYW5kIGFsbCBVVEYtOCBjaGFyYWN0ZXJzIGFyZSByZWNvZ25pemVkXG4gKiBwcm9wZXJseS5cbiAqXG4gKiBJZiBgc3RyYCBpcyBlbXB0eSwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgc3VjY2VlZC4gSWYgaXQgaXNcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXJzXG4gKiAgICAgb2YgdGhlIGlucHV0LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xuICogICAgIG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmcgPSBzdHIgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ3N0cmluZycsIHN0cilcblxuICBjb25zdCBbc3ByZXAsIFtzcGN0eCwgc3ByZXNdXSA9IGR1cChzdHJpbmdQYXJzZXIoXG4gICAgY2hhckxlbmd0aChzdHIpLCBjaGFycyA9PiBzdHIgPT09IGNoYXJzLFxuICApKGN0eCkpXG4gIHJldHVybiBzcHJlcy5zdGF0dXMgPT09IE9rID8gc3ByZXAgOiBmYWlsUmVwbHkoc3BjdHgsIGV4cGVjdGVkcy5zdHJpbmcoc3RyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZSBpbnB1dFxuICogYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGlzIG1hdGNoIGlzICpub3QqXG4gKiBjYXNlLXNlbnNpdGl2ZS5cbiAqXG4gKiBJZiBgc3RyYCBpcyBlbXB0eSwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgc3VjY2VlZC4gSWYgaXQgaXNcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXJzXG4gKiAgICAgb2YgdGhlIGlucHV0LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xuICogICAgIGNhc2UtaW5zZW5zaXRpdmVseSBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nSSA9IHN0ciA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnc3RyaW5nSScsIHN0cilcblxuICBjb25zdCBbc3ByZXAsIFtzcGN0eCwgc3ByZXNdXSA9IGR1cChzdHJpbmdQYXJzZXIoXG4gICAgY2hhckxlbmd0aChzdHIpLCBjaGFycyA9PiBzdHIudG9Mb3dlckNhc2UoKSA9PT0gY2hhcnMudG9Mb3dlckNhc2UoKSxcbiAgKShjdHgpKVxuICByZXR1cm4gc3ByZXMuc3RhdHVzID09PSBPayA/IHNwcmVwIDogZmFpbFJlcGx5KHNwY3R4LCBleHBlY3RlZHMuc3RyaW5nSShzdHIpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cbiAqIHRoYXQgdGV4dC4gU3VjY2VlZHMgaWYgYWxyZWFkeSBhdCBFT0YsIHJlc3VsdGluZyBpbiBhbiBlbXB0eSBzdHJpbmcuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFsbCA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3Qgd2lkdGggPSB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleFxuICByZXR1cm4gb2tSZXBseShjdHgsIHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpLCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2VydGFpbiBudW1iZXIgb2YgY2hhcmFjdGVycywgdXNpbmcgdGhlbSAoYXMgYVxuICogc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmUgbm90IHRoYXRcbiAqIG1hbnkgY2hhcmFjdGVycyBsZWZ0IHRvIHJlYWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIHRoYXQgbWFueSBjaGFyYWN0ZXJzIGFuZCBqb2luc1xuICogICAgIHRoZW0gaW50byBhIHN0cmluZyBmb3IgaXRzIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueVN0cmluZyA9IG4gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ2FueVN0cmluZycsIG4pXG5cbiAgY29uc3QgW3NwcmVwLCBbc3BjdHgsIHNwcmVzXV0gPSBkdXAoc3RyaW5nUGFyc2VyKG4sICgpID0+IHRydWUpKGN0eCkpXG4gIHJldHVybiBzcHJlcy5zdGF0dXMgPT09IE9rID8gc3ByZXAgOiBmYWlsUmVwbHkoc3BjdHgsIGV4cGVjdGVkcy5hbnlTdHJpbmcobikpXG59KVxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgcGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgY29tcG91bmQsIGV4cGVjdGVkLCBuZXN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuQ29udGV4dH0gQ29udGV4dCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlc3VsdH0gUmVzdWx0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuUmVwbHl9IFJlcGx5ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9lcnJvcicpLkVycm9yTGlzdH0gRXJyb3JMaXN0ICovXG5cbi8qKlxuICogVHJhbnNsYXRlcyBhIFVDUy0yIHN0cmluZyBpbnRvIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVaW50OEFycmF5IG9mIFVURi04IGJ5dGVzIGludG8gYSBVQ1MtMiBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcblxuLyoqXG4gKiBBbiBpdGVyYXRvciB0aGF0IGNvdmVycyBhIHJhbmdlIGZyb20gYSBzdGFydGluZyB2YWx1ZSB0byBhbiBlbmRpbmdcbiAqIHZhbHVlLCBzdGVwcGluZyBieSBhIGNlcnRhaW4gdmFsdWUgYmV0d2VlbiBlYWNoLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIGZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBsYXN0IG51bWJlciBvZiB0aGUgcmFuZ2UuIEJ5IGRlZmF1bHQgdGhpc1xuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcbiAqICAgICBpbiBpdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RlcD0xXSBUaGUgbnVtYmVyIHRvIGluY3JlYXNlIHRoZSB5aWVsZGVkIHZhbHVlIGJ5XG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVzaXZlPWZhbHNlXSBEZXRlcm1pbmVzIHdoZXRoZXIgYGVuZGAgc2hvdWxkIGJlXG4gKiAgICAgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICpyYW5nZShzdGFydCwgZW5kLCBzdGVwLCBpbmNsdXNpdmUpIHtcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXG4gIGNvbnN0IGUgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IGVuZCA6IHN0YXJ0XG4gIGNvbnN0IHAgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcicgPyBzdGVwID09PSAwID8gMSA6IE1hdGguYWJzKHN0ZXApIDogMVxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXG4gICAgPyAhIWluY2x1c2l2ZSA6IHR5cGVvZiBlbmQgPT09ICdudW1iZXInXG4gICAgICA/ICEhc3RlcCA6ICEhZW5kXG5cbiAgY29uc3QgZm9yd2FyZCA9IHMgPCBlXG4gIGxldCBjdXJyZW50ID0gc1xuXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4ge1xuICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXG4gICAgfVxuICAgIHJldHVybiBpID8gY3VycmVudCA8IGUgOiBjdXJyZW50IDw9IGVcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XG4gICAgeWllbGQgY3VycmVudFxuICAgIGN1cnJlbnQgPSBmb3J3YXJkID8gY3VycmVudCArIHAgOiBjdXJyZW50IC0gcFxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xufVxuXG4vKipcbiAqIEFuIGl0ZXJhdG9yIHRoYXQgcGFpcnMgdmFsdWVzIGluIGFuIGl0ZXJhYmxlIHdpdGggdGhlaXIgaW5kZXhlcyBpbiBhXG4gKiBzZXJpZXMgb2YgdHdvLWVsZW1lbnQgYXJyYXlzLiBUaGUgZmlyc3QgYXJyYXkgZWxlbWVudCBpcyB0aGUgaW5kZXg7XG4gKiB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBmcm9tIHRoZSBpdGVyYWJsZS5cbiAqXG4gKiBGb3IgYXJyYXlzLCB0aGlzIGNhbiBiZSBkb25lIHdpdGggYGFycmF5LmVudHJpZXMoKWAsIHdoaWNoIHByb2R1Y2VzXG4gKiB0d28tZWxlbWVudCBhcnJheXMgaW4gdGhlIHNhbWUgZm9ybWF0LiBIb3dldmVyLCB0aGlzIGdlbmVyYXRvclxuICogZnVuY3Rpb24gd2lsbCB3b3JrIHdpdGggYW55IGtpbmQgb2Ygb2JqZWN0IGltcGxlbWVudGluZyB0aGVcbiAqIGBJdGVyYWJsZWAgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIEFuIGl0ZXJhYmxlIG9iamVjdCB3aG9zZSBlbGVtZW50cyB3aWxsXG4gKiAgICAgYmUgcGFpcmVkIHdpdGggdGhlaXIgaW5kZXhlcy5cbiAqIEB5aWVsZHMge1tudW1iZXIsICpdfSBUaGUgaXRlcmFibGUncyB2YWx1ZXMsIHBhaXJlZCB3aXRoIHRoZWlyXG4gKiAgICAgaW5kZXhlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICplbnVtZXJhdGUoaXRlcmFibGUpIHtcbiAgY29uc3QgaXRlcmF0b3IgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKClcbiAgbGV0IHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKVxuICBsZXQgaW5kZXggPSAwXG5cbiAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgIHlpZWxkIFtpbmRleCsrLCByZXN1bHQudmFsdWVdXG4gICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcG9ydGlvbiBvZiBhIFVURi04IGRhdGEgdmlldyBhcyBhIFVDUy0yIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHRvIGJlIHRoZSBmaXJzdCBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIGluY2x1ZGUgaW4gdGhlXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0IGZyb20gd2hpY2hcbiAqICAgICB0aGUgZ2VuZXJhdGVkIHN0cmluZyBpcyB0YWtlbi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgVUNTLTIgKHJlZ3VsYXIgSmF2YVNjcmlwdCBzdHJpbmcpIHJlcHJlc2VudGF0aW9uXG4gKiAgICAgb2YgdGhlIFVURi04IGNoYXJhY3RlcnMgaW4gdGhlIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpZXdUb1N0cmluZyhpbmRleCwgbGVuZ3RoLCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGVzID0gVWludDhBcnJheS5mcm9tKFxuICAgIHsgbGVuZ3RoIH0sXG4gICAgKF8sIGkpID0+IHZpZXcuZ2V0VWludDgoaW5kZXggKyBpKSxcbiAgKVxuICByZXR1cm4gZGVjb2Rlci5kZWNvZGUoYnl0ZXMpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFVURi04IGRhdGEgdmlldyBvZiBhIFVDUy0yIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZW5jb2RlIGludG8gYSBVVEYtOCBkYXRhIHZpZXcuXG4gKiBAcmV0dXJucyB7RGF0YVZpZXd9IEEgZGF0YSB2aWV3IG92ZXIgdGhlIFVURi04IGJ5dGVzIG9mIHRoZSBpbnB1dFxuICogICAgIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvVmlldyhzdHIpIHtcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhlbmNvZGVyLmVuY29kZShzdHIpLmJ1ZmZlcilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgVVRGLTggY2hhcmFjdGVycyBpbiBhIHN0cmluZy4gVGhpcyBjYW4gZGlmZmVyXG4gKiBmcm9tIHRoZSBudW1iZXIgb2YgVUNTLTIgY2hhcmFjdGVycyBpbiB0aGUgc2FtZSBzdHJpbmcsIG1lYW5pbmcgdGhpc1xuICogdmFsdWUgY2FuIGRpZmZlciBmcm9tIHRoZSBgbGVuZ3RoYCBwcm9wZXJ0eSBvZiB0aGUgc2FtZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIG9mIHdoaWNoIHRvIGdldCB0aGUgY2hhcmFjdGVyIGxlbmd0aC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoYXQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhckxlbmd0aChzdHIpIHtcbiAgcmV0dXJuIFsuLi5zdHJdLmxlbmd0aFxufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgY3VycmVudGx5IGluZGV4ZWQgaW4gdGhlIHZpZXcsXG4gKiBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB3aXRoaW4gdGhlIHZpZXcgdGhhdCBpc1xuICogICAgIHRoZSBmaXJzdCAoYW5kIHBlcmhhcHMgb25seSkgYnl0ZSBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHsoMXwyfDN8NCl9IFRoZSBudW1iZXIgb2YgYnl0ZXMgY29udGFpbmVkIGluIHRoZSBjaGFyYWN0ZXJcbiAqICAgICBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBieXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldykge1xuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcbiAgaWYgKChieXRlICYgMHg4MCkgPj4gNyA9PT0gMCkgcmV0dXJuIDFcbiAgaWYgKChieXRlICYgMHhlMCkgPj4gNSA9PT0gMGIxMTApIHJldHVybiAyXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMCkgcmV0dXJuIDNcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTExKSByZXR1cm4gNFxuICAvLyBIb3BlZnVsbHkgc2hvdWxkbid0IGhhcHBlbiwgYnV0IGhlcmUgaW4gY2FzZSBvbmUgb2YgdGhvc2UgaGlnaFxuICAvLyBhc2NpaSBjb2RlcyBpcyB1c2VkXG4gIHJldHVybiAxXG59XG5cbi8qKlxuICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyKHMpIGluIHRoZSBkYXRhIHZpZXcuXG4gKlxuICogQHR5cGVkZWYgTmV4dENoYXJJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSByZXR1cm5lZCBjaGFyYWN0ZXIocykuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmV4dCBUaGUgbmV4dCBjaGFyYWN0ZXIocykuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb24gd2l0aGluIHRoZSBkYXRhIHZpZXcuXG4gKiBUaGlzIGNoYXJhY3RlciBtYXkgYmUgYSAxLSwgMi0sIDMtLCBvciA0LWJ5dGUgY2hhcmFjdGVyIGRlcGVuZGluZyBvblxuICogdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXG4gKiAgICAgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXIoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3Qgd2lkdGggPSBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KVxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgYGNvdW50YCBjaGFyYWN0ZXJzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIHBvc2l0aW9uXG4gKiB3aXRoaW4gdGhlIHZpZXcuIEVhY2ggb2YgdGhlc2UgY2hhcmFjdGVycyBtYXkgYmUgMS0sIDItLCAzLSwgb3JcbiAqIDQtYnl0ZSBjaGFyYWN0ZXJzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZWlyIGZpcnN0IGJ5dGVzLiBJZlxuICogdGhlcmUgYXJlIG5vdCBlbm91Z2ggY2hhcmFjdGVycyBsZWZ0LCB0aG9zZSByZW1haW5pbmcgd2lsbCBiZVxuICogcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZmlyc3QgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gcmV0dXJuLlxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGNvdW50KSB7XG4gIGNvbnN0IHZpZXdMZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGhcbiAgbGV0IHdpZHRoID0gMFxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShjb3VudCkpIHtcbiAgICBjb25zdCBpID0gaW5kZXggKyB3aWR0aFxuICAgIGlmIChpID49IHZpZXdMZW5ndGgpIGJyZWFrXG4gICAgd2lkdGggKz0gbmV4dENoYXJXaWR0aChpLCB2aWV3KVxuICB9XG4gIGlmIChpbmRleCArIHdpZHRoID49IHZpZXdMZW5ndGgpIHtcbiAgICB3aWR0aCA9IHZpZXdMZW5ndGggLSBpbmRleFxuICB9XG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogU3Vycm91bmRzIHRoZSBzdXBwbGllZCBzdHJpbmcgaW4gc2luZ2xlIHF1b3Rlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc3Vycm91bmQgaW4gc2luZ2xlIHF1b3Rlcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgbGVkIGFuZCB0cmFpbGVkIGJ5IHNpbmdsZSBxdW90ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdW90ZShzdHIpIHtcbiAgcmV0dXJuIGAnJHtzdHJ9J2Bcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHR3byBjb3BpZXMgb2YgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIFRoaXMgc29ydCBvZiBlbXVsYXRlcyAqYXMtcGF0dGVybnMqIGluIGEgbGltaXRlZCB3YXkgaW4gSmF2YVNjcmlwdC5cbiAqIEluIGxhbmd1YWdlcyBsaWtlIEhhc2tlbGwgYW5kIE1MLCB3aGVuIHBhdHRlcm4gbWF0Y2hpbmcgaXMgZG9uZSxcbiAqIHRoZXJlIGlzIGEgY29uc3RydWN0IHRvIGJlIGFibGUgdG8gcmV0YWluIGEgbGFyZ2VyIHBhcnQgb2YgdGhlXG4gKiBkZXN0cnVjdHVyZWQgcGF0dGVybiB3aGlsZSBhbHNvIGJyZWFraW5nIGl0IGRvd24gZnVydGhlci4gSW4gSGFza2VsbCxcbiAqXG4gKiBgYGBoYXNrZWxsXG4gKiAoaGVhZCA6IHRhaWwpID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiB3aWxsIGFzc2lnbiBgMWAgdG8gYGhlYWRgLCBhbmQgYFsyLCAzLCA0LCA1XWAgdG8gYHRhaWxgLiBUaGlzIGNhbiBiZVxuICogZG9uZSBpbiBKYXZhU2NyaXB0IGFzIHdlbGwsIGxpa2UgdGhpczpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBbaGVhZCwgLi4udGFpbF0gPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIEhvd2V2ZXIsIEhhc2tlbGwgY2FuIGdvIGZhcnRoZXI6IGl0IGNhbiBhbHNvIGFzc2lnbiB0aGUgZW50aXJlIGxpc3RcbiAqIGFzIGEgd2hvbGUgdG8gYW5vdGhlciB2YXJpYWJsZSB3aGlsZSBzdGlsbCBhc3NpZ25pbmcgaXRzIGVsZW1lbnRzIGFzXG4gKiBhYm92ZS4gSXQncyBkb25lIGxpa2UgdGhpczpcbiAqXG4gKiBgYGBoYXNrZWxsXG4gKiBsaXN0IEAgKGhlYWQgOiB0YWlsKSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogVGhpcyB3aWxsLCBpbiBhZGRpdGlvbiB0byB0aGUgYXNzaWdubWVudHMgYWJvdmUsIGFzc2lnbiBgWzEsIDIsIDMsIDQsXG4gKiA1XWAgdG8gYGxpc3RgLiBUaGUgYEBgIHNpZ24gaXMgcmVhZCAqYXMqLCBhbmQgdGhpcyBjb25zdHJ1Y3QgaXNcbiAqIGNhbGxlZCBhbiAqYXMtcGF0dGVybiogKHBlcmhhcHMgYmVjYXVzZSB0aGUgTUwgd2F5IG9mIGRvaW5nIGl0IHVzZXNcbiAqIHRoZSBgYXNgIGtleXdvcmQgaW5zdGVhZCBvZiB0aGUgYEBgIHN5bWJvbCkuXG4gKlxuICogVGhlcmUgaXMgbm8gZmFjaWxpdHkgdG8gZG8gdGhpcyBpbiBKYXZhU2NyaXB0LiBCdXQgdGhlcmUgYXJlIG1hbnlcbiAqIHBsYWNlcyBpbiB0aGlzIGxpYnJhcnkgd2hlcmUgYSBgUmVwbHlgIGlzIGRlc2N0dXJjdHVyZWQgaW50byBpdHNcbiAqIGBDb250ZXh0YCBhbmQgYFJlc3VsdGAgZWxlbWVudHMsIHlldCB0aGVyZSBpcyBhIG5lZWQgdG8gY29uZGl0aW9uYWxseVxuICogdXNlIHRoZSBlbnRpcmUgYFJlcGx5YCBhcyB3ZWxsIChub3JtYWxseSB0byByZXR1cm4gaXQgaWYgc29tZVxuICogY29uZGl0aW9uIGlzIG1ldCkuIFJhdGhlciB0aGFuIGNyZWF0ZSBhIG5ldyBgUmVwbHlgIGZyb20gdGhlc2UgcGFydHMsXG4gKiBgdHdpbmAgY2FuIGJlIHVzZWQgdG8gZHVwbGljYXRlIHRoZSByZWZlcmVuY2VzIHRvIHRoZSBgUmVwbHlgLiBUaGVuXG4gKiBvbmx5ICpvbmUqIG9mIHRoZSBkdXBsaWNhdGUgcmVmZXJlbmNlcyBjYW4gYmUgZGVzdHJ1Y3R1cmVkLCB3aGlsZSB0aGVcbiAqIG90aGVyIG9uZSBpcyByZXRhaW5lZCBhcyBhIHdob2xlLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihwYXJzZXIoY3R4KSlcbiAqIGBgYFxuICpcbiAqIEFzLXBhdHRlcm5zIGNhbiBiZSB1c2VkIG9uIHBpZWNlcyBvZiBhIHBhdHRlcm4gaW5zdGVhZCBvZiB0aGUgZW50aXJlXG4gKiBwYXR0ZXJuLCBhbmQgYHR3aW5gIGNhbm5vdCBkbyB0aGF0LiBCdXQgaXQgc2VydmVzIGZvciB3aGF0IGlzIG5lZWRlZFxuICogaW4gS2Vzc2VsLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHZhbHVlIEEgcmVwbHkgdGhhdCBuZWVkcyB0byBiZSBkZXN0cnVjdHVyZWQgd2hpbGVcbiAqICAgICBtYWludGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgd2hvbGUuXG4gKiBAcmV0dXJucyB7W1JlcGx5LCBSZXBseV19IEFuIGFycmF5IGNvbnRhaW5pbmcgdHdvIGNvcGllcyBvZiB0aGVcbiAqICAgICByZXBseS4gT25lIGNhbiBiZSBkZXN0cnVjdHVyZWQgd2hpbGUgdGhlIG90aGVyIGlzIHJldGFpbmVkIHdob2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZHVwKHZhbHVlKSB7XG4gIHJldHVybiBbdmFsdWUsIHZhbHVlXVxufVxuXG4vKipcbiAqIENvbW1hLXNlcGFyYXRlcyAoYXMgbmVlZGVkKSB0aGUgc3RyaW5ncyBpbiB0aGUgcHJvdmlkZWQgYXJyYXkuIElmXG4gKiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZSByZXN1bHQgd2lsbCBiZSBhbiBlbXB0eSBzdHJpbmc7IGlmIHRoZSBhcnJheVxuICogaGFzIG9ubHkgb25lIGVsZW1lbnQsIHRoYXQgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkLiBJZiB0aGUgYXJyYXkgaGFzXG4gKiB0d28gZWxlbWVudHMsIHRoZXkgd2lsbCBiZSBqb2luZWQgd2l0aCAnIG9yICcgYmV0d2VlbiB0aGVtLiBJZiB0aGVcbiAqIGFycmF5IGlzIGxvbmdlciB0aGFuIHRoYXQsIGFsbCBlbGVtZW50cyB3aWxsIGJlIGNvbW1hLXNlcGFyYXRlZCB3aXRoXG4gKiBhbiBhZGRpdGlvbmFsICdvcicgYmV0d2VlbiB0aGUgbGFzdCB0d28gZWxlbWVudHMgKE94Zm9yZCBjb21tYVxuICogc3R5bGUpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IG1lc3NhZ2VzIFRoZSBzdHJpbmdzIHRoYXQgbmVlZCB0byBiZSBqb2luZWQgaW50b1xuICogICAgIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBtZXNzYWdlcyBqb2luZWQgaW50byBhIHNpbmdsZSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tYVNlcGFyYXRlKG1lc3NhZ2VzKSB7XG4gIHN3aXRjaCAobWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gJydcbiAgICBjYXNlIDE6IHJldHVybiBtZXNzYWdlc1swXVxuICAgIGNhc2UgMjogcmV0dXJuIG1lc3NhZ2VzLmpvaW4oJyBvciAnKVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IG1zZ3MgPSBtZXNzYWdlcy5zbGljZSgpXG4gICAgICBjb25zdCBsYXN0ID0gbXNncy5wb3AoKVxuICAgICAgcmV0dXJuIGAke21zZ3Muam9pbignLCAnKX0sIG9yICR7bGFzdH1gXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXVnbWVudHMgYSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGJlIGFibGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXRcbiAqIGNyZWF0ZWQgYW4gYXJiaXRyYXJ5IG9iamVjdC4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gaXMgYXNzaWduZWQgYW5cbiAqIGFkZGl0aW9uYWwgcHJvcGVydHkgKGJ5IGRlZmF1bHQgbmFtZWQgYGNyZWF0ZWRgLCBjYW4gYmUgY2hhbmdlZCBieVxuICogcGFzc2luZyBpbiB0aGUgYHByb3BgIGFyZ3VtZW50KSB3aGljaCBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIG9iamVjdCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZhY3RvcnkgY3JlYXRlZCBpdCBvciBgZmFsc2VgIGlmIGl0XG4gKiBkaWQgbm90LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBhdWdtZW50ZWQgd2l0aFxuICogICAgIHRoZSBuZXcgcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IFtwcm9wPSdjcmVhdGVkJ10gVGhlIHByb3BlcnR5IHRoYXQgd2lsbCBiZVxuICogICAgIGFkZGVkIHRvIHRoZSBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHJldHVybnMge2Z1bmN0aW9ufSBUaGUgYXVnbWVudGVkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFjayhmbiwgcHJvcCA9ICdjcmVhdGVkJykge1xuICBjb25zdCB0cmFja2VkID0gbmV3IFdlYWtTZXQoKVxuXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBmbiguLi5hcmdzKVxuICAgICAgdHJhY2tlZC5hZGQoY3JlYXRlZClcbiAgICAgIHJldHVybiBjcmVhdGVkXG4gICAgfSxcbiAgICBwcm9wLFxuICAgIHsgdmFsdWU6IHRyYWNrZWQuaGFzLmJpbmQodHJhY2tlZCkgfSxcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIHRvIGl0cyBzdHJpbmcgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCcxc3QnYCwgYDE3MjlgIGJlY29tZXMgYCcxNzI5dGgnYCwgZXRjLilcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIGNvbnZlcnQgaW50byBhbiBvcmRpbmFsLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgbnVtYmVyIGluIGl0cyBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgY29uc3Qgc3VmZml4ZXMgPSBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11cbiAgY29uc3QgdiA9IG4gJSAxMDBcbiAgcmV0dXJuIG4gKyAoc3VmZml4ZXNbKHYgLSAyMCkgJSAxMF0gPz8gc3VmZml4ZXNbdl0gPz8gc3VmZml4ZXNbMF0pXG59XG5cbmNvbnN0IG51bXMgPSBbXG4gICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsXG4gICduaW5lJywgJ3RlbicsICdlbGV2ZW4nLCAndHdlbHZlJywgJ3RoaXJ0ZWVuJywgJ2ZvdXJ0ZWVuJywgJ2ZpZnRlZW4nLFxuICAnc2l4dGVlbicsICdzZXZlbnRlZW4nLCAnZWlnaHRlZW4nLCAnbmluZXRlZW4nLFxuXVxuY29uc3Qgb25lcyA9IFtcbiAgJ3plcm90aCcsICdmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2ZpZnRoJywgJ3NpeHRoJywgJ3NldmVudGgnLFxuICAnZWlnaHRoJywgJ25pbnRoJywgJ3RlbnRoJywgJ2VsZXZlbnRoJywgJ3R3ZWxmdGgnLCAndGhpcnRlZW50aCcsXG4gICdmb3VydGVlbnRoJywgJ2ZpZnRlZW50aCcsICdzaXh0ZWVudGgnLCAnc2V2ZW50ZWVudGgnLCAnZWlnaHRlZW50aCcsXG4gICduaW5ldGVlbnRoJyxcbl1cbmNvbnN0IHRlbnMgPSBbXG4gICd0d2VudCcsICd0aGlydCcsICdmb3J0JywgJ2ZpZnQnLCAnc2l4dCcsICdzZXZlbnQnLCAnZWlnaHQnLCAnbmluZXQnLFxuXVxuY29uc3QgZ3JvdXBzID0gW1xuICAnaHVuZHJlZCcsICd0aG91c2FuZCcsICdtaWxsaW9uJywgJ2JpbGxpb24nLCAndHJpbGxpb24nLCAncXVhZHJpbGxpb24nLFxuXVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gaXRzIHdvcmQtYmFzZWQgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCdmaXJzdCdgLCBgMTcyOWAgYmVjb21lcyBgJ29uZSB0aG91c2FuZCBzZXZlbiBodW5kcmVkXG4gKiB0d2VudHktbmludGgnYCwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIG51bWJlciBpbiBpdHMgd29yZC1iYXNlZCBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3b3JkaW5hbChuKSB7XG4gIGlmIChuIDwgMCB8fCBuID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke051bWJlci5NQVhfU0FGRV9JTlRFR0VSfWApXG4gIH1cbiAgY29uc3QgbWFnID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKG4pKVxuXG4gIGlmIChuIDwgMjApIHJldHVybiBvbmVzW25dXG4gIGlmIChtYWcgPT09IDEpIHtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihuIC8gMTApIC0gMlxuICAgIHJldHVybiBuICUgMTAgPT09IDAgPyBgJHt0ZW5zW2ldfWlldGhgIDogYCR7dGVuc1tpXX15LSR7b25lc1tuICUgMTBdfWBcbiAgfVxuICBpZiAobWFnID09PSAyKSB7XG4gICAgY29uc3QgZiA9IE1hdGguZmxvb3IobiAvIDEwICoqIG1hZylcbiAgICBjb25zdCB4ID0gbiAtIGYgKiAxMCAqKiBtYWdcbiAgICByZXR1cm4gYCR7bnVtc1tmXX0gJHtncm91cHNbMF19JHt4ID09PSAwID8gJ3RoJyA6IGAgJHt3b3JkaW5hbCh4KX1gfWBcbiAgfVxuXG4gIGNvbnN0IGcgPSBtYWcgJSAzICsgMVxuICBjb25zdCBpID0gTWF0aC5mbG9vcihtYWcgLyAzKVxuICBjb25zdCBmID0gTWF0aC5mbG9vcihuIC8gMTAgKiogKG1hZyAtIGcgKyAxKSlcbiAgY29uc3QgbSA9IChmdW5jdGlvbiBtdWx0KG51bSkge1xuICAgIGlmIChudW0gPCAyMCkgcmV0dXJuIG51bXNbbnVtXVxuXG4gICAgY29uc3QgcmVtID0gbnVtICUgMTBcbiAgICBpZiAobnVtIDwgMTAwKSB7XG4gICAgICByZXR1cm4gYCR7dGVuc1tNYXRoLmZsb29yKG51bSAvIDEwKSAtIDJdfXkke1xuICAgICAgICByZW0gPT09IDAgPyAnJyA6IGAtJHtudW1zW3JlbV19YFxuICAgICAgfWBcbiAgICB9XG5cbiAgICBjb25zdCB4ID0gbnVtIC0gTWF0aC5mbG9vcihudW0gLyAxMDApICogMTAwXG4gICAgcmV0dXJuIGAke251bXNbTWF0aC5mbG9vcihudW0gLyAxMDApXX0gJHtncm91cHNbMF19JHtcbiAgICAgIHggPT09IDAgPyAndGgnIDogYCAke211bHQoeCl9YFxuICAgIH1gXG4gIH0oZikpXG4gIGNvbnN0IHggPSBuIC0gZiAqIDEwICoqIChtYWcgLSBnICsgMSlcbiAgcmV0dXJuIGAke219ICR7Z3JvdXBzW2ldfSR7eCA9PT0gMCA/ICd0aCcgOiBgICR7d29yZGluYWwoeCl9YH1gXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XG4gKiBvZnRlbiBiZSB0aGUgb3V0cHV0IGZyb20gYEpTT04uc3RyaW5naWZ5KClgLCB0aG91Z2ggcmVwcmVzZW50YXRpb25zXG4gKiBhcmUgYWxzbyBpbmNsdWRlZCBmb3IgdHlwZXMgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IHN1cHBvcnQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdHVybiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gQSByZWFzb25hYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJ1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSByZXR1cm4gYFN5bWJvbCgke3ZhbHVlLmRlc2NyaXB0aW9ufSlgXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcHByb3ByaWF0ZSBpbmRlZmluaXRlIGFydGljbGUgKCdhJyBvciAnYW4nKSB0byBhIHdvcmQgYmFzZWRcbiAqIG9uIGl0cyBmaXJzdCBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHByZXBlbmQgYW4gYXJ0aWNsZSB0by5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCB0aGUgcHJlcGVuZGVkIGFydGljbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xpZnkoc3RyKSB7XG4gIHJldHVybiAnYWVpb3VBRUlPVScuaW5jbHVkZXMoc3RyWzBdKSA/IGBhbiAke3N0cn1gIDogYGEgJHtzdHJ9YFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXJyb3IgdXRpbGl0aWVzXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgYSBmYWlsdXJlIHJlcGx5LiBUaGUgY29uZGl0aW9uXG4gKiBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJlcGx5IHdpbGwgYmUgZmF0YWwgKGB0cnVlYCkgb3Igbm90IChgZmFsc2VgKS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvbiBTaG91bGQgYmUgYHRydWVgIGZvciBhIGZhdGFsIGZhaWx1cmUgb3JcbiAqICAgICBgZmFsc2VgIGZvciBhIG5vbi1mYXRhbCBmYWlsdXJlLlxuICogQHJldHVybnMgVGhlIHJlcGx5IGZ1bmN0aW9uIGZvciBmYXRhbCBvciBub24tZmF0YWwgZmFpbHVyZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBseUZuKGNvbmRpdGlvbikge1xuICByZXR1cm4gY29uZGl0aW9uID8gZmF0YWxSZXBseSA6IGZhaWxSZXBseVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBlcnJvciBsaXN0IGZvciBub24tYmFja3RyYWNrZWQgZXJyb3JzIGZyb20gdW5kZXJseWluZ1xuICogcGFyc2Vycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgbmV3IGVycm9yLiBUaGlzIHdpbGxcbiAqICAgICBvbmx5IGJlIHVzZWQgaWYgaXQncyBhY3R1YWxseSBwcmVzZW50LlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QgdGhhdCBkb2VzIG5vdCB0YWtlIGJhY2t0cmFja2luZ1xuICogICAgIGludG8gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vbmJhY2sobSwgZXJyb3JzKSB7XG4gIHJldHVybiBtID09IG51bGwgPyBlcnJvcnMgOiBleHBlY3RlZChtKVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBlcnJvciBsaXN0IGZvciBiYWNrdHJhY2tlZCBlcnJvcnMgZnJvbSB1bmRlcmx5aW5nXG4gKiBwYXJzZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QgdGhhdCB0YWtlcyBiYWNrdHJhY2tpbmcgaW50b1xuICogICAgIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYWNrKG0sIGN0eCwgZXJyb3JzKSB7XG4gIHJldHVybiBtID09IG51bGwgPyBuZXN0ZWQoY3R4LCBlcnJvcnMpIDogY29tcG91bmQobSwgY3R4LCBlcnJvcnMpXG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIGVycm9yIGxpc3QgdGhhdCB3aWxsIG9ubHkgcmVjb3JkIGJhY2t0cmFja2luZ1xuICogaW5mb3JtYXRpb24gaWYgdGhlIHByb3ZpZGVkIGNvbmRpdGlvbiBpcyB0cnVlLlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZCBJZiBgdHJ1ZWAsIHRoZSBuZXcgZXJyb3IgbGlzdCB3aWxsIGluY2x1ZGVcbiAqICAgICBiYWNrdHJhY2tpbmcgaW5mb3JtYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gbSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgbmV3IGVycm9yLiBUaGlzIHdpbGxcbiAqICAgICBvbmx5IGJlIHVzZWQgaWYgaXQncyBhY3R1YWxseSBwcmVzZW50LlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgZnJvbSB0aGUgcG9pbnQgd2hlcmUgdGhlIHVuZGVybHlpbmdcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGVycm9ycyBnZW5lcmF0ZWQgYnkgdGhlIHVuZGVybHlpbmdcbiAqICAgICBwYXJzZXIuXG4gKiBAcmV0dXJucyB7RXJyb3JMaXN0fSBBIG5ldyBlcnJvciBsaXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZWQoY29uZCwgbSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGNvbmQgPyBiYWNrKG0sIGN0eCwgZXJyb3JzKSA6IG5vbmJhY2sobSwgZXJyb3JzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==