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
  const ps = args;
  const m = typeof args[args.length - 1] === 'string' ? ps.pop() : null;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const hasM = m != null;
     true && ps.forEach((p, i) => Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('alt', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(i + 1, true)));
    let errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : [];

    for (const p of ps) {
      const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
      if (pres.status === Ok) return prep;
      if (!hasM) errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors);
      if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(pctx, errors);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, errors);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Ok) return prep;
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors;
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(pctx, errors); // If the optional parser fails, we add the error message even though
  // the end result of `opt` is success. This lets sequencing parsers
  // add the opt parser's expected to error messages if a later parser
  // in the sequence fails.

  const reply = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Ok) return prep;
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, x);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
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
  if (pres.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, pres.value, index);

  if (pres.status === Fail) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors, index);
  } // This parser implements automatic backtracking, so if its parser
  // fails fatally, it has to track that through a nested error


  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(m, pctx, pres.errors) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(pctx, pres.errors), index);
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
  if (pres.status === Ok && pctx.index === index) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null);
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors;
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(pctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, errors);
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
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, errors, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null, index);
});

/***/ }),

/***/ "./src/combinators/backtracking.js":
/*!*****************************************!*\
  !*** ./src/combinators/backtracking.js ***!
  \*****************************************/
/*! exports provided: label, attempt, attemptM, sequenceB, chainB, applyB, leftB, rightB, andThenB, repeatB, manyTillB, blockB, pipeB, betweenB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return attempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attemptM", function() { return attemptM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequenceB", function() { return sequenceB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return chainB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyB", function() { return applyB; });
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
 * A parser that passes through the result of its embedded parser,
 * except that it will change that parser's expected error message to
 * the one provided.
 *
 * @param {Parser} p The parser to be executed.
 * @param {string} msg The new expected error message if `p` fails.
 * @returns {Parser} A parser that executes `p` and passes its results
 *     through except for changing its expected error message upon
 *     failure.
 */


const label = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('label', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('label', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordStrFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status === Fail ? pass(pctx, pres, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg)) : prep;
});
/**
 * A parser that backtracks when its contained parser fails fatally and
 * transforms that fatal failure into a non-fatal one.
 *
 * This is the only way (along with the similar `attemptM`) to cause a
 * contained parser to backtrack after a fatal failure. All of the `B`
 * backtracking parsers backtrack only if the fatal failure was caused
 * by a contained parser's non-fatal failure.
 *
 * @param {Parser} p The parser whose fatal failures will be converted
 *     into non-fatal failures.
 * @returns {Parser} A parser that cannot fail fatally. If its contained
 *     parser fails fatally, this one will instead fail non-fatally.
 */

const attempt = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('attempt', p);
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Ok) return prep;
  const err = index === pctx.index ? pres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(pctx, pres.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, err, index);
});
/**
 * A parser that backtracks when its contained parser fails fatally and
 * transforms that fatal failure into a non-fatal one. The error message
 * is then replaced with the supplied one.
 *
 * If the contained parser fails non-fatally, this acts just like
 * `label` and simply replaces the expected error message. If that
 * parser fails fatally however, this parser will backtrack to the point
 * where that parser was executed and will use the supplied error
 * message as a header to a nested error message detailing the
 * backtracking.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} msg The new error message to be used. This will be an
 *     `Expected` error if no input was consumed, or a `Compound` error
 *     if it was.
 * @returns {Parser} A parser that applies `p` and changes the error as
 *     appropriate if `p` fails.
 */

const attemptM = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that implements a sequence. Each supplied parser is executed
 * in order until either they all succeed or the first one fails. In the
 * former case, all results are merged into an array that becomes the
 * returned parser's result.
 *
 * If one of the parsers fails non-fatally after all of the earlier
 * parsers succeeded, this parser will backtrack to the point where the
 * very first parser was executed and will fail non-fatally.
 *
 * @param {...Parser} ps The parsers to be executed.
 * @returns {Parser} A parser that executes the supplied parsers one at
 *     a time, in order, and fails if any of those parsers fail.
 */

const sequenceB = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParsers"])('sequenceB', ps);
  const values = [];
  const index = ctx.index;
  let context = ctx;
  let errors = [];

  for (const p of ps) {
    var _pres$errors;

    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    errors = ((_pres$errors = pres.errors) === null || _pres$errors === void 0 ? void 0 : _pres$errors.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];
    if (pres.status === Fatal) return prep;

    if (pres.status === Fail) {
      const err = index === context.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(context, err, index);
    }

    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
});
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
 * @returns {Parser} A parser which will execute `p`, pass the result to
 *     the supplied function, and use that function's return value as a
 *     second parser to execute.
 */

const chainB = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chainB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chainB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chainB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('the 2nd argument to return a parser'));
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  if (qres.status === Ok) return qrep;
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(qctx, errors);
  const err = index === qctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(qctx, errors);

  if (qres.status === Fail) {
    const err = index === qctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
  }

  const fn = qres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('applyB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('2nd argument to return a function'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, fn(pres.value));
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);
  if (qres.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, pres.value);
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(qctx, errors);
  const err = index === qctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  if (qres.status === Ok) return qrep;
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(qctx, errors);
  const err = index === qctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
});
/**
 * A parser that will execute the parsers `p` and `q` in sequence and
 * then return the result of both in an array.
 *
 * If `p` succeeds and `q` fails, this parser will backtrack to the
 * point where `p` was executed and fail non-fatally.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @returns {Parser} A parser that executes both `p` and `q` and returns
 *     the results of both parsers in an array.
 */

const andThenB = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('andThenB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('andThenB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);
  if (qres.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, [pres.value, qres.value]);
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(qctx, errors);
  const err = index === qctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
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
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value);
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('blockB', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
    const [pctx, pres] = value(context);
    context = pctx;
    errors = ((_pres$errors2 = pres.errors) === null || _pres$errors2 === void 0 ? void 0 : _pres$errors2.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(context, errors);

    if (pres.status === Fail) {
      const err = index === context.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(context, err, index);
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
      if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(context, errors);

      if (pres.status === Fail) {
        const err = index === context.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, errors);
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(context, err, index);
      }

      values.push(pres.value);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, fn(...values));
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
  const [prerep, [prectx, preres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(pre(ctx));
  if (preres.status !== Ok) return prerep;
  const [pctx, pres] = p(prectx);
  let errors = ((_pres$errors4 = pres.errors) === null || _pres$errors4 === void 0 ? void 0 : _pres$errors4.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(preres.errors, pres.errors) : [];
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(pctx, errors);

  if (pres.status === Fail) {
    const err = index === pctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(pctx, errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, err, index);
  }

  const [postctx, postres] = post(pctx);

  if (postres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(postctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, postres.errors));
  }

  if (postres.status === Fail) {
    errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, postres.errors);
    const err = index === postctx.index ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(postctx, errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(postctx, err, index);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(postctx, pres.value);
});

/***/ }),

/***/ "./src/combinators/misc.js":
/*!*********************************!*\
  !*** ./src/combinators/misc.js ***!
  \*********************************/
/*! exports provided: join, compact, value, nth, first, second, third, fourth, fifth */
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
 * A parser which will execute `p` and return `p`'s results joined
 * together into a single string. This requires that `p` returns an
 * array; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array of
 *     strings.
 * @returns {Parser} A parser that executes `p` and returns a single
 *     string made from joining the elements of the array of strings
 *     returned by `p`.
 */

const join = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('join', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('join', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v.join(''));
});
/**
 * A parser which will execute `p` and return its results minus any
 * `null` or `undefined` results. This requires that `p` returns an
 * array; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array.
 * @returns {Parser} A parser that executes `p` and returns its results
 *     minus any `null` or `undefined` results.
 */

const compact = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('compact', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('compact', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v.filter(x => x != null));
});
/**
 * A parser that executes `p` but, on success, returns `x` instead.
 *
 * @param {Parser} p The parser to apply. Its result is ignored.
 * @param {*} x The value that the new parser will result in if `p`
 *     succeeds.
 * @returns {Parser} A parser that will apply `p` but return `x` on
 *     success.
 */

const value = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('value', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, x) : prep;
});
/**
 * A parser that returns the `n`th element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser that results in an array.
 * @param {number} n The 0-based index of the result element to return.
 * @returns {Parser} A parser whose result is the `n`th element of the
 *     result of `p`.
 */

const nth = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('nth', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('nth', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordNumFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('nth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('1st argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[n]);
});
/**
 * A parser that returns the first element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the first element of the
 *     result of `p`.
 */

const first = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('first', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('first', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[0]);
});
/**
 * A parser that returns the second element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the second element of the
 *     result of `p`.
 */

const second = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('second', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('second', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[1]);
});
/**
 * A parser that returns the third element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the third element of the
 *     result of `p`.
 */

const third = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('third', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('third', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[2]);
});
/**
 * A parser that returns the fourth element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fourth element of the
 *     result of `p`.
 */

const fourth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fourth', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('fourth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[3]);
});
/**
 * A parser that returns the fifth element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fifth element of the
 *     result of `p`.
 */

const fifth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
/*! exports provided: always, map, apply, chain, orElse, andThen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return always; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
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
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
/** @typedef {import('kessel/core').Parser} Parser */
// ====================================================================
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

const always = x => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, x)); // ====================================================================
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

const map = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('map', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('map', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, fn(pres.value)) : prep;
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
 * @returns {Parser} A parser that applies `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */

const apply = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('apply', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('apply', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);

  if (qres.status !== Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
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
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */

const chain = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chain', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('the 2nd argument to return a parser'));
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  return qres.status === Ok ? qrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
}); // ====================================================================
// Alternative

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

const orElse = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * return the result of both in a 2-element array.
 *
 * If either `p` or `q` fail, this parser will also fail, and the
 * failure will be fatal if any input had been consumed by either
 * parser.
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

const andThen = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('andThen', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('andThen', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);
  return qres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, [pres.value, qres.value]) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
});

/***/ }),

/***/ "./src/combinators/sequence.js":
/*!*************************************!*\
  !*** ./src/combinators/sequence.js ***!
  \*************************************/
/*! exports provided: seq, left, right, block, many, many1, skip, skipMany, skipMany1, sepBy, sepBy1, sepEndBy, sepEndBy1, repeat, between, manyTill, pipe, assocL, assoc1L, assocR, assoc1R */
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
  const ps = args;
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
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, errors);
      }

      values.push(pres.value);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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
    const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors;
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(pres.status === Fatal, pctx, errors);
  }

  const [qctx, qres] = q(pctx);
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  return qres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, pres.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, errors);
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
    const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors;
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(pres.status === Fatal, pctx, errors);
  }

  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  return qres.status === Ok ? qrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, errors);
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
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value);
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('block', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
    const [pctx, pres] = value(context);
    context = pctx;
    if (!hasM) errors = ((_pres$errors2 = pres.errors) === null || _pres$errors2 === void 0 ? void 0 : _pres$errors2.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

    if (pres.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, errors);
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
 * @returns {Parser} A parser that executes the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */

const many = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many', p);
  const values = [];
  let context = ctx;

  while (true) {
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
    values.push(pres.value);
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
});
/**
 * A parser that executes `p` one or more times until it fails,
 * collecting the results into an array that is returned.
 *
 * This parser can fail non-fatally if `p` does not succeed at least
 * once. It can fail fatally if `p` ever fails fatally.
 *
 * @param {Parser} p A parser to be executed one or more times.
 * @returns {Parser} A parser that executes the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */

const many1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many1', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  let context = pctx;
  const values = [pres.value];

  while (true) {
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
    values.push(pres.value);
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
});
/**
 * A parser that executes `p` and discards any successful result while
 * still consuming input.
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @returns {Parser} A parser that will consume input as `p`  does on
 *     success, but will produce no result.
 */

const skip = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skip', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null) : prep;
});
/**
 * A parser that executes `p` zero or more times until it fails,
 * discarding the results.
 *
 * This parser cannot fail non-fatally; however, if `p` ever fails
 * fatally, then so will this parser.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */

const skipMany = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that executes `p` one or more times until it fails,
 * discarding the results.
 *
 * This parser can fail non-fatally if `p` does not succeed at least
 * once. It can fail fatally if `p` ever fails fatally.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */

const skipMany1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that executes `p` zero or more times, executing `sep` in
 * between each. The results of `p` are gathered into an array and
 * returned.
 *
 * This parser will not fail non-fatally, as matching `p` zero times is
 * valid. It can fail fatally if either `p` or `sep` ever fail fatally.
 *
 * If `p` and `sep` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sepBy = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that executes `p` one or more times, executing `sep` in
 * between each. The results of `p` are gathered into an array and
 * returned.
 *
 * This parser will not fail if `p` doesn't succeed at least once. It
 * will fail fatally if either `p` or `sep` ever fail fatally.
 *
 * If `p` and `sep` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sepBy1 = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that executes `p` zero or more times, executing `sep` in
 * between each and optionally after the last match of `p`. The results
 * of `p` are gathered into an array and returned.
 *
 * This parser will not fail non-fatally, as matching `p` zero times is
 * valid. It can fail fatally if either `p` or `sep` ever fail fatally.
 *
 * If `p` and `sep` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sepEndBy = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that executes `p` one or more times, executing `sep` in
 * between each and optionally after the last match of `p`. The results
 * of `p` are gathered into an array and returned.
 *
 * This parser will not fail if `p` doesn't succeed at least once. It
 * will fail fatally if either `p` or `sep` ever fail fatally.
 *
 * If `p` and `sep` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sepEndBy1 = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that executes the supplied parser `n` times, collecting the
 * successful results into an array.
 *
 * If `p` fails after any input has been consumed by a prior execution
 * of `p`, this parser will fail fatally.
 *
 * @param {Parser} p A parser to execute multiple times.
 * @param {number} n The number of times to execute the parser.
 * @returns {Parser} A parser that executes `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */

const repeat = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser which executes its pre, content, and post parsers in order
 * and results in the result of its content parser.
 *
 * If either `p` or `post` fails after a prior parser has consumed
 * input, this parser will fail fatally.
 *
 * @param {Parser} pre The first parser to apply.
 * @param {Parser} post The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */

const between = (pre, post, p) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  var _pres$errors3;

   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', pre, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', post, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('3rd'));
  const index = ctx.index;
  const [prerep, [prectx, preres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(pre(ctx));
  if (preres.status !== Ok) return prerep;
  const [pctx, pres] = p(prectx);
  const errors = ((_pres$errors3 = pres.errors) === null || _pres$errors3 === void 0 ? void 0 : _pres$errors3.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(preres.errors, pres.errors) : [];

  if (pres.status !== Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(pctx.index !== index, pctx, errors);
  }

  const [postctx, postres] = post(pctx);
  return postres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(postctx, pres.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(postctx.index !== index, postctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, postres.errors));
});
/**
 * A parser which executes a content parser zero or more times until an
 * end parser is successful. This parser results in an array of all of
 * the successful content parser results. The end parser is executed
 * *first*, so the results of the two parsers will not overlap.
 *
 * If `p` fails before `end` succeeds but after prior executions of `p`
 * have consumed input, this parser will fail fatally.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} end The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @returns {Parser} A parser which will execute `p` zero or more times
 *     until `end` succeeds.
 */

const manyTill = (p, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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
 * @param {...(Parser|function(...*):*)} args An array of parsers to be
 *     executed one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of this parser. A single function
 *     must be present and it must be the last parameter; all other
 *     parameters must be parsers.
 * @returns {Parser} A parser that will execute its parsers in order,
 *     feed the results to its function, and result in the function's
 *     return value.
 */

const pipe = (...args) => {
  const ps = args.slice();
  const fn = ps.pop();
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParsers"])('pipe', ps);
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipe', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(ps.length + 1)));
    const index = ctx.index;
    const values = [];
    let context = ctx;
    let errors = [];

    for (const p of ps) {
      var _pres$errors4;

      const [pctx, pres] = p(context);
      context = pctx;
      errors = ((_pres$errors4 = pres.errors) === null || _pres$errors4 === void 0 ? void 0 : _pres$errors4.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

      if (pres.status !== Ok) {
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, errors);
      }

      values.push(pres.value);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, fn(...values));
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
 * by `op`. It results in the value obtained by left associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `op`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an error will be thrown.
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


const assocL = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that parses one or more applications of `p`, each separated
 * by `op`. It results in the value obtained by left associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * This parser will fail non-fatally if `p` doesn't succeed at least
 * once. Otherwise it can only fail fatally if `p` or `op` fails
 * fatally.
 *
 * If any result of `op` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` left associtively to the values
 *     that result from `p`.
 */

const assoc1L = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that parses zero or more applications of `p`, each separated
 * by `op`. It results in the value obtained by right associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `op`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an error will be thrown.
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

const assocR = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * A parser that parses one or more applications of `p`, each separated
 * by `op`. It results in the value obtained by right associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * This parser will fail non-fatally if `p` doesn't succeed at least
 * once. Otherwise it can only fail fatally if `p` or `op` fails
 * fatally.
 *
 * If any result of `op` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` right associtively to the values
 *     that result from `p`.
 */

const assoc1R = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
/*! exports provided: Status, context, parser, ok, fail, fatal, maybeFatal, parse, status, succeeded, success, failure, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
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
 * @param {ErrorList} [errors=[]] The errors associated with the
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
 * @param {ErrorList} [errors=[] The errors associated with the
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
 * @param {ErrorList} [errors=[] The errors associated with the
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
  const [reply, [_, result]] = Object(_util__WEBPACK_IMPORTED_MODULE_1__["twin"])(parser(context(input)));

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
/*! exports provided: alpha, any, anyOf, char, charI, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, satisfyM, upper, failNormally, failFatally, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringI, alt, def, empty, not, opt, peek, andThenB, applyB, attempt, attemptM, betweenB, blockB, chainB, label, leftB, manyTillB, pipeB, repeatB, rightB, sequenceB, compact, fifth, first, fourth, join, nth, second, third, value, always, andThen, apply, chain, map, orElse, assoc1L, assoc1R, assocL, assocR, between, block, left, many, many1, manyTill, pipe, repeat, right, sepBy, sepBy1, sepEndBy, sepEndBy1, seq, skip, skipMany, skipMany1, Status, fail, failure, fatal, maybeFatal, ok, parse, parser, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["alt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "def", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["def"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["opt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["peek"]; });

/* harmony import */ var _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combinators/backtracking */ "./src/combinators/backtracking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "andThenB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["andThenB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["applyB"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["compact"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["seq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skipMany"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skipMany1"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fail", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["fail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["failure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fatal", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["fatal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeFatal", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["maybeFatal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["ok"]; });

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
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  return fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx);
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
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(ch => c === ch)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].char(c));
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
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(ch => c.toLowerCase() === ch.toLowerCase())(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].charI(c));
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
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(message));
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

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].range(s, e));
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
 *
 * @type {Parser}
 */

const eof = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].eof);
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
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].anyOf(arr));
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
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].noneOf(arr)) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII digit.
 *
 * @type {Parser}
 */

const digit = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].digit);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 *
 * @type {Parser}
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].hex);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 *
 * @type {Parser}
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= '0' && c <= '7';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].octal);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII letter.
 *
 * @type {Parser}
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].letter);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII alphanumeric character.
 *
 * @type {Parser}
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].alpha);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII uppercase letter.
 *
 * @type {Parser}
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].upper);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII lowercase letter.
 *
 * @type {Parser}
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(charParser(fn)(ctx));
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
 * A parser that fails without consuming input, setting the generic
 * error message to whatever is passed in.
 *
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const failNormally = msg => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('failNormally', msg);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(msg));
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
  return match ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, match[0], index + Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringToView"])(match[0]).byteLength) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx);
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

  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(regex)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].regex(regex));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 *
 * @type {Parser}
 */

const letterU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(reLetter)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letterU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 *
 * @type {Parser}
 */

const alphaU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(reAlpha)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alphaU);
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
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(reUpper)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upperU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 *
 * @type {Parser}
 */

const lowerU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(reLower)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lowerU);
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
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(reSpace)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].space);
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
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(reUspace)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaceU);
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
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(rpctx, null);
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
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(rpctx, null);
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
  return rpres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(rpctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1);
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
 *
 * @type {Parser}
 */

const newline = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(reNewline)(ctx));
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
 *
 * @type {Parser}
 */

const newlineU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(regexParser(reUnewline)(ctx));
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
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(stringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str === chars)(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].string(str));
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
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(stringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str.toLowerCase() === chars.toLowerCase())(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].stringI(str));
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
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, width, view), index + width);
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
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(stringParser(n, () => true)(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anyString(n));
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: encoder, decoder, range, enumerate, viewToString, stringToView, charLength, nextCharWidth, nextChar, nextChars, quote, twin, commaSeparate, track, ordinal, wordinal, stringify, articlify */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordinal", function() { return wordinal; });
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
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL3NlcXVlbmNlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9lcnJvci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL21lc3NhZ2VzLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL2NoYXIuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvbWlzYy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9yZWdleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiZm9ybWF0dGVyIiwidHlwZSIsInZhbHVlIiwic3RyaW5naWZ5IiwiY2hhckZvcm1hdHRlciIsImZuRm9ybWF0dGVyIiwiZ2VuRm9ybWF0dGVyIiwic3RyRm9ybWF0dGVyIiwiYXJyRm9ybWF0dGVyIiwic3RyQXJyRm9ybWF0dGVyIiwic3RyUmVnRm9ybXR0ZXIiLCJudW1Gb3JtYXR0ZXIiLCJwYXJGb3JtYXR0ZXIiLCJhcmdGb3JtYXR0ZXIiLCJvcmRlciIsIm11bHRpcGxlIiwid29yZGluYWwiLCJhcmdDaGFyRm9ybWF0dGVyIiwiYXJnRm5Gb3JtYXR0ZXIiLCJhcmdHZW5Gb3JtYXR0ZXIiLCJhcmdOdW1Gb3JtYXR0ZXIiLCJhcmdQYXJGb3JtYXR0ZXIiLCJhcmdTdHJGb3JtYXR0ZXIiLCJvcmRGb3JtYXR0ZXIiLCJvcmQiLCJvcmRDaGFyRm9ybWF0dGVyIiwib3JkRm5Gb3JtYXR0ZXIiLCJvcmROdW1Gb3JtYXR0ZXIiLCJvcmRQYXJGb3JtYXR0ZXIiLCJvcmRTdHJGb3JtYXR0ZXIiLCJmYWlsQXNzZXJ0IiwibmFtZSIsIkVycm9yIiwiYXNzZXJ0Q2hhciIsImNoYXJMZW5ndGgiLCJhc3NlcnRGdW5jdGlvbiIsInBhcnNlciIsImNyZWF0ZWQiLCJhc3NlcnRHZW5GdW5jdGlvbiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImFzc2VydFN0cmluZyIsImFzc2VydEFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiYXNzZXJ0U3RyaW5nT3JBcnJheSIsImV2ZXJ5IiwiYyIsImFzc2VydFN0cmluZ09yUmVnRXhwIiwiYXNzZXJ0TnVtYmVyIiwiYXNzZXJ0UGFyc2VyIiwiYXNzZXJ0UGFyc2VycyIsInZhbHVlcyIsImkiLCJlbnVtZXJhdGUiLCJvcmRpbmFsIiwiT2siLCJGYWlsIiwiRmF0YWwiLCJTdGF0dXMiLCJhbHQiLCJhcmdzIiwicHMiLCJtIiwibGVuZ3RoIiwicG9wIiwiY3R4IiwiaGFzTSIsIkFTU0VSVCIsImZvckVhY2giLCJwIiwiZXJyb3JzIiwiZXhwZWN0ZWQiLCJwcmVwIiwicGN0eCIsInByZXMiLCJ0d2luIiwic3RhdHVzIiwibWVyZ2UiLCJmYXRhbCIsImZhaWwiLCJvcHQiLCJyZXBseSIsIm9rIiwiZGVmIiwieCIsInBlZWsiLCJpbmRleCIsImNvbXBvdW5kIiwibmVzdGVkIiwiZW1wdHkiLCJub3QiLCJ1bmRlZmluZWQiLCJwYXNzIiwicmVzdWx0IiwibGFiZWwiLCJtc2ciLCJhdHRlbXB0IiwiZXJyIiwiYXR0ZW1wdE0iLCJFcnJvclR5cGUiLCJOZXN0ZWQiLCJzZXF1ZW5jZUIiLCJjb250ZXh0IiwicHVzaCIsImNoYWluQiIsImZuIiwicSIsInFyZXAiLCJxY3R4IiwicXJlcyIsImFwcGx5QiIsImxlZnRCIiwicmlnaHRCIiwiYW5kVGhlbkIiLCJyZXBlYXRCIiwibiIsIl8iLCJyYW5nZSIsIm1hbnlUaWxsQiIsImVuZCIsImVuZHJlcCIsImVuZGN0eCIsImVuZHJlcyIsImJsb2NrQiIsImdlbkZuIiwiZ2VuIiwibmV4dFZhbHVlIiwiZG9uZSIsIm5leHQiLCJ2IiwicGlwZUIiLCJzbGljZSIsImJldHdlZW5CIiwicHJlIiwicG9zdCIsInByZXJlcCIsInByZWN0eCIsInByZXJlcyIsInBvc3RjdHgiLCJwb3N0cmVzIiwiam9pbiIsImNvbXBhY3QiLCJmaWx0ZXIiLCJudGgiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJhbHdheXMiLCJtYXAiLCJhcHBseSIsIm1heWJlRmF0YWwiLCJjaGFpbiIsIm9yRWxzZSIsImFuZFRoZW4iLCJsb29wTWVzc2FnZSIsInNlcSIsImxlZnQiLCJyaWdodCIsImJsb2NrIiwiZyIsIm1hbnkiLCJ2aWV3IiwiYnl0ZUxlbmd0aCIsIm1hbnkxIiwic2tpcCIsInNraXBNYW55Iiwic2tpcE1hbnkxIiwic2VwQnkiLCJzZXAiLCJzZXByZXAiLCJzZXBjdHgiLCJzZXByZXMiLCJUeXBlRXJyb3IiLCJzZXBCeTEiLCJzZXBFbmRCeSIsInNlcEVuZEJ5MSIsInJlcGVhdCIsImJldHdlZW4iLCJtYW55VGlsbCIsInBpcGUiLCJvcEZvcm1hdHRlciIsImFzc29jTCIsIm9wIiwib3BzIiwib3ByZXAiLCJvcGN0eCIsIm9wcmVzIiwiYXNzb2MxTCIsImFzc29jUiIsImFzc29jMVIiLCJpc1R5cGVkQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJpbnB1dCIsIm1lc3NhZ2UiLCJzdHJpbmdUb1ZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsIkFycmF5QnVmZmVyIiwidHJhY2siLCJ0ZXN0IiwicGFyc2UiLCJzdWNjZWVkZWQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsImZvcm1hdEVycm9ycyIsInJ1biIsInRhYiIsInplcm9XaWR0aCIsIkV4cGVjdGVkIiwiVW5leHBlY3RlZCIsIkdlbmVyaWMiLCJDb21wb3VuZCIsIk90aGVyIiwidW5leHBlY3RlZCIsImdlbmVyaWMiLCJvdGhlciIsImVycm9yczEiLCJlcnJvcnMyIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsInNob3ciLCJtYXhXaWR0aCIsImluZGVudCIsInNwIiwibmV3Q29sbm8iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwiZm9ybWF0TmVzdGVkIiwibmVzdGVkcyIsIm5lc3RlZE1zZ3MiLCJmb3JtYXQiLCJlbnN1cmVOZXdsaW5lcyIsInRleHQiLCJjb3VudCIsInJhd0xpbmUiLCJ2aWV3VG9TdHJpbmciLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmaW5kIiwiZXJyb3IiLCJjb21tYVNlcGFyYXRlIiwidW5leHBNc2ciLCJleHBNc2ciLCJnZW5lcmljTXNnIiwibmVzdGVkTXNnIiwiY29tcG91bmRNc2ciLCJ1bmtub3duTXNnIiwiZW9mTXNnIiwiZ2V0UG9zaXRpb24iLCJjb2x1bW4iLCJzdHJpbmdzIiwiYWxwaGEiLCJhbHBoYVUiLCJhbnkiLCJhbnlPZiIsImFycmF5IiwiYW55U3RyaW5nIiwiY2hhciIsInF1b3RlIiwiY2hhckkiLCJkaWdpdCIsImVvZiIsImhleCIsImxldHRlciIsImxldHRlclUiLCJsb3dlciIsImxvd2VyVSIsIm5ld2xpbmVVIiwibm9uZU9mIiwib2N0YWwiLCJyZWdleCIsInJlIiwic3BhY2UiLCJzcGFjZXMiLCJzcGFjZXMxIiwic3BhY2VzVSIsInNwYWNlczFVIiwic3BhY2VVIiwic3RyaW5nIiwic3RyIiwic3RyaW5nSSIsInVwcGVyIiwidXBwZXJVIiwiZXhwZWN0ZWRzIiwiY2hhclBhcnNlciIsIndpZHRoIiwibmV4dENoYXIiLCJjcHJlcCIsImNwY3R4IiwiY3ByZXMiLCJjaCIsInRvTG93ZXJDYXNlIiwic2F0aXNmeSIsInNhdGlzZnlNIiwicyIsImUiLCJjcyIsImFyciIsImluY2x1ZGVzIiwiZmFpbE5vcm1hbGx5IiwiZmFpbEZhdGFsbHkiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJyZWdleFBhcnNlciIsInJlc3QiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsInJlYW5jaG9yIiwibmV3U291cmNlIiwicnByZXAiLCJycGN0eCIsInJwcmVzIiwic3RyaW5nUGFyc2VyIiwibmV4dENoYXJzIiwic3ByZXAiLCJzcGN0eCIsInNwcmVzIiwiY2hhcnMiLCJhbGwiLCJlbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJzdGVwIiwiaW5jbHVzaXZlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsIml0ZXJhYmxlIiwiaXRlcmF0b3IiLCJTeW1ib2wiLCJieXRlcyIsImZyb20iLCJkZWNvZGUiLCJlbmNvZGUiLCJ2aWV3TGVuZ3RoIiwibWVzc2FnZXMiLCJtc2dzIiwibGFzdCIsInByb3AiLCJ0cmFja2VkIiwiV2Vha1NldCIsImRlZmluZVByb3BlcnR5IiwiYWRkIiwiaGFzIiwiYmluZCIsInN1ZmZpeGVzIiwibnVtcyIsIm9uZXMiLCJ0ZW5zIiwiZ3JvdXBzIiwiTnVtYmVyIiwiTUFYX1NBRkVfSU5URUdFUiIsIm1hZyIsImxvZzEwIiwiZiIsIm11bHQiLCJudW0iLCJyZW0iLCJkZXNjcmlwdGlvbiIsIkpTT04iLCJhcnRpY2xpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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ckIsQ0FBakM7QUFDQSxRQUFNO0FBQUVjLFNBQUY7QUFBUzdJO0FBQVQsTUFBZTBJLFlBQVksQ0FBQ0QsUUFBRCxFQUFXWCxJQUFYLENBQWpDO0FBRUEsU0FBTztBQUFFQSxRQUFJLEVBQUVMLE1BQVI7QUFBZ0JtRCxVQUFNLEVBQUUvQjtBQUF4QixHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDOXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBa0JBO0FBSUE7Q0FzQkE7QUFDQTs7QUFFQTtBQVFBO0FBZ0JBO0FBV0E7Q0FnQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzdIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sTUFBTWdDLE9BQU8sR0FBRztBQUNyQkMsT0FBSyxFQUFFLDJCQURjO0FBRXJCQyxRQUFNLEVBQUUsa0NBRmE7QUFHckJDLEtBQUcsRUFBRSxlQUhnQjtBQUlyQkMsT0FBSyxFQUFFQyxLQUFLLElBQUksWUFBWWYsMkRBQWEsQ0FBQ2UsS0FBSyxDQUFDaEosR0FBTixDQUFVeEcsQ0FBQyxJQUFLLElBQUdBLENBQUUsR0FBckIsQ0FBRCxDQUpwQjtBQUtyQnlQLFdBQVMsRUFBRXBMLENBQUMsSUFBSyxlQUFjQSxDQUFFLGFBTFo7QUFNckJxTCxNQUFJLEVBQUUxUCxDQUFDLElBQUkyUCxtREFBSyxDQUFDM1AsQ0FBRCxDQU5LO0FBT3JCNFAsT0FBSyxFQUFFNVAsQ0FBQyxJQUFJMlAsbURBQUssQ0FBQzNQLENBQUQsQ0FQSTtBQVFyQjZQLE9BQUssRUFBRSxTQVJjO0FBU3JCQyxLQUFHLEVBQUUsY0FUZ0I7QUFVckJDLEtBQUcsRUFBRSxxQkFWZ0I7QUFXckJDLFFBQU0sRUFBRSxVQVhhO0FBWXJCQyxTQUFPLEVBQUUsa0JBWlk7QUFhckJDLE9BQUssRUFBRSxvQkFiYztBQWNyQkMsUUFBTSxFQUFFLDRCQWRhO0FBZXJCMUUsU0FBTyxFQUFFLFdBZlk7QUFnQnJCMkUsVUFBUSxFQUFFLG1CQWhCVztBQWlCckJDLFFBQU0sRUFBRWIsS0FBSyxJQUFJLGFBQWFmLDJEQUFhLENBQUNlLEtBQUssQ0FBQ2hKLEdBQU4sQ0FBVXhHLENBQUMsSUFBSyxJQUFHQSxDQUFFLEdBQXJCLENBQUQsQ0FqQnRCO0FBa0JyQnNRLE9BQUssRUFBRSxnQkFsQmM7QUFtQnJCL0wsT0FBSyxFQUFFLENBQUN1SCxLQUFELEVBQVFySCxHQUFSLEtBQWlCLHdCQUF1QnFILEtBQU0sVUFBU3JILEdBQUksR0FuQjdDO0FBb0JyQjhMLE9BQUssRUFBRUMsRUFBRSxJQUFLLHFCQUFvQkEsRUFBRyxFQXBCaEI7QUFxQnJCQyxPQUFLLEVBQUUsd0JBckJjO0FBc0JyQkMsUUFBTSxFQUFFLG9DQXRCYTtBQXVCckJDLFNBQU8sRUFBRSxtQ0F2Qlk7QUF3QnJCQyxTQUFPLEVBQUUsNENBeEJZO0FBeUJyQkMsVUFBUSxFQUFFLDJDQXpCVztBQTBCckJDLFFBQU0sRUFBRSxnQ0ExQmE7QUEyQnJCQyxRQUFNLEVBQUVDLEdBQUcsSUFBSXJCLG1EQUFLLENBQUNxQixHQUFELENBM0JDO0FBNEJyQkMsU0FBTyxFQUFFRCxHQUFHLElBQUlyQixtREFBSyxDQUFDcUIsR0FBRCxDQTVCQTtBQTZCckJFLE9BQUssRUFBRSxxQkE3QmM7QUE4QnJCQyxRQUFNLEVBQUU7QUE5QmEsQ0FBaEI7QUFpQ0EsTUFBTUMsU0FBUyxHQUFHO0FBQ3ZCaEMsT0FBSyxFQUFFM04sdURBQVEsQ0FBQzBOLE9BQU8sQ0FBQ0MsS0FBVCxDQURRO0FBRXZCQyxRQUFNLEVBQUU1Tix1REFBUSxDQUFDME4sT0FBTyxDQUFDRSxNQUFULENBRk87QUFHdkJDLEtBQUcsRUFBRTdOLHVEQUFRLENBQUMwTixPQUFPLENBQUNHLEdBQVQsQ0FIVTtBQUl2QkMsT0FBSyxFQUFFQyxLQUFLLElBQUkvTix1REFBUSxDQUFDME4sT0FBTyxDQUFDSSxLQUFSLENBQWNDLEtBQWQsQ0FBRCxDQUpEO0FBS3ZCQyxXQUFTLEVBQUVwTCxDQUFDLElBQUk1Qyx1REFBUSxDQUFDME4sT0FBTyxDQUFDTSxTQUFSLENBQWtCcEwsQ0FBbEIsQ0FBRCxDQUxEO0FBTXZCcUwsTUFBSSxFQUFFMVAsQ0FBQyxJQUFJeUIsdURBQVEsQ0FBQzBOLE9BQU8sQ0FBQ08sSUFBUixDQUFhMVAsQ0FBYixDQUFELENBTkk7QUFPdkI0UCxPQUFLLEVBQUU1UCxDQUFDLElBQUl5Qix1REFBUSxDQUFDME4sT0FBTyxDQUFDUyxLQUFSLENBQWM1UCxDQUFkLENBQUQsQ0FQRztBQVF2QjZQLE9BQUssRUFBRXBPLHVEQUFRLENBQUMwTixPQUFPLENBQUNVLEtBQVQsQ0FSUTtBQVN2QkMsS0FBRyxFQUFFck8sdURBQVEsQ0FBQzBOLE9BQU8sQ0FBQ1csR0FBVCxDQVRVO0FBVXZCQyxLQUFHLEVBQUV0Tyx1REFBUSxDQUFDME4sT0FBTyxDQUFDWSxHQUFULENBVlU7QUFXdkJDLFFBQU0sRUFBRXZPLHVEQUFRLENBQUMwTixPQUFPLENBQUNhLE1BQVQsQ0FYTztBQVl2QkMsU0FBTyxFQUFFeE8sdURBQVEsQ0FBQzBOLE9BQU8sQ0FBQ2MsT0FBVCxDQVpNO0FBYXZCQyxPQUFLLEVBQUV6Tyx1REFBUSxDQUFDME4sT0FBTyxDQUFDZSxLQUFULENBYlE7QUFjdkJDLFFBQU0sRUFBRTFPLHVEQUFRLENBQUMwTixPQUFPLENBQUNnQixNQUFULENBZE87QUFldkIxRSxTQUFPLEVBQUVoSyx1REFBUSxDQUFDME4sT0FBTyxDQUFDMUQsT0FBVCxDQWZNO0FBZ0J2QjJFLFVBQVEsRUFBRTNPLHVEQUFRLENBQUMwTixPQUFPLENBQUNpQixRQUFULENBaEJLO0FBaUJ2QkMsUUFBTSxFQUFFYixLQUFLLElBQUkvTix1REFBUSxDQUFDME4sT0FBTyxDQUFDa0IsTUFBUixDQUFlYixLQUFmLENBQUQsQ0FqQkY7QUFrQnZCYyxPQUFLLEVBQUU3Tyx1REFBUSxDQUFDME4sT0FBTyxDQUFDbUIsS0FBVCxDQWxCUTtBQW1CdkIvTCxPQUFLLEVBQUUsQ0FBQ3VILEtBQUQsRUFBUXJILEdBQVIsS0FBZ0JoRCx1REFBUSxDQUFDME4sT0FBTyxDQUFDNUssS0FBUixDQUFjdUgsS0FBZCxFQUFxQnJILEdBQXJCLENBQUQsQ0FuQlI7QUFvQnZCOEwsT0FBSyxFQUFFQyxFQUFFLElBQUkvTyx1REFBUSxDQUFDME4sT0FBTyxDQUFDb0IsS0FBUixDQUFjQyxFQUFkLENBQUQsQ0FwQkU7QUFxQnZCQyxPQUFLLEVBQUVoUCx1REFBUSxDQUFDME4sT0FBTyxDQUFDc0IsS0FBVCxDQXJCUTtBQXNCdkJDLFFBQU0sRUFBRWpQLHVEQUFRLENBQUMwTixPQUFPLENBQUN1QixNQUFULENBdEJPO0FBdUJ2QkMsU0FBTyxFQUFFbFAsdURBQVEsQ0FBQzBOLE9BQU8sQ0FBQ3dCLE9BQVQsQ0F2Qk07QUF3QnZCQyxTQUFPLEVBQUVuUCx1REFBUSxDQUFDME4sT0FBTyxDQUFDeUIsT0FBVCxDQXhCTTtBQXlCdkJDLFVBQVEsRUFBRXBQLHVEQUFRLENBQUMwTixPQUFPLENBQUMwQixRQUFULENBekJLO0FBMEJ2QkMsUUFBTSxFQUFFclAsdURBQVEsQ0FBQzBOLE9BQU8sQ0FBQzJCLE1BQVQsQ0ExQk87QUEyQnZCQyxRQUFNLEVBQUVDLEdBQUcsSUFBSXZQLHVEQUFRLENBQUMwTixPQUFPLENBQUM0QixNQUFSLENBQWVDLEdBQWYsQ0FBRCxDQTNCQTtBQTRCdkJDLFNBQU8sRUFBRUQsR0FBRyxJQUFJdlAsdURBQVEsQ0FBQzBOLE9BQU8sQ0FBQzhCLE9BQVIsQ0FBZ0JELEdBQWhCLENBQUQsQ0E1QkQ7QUE2QnZCRSxPQUFLLEVBQUV6UCx1REFBUSxDQUFDME4sT0FBTyxDQUFDK0IsS0FBVCxDQTdCUTtBQThCdkJDLFFBQU0sRUFBRTFQLHVEQUFRLENBQUMwTixPQUFPLENBQUNnQyxNQUFUO0FBOUJPLENBQWxCLEM7Ozs7Ozs7Ozs7OztBQ3pDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBRTFRO0FBQUYsSUFBU0csa0RBQWY7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNeVEsVUFBVSxHQUFHMU4sRUFBRSxJQUFJeEUsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNyQyxRQUFNO0FBQUVxQixTQUFGO0FBQVM2RTtBQUFULE1BQWtCbEcsR0FBeEI7QUFDQSxNQUFJcUIsS0FBSyxJQUFJNkUsSUFBSSxDQUFDQyxVQUFsQixFQUE4QixPQUFPckYsd0RBQUksQ0FBQ2QsR0FBRCxDQUFYO0FBRTlCLFFBQU07QUFBRW1RLFNBQUY7QUFBU3BNO0FBQVQsTUFBa0JxTSw0REFBUSxDQUFDL08sS0FBRCxFQUFRNkUsSUFBUixDQUFoQztBQUNBLFNBQU8xRCxFQUFFLENBQUN1QixJQUFELENBQUYsR0FBVzlDLHNEQUFFLENBQUNqQixHQUFELEVBQU0rRCxJQUFOLEVBQVkxQyxLQUFLLEdBQUc4TyxLQUFwQixDQUFiLEdBQTBDclAsd0RBQUksQ0FBQ2QsR0FBRCxDQUFyRDtBQUNELENBTjhCLENBQS9CO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU11TyxJQUFJLEdBQUcxUCxDQUFDLElBQUliLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDckNFLE9BQU0sSUFBSXJDLGdFQUFVLENBQUMsTUFBRCxFQUFTZ0IsQ0FBVCxDQUFwQjtBQUVBLFFBQU0sQ0FBQ3dSLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQjdQLHdEQUFJLENBQUN3UCxVQUFVLENBQUNNLEVBQUUsSUFBSTNSLENBQUMsS0FBSzJSLEVBQWIsQ0FBVixDQUEyQnhRLEdBQTNCLENBQUQsQ0FBcEM7QUFDQSxTQUFPdVEsS0FBSyxDQUFDNVAsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCK1EsS0FBdEIsR0FBOEJ2UCx3REFBSSxDQUFDd1AsS0FBRCxFQUFRTCx5REFBUyxDQUFDMUIsSUFBVixDQUFlMVAsQ0FBZixDQUFSLENBQXpDO0FBQ0QsQ0FMOEIsQ0FBeEI7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU00UCxLQUFLLEdBQUc1UCxDQUFDLElBQUliLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDdENFLE9BQU0sSUFBSXJDLGdFQUFVLENBQUMsT0FBRCxFQUFVZ0IsQ0FBVixDQUFwQjtBQUVBLFFBQU0sQ0FBQ3dSLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQjdQLHdEQUFJLENBQUN3UCxVQUFVLENBQzdDTSxFQUFFLElBQUkzUixDQUFDLENBQUM0UixXQUFGLE9BQW9CRCxFQUFFLENBQUNDLFdBQUgsRUFEbUIsQ0FBVixDQUVuQ3pRLEdBRm1DLENBQUQsQ0FBcEM7QUFHQSxTQUFPdVEsS0FBSyxDQUFDNVAsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCK1EsS0FBdEIsR0FBOEJ2UCx3REFBSSxDQUFDd1AsS0FBRCxFQUFRTCx5REFBUyxDQUFDeEIsS0FBVixDQUFnQjVQLENBQWhCLENBQVIsQ0FBekM7QUFDRCxDQVArQixDQUF6QjtBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNNlIsT0FBTyxHQUFHbE8sRUFBRSxJQUFJeEUsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUN6Q0UsT0FBTSxJQUFJbkMsb0VBQWMsQ0FBQyxTQUFELEVBQVl5RSxFQUFaLENBQXhCO0FBQ0EsU0FBTzBOLFVBQVUsQ0FBQzFOLEVBQUQsQ0FBVixDQUFleEMsR0FBZixDQUFQO0FBQ0QsQ0FIa0MsQ0FBNUI7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU0yUSxRQUFRLEdBQUcsQ0FBQ25PLEVBQUQsRUFBS2tHLE9BQUwsS0FBaUIxSywwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQ3JERSxPQUFNLElBQUluQyxvRUFBYyxDQUFDLFVBQUQsRUFBYXlFLEVBQWIsRUFBaUJsRixvRUFBYyxDQUFDLEtBQUQsQ0FBL0IsQ0FBeEI7QUFDQTRDLE9BQU0sSUFBSTNCLGtFQUFZLENBQUMsVUFBRCxFQUFhbUssT0FBYixFQUFzQmpMLHFFQUFlLENBQUMsS0FBRCxDQUFyQyxDQUF0QjtBQUVBLFFBQU0sQ0FBQzRTLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQjdQLHdEQUFJLENBQUN3UCxVQUFVLENBQUMxTixFQUFELENBQVYsQ0FBZXhDLEdBQWYsQ0FBRCxDQUFwQztBQUNBLFNBQU91USxLQUFLLENBQUM1UCxNQUFOLEtBQWlCckIsRUFBakIsR0FBc0IrUSxLQUF0QixHQUE4QnZQLHdEQUFJLENBQUN3UCxLQUFELEVBQVFoUSw2REFBUSxDQUFDb0ksT0FBRCxDQUFoQixDQUF6QztBQUNELENBTjhDLENBQXhDO0FBUVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXRGLEtBQUssR0FBRyxDQUFDd04sQ0FBRCxFQUFJQyxDQUFKLEtBQVU3UywwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQzNDRSxPQUFNLElBQUlyQyxnRUFBVSxDQUFDLE9BQUQsRUFBVStTLENBQVYsRUFBYXZULHNFQUFnQixDQUFDLEtBQUQsQ0FBN0IsQ0FBcEI7QUFDQTZDLE9BQU0sSUFBSXJDLGdFQUFVLENBQUMsT0FBRCxFQUFVZ1QsQ0FBVixFQUFheFQsc0VBQWdCLENBQUMsS0FBRCxDQUE3QixDQUFwQjs7QUFFQSxRQUFNbUYsRUFBRSxHQUFHM0QsQ0FBQyxJQUFJQSxDQUFDLElBQUkrUixDQUFMLElBQVUvUixDQUFDLElBQUlnUyxDQUEvQjs7QUFDQSxRQUFNLENBQUNSLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQjdQLHdEQUFJLENBQUN3UCxVQUFVLENBQUMxTixFQUFELENBQVYsQ0FBZXhDLEdBQWYsQ0FBRCxDQUFwQztBQUNBLFNBQU91USxLQUFLLENBQUM1UCxNQUFOLEtBQWlCckIsRUFBakIsR0FBc0IrUSxLQUF0QixHQUE4QnZQLHdEQUFJLENBQUN3UCxLQUFELEVBQVFMLHlEQUFTLENBQUM3TSxLQUFWLENBQWdCd04sQ0FBaEIsRUFBbUJDLENBQW5CLENBQVIsQ0FBekM7QUFDRCxDQVBvQyxDQUE5QjtBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNMUMsR0FBRyxHQUFHblEsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUMvQixRQUFNO0FBQUVxQixTQUFGO0FBQVM2RTtBQUFULE1BQWtCbEcsR0FBeEI7QUFDQSxNQUFJcUIsS0FBSyxJQUFJNkUsSUFBSSxDQUFDQyxVQUFsQixFQUE4QixPQUFPckYsd0RBQUksQ0FBQ2QsR0FBRCxFQUFNaVEseURBQVMsQ0FBQzlCLEdBQWhCLENBQVg7QUFFOUIsUUFBTTtBQUFFZ0MsU0FBRjtBQUFTcE07QUFBVCxNQUFrQnFNLDREQUFRLENBQUMvTyxLQUFELEVBQVE2RSxJQUFSLENBQWhDO0FBQ0EsU0FBT2pGLHNEQUFFLENBQUNqQixHQUFELEVBQU0rRCxJQUFOLEVBQVkxQyxLQUFLLEdBQUc4TyxLQUFwQixDQUFUO0FBQ0QsQ0FOd0IsQ0FBbEI7QUFRUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNeEIsR0FBRyxHQUFHM1EsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUMvQixRQUFNO0FBQUVxQixTQUFGO0FBQVM2RTtBQUFULE1BQWtCbEcsR0FBeEI7QUFDQSxTQUFPcUIsS0FBSyxJQUFJNkUsSUFBSSxDQUFDQyxVQUFkLEdBQTJCbEYsc0RBQUUsQ0FBQ2pCLEdBQUQsRUFBTSxJQUFOLENBQTdCLEdBQTJDYyx3REFBSSxDQUFDZCxHQUFELEVBQU1pUSx5REFBUyxDQUFDdEIsR0FBaEIsQ0FBdEQ7QUFDRCxDQUh3QixDQUFsQjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNUCxLQUFLLEdBQUcwQyxFQUFFLElBQUk5UywwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQ3ZDRSxPQUFNLElBQUl2Qix5RUFBbUIsQ0FBQyxPQUFELEVBQVVtUyxFQUFWLENBQTdCO0FBRUEsUUFBTTtBQUFFelAsU0FBRjtBQUFTNkU7QUFBVCxNQUFrQmxHLEdBQXhCO0FBQ0EsUUFBTTtBQUFFbVEsU0FBRjtBQUFTcE07QUFBVCxNQUFrQnFNLDREQUFRLENBQUMvTyxLQUFELEVBQVE2RSxJQUFSLENBQWhDO0FBQ0EsUUFBTTZLLEdBQUcsR0FBRyxDQUFDLEdBQUdELEVBQUosQ0FBWjtBQUVBLFNBQU9DLEdBQUcsQ0FBQ0MsUUFBSixDQUFhak4sSUFBYixJQUNIOUMsc0RBQUUsQ0FBQ2pCLEdBQUQsRUFBTStELElBQU4sRUFBWTFDLEtBQUssR0FBRzhPLEtBQXBCLENBREMsR0FFSHJQLHdEQUFJLENBQUNkLEdBQUQsRUFBTWlRLHlEQUFTLENBQUM3QixLQUFWLENBQWdCMkMsR0FBaEIsQ0FBTixDQUZSO0FBR0QsQ0FWZ0MsQ0FBMUI7QUFZUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTTdCLE1BQU0sR0FBRzRCLEVBQUUsSUFBSTlTLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDeENFLE9BQU0sSUFBSXZCLHlFQUFtQixDQUFDLFFBQUQsRUFBV21TLEVBQVgsQ0FBN0I7QUFFQSxRQUFNO0FBQUV6UCxTQUFGO0FBQVM2RTtBQUFULE1BQWtCbEcsR0FBeEI7QUFDQSxRQUFNO0FBQUVtUSxTQUFGO0FBQVNwTTtBQUFULE1BQWtCcU0sNERBQVEsQ0FBQy9PLEtBQUQsRUFBUTZFLElBQVIsQ0FBaEM7QUFDQSxRQUFNNkssR0FBRyxHQUFHLENBQUMsR0FBR0QsRUFBSixDQUFaO0FBRUEsU0FBT0MsR0FBRyxDQUFDQyxRQUFKLENBQWFqTixJQUFiLElBQ0hqRCx3REFBSSxDQUFDZCxHQUFELEVBQU1pUSx5REFBUyxDQUFDZixNQUFWLENBQWlCNkIsR0FBakIsQ0FBTixDQURELEdBRUg5UCxzREFBRSxDQUFDakIsR0FBRCxFQUFNK0QsSUFBTixFQUFZMUMsS0FBSyxHQUFHOE8sS0FBcEIsQ0FGTjtBQUdELENBVmlDLENBQTNCO0FBWVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU16QixLQUFLLEdBQUcxUSwwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQ2pDLFFBQU13QyxFQUFFLEdBQUczRCxDQUFDLElBQUlBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUFqQzs7QUFDQSxRQUFNLENBQUN3UixLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEI3UCx3REFBSSxDQUFDd1AsVUFBVSxDQUFDMU4sRUFBRCxDQUFWLENBQWV4QyxHQUFmLENBQUQsQ0FBcEM7QUFDQSxTQUFPdVEsS0FBSyxDQUFDNVAsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCK1EsS0FBdEIsR0FBOEJ2UCx3REFBSSxDQUFDd1AsS0FBRCxFQUFRTCx5REFBUyxDQUFDdkIsS0FBbEIsQ0FBekM7QUFDRCxDQUowQixDQUFwQjtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNRSxHQUFHLEdBQUc1USwwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQy9CLFFBQU13QyxFQUFFLEdBQUczRCxDQUFDLElBQUlBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUFqQixJQUNYQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FETixJQUVYQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FGdEI7O0FBR0EsUUFBTSxDQUFDd1IsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCN1Asd0RBQUksQ0FBQ3dQLFVBQVUsQ0FBQzFOLEVBQUQsQ0FBVixDQUFleEMsR0FBZixDQUFELENBQXBDO0FBQ0EsU0FBT3VRLEtBQUssQ0FBQzVQLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQitRLEtBQXRCLEdBQThCdlAsd0RBQUksQ0FBQ3dQLEtBQUQsRUFBUUwseURBQVMsQ0FBQ3JCLEdBQWxCLENBQXpDO0FBQ0QsQ0FOd0IsQ0FBbEI7QUFRUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTU8sS0FBSyxHQUFHblIsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNqQyxRQUFNd0MsRUFBRSxHQUFHM0QsQ0FBQyxJQUFJQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FBakM7O0FBQ0EsUUFBTSxDQUFDd1IsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCN1Asd0RBQUksQ0FBQ3dQLFVBQVUsQ0FBQzFOLEVBQUQsQ0FBVixDQUFleEMsR0FBZixDQUFELENBQXBDO0FBQ0EsU0FBT3VRLEtBQUssQ0FBQzVQLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQitRLEtBQXRCLEdBQThCdlAsd0RBQUksQ0FBQ3dQLEtBQUQsRUFBUUwseURBQVMsQ0FBQ2QsS0FBbEIsQ0FBekM7QUFDRCxDQUowQixDQUFwQjtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNTixNQUFNLEdBQUc3USwwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQ2xDLFFBQU13QyxFQUFFLEdBQUczRCxDQUFDLElBQUlBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUFqQixJQUF3QkEsQ0FBQyxJQUFJLEdBQUwsSUFBWUEsQ0FBQyxJQUFJLEdBQXpEOztBQUNBLFFBQU0sQ0FBQ3dSLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQjdQLHdEQUFJLENBQUN3UCxVQUFVLENBQUMxTixFQUFELENBQVYsQ0FBZXhDLEdBQWYsQ0FBRCxDQUFwQztBQUNBLFNBQU91USxLQUFLLENBQUM1UCxNQUFOLEtBQWlCckIsRUFBakIsR0FBc0IrUSxLQUF0QixHQUE4QnZQLHdEQUFJLENBQUN3UCxLQUFELEVBQVFMLHlEQUFTLENBQUNwQixNQUFsQixDQUF6QztBQUNELENBSjJCLENBQXJCO0FBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1aLEtBQUssR0FBR2pRLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDakMsUUFBTXdDLEVBQUUsR0FBRzNELENBQUMsSUFBSUEsQ0FBQyxJQUFJLEdBQUwsSUFBWUEsQ0FBQyxJQUFJLEdBQWpCLElBQ1hBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUROLElBRVhBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUZ0Qjs7QUFHQSxRQUFNLENBQUN3UixLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEI3UCx3REFBSSxDQUFDd1AsVUFBVSxDQUFDMU4sRUFBRCxDQUFWLENBQWV4QyxHQUFmLENBQUQsQ0FBcEM7QUFDQSxTQUFPdVEsS0FBSyxDQUFDNVAsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCK1EsS0FBdEIsR0FBOEJ2UCx3REFBSSxDQUFDd1AsS0FBRCxFQUFRTCx5REFBUyxDQUFDaEMsS0FBbEIsQ0FBekM7QUFDRCxDQU4wQixDQUFwQjtBQVFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNOEIsS0FBSyxHQUFHL1IsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNqQyxRQUFNd0MsRUFBRSxHQUFHM0QsQ0FBQyxJQUFJQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FBakM7O0FBQ0EsUUFBTSxDQUFDd1IsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCN1Asd0RBQUksQ0FBQ3dQLFVBQVUsQ0FBQzFOLEVBQUQsQ0FBVixDQUFleEMsR0FBZixDQUFELENBQXBDO0FBQ0EsU0FBT3VRLEtBQUssQ0FBQzVQLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQitRLEtBQXRCLEdBQThCdlAsd0RBQUksQ0FBQ3dQLEtBQUQsRUFBUUwseURBQVMsQ0FBQ0YsS0FBbEIsQ0FBekM7QUFDRCxDQUowQixDQUFwQjtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNaEIsS0FBSyxHQUFHL1EsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNqQyxRQUFNd0MsRUFBRSxHQUFHM0QsQ0FBQyxJQUFJQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FBakM7O0FBQ0EsUUFBTSxDQUFDd1IsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCN1Asd0RBQUksQ0FBQ3dQLFVBQVUsQ0FBQzFOLEVBQUQsQ0FBVixDQUFleEMsR0FBZixDQUFELENBQXBDO0FBQ0EsU0FBT3VRLEtBQUssQ0FBQzVQLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQitRLEtBQXRCLEdBQThCdlAsd0RBQUksQ0FBQ3dQLEtBQUQsRUFBUUwseURBQVMsQ0FBQ2xCLEtBQWxCLENBQXpDO0FBQ0QsQ0FKMEIsQ0FBcEIsQzs7Ozs7Ozs7Ozs7O0FDdFRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNa0MsWUFBWSxHQUFHblAsR0FBRyxJQUFJOUQsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUMvQ0UsT0FBTSxJQUFJM0Isa0VBQVksQ0FBQyxjQUFELEVBQWlCdUQsR0FBakIsQ0FBdEI7QUFDQSxTQUFPaEIsd0RBQUksQ0FBQ2QsR0FBRCxFQUFNK0osNERBQU8sQ0FBQ2pJLEdBQUQsQ0FBYixDQUFYO0FBQ0QsQ0FId0MsQ0FBbEM7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTW9QLFdBQVcsR0FBR3BQLEdBQUcsSUFBSTlELDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDOUNFLE9BQU0sSUFBSTNCLGtFQUFZLENBQUMsYUFBRCxFQUFnQnVELEdBQWhCLENBQXRCO0FBQ0EsU0FBT2pCLHlEQUFLLENBQUNiLEdBQUQsRUFBTStKLDREQUFPLENBQUNqSSxHQUFELENBQWIsQ0FBWjtBQUNELENBSHVDLENBQWpDLEM7Ozs7Ozs7Ozs7OztBQ2pDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFeEM7QUFBRixJQUFTRyxrREFBZjtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUNBLE1BQU0wUixRQUFRLEdBQUcsa0JBQWpCO0FBQ0E7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLDRCQUFoQjtBQUNBOztBQUNBLE1BQU1DLE9BQU8sR0FBRyw0QkFBaEI7QUFDQTs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsaUJBQWhCO0FBQ0E7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLHFCQUFoQjtBQUNBOztBQUNBLE1BQU1DLFFBQVEsR0FBRyw0QkFBakI7QUFDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsYUFBakI7QUFDQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsb0JBQWxCO0FBQ0E7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLGFBQWxCO0FBQ0E7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLG9CQUFuQjtBQUNBOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxpQkFBbEI7QUFDQTs7QUFDQSxNQUFNQyxVQUFVLEdBQUcscUNBQW5CO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFdBQVcsR0FBRzFDLEVBQUUsSUFBSXJSLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDdEMsUUFBTTtBQUFFcUIsU0FBRjtBQUFTNkU7QUFBVCxNQUFrQmxHLEdBQXhCO0FBQ0EsUUFBTWdTLElBQUksR0FBRy9FLGdFQUFZLENBQUM1TCxLQUFELEVBQVE2RSxJQUFJLENBQUNDLFVBQUwsR0FBa0I5RSxLQUExQixFQUFpQzZFLElBQWpDLENBQXpCO0FBRUEsUUFBTTZGLEtBQUssR0FBR2lHLElBQUksQ0FBQ2pHLEtBQUwsQ0FBV3NELEVBQVgsQ0FBZDtBQUNBLFNBQU90RCxLQUFLLEdBQ1I5SyxzREFBRSxDQUFDakIsR0FBRCxFQUFNK0wsS0FBSyxDQUFDLENBQUQsQ0FBWCxFQUFnQjFLLEtBQUssR0FBR3NILGdFQUFZLENBQUNvRCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQVosQ0FBdUI1RixVQUEvQyxDQURNLEdBRVJyRix3REFBSSxDQUFDZCxHQUFELENBRlI7QUFHRCxDQVIrQixDQUFoQztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTW9QLEtBQUssR0FBR0MsRUFBRSxJQUFJclIsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUN2Q0UsT0FBTSxJQUFJcEIsMEVBQW9CLENBQUMsT0FBRCxFQUFVdVEsRUFBVixDQUE5QixDQUR1QyxDQUd2Qzs7QUFDQSxNQUFJRCxLQUFLLEdBQUcsT0FBT0MsRUFBUCxLQUFjLFFBQWQsR0FBeUIsSUFBSTRDLE1BQUosQ0FBVzVDLEVBQVgsQ0FBekIsR0FBMENBLEVBQXRELENBSnVDLENBTXZDOztBQUNBLFFBQU07QUFBRTZDLFVBQUY7QUFBVUM7QUFBVixNQUFvQi9DLEtBQTFCO0FBQ0EsUUFBTWdELFFBQVEsR0FBR0YsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjLEdBQS9COztBQUNBLE1BQUlFLFFBQUosRUFBYztBQUNaLFVBQU1DLFNBQVMsR0FBRyxNQUFNSCxNQUF4QjtBQUNBOUMsU0FBSyxHQUFHLElBQUk2QyxNQUFKLENBQVdJLFNBQVgsRUFBc0JGLEtBQXRCLENBQVI7QUFDRDs7QUFFRCxRQUFNLENBQUNHLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQjlSLHdEQUFJLENBQUNxUixXQUFXLENBQUMzQyxLQUFELENBQVgsQ0FBbUJwUCxHQUFuQixDQUFELENBQXBDO0FBQ0EsU0FBT3dTLEtBQUssQ0FBQzdSLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQmdULEtBQXRCLEdBQThCeFIsd0RBQUksQ0FBQ3lSLEtBQUQsRUFBUXRDLHlEQUFTLENBQUNiLEtBQVYsQ0FBZ0JBLEtBQWhCLENBQVIsQ0FBekM7QUFDRCxDQWhCZ0MsQ0FBMUI7QUFrQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTU4sT0FBTyxHQUFHOVEsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNuQyxRQUFNLENBQUNzUyxLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEI5Uix3REFBSSxDQUFDcVIsV0FBVyxDQUFDWixRQUFELENBQVgsQ0FBc0JuUixHQUF0QixDQUFELENBQXBDO0FBQ0EsU0FBT3dTLEtBQUssQ0FBQzdSLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQmdULEtBQXRCLEdBQThCeFIsd0RBQUksQ0FBQ3lSLEtBQUQsRUFBUXRDLHlEQUFTLENBQUNuQixPQUFsQixDQUF6QztBQUNELENBSDRCLENBQXRCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTVosTUFBTSxHQUFHbFEsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNsQyxRQUFNLENBQUNzUyxLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEI5Uix3REFBSSxDQUFDcVIsV0FBVyxDQUFDWCxPQUFELENBQVgsQ0FBcUJwUixHQUFyQixDQUFELENBQXBDO0FBQ0EsU0FBT3dTLEtBQUssQ0FBQzdSLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQmdULEtBQXRCLEdBQThCeFIsd0RBQUksQ0FBQ3lSLEtBQUQsRUFBUXRDLHlEQUFTLENBQUMvQixNQUFsQixDQUF6QztBQUNELENBSDJCLENBQXJCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNOEIsTUFBTSxHQUFHaFMsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNsQyxRQUFNLENBQUNzUyxLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEI5Uix3REFBSSxDQUFDcVIsV0FBVyxDQUFDVixPQUFELENBQVgsQ0FBcUJyUixHQUFyQixDQUFELENBQXBDO0FBQ0EsU0FBT3dTLEtBQUssQ0FBQzdSLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQmdULEtBQXRCLEdBQThCeFIsd0RBQUksQ0FBQ3lSLEtBQUQsRUFBUXRDLHlEQUFTLENBQUNELE1BQWxCLENBQXpDO0FBQ0QsQ0FIMkIsQ0FBckI7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNaEIsTUFBTSxHQUFHaFIsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNsQyxRQUFNLENBQUNzUyxLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEI5Uix3REFBSSxDQUFDcVIsV0FBVyxDQUFDVCxPQUFELENBQVgsQ0FBcUJ0UixHQUFyQixDQUFELENBQXBDO0FBQ0EsU0FBT3dTLEtBQUssQ0FBQzdSLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQmdULEtBQXRCLEdBQThCeFIsd0RBQUksQ0FBQ3lSLEtBQUQsRUFBUXRDLHlEQUFTLENBQUNqQixNQUFsQixDQUF6QztBQUNELENBSDJCLENBQXJCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNTSxLQUFLLEdBQUd0UiwwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQ2pDLFFBQU0sQ0FBQ3NTLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQjlSLHdEQUFJLENBQUNxUixXQUFXLENBQUNSLE9BQUQsQ0FBWCxDQUFxQnZSLEdBQXJCLENBQUQsQ0FBcEM7QUFDQSxTQUFPd1MsS0FBSyxDQUFDN1IsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCZ1QsS0FBdEIsR0FBOEJ4Uix3REFBSSxDQUFDeVIsS0FBRCxFQUFRdEMseURBQVMsQ0FBQ1gsS0FBbEIsQ0FBekM7QUFDRCxDQUgwQixDQUFwQjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1LLE1BQU0sR0FBRzNSLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDbEMsUUFBTSxDQUFDc1MsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCOVIsd0RBQUksQ0FBQ3FSLFdBQVcsQ0FBQ1AsUUFBRCxDQUFYLENBQXNCeFIsR0FBdEIsQ0FBRCxDQUFwQztBQUNBLFNBQU93UyxLQUFLLENBQUM3UixNQUFOLEtBQWlCckIsRUFBakIsR0FBc0JnVCxLQUF0QixHQUE4QnhSLHdEQUFJLENBQUN5UixLQUFELEVBQVF0Qyx5REFBUyxDQUFDTixNQUFsQixDQUF6QztBQUNELENBSDJCLENBQXJCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1KLE1BQU0sR0FBR3ZSLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDbEMsUUFBTSxDQUFDdVMsS0FBRCxFQUFRcFAsQ0FBUixJQUFhNE8sV0FBVyxDQUFDTixRQUFELENBQVgsQ0FBc0J6UixHQUF0QixDQUFuQjtBQUNBLFNBQU9pQixzREFBRSxDQUFDc1IsS0FBRCxFQUFRLElBQVIsQ0FBVDtBQUNELENBSDJCLENBQXJCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU05QyxPQUFPLEdBQUd6UiwwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQ25DLFFBQU0sQ0FBQ3VTLEtBQUQsRUFBUXBQLENBQVIsSUFBYTRPLFdBQVcsQ0FBQ0wsU0FBRCxDQUFYLENBQXVCMVIsR0FBdkIsQ0FBbkI7QUFDQSxTQUFPaUIsc0RBQUUsQ0FBQ3NSLEtBQUQsRUFBUSxJQUFSLENBQVQ7QUFDRCxDQUg0QixDQUF0QjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTS9DLE9BQU8sR0FBR3hSLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDbkMsUUFBTSxDQUFDdVMsS0FBRCxFQUFRQyxLQUFSLElBQWlCVCxXQUFXLENBQUNKLFNBQUQsQ0FBWCxDQUF1QjNSLEdBQXZCLENBQXZCO0FBQ0EsU0FBT3dTLEtBQUssQ0FBQzdSLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQjJCLHNEQUFFLENBQUNzUixLQUFELEVBQVEsSUFBUixDQUF4QixHQUF3Q3pSLHdEQUFJLENBQUN5UixLQUFELEVBQVF0Qyx5REFBUyxDQUFDVCxPQUFsQixDQUFuRDtBQUNELENBSDRCLENBQXRCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNRSxRQUFRLEdBQUcxUiwwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQ3BDLFFBQU0sQ0FBQ3VTLEtBQUQsRUFBUUMsS0FBUixJQUFpQlQsV0FBVyxDQUFDSCxVQUFELENBQVgsQ0FBd0I1UixHQUF4QixDQUF2QjtBQUNBLFNBQU93UyxLQUFLLENBQUM3UixNQUFOLEtBQWlCckIsRUFBakIsR0FDSDJCLHNEQUFFLENBQUNzUixLQUFELEVBQVEsSUFBUixDQURDLEdBRUh6Uix3REFBSSxDQUFDeVIsS0FBRCxFQUFRdEMseURBQVMsQ0FBQ1AsUUFBbEIsQ0FGUjtBQUdELENBTDZCLENBQXZCO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXBGLE9BQU8sR0FBR3RNLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDbkMsUUFBTSxDQUFDc1MsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCOVIsd0RBQUksQ0FBQ3FSLFdBQVcsQ0FBQ0YsU0FBRCxDQUFYLENBQXVCN1IsR0FBdkIsQ0FBRCxDQUFwQztBQUNBLFNBQU93UyxLQUFLLENBQUM3UixNQUFOLEtBQWlCckIsRUFBakIsR0FBc0JnVCxLQUF0QixHQUE4QnhSLHdEQUFJLENBQUN5UixLQUFELEVBQVF0Qyx5REFBUyxDQUFDM0YsT0FBbEIsQ0FBekM7QUFDRCxDQUg0QixDQUF0QjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNMkUsUUFBUSxHQUFHalIsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUNwQyxRQUFNLENBQUNzUyxLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEI5Uix3REFBSSxDQUFDcVIsV0FBVyxDQUFDRCxVQUFELENBQVgsQ0FBd0I5UixHQUF4QixDQUFELENBQXBDO0FBQ0EsU0FBT3dTLEtBQUssQ0FBQzdSLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQmdULEtBQXRCLEdBQThCeFIsd0RBQUksQ0FBQ3lSLEtBQUQsRUFBUXRDLHlEQUFTLENBQUNoQixRQUFsQixDQUF6QztBQUNELENBSDZCLENBQXZCLEM7Ozs7Ozs7Ozs7OztBQzFSUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFM1A7QUFBRixJQUFTRyxrREFBZjtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTWdULFlBQVksR0FBRyxDQUFDM1MsTUFBRCxFQUFTMEMsRUFBVCxLQUFnQnhFLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDakQsTUFBSUYsTUFBTSxHQUFHLENBQWIsRUFBZ0IsT0FBT21CLHNEQUFFLENBQUNqQixHQUFELEVBQU0sRUFBTixDQUFUO0FBRWhCLFFBQU07QUFBRXFCLFNBQUY7QUFBUzZFO0FBQVQsTUFBa0JsRyxHQUF4QjtBQUNBLE1BQUlxQixLQUFLLElBQUk2RSxJQUFJLENBQUNDLFVBQWxCLEVBQThCLE9BQU9yRix3REFBSSxDQUFDZCxHQUFELENBQVg7QUFFOUIsUUFBTTtBQUFFbVEsU0FBRjtBQUFTcE07QUFBVCxNQUFrQjJPLDZEQUFTLENBQUNyUixLQUFELEVBQVE2RSxJQUFSLEVBQWNwRyxNQUFkLENBQWpDO0FBQ0EsU0FBT2hDLDhEQUFVLENBQUNpRyxJQUFELENBQVYsS0FBcUJqRSxNQUFyQixJQUErQixDQUFDMEMsRUFBRSxDQUFDdUIsSUFBRCxDQUFsQyxHQUNIakQsd0RBQUksQ0FBQ2QsR0FBRCxDQURELEdBRUhpQixzREFBRSxDQUFDakIsR0FBRCxFQUFNK0QsSUFBTixFQUFZMUMsS0FBSyxHQUFHOE8sS0FBcEIsQ0FGTjtBQUdELENBVjBDLENBQTNDO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTVAsTUFBTSxHQUFHQyxHQUFHLElBQUk3UiwwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQ3pDRSxPQUFNLElBQUkzQixrRUFBWSxDQUFDLFFBQUQsRUFBV3NSLEdBQVgsQ0FBdEI7QUFFQSxRQUFNLENBQUM4QyxLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEJuUyx3REFBSSxDQUFDK1IsWUFBWSxDQUMvQzNVLDhEQUFVLENBQUMrUixHQUFELENBRHFDLEVBQzlCaUQsS0FBSyxJQUFJakQsR0FBRyxLQUFLaUQsS0FEYSxDQUFaLENBRW5DOVMsR0FGbUMsQ0FBRCxDQUFwQztBQUdBLFNBQU82UyxLQUFLLENBQUNsUyxNQUFOLEtBQWlCckIsRUFBakIsR0FBc0JxVCxLQUF0QixHQUE4QjdSLHdEQUFJLENBQUM4UixLQUFELEVBQVEzQyx5REFBUyxDQUFDTCxNQUFWLENBQWlCQyxHQUFqQixDQUFSLENBQXpDO0FBQ0QsQ0FQa0MsQ0FBNUI7QUFTUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxPQUFPLEdBQUdELEdBQUcsSUFBSTdSLDBEQUFNLENBQUNnQyxHQUFHLElBQUk7QUFDMUNFLE9BQU0sSUFBSTNCLGtFQUFZLENBQUMsU0FBRCxFQUFZc1IsR0FBWixDQUF0QjtBQUVBLFFBQU0sQ0FBQzhDLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQm5TLHdEQUFJLENBQUMrUixZQUFZLENBQy9DM1UsOERBQVUsQ0FBQytSLEdBQUQsQ0FEcUMsRUFDOUJpRCxLQUFLLElBQUlqRCxHQUFHLENBQUNZLFdBQUosT0FBc0JxQyxLQUFLLENBQUNyQyxXQUFOLEVBREQsQ0FBWixDQUVuQ3pRLEdBRm1DLENBQUQsQ0FBcEM7QUFHQSxTQUFPNlMsS0FBSyxDQUFDbFMsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCcVQsS0FBdEIsR0FBOEI3Uix3REFBSSxDQUFDOFIsS0FBRCxFQUFRM0MseURBQVMsQ0FBQ0gsT0FBVixDQUFrQkQsR0FBbEIsQ0FBUixDQUF6QztBQUNELENBUG1DLENBQTdCO0FBU1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1rRCxHQUFHLEdBQUcvVSwwREFBTSxDQUFDZ0MsR0FBRyxJQUFJO0FBQy9CLFFBQU07QUFBRXFCLFNBQUY7QUFBUzZFO0FBQVQsTUFBa0JsRyxHQUF4QjtBQUNBLFFBQU1tUSxLQUFLLEdBQUdqSyxJQUFJLENBQUNDLFVBQUwsR0FBa0I5RSxLQUFoQztBQUNBLFNBQU9KLHNEQUFFLENBQUNqQixHQUFELEVBQU1pTixnRUFBWSxDQUFDNUwsS0FBRCxFQUFROE8sS0FBUixFQUFlakssSUFBZixDQUFsQixFQUF3QzdFLEtBQUssR0FBRzhPLEtBQWhELENBQVQ7QUFDRCxDQUp3QixDQUFsQjtBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNN0IsU0FBUyxHQUFHcEwsQ0FBQyxJQUFJbEYsMERBQU0sQ0FBQ2dDLEdBQUcsSUFBSTtBQUMxQ0UsT0FBTSxJQUFJbkIsa0VBQVksQ0FBQyxXQUFELEVBQWNtRSxDQUFkLENBQXRCO0FBRUEsUUFBTSxDQUFDeVAsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCblMsd0RBQUksQ0FBQytSLFlBQVksQ0FBQ3ZQLENBQUQsRUFBSSxNQUFNLElBQVYsQ0FBWixDQUE0QmxELEdBQTVCLENBQUQsQ0FBcEM7QUFDQSxTQUFPNlMsS0FBSyxDQUFDbFMsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCcVQsS0FBdEIsR0FBOEI3Uix3REFBSSxDQUFDOFIsS0FBRCxFQUFRM0MseURBQVMsQ0FBQzNCLFNBQVYsQ0FBb0JwTCxDQUFwQixDQUFSLENBQXpDO0FBQ0QsQ0FMbUMsQ0FBN0IsQzs7Ozs7Ozs7Ozs7O0FDN0dQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTThQLE9BQU8sR0FBRyxJQUFJQyxXQUFKLEVBQWhCO0FBRVA7QUFDQTtBQUNBOztBQUNPLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxXQUFKLEVBQWhCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxVQUFVL1AsS0FBVixDQUFnQnVILEtBQWhCLEVBQXVCckgsR0FBdkIsRUFBNEI4UCxJQUE1QixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDbEQsUUFBTXpDLENBQUMsR0FBRyxPQUFPdE4sR0FBUCxLQUFlLFFBQWYsR0FBMEJxSCxLQUExQixHQUFrQyxDQUE1QztBQUNBLFFBQU1rRyxDQUFDLEdBQUcsT0FBT3ZOLEdBQVAsS0FBZSxRQUFmLEdBQTBCQSxHQUExQixHQUFnQ3FILEtBQTFDO0FBQ0EsUUFBTXZLLENBQUMsR0FBRyxPQUFPZ1QsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsSUFBSSxLQUFLLENBQVQsR0FBYSxDQUFiLEdBQWlCOUcsSUFBSSxDQUFDZ0gsR0FBTCxDQUFTRixJQUFULENBQTVDLEdBQTZELENBQXZFO0FBQ0EsUUFBTWpVLENBQUMsR0FBRyxPQUFPaVUsSUFBUCxLQUFnQixRQUFoQixHQUNOLENBQUMsQ0FBQ0MsU0FESSxHQUNRLE9BQU8vUCxHQUFQLEtBQWUsUUFBZixHQUNaLENBQUMsQ0FBQzhQLElBRFUsR0FDSCxDQUFDLENBQUM5UCxHQUZqQjtBQUlBLFFBQU1pUSxPQUFPLEdBQUczQyxDQUFDLEdBQUdDLENBQXBCO0FBQ0EsTUFBSTJDLE9BQU8sR0FBRzVDLENBQWQ7O0FBRUEsUUFBTTZDLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQUlGLE9BQUosRUFBYTtBQUNYLGFBQU9wVSxDQUFDLEdBQUdxVSxPQUFPLEdBQUczQyxDQUFiLEdBQWlCMkMsT0FBTyxJQUFJM0MsQ0FBcEM7QUFDRDs7QUFDRCxXQUFPMVIsQ0FBQyxHQUFHcVUsT0FBTyxHQUFHM0MsQ0FBYixHQUFpQjJDLE9BQU8sSUFBSTNDLENBQXBDO0FBQ0QsR0FMRDtBQU9BOzs7QUFDQSxTQUFPLENBQUM0QyxRQUFRLEVBQWhCLEVBQW9CO0FBQ2xCLFVBQU1ELE9BQU47QUFDQUEsV0FBTyxHQUFHRCxPQUFPLEdBQUdDLE9BQU8sR0FBR3BULENBQWIsR0FBaUJvVCxPQUFPLEdBQUdwVCxDQUE1QztBQUNEO0FBQ0Q7O0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sVUFBVWhCLFNBQVYsQ0FBb0JzVSxRQUFwQixFQUE4QjtBQUNuQyxRQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDRCxRQUFSLENBQVIsRUFBakI7QUFDQSxNQUFJL1IsTUFBTSxHQUFHK1IsUUFBUSxDQUFDNVAsSUFBVCxFQUFiO0FBQ0EsTUFBSTFDLEtBQUssR0FBRyxDQUFaOztBQUVBLFNBQU8sQ0FBQ08sTUFBTSxDQUFDa0MsSUFBZixFQUFxQjtBQUNuQixVQUFNLENBQUN6QyxLQUFLLEVBQU4sRUFBVU8sTUFBTSxDQUFDOUYsS0FBakIsQ0FBTjtBQUNBOEYsVUFBTSxHQUFHK1IsUUFBUSxDQUFDNVAsSUFBVCxFQUFUO0FBQ0Q7QUFDRjtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTa0osWUFBVCxDQUFzQjVMLEtBQXRCLEVBQTZCdkIsTUFBN0IsRUFBcUNvRyxJQUFyQyxFQUEyQztBQUNoRCxRQUFNMk4sS0FBSyxHQUFHN0wsVUFBVSxDQUFDOEwsSUFBWCxDQUNaO0FBQUVoVTtBQUFGLEdBRFksRUFFWixDQUFDcUQsQ0FBRCxFQUFJaEUsQ0FBSixLQUFVK0csSUFBSSxDQUFDbUUsUUFBTCxDQUFjaEosS0FBSyxHQUFHbEMsQ0FBdEIsQ0FGRSxDQUFkO0FBSUEsU0FBTytULE9BQU8sQ0FBQ2EsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNsTCxZQUFULENBQXNCa0gsR0FBdEIsRUFBMkI7QUFDaEMsU0FBTyxJQUFJakgsUUFBSixDQUFhb0ssT0FBTyxDQUFDZ0IsTUFBUixDQUFlbkUsR0FBZixFQUFvQmhILE1BQWpDLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUy9LLFVBQVQsQ0FBb0IrUixHQUFwQixFQUF5QjtBQUM5QixTQUFPLENBQUMsR0FBR0EsR0FBSixFQUFTL1AsTUFBaEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVMySyxhQUFULENBQXVCcEosS0FBdkIsRUFBOEI2RSxJQUE5QixFQUFvQztBQUN6QyxRQUFNa0UsSUFBSSxHQUFHbEUsSUFBSSxDQUFDbUUsUUFBTCxDQUFjaEosS0FBZCxDQUFiO0FBQ0EsTUFBSSxDQUFDK0ksSUFBSSxHQUFHLElBQVIsS0FBaUIsQ0FBakIsS0FBdUIsQ0FBM0IsRUFBOEIsT0FBTyxDQUFQO0FBQzlCLE1BQUksQ0FBQ0EsSUFBSSxHQUFHLElBQVIsS0FBaUIsQ0FBakIsS0FBdUIsS0FBM0IsRUFBa0MsT0FBTyxDQUFQO0FBQ2xDLE1BQUksQ0FBQ0EsSUFBSSxHQUFHLElBQVIsS0FBaUIsQ0FBakIsS0FBdUIsTUFBM0IsRUFBbUMsT0FBTyxDQUFQO0FBQ25DLE1BQUksQ0FBQ0EsSUFBSSxHQUFHLElBQVIsS0FBaUIsQ0FBakIsS0FBdUIsTUFBM0IsRUFBbUMsT0FBTyxDQUFQLENBTE0sQ0FNekM7QUFDQTs7QUFDQSxTQUFPLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2dHLFFBQVQsQ0FBa0IvTyxLQUFsQixFQUF5QjZFLElBQXpCLEVBQStCO0FBQ3BDLFFBQU1pSyxLQUFLLEdBQUcxRixhQUFhLENBQUNwSixLQUFELEVBQVE2RSxJQUFSLENBQTNCO0FBQ0EsU0FBTztBQUFFaUssU0FBRjtBQUFTcE0sUUFBSSxFQUFFa0osWUFBWSxDQUFDNUwsS0FBRCxFQUFROE8sS0FBUixFQUFlakssSUFBZjtBQUEzQixHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN3TSxTQUFULENBQW1CclIsS0FBbkIsRUFBMEI2RSxJQUExQixFQUFnQzZHLEtBQWhDLEVBQXVDO0FBQzVDLFFBQU1rSCxVQUFVLEdBQUcvTixJQUFJLENBQUNDLFVBQXhCO0FBQ0EsTUFBSWdLLEtBQUssR0FBRyxDQUFaOztBQUVBLE9BQUssTUFBTWhOLENBQVgsSUFBZ0JDLEtBQUssQ0FBQzJKLEtBQUQsQ0FBckIsRUFBOEI7QUFDNUIsVUFBTTVOLENBQUMsR0FBR2tDLEtBQUssR0FBRzhPLEtBQWxCO0FBQ0EsUUFBSWhSLENBQUMsSUFBSThVLFVBQVQsRUFBcUI7QUFDckI5RCxTQUFLLElBQUkxRixhQUFhLENBQUN0TCxDQUFELEVBQUkrRyxJQUFKLENBQXRCO0FBQ0Q7O0FBQ0QsTUFBSTdFLEtBQUssR0FBRzhPLEtBQVIsSUFBaUI4RCxVQUFyQixFQUFpQztBQUMvQjlELFNBQUssR0FBRzhELFVBQVUsR0FBRzVTLEtBQXJCO0FBQ0Q7O0FBQ0QsU0FBTztBQUFFOE8sU0FBRjtBQUFTcE0sUUFBSSxFQUFFa0osWUFBWSxDQUFDNUwsS0FBRCxFQUFROE8sS0FBUixFQUFlakssSUFBZjtBQUEzQixHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3NJLEtBQVQsQ0FBZXFCLEdBQWYsRUFBb0I7QUFDekIsU0FBUSxJQUFHQSxHQUFJLEdBQWY7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTblAsSUFBVCxDQUFjNUUsS0FBZCxFQUFxQjtBQUMxQixTQUFPLENBQUNBLEtBQUQsRUFBUUEsS0FBUixDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTd1IsYUFBVCxDQUF1QjRHLFFBQXZCLEVBQWlDO0FBQ3RDLFVBQVFBLFFBQVEsQ0FBQ3BVLE1BQWpCO0FBQ0UsU0FBSyxDQUFMO0FBQVEsYUFBTyxFQUFQOztBQUNSLFNBQUssQ0FBTDtBQUFRLGFBQU9vVSxRQUFRLENBQUMsQ0FBRCxDQUFmOztBQUNSLFNBQUssQ0FBTDtBQUFRLGFBQU9BLFFBQVEsQ0FBQ3ZQLElBQVQsQ0FBYyxNQUFkLENBQVA7O0FBQ1I7QUFBUztBQUNQLGNBQU13UCxJQUFJLEdBQUdELFFBQVEsQ0FBQ2hRLEtBQVQsRUFBYjtBQUNBLGNBQU1rUSxJQUFJLEdBQUdELElBQUksQ0FBQ3BVLEdBQUwsRUFBYjtBQUNBLGVBQVEsR0FBRW9VLElBQUksQ0FBQ3hQLElBQUwsQ0FBVSxJQUFWLENBQWdCLFFBQU95UCxJQUFLLEVBQXRDO0FBQ0Q7QUFSSDtBQVVEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTckwsS0FBVCxDQUFldkcsRUFBZixFQUFtQjZSLElBQUksR0FBRyxTQUExQixFQUFxQztBQUMxQyxRQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixFQUFoQjtBQUVBLFNBQU9wVyxNQUFNLENBQUNxVyxjQUFQLENBQ0wsQ0FBQyxHQUFHN1UsSUFBSixLQUFhO0FBQ1gsVUFBTTFCLE9BQU8sR0FBR3VFLEVBQUUsQ0FBQyxHQUFHN0MsSUFBSixDQUFsQjtBQUNBMlUsV0FBTyxDQUFDRyxHQUFSLENBQVl4VyxPQUFaO0FBQ0EsV0FBT0EsT0FBUDtBQUNELEdBTEksRUFNTG9XLElBTkssRUFPTDtBQUFFdlksU0FBSyxFQUFFd1ksT0FBTyxDQUFDSSxHQUFSLENBQVlDLElBQVosQ0FBaUJMLE9BQWpCO0FBQVQsR0FQSyxDQUFQO0FBU0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTalYsT0FBVCxDQUFpQjZELENBQWpCLEVBQW9CO0FBQUE7O0FBQ3pCLFFBQU0wUixRQUFRLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBakI7QUFDQSxRQUFNNVEsQ0FBQyxHQUFHZCxDQUFDLEdBQUcsR0FBZDtBQUNBLFNBQU9BLENBQUMseUJBQUkwUixRQUFRLENBQUMsQ0FBQzVRLENBQUMsR0FBRyxFQUFMLElBQVcsRUFBWixDQUFaLGlEQUErQjRRLFFBQVEsQ0FBQzVRLENBQUQsQ0FBdkMsdUNBQThDNFEsUUFBUSxDQUFDLENBQUQsQ0FBdEQsQ0FBUjtBQUNEO0FBRUQsTUFBTUMsSUFBSSxHQUFHLENBQ1gsTUFEVyxFQUNILEtBREcsRUFDSSxLQURKLEVBQ1csT0FEWCxFQUNvQixNQURwQixFQUM0QixNQUQ1QixFQUNvQyxLQURwQyxFQUMyQyxPQUQzQyxFQUNvRCxPQURwRCxFQUVYLE1BRlcsRUFFSCxLQUZHLEVBRUksUUFGSixFQUVjLFFBRmQsRUFFd0IsVUFGeEIsRUFFb0MsVUFGcEMsRUFFZ0QsU0FGaEQsRUFHWCxTQUhXLEVBR0EsV0FIQSxFQUdhLFVBSGIsRUFHeUIsVUFIekIsQ0FBYjtBQUtBLE1BQU1DLElBQUksR0FBRyxDQUNYLFFBRFcsRUFDRCxPQURDLEVBQ1EsUUFEUixFQUNrQixPQURsQixFQUMyQixRQUQzQixFQUNxQyxPQURyQyxFQUM4QyxPQUQ5QyxFQUN1RCxTQUR2RCxFQUVYLFFBRlcsRUFFRCxPQUZDLEVBRVEsT0FGUixFQUVpQixVQUZqQixFQUU2QixTQUY3QixFQUV3QyxZQUZ4QyxFQUdYLFlBSFcsRUFHRyxXQUhILEVBR2dCLFdBSGhCLEVBRzZCLGFBSDdCLEVBRzRDLFlBSDVDLEVBSVgsWUFKVyxDQUFiO0FBTUEsTUFBTUMsSUFBSSxHQUFHLENBQ1gsT0FEVyxFQUNGLE9BREUsRUFDTyxNQURQLEVBQ2UsTUFEZixFQUN1QixNQUR2QixFQUMrQixRQUQvQixFQUN5QyxPQUR6QyxFQUNrRCxPQURsRCxDQUFiO0FBR0EsTUFBTUMsTUFBTSxHQUFHLENBQ2IsU0FEYSxFQUNGLFVBREUsRUFDVSxTQURWLEVBQ3FCLFNBRHJCLEVBQ2dDLFVBRGhDLEVBQzRDLGFBRDVDLENBQWY7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNwWSxRQUFULENBQWtCc0csQ0FBbEIsRUFBcUI7QUFDMUIsTUFBSUEsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHK1IsTUFBTSxDQUFDQyxnQkFBeEIsRUFBMEM7QUFDeEMsVUFBTSxJQUFJdFgsS0FBSixDQUFXLGtDQUFpQ3FYLE1BQU0sQ0FBQ0MsZ0JBQWlCLEVBQXBFLENBQU47QUFDRDs7QUFDRCxRQUFNQyxHQUFHLEdBQUc3SSxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDOEksS0FBTCxDQUFXbFMsQ0FBWCxDQUFYLENBQVo7QUFFQSxNQUFJQSxDQUFDLEdBQUcsRUFBUixFQUFZLE9BQU80UixJQUFJLENBQUM1UixDQUFELENBQVg7O0FBQ1osTUFBSWlTLEdBQUcsS0FBSyxDQUFaLEVBQWU7QUFDYixVQUFNaFcsQ0FBQyxHQUFHbU4sSUFBSSxDQUFDRSxLQUFMLENBQVd0SixDQUFDLEdBQUcsRUFBZixJQUFxQixDQUEvQjtBQUNBLFdBQU9BLENBQUMsR0FBRyxFQUFKLEtBQVcsQ0FBWCxHQUFnQixHQUFFNlIsSUFBSSxDQUFDNVYsQ0FBRCxDQUFJLE1BQTFCLEdBQW1DLEdBQUU0VixJQUFJLENBQUM1VixDQUFELENBQUksS0FBSTJWLElBQUksQ0FBQzVSLENBQUMsR0FBRyxFQUFMLENBQVMsRUFBckU7QUFDRDs7QUFDRCxNQUFJaVMsR0FBRyxLQUFLLENBQVosRUFBZTtBQUNiLFVBQU1FLENBQUMsR0FBRy9JLElBQUksQ0FBQ0UsS0FBTCxDQUFXdEosQ0FBQyxHQUFHLE1BQU1pUyxHQUFyQixDQUFWO0FBQ0EsVUFBTWhVLENBQUMsR0FBRytCLENBQUMsR0FBR21TLENBQUMsR0FBRyxNQUFNRixHQUF4QjtBQUNBLFdBQVEsR0FBRU4sSUFBSSxDQUFDUSxDQUFELENBQUksSUFBR0wsTUFBTSxDQUFDLENBQUQsQ0FBSSxHQUFFN1QsQ0FBQyxLQUFLLENBQU4sR0FBVSxJQUFWLEdBQWtCLElBQUd2RSxRQUFRLENBQUN1RSxDQUFELENBQUksRUFBRSxFQUFwRTtBQUNEOztBQUVELFFBQU02RSxDQUFDLEdBQUdtUCxHQUFHLEdBQUcsQ0FBTixHQUFVLENBQXBCO0FBQ0EsUUFBTWhXLENBQUMsR0FBR21OLElBQUksQ0FBQ0UsS0FBTCxDQUFXMkksR0FBRyxHQUFHLENBQWpCLENBQVY7QUFDQSxRQUFNRSxDQUFDLEdBQUcvSSxJQUFJLENBQUNFLEtBQUwsQ0FBV3RKLENBQUMsR0FBRyxPQUFPaVMsR0FBRyxHQUFHblAsQ0FBTixHQUFVLENBQWpCLENBQWYsQ0FBVjs7QUFDQSxRQUFNbkcsQ0FBQyxHQUFJLFNBQVN5VixJQUFULENBQWNDLEdBQWQsRUFBbUI7QUFDNUIsUUFBSUEsR0FBRyxHQUFHLEVBQVYsRUFBYyxPQUFPVixJQUFJLENBQUNVLEdBQUQsQ0FBWDtBQUVkLFVBQU1DLEdBQUcsR0FBR0QsR0FBRyxHQUFHLEVBQWxCOztBQUNBLFFBQUlBLEdBQUcsR0FBRyxHQUFWLEVBQWU7QUFDYixhQUFRLEdBQUVSLElBQUksQ0FBQ3pJLElBQUksQ0FBQ0UsS0FBTCxDQUFXK0ksR0FBRyxHQUFHLEVBQWpCLElBQXVCLENBQXhCLENBQTJCLElBQ3ZDQyxHQUFHLEtBQUssQ0FBUixHQUFZLEVBQVosR0FBa0IsSUFBR1gsSUFBSSxDQUFDVyxHQUFELENBQU0sRUFDaEMsRUFGRDtBQUdEOztBQUVELFVBQU1yVSxDQUFDLEdBQUdvVSxHQUFHLEdBQUdqSixJQUFJLENBQUNFLEtBQUwsQ0FBVytJLEdBQUcsR0FBRyxHQUFqQixJQUF3QixHQUF4QztBQUNBLFdBQVEsR0FBRVYsSUFBSSxDQUFDdkksSUFBSSxDQUFDRSxLQUFMLENBQVcrSSxHQUFHLEdBQUcsR0FBakIsQ0FBRCxDQUF3QixJQUFHUCxNQUFNLENBQUMsQ0FBRCxDQUFJLEdBQ2pEN1QsQ0FBQyxLQUFLLENBQU4sR0FBVSxJQUFWLEdBQWtCLElBQUdtVSxJQUFJLENBQUNuVSxDQUFELENBQUksRUFDOUIsRUFGRDtBQUdELEdBZFUsQ0FjVGtVLENBZFMsQ0FBWDs7QUFlQSxRQUFNbFUsQ0FBQyxHQUFHK0IsQ0FBQyxHQUFHbVMsQ0FBQyxHQUFHLE9BQU9GLEdBQUcsR0FBR25QLENBQU4sR0FBVSxDQUFqQixDQUFsQjtBQUNBLFNBQVEsR0FBRW5HLENBQUUsSUFBR21WLE1BQU0sQ0FBQzdWLENBQUQsQ0FBSSxHQUFFZ0MsQ0FBQyxLQUFLLENBQU4sR0FBVSxJQUFWLEdBQWtCLElBQUd2RSxRQUFRLENBQUN1RSxDQUFELENBQUksRUFBRSxFQUE5RDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTcEYsU0FBVCxDQUFtQkQsS0FBbkIsRUFBMEI7QUFDL0IsTUFBSUEsS0FBSyxLQUFLNEYsU0FBZCxFQUF5QixPQUFPLFdBQVA7O0FBQ3pCLE1BQUksT0FBTzVGLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDL0IsV0FBT2tDLDRDQUFNLENBQUNDLE9BQVAsQ0FBZW5DLEtBQWYsSUFBd0IsUUFBeEIsR0FBbUMsVUFBMUM7QUFDRDs7QUFDRCxNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0IsT0FBUSxVQUFTQSxLQUFLLENBQUMyWixXQUFZLEdBQW5DO0FBQy9CLFNBQU9DLElBQUksQ0FBQzNaLFNBQUwsQ0FBZUQsS0FBZixDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTNlosU0FBVCxDQUFtQjlGLEdBQW5CLEVBQXdCO0FBQzdCLFNBQU8sYUFBYW1CLFFBQWIsQ0FBc0JuQixHQUFHLENBQUMsQ0FBRCxDQUF6QixJQUFpQyxNQUFLQSxHQUFJLEVBQTFDLEdBQStDLEtBQUlBLEdBQUksRUFBOUQ7QUFDRCxDIiwiZmlsZSI6Imtlc3NlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IHBhcnNlciB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGVudW1lcmF0ZSwgb3JkaW5hbCwgc3RyaW5naWZ5LCB3b3JkaW5hbCB9IGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmb3JtYXR0ZXIgZnVuY3Rpb24gb3V0IG9mIGEgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSB0aGF0IHRoZSB2YWx1ZSBzaG91bGQgYmUuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6c3RyaW5nfSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIGFueVxuICogICAgIHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgZm9ybWF0dGVyID0gdHlwZSA9PlxuICB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuY29uc3QgY2hhckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycpXG5jb25zdCBmbkZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBmdW5jdGlvbicpXG5jb25zdCBnZW5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZ2VuZXJhdG9yIGZ1bmN0aW9uJylcbmNvbnN0IHN0ckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcnKVxuY29uc3QgYXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhbiBhcnJheScpXG5jb25zdCBzdHJBcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMnKVxuY29uc3Qgc3RyUmVnRm9ybXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uJylcbmNvbnN0IG51bUZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBudW1iZXInKVxuY29uc3QgcGFyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHBhcnNlcicpXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZm9ybWF0dGVyIGZ1bmN0aW9uIG91dCBvZiBhIHR5cGUgYW5kIGEgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgdGhhdCB0aGUgdmFsdWUgc2hvdWxkIGJlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlcl0gVGhlIHBvc2l0aW9uIG9mIHRoZSB2YWx1ZSB3aXRoaW4gYW4gYXJndW1lbnRcbiAqICAgICBsaXN0LlxuICogQHBhcmFtIHtib29sZWFufSBbbXVsdGlwbGVdIEluZGljYXRlcyB3aGV0aGVyIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmVcbiAqICAgICBhcmd1bWVudCBpbiB0aGUgZnVuY3Rpb24gd2hvc2UgZXJyb3IgaXMgYmVpbmcgZm9ybWF0dGVkLiBJZiB0aGlzXG4gKiAgICAgaXMgZmFsc2UsIHRoZSBgb3JkZXJgIHdpbGwgYmUgaWdub3JlZC5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbigqKTpzdHJpbmd9IEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgdmFsdWUgb2YgYW55XG4gKiAgICAgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBhcmdGb3JtYXR0ZXIgPSAodHlwZSwgb3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PiB2YWx1ZSA9PlxuICBgZXhwZWN0ZWQgJHtcbiAgICBtdWx0aXBsZSA/IGAke3dvcmRpbmFsKG9yZGVyKX0gYCA6ICcnXG4gIH1hcmd1bWVudCB0byBiZSAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5leHBvcnQgY29uc3QgYXJnQ2hhckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdGbkZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBmdW5jdGlvbicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdHZW5Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgZ2VuZXJhdG9yIGZ1bmN0aW9uJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ051bUZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBudW1iZXInLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnUGFyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdTdHJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egc3RyaW5nJywgb3JkZXIsIG11bHRpcGxlKVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZvcm1hdHRlciBmdW5jdGlvbiBvdXQgb2YgYSB0eXBlIGFuZCBhIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcmQgVGhlIHBvc2l0aW9uIG9mIHRoZSB2YWx1ZSB3aXRoaW4gYWFuIGFyZ3VtZW50XG4gKiAgICAgbGlzdCwgYSBibG9jayBvZiBjb2RlLCBldGMuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6c3RyaW5nfSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIGFueVxuICogICAgIHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3Qgb3JkRm9ybWF0dGVyID0gKHR5cGUsIG9yZCkgPT4gdmFsdWUgPT5cbiAgYGV4cGVjdGVkICR7b3JkfSBhcmd1bWVudCB0byBiZSAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5leHBvcnQgY29uc3Qgb3JkQ2hhckZvcm1hdHRlciA9IG9yZCA9PlxuICBvcmRGb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkRm5Gb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIGZ1bmN0aW9uJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZE51bUZvcm1hdHRlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgbnVtYmVyJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZFBhckZvcm1hdHRlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgcGFyc2VyJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZFN0ckZvcm1hdHRlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2Egc3RyaW5nJywgb3JkKVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6c3RyaW5nfSBmb3JtYXR0ZXJcbiAqL1xuZnVuY3Rpb24gZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHNpbmdsZS1jaGFyYWN0ZXIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydENoYXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGNoYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY2hhckxlbmd0aCh2YWx1ZSkgIT09IDEpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIG5vbi1wYXJzZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGZuRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgfHwgcGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0R2VuRnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGdlbkZvcm1hdHRlcikge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0QXJyYXkobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGFyckZvcm1hdHRlcikge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc2luZ2xlLWNoYXJhY3RlclxuICogc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPckFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJBcnJGb3JtYXR0ZXIpIHtcbiAgaWYgKCEoXG4gICAgQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAmJiB2YWx1ZS5ldmVyeShjID0+IHR5cGVvZiBjID09PSAnc3RyaW5nJyAmJiBjaGFyTGVuZ3RoKGMpID09PSAxKVxuICAgIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yUmVnRXhwKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJSZWdGb3JtdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJ1xuICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBudW1Gb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRQYXJzZXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHBhckZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8ICFwYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYW4gYXJyYXkgY29udGFpbnMgb25seSBwYXJzZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7KltdfSB2YWx1ZXMgVGhlIGFycmF5IG9mIHZhbHVlcyBiZWluZyBjaGVja2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VycyhuYW1lLCB2YWx1ZXMpIHtcbiAgZm9yIChjb25zdCBbaSwgdmFsdWVdIG9mIGVudW1lcmF0ZSh2YWx1ZXMpKSB7XG4gICAgYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBvcmRQYXJGb3JtYXR0ZXIob3JkaW5hbChpICsgMSkpKVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRTdHJpbmcsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBmYXRhbCwgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBjb21wb3VuZCwgZXhwZWN0ZWQsIG1lcmdlLCBuZXN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHBhcnNlcnMgb25lIGF0IGEgdGltZSB1bnRpbCBvbmUgc3VjY2VlZHMsIG9uZVxuICogZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuIE9uIGZhaWx1cmUgKGZhdGFsIG9yIG90aGVyd2lzZSksIGVycm9yXG4gKiBtZXNzYWdlcyBmcm9tIGFsbCBwYXJzZXJzIHRoYXQgaGFkIGZhaWxlZCBhcmUgbWVyZ2VkIGludG8gYGFsdGAnc1xuICogZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ8c3RyaW5nfSBhcmdzIFRoZSBwYXJzZXJzIHRvIGV4ZWN1dGUsIG9uZSBhdCBhIHRpbWUsXG4gKiAgICAgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuIFRoZSBsYXN0XG4gKiAgICAgYXJndW1lbnQgKm1heSogYmUgYSBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgYmVjb21lcyB0aGUgZXhwZWN0ZWRcbiAqICAgICBlcnJvciBtZXNzYWdlIGluIHBsYWNlIG9mIHRoZSBjb2xsZWN0ZWQgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXNcbiAqICAgICBvZiB0aGUgY29uc3RpdHVlbnQgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlcnMgdW50aWxcbiAqICAgICBvbmUgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHQgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3NcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdhbHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpKSlcblxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcblxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKHBjdHgsIGVycm9ycylcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwoY3R4LCBlcnJvcnMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyLCBzdWNjZWVkaW5nIHdoZXRoZXIgaXRcbiAqIGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBleGVjdXRlZCBhbmRcbiAqICAgICB0aGVuIGhhdmUgaXRzIHJlc3VsdCBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIGZhaWxzLlxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seSBpZlxuICogICAgIGl0cyBjb250YWluZWQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgb3B0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3B0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ29wdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBjb25zdCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9yc1xuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWwocGN0eCwgZXJyb3JzKVxuXG4gIC8vIElmIHRoZSBvcHRpb25hbCBwYXJzZXIgZmFpbHMsIHdlIGFkZCB0aGUgZXJyb3IgbWVzc2FnZSBldmVuIHRob3VnaFxuICAvLyB0aGUgZW5kIHJlc3VsdCBvZiBgb3B0YCBpcyBzdWNjZXNzLiBUaGlzIGxldHMgc2VxdWVuY2luZyBwYXJzZXJzXG4gIC8vIGFkZCB0aGUgb3B0IHBhcnNlcidzIGV4cGVjdGVkIHRvIGVycm9yIG1lc3NhZ2VzIGlmIGEgbGF0ZXIgcGFyc2VyXG4gIC8vIGluIHRoZSBzZXF1ZW5jZSBmYWlscy5cbiAgY29uc3QgcmVwbHkgPSBvayhwY3R4LCBudWxsKVxuICByZXBseVsxXS5lcnJvcnMgPSBlcnJvcnNcbiAgcmV0dXJuIHJlcGx5XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgZWl0aGVyIHdpdGggdGhlIHN1cHBsaWVkIHBhcnNlcidzIHN1Y2Nlc3NmdWxcbiAqIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHQgdmFsdWUgYHhgLlxuICogVGhpcyBwYXJzZXIgb25seSBmYWlscyBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZiA9IChwLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2RlZicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdkZWYnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2socGN0eCwgeClcbiAgcmV0dXJuIGZhdGFsKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKiBTdWNjZXNzIG9yIGZhaWx1cmUgYXJlIHN0aWxsIHJldHVybmVkLCB0aG91Z2ggZmF0YWwgZmFpbHVyZSBpc1xuICogY29udmVydGVkIHRvIG5vbi1mYXRhbCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBubyBpbnB1dCBpcyBjb25zdW1lZC5cbiAqXG4gKiBJZiB0aGUgY29uc2l0dWVudCBwYXJzZXIgZmFpbHMgZmF0YWxseSwgYSBuZXN0ZWQgZXJyb3IgbWVzc2FnZSB3aWxsXG4gKiBiZSBjcmVhdGVkIHRvIHRyYWNrIHRoZSBhY3R1YWwgZXJyb3IgY2F1c2UgYmVmb3JlIHRoaXMgcGFyc2VyXG4gKiBhdXRvbWF0aWNhbGx5IGJhY2t0cmFja3MuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBleGVjdXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIG9yIGZhaWxzXG4gKiAgICAgd2l0aCBpdCwgYnV0IHdoaWNoIGNvbnN1bWVzIG5vIGlucHV0IGVpdGhlciB3YXkuXG4gKi9cbmV4cG9ydCBjb25zdCBwZWVrID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncGVlaycsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdwZWVrJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2socGN0eCwgcHJlcy52YWx1ZSwgaW5kZXgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIHJldHVybiBmYWlsKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzLCBpbmRleClcbiAgfVxuICAvLyBUaGlzIHBhcnNlciBpbXBsZW1lbnRzIGF1dG9tYXRpYyBiYWNrdHJhY2tpbmcsIHNvIGlmIGl0cyBwYXJzZXJcbiAgLy8gZmFpbHMgZmF0YWxseSwgaXQgaGFzIHRvIHRyYWNrIHRoYXQgdGhyb3VnaCBhIG5lc3RlZCBlcnJvclxuICByZXR1cm4gZmFpbChcbiAgICBwY3R4LFxuICAgIGhhc00gPyBjb21wb3VuZChtLCBwY3R4LCBwcmVzLmVycm9ycykgOiBuZXN0ZWQocGN0eCwgcHJlcy5lcnJvcnMpLFxuICAgIGluZGV4LFxuICApXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscywgdGhpc1xuICogcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlIG9uIGZhaWx1cmUgaWYgdGhhdFxuICogZmFpbHVyZSB3YXMgY2F1c2VkIGJ5IGEgc3VjY2VzcyB3aXRoIGlucHV0IGNvbnN1bWVkLiBBbiBlcnJvciBtZXNzYWdlXG4gKiBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXMgdGhlIG9wdGlvbmFsXG4gKiBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGNvbnN1bWVzXG4gKiAgICAgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3QgZW1wdHkgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbXB0eScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbXB0eScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPayAmJiBwY3R4LmluZGV4ID09PSBpbmRleCkgcmV0dXJuIG9rKHBjdHgsIG51bGwpXG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChwY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsKHBjdHgsIGVycm9ycylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXQgd2hpY2ggZG9lc1xuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIGBwYCBzdWNjZWVkcywgdGhpcyBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkuXG4gKlxuICogVGhpcyBwYXJzZXIsIGJ5IGRlZmF1bHQsIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEFuXG4gKiBlcnJvciBtZXNzYWdlIGNhbiBiZSBzcGVjaWZpZWQgYnkgcGFzc2luZyB0aGUgZXhwZWN0ZWQgbWVzc2FnZSBpbiBhc1xuICogdGhlIG9wdGlvbmFsIHNlY29uZCBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgd2hlbiBpdFxuICogICAgIGZhaWxzLCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgY29udGV4dCwgd2hldGhlciBvciBub3QgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBub3QgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdub3QnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbm90JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHVuZGVmaW5lZFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPayA/IGZhaWwocGN0eCwgZXJyb3JzLCBpbmRleCkgOiBvayhwY3R4LCBudWxsLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0R2VuRnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRQYXJzZXJzLFxuICBhc3NlcnRTdHJpbmcsXG4gIGZvcm1hdHRlcixcbiAgb3JkRm5Gb3JtYXR0ZXIsXG4gIG9yZE51bUZvcm1hdHRlcixcbiAgb3JkUGFyRm9ybWF0dGVyLFxuICBvcmRTdHJGb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBmYXRhbCwgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBjb21wb3VuZCwgRXJyb3JUeXBlLCBleHBlY3RlZCwgbWVyZ2UsIG5lc3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IG9yZGluYWwsIHJhbmdlLCBzdHJpbmdpZnksIHR3aW4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG5mdW5jdGlvbiBwYXNzKGN0eCwgcmVzdWx0LCBlcnJvcnMpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCB9LCB7IC4uLnJlc3VsdCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXNzZXMgdGhyb3VnaCB0aGUgcmVzdWx0IG9mIGl0cyBlbWJlZGRlZCBwYXJzZXIsXG4gKiBleGNlcHQgdGhhdCBpdCB3aWxsIGNoYW5nZSB0aGF0IHBhcnNlcidzIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG9cbiAqIHRoZSBvbmUgcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBleGVjdXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBleHBlY3RlZCBlcnJvciBtZXNzYWdlIGlmIGBwYCBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBwYXNzZXMgaXRzIHJlc3VsdHNcbiAqICAgICB0aHJvdWdoIGV4Y2VwdCBmb3IgY2hhbmdpbmcgaXRzIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdXBvblxuICogICAgIGZhaWx1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBsYWJlbCA9IChwLCBtc2cpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsYWJlbCcsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2xhYmVsJywgbXNnLCBvcmRTdHJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gRmFpbCA/IHBhc3MocGN0eCwgcHJlcywgZXhwZWN0ZWQobXNnKSkgOiBwcmVwXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYmFja3RyYWNrcyB3aGVuIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkgYW5kXG4gKiB0cmFuc2Zvcm1zIHRoYXQgZmF0YWwgZmFpbHVyZSBpbnRvIGEgbm9uLWZhdGFsIG9uZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IHdheSAoYWxvbmcgd2l0aCB0aGUgc2ltaWxhciBgYXR0ZW1wdE1gKSB0byBjYXVzZSBhXG4gKiBjb250YWluZWQgcGFyc2VyIHRvIGJhY2t0cmFjayBhZnRlciBhIGZhdGFsIGZhaWx1cmUuIEFsbCBvZiB0aGUgYEJgXG4gKiBiYWNrdHJhY2tpbmcgcGFyc2VycyBiYWNrdHJhY2sgb25seSBpZiB0aGUgZmF0YWwgZmFpbHVyZSB3YXMgY2F1c2VkXG4gKiBieSBhIGNvbnRhaW5lZCBwYXJzZXIncyBub24tZmF0YWwgZmFpbHVyZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIGZhdGFsIGZhaWx1cmVzIHdpbGwgYmUgY29udmVydGVkXG4gKiAgICAgaW50byBub24tZmF0YWwgZmFpbHVyZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGNhbm5vdCBmYWlsIGZhdGFsbHkuIElmIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIgZmFpbHMgZmF0YWxseSwgdGhpcyBvbmUgd2lsbCBpbnN0ZWFkIGZhaWwgbm9uLWZhdGFsbHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhdHRlbXB0ID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXR0ZW1wdCcsIHApXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcGN0eC5pbmRleCA/IHByZXMuZXJyb3JzIDogbmVzdGVkKHBjdHgsIHByZXMuZXJyb3JzKVxuICByZXR1cm4gZmFpbChwY3R4LCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGJhY2t0cmFja3Mgd2hlbiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5IGFuZFxuICogdHJhbnNmb3JtcyB0aGF0IGZhdGFsIGZhaWx1cmUgaW50byBhIG5vbi1mYXRhbCBvbmUuIFRoZSBlcnJvciBtZXNzYWdlXG4gKiBpcyB0aGVuIHJlcGxhY2VkIHdpdGggdGhlIHN1cHBsaWVkIG9uZS5cbiAqXG4gKiBJZiB0aGUgY29udGFpbmVkIHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhpcyBhY3RzIGp1c3QgbGlrZVxuICogYGxhYmVsYCBhbmQgc2ltcGx5IHJlcGxhY2VzIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlLiBJZiB0aGF0XG4gKiBwYXJzZXIgZmFpbHMgZmF0YWxseSBob3dldmVyLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnRcbiAqIHdoZXJlIHRoYXQgcGFyc2VyIHdhcyBleGVjdXRlZCBhbmQgd2lsbCB1c2UgdGhlIHN1cHBsaWVkIGVycm9yXG4gKiBtZXNzYWdlIGFzIGEgaGVhZGVyIHRvIGEgbmVzdGVkIGVycm9yIG1lc3NhZ2UgZGV0YWlsaW5nIHRoZVxuICogYmFja3RyYWNraW5nLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBlcnJvciBtZXNzYWdlIHRvIGJlIHVzZWQuIFRoaXMgd2lsbCBiZSBhblxuICogICAgIGBFeHBlY3RlZGAgZXJyb3IgaWYgbm8gaW5wdXQgd2FzIGNvbnN1bWVkLCBvciBhIGBDb21wb3VuZGAgZXJyb3JcbiAqICAgICBpZiBpdCB3YXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBjaGFuZ2VzIHRoZSBlcnJvciBhc1xuICogICAgIGFwcHJvcHJpYXRlIGlmIGBwYCBmYWlscy5cbiAqL1xuZXhwb3J0IGNvbnN0IGF0dGVtcHRNID0gKHAsIG1zZykgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2F0dGVtcHRNJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnYXR0ZW1wdE0nLCBtc2csIG9yZFN0ckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgaWYgKHByZXMuZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBwcmVzLmVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKSB7XG4gICAgICBjb25zdCB7IGN0eCwgZXJyb3JzIH0gPSBwcmVzLmVycm9yc1swXVxuICAgICAgcmV0dXJuIHBhc3MocGN0eCwgcHJlcywgY29tcG91bmQobXNnLCBjdHgsIGVycm9ycykpXG4gICAgfVxuICAgIHJldHVybiBwYXNzKHBjdHgsIHByZXMsIGV4cGVjdGVkKG1zZykpXG4gIH1cbiAgcmV0dXJuIGZhaWwoY3R4LCBjb21wb3VuZChtc2csIHBjdHgsIHByZXMuZXJyb3JzKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lIGZhaWxzLiBJbiB0aGVcbiAqIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzIHRoZVxuICogcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSBhZnRlciBhbGwgb2YgdGhlIGVhcmxpZXJcbiAqIHBhcnNlcnMgc3VjY2VlZGVkLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgdGhlXG4gKiB2ZXJ5IGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgZXhlY3V0ZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdFxuICogICAgIGEgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VCID0gKC4uLnBzKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcnMoJ3NlcXVlbmNlQicsIHBzKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChjb250ZXh0LCBlcnJvcnMpXG4gICAgICByZXR1cm4gZmFpbChjb250ZXh0LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSByZXN1bHQgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZCBwYXJzZXJcbiAqIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlIHBhcnNlclxuICogcmV0dXJucyB0aGF0IHJlc3VsdC5cbiAqXG4gKiBJZiB0aGUgcGFyc2VyIHJldHVybmVkIGJ5IGBmbmAgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYHBgIHN1Y2NlZWRzLFxuICogdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgYW5kXG4gKiB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgLCBwYXNzIHRoZSByZXN1bHQgdG9cbiAqICAgICB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzIHJldHVybiB2YWx1ZSBhcyBhXG4gKiAgICAgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY2hhaW5CJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdjaGFpbkInLCBmbiwgb3JkRm5Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBxID0gZm4ocHJlcy52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnY2hhaW5CJywgcSwgZm9ybWF0dGVyKCd0aGUgMm5kIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICApXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSB0d2luKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKHFjdHgsIGVycm9ycylcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IHFjdHguaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQocWN0eCwgZXJyb3JzKVxuICByZXR1cm4gZmFpbChxY3R4LCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBxYCB0byB0aGUgZnVuY3Rpb25cbiAqIHJldHVybmVkIGJ5IGBwYC5cbiAqXG4gKiBJZiBgcGAgc3VjY2VlZHMgYW5kIGBxYCBmYWlscywgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlXG4gKiBwb2ludCB3aGVyZSBgcGAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICogICAgIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIEEgcGFyc2VyIHdoaWNoIHByb3ZpZGVzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHlCID0gKHAsIHEpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseUInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseUInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKHFjdHgsIGVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgY29uc3QgZXJyID0gaW5kZXggPT09IHFjdHguaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQocWN0eCwgZXJyb3JzKVxuICAgIHJldHVybiBmYWlsKHFjdHgsIGVyciwgaW5kZXgpXG4gIH1cblxuICBjb25zdCBmbiA9IHFyZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICdhcHBseUInLCBmbiwgZm9ybWF0dGVyKCcybmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgZnVuY3Rpb24nKSxcbiAgKVxuICByZXR1cm4gb2socWN0eCwgZm4ocHJlcy52YWx1ZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHBgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICovXG5leHBvcnQgY29uc3QgbGVmdEIgPSAocCwgcSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnRCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdEInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBvayhxY3R4LCBwcmVzLnZhbHVlKVxuXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKHFjdHgsIGVycm9ycylcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcWN0eC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsKHFjdHgsIGVyciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHFgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0QiA9IChwLCBxKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHRCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHRCJywgcSwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSB0d2luKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWwocWN0eCwgZXJyb3JzKVxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBxY3R4LmluZGV4ID8gZXJyb3JzIDogbmVzdGVkKHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWwocWN0eCwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCB3aWxsIGV4ZWN1dGUgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gc2VxdWVuY2UgYW5kXG4gKiB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGJvdGggaW4gYW4gYXJyYXkuXG4gKlxuICogSWYgYHBgIHN1Y2NlZWRzIGFuZCBgcWAgZmFpbHMsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZVxuICogcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBib3RoIGBwYCBhbmQgYHFgIGFuZCByZXR1cm5zXG4gKiAgICAgdGhlIHJlc3VsdHMgb2YgYm90aCBwYXJzZXJzIGluIGFuIGFycmF5LlxuICovXG5leHBvcnQgY29uc3QgYW5kVGhlbkIgPSAocCwgcSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FuZFRoZW5CJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYW5kVGhlbkInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBvayhxY3R4LCBbcHJlcy52YWx1ZSwgcXJlcy52YWx1ZV0pXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWwocWN0eCwgZXJyb3JzKVxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBxY3R4LmluZGV4ID8gZXJyb3JzIDogbmVzdGVkKHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWwocWN0eCwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcywgY29sbGVjdGluZyB0aGVcbiAqIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LlxuICpcbiAqIElmIGBwYCBmYWlscyBhZnRlciBpbml0aWFsbHkgc3VjY2VlZGluZyBvbmNlIG9yIG1vcmUsIHRoaXMgcGFyc2VyXG4gKiB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCB0aGUgZmlyc3QgdGltZSBhbmRcbiAqIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBleGVjdXRlIG11bHRpcGxlIHRpbWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBleGVjdXRlIHRoZSBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBlYXRCID0gKHAsIG4pID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyZXBlYXRCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcigncmVwZWF0QicsIG4sIG9yZE51bUZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleFxuICAgICAgICA/IHByZXMuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKGNvbnRleHQsIHByZXMuZXJyb3JzKVxuICAgICAgcmV0dXJuIGZhaWwoY29udGV4dCwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBhIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBhblxuICogZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZlxuICogdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqICpmaXJzdCosIHNvIHRoZSByZXN1bHRzIG9mIHRoZSB0d28gcGFyc2VycyB3aWxsIG5vdCBvdmVybGFwLlxuICpcbiAqIElmIGBwYCBmYWlscyBub24tZmF0YWxseSBiZWZvcmUgYGVuZGAgc3VjY2VlZHMsIHRoaXMgcGFyc2VyIHdpbGxcbiAqIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCB0aGUgZmlyc3QgdGltZSBhbmQgd2lsbFxuICogZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBlbmRgIGFuZCB0aGVuIGBwYCB6ZXJvXG4gKiAgICAgb3IgbW9yZSB0aW1lcyB1bnRpbCBgZW5kYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsQiA9IChwLCBlbmQpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBlbmQsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtlbmRyZXAsIFtlbmRjdHgsIGVuZHJlc11dID0gdHdpbihlbmQoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGVuZGN0eFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGVuZHJlcFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBPaykgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBwY3R4LmluZGV4XG4gICAgICAgID8gbWVyZ2UocHJlcy5lcnJvcnMsIGVuZHJlcy5lcnJvcnMpXG4gICAgICAgIDogbmVzdGVkKHBjdHgsIG1lcmdlKHByZXMuZXJyb3JzLCBlbmRyZXMuZXJyb3JzKSlcbiAgICAgIHJldHVybiBmYWlsKHBjdHgsIGVyciwgaW5kZXgpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYW55IG9mIHRoZSB5aWVsZGVkIHBhcnNlcnMgZmFpbCwgIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvXG4gKiB0aGUgcG9pbnQgd2hlcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbFxuICogbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbigpOip9IGdlbkZuIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqICAgICBhcmd1bWVudHMgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkXG4gKiAgICAgcGFyc2VyJ3MgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5XG4gKiAgICAgYFBhcnNlcmBzOyBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBibG9ja0IgPSBnZW5GbiA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEdlbkZ1bmN0aW9uKCdibG9ja0InLCBnZW5GbilcblxuICBjb25zdCBnZW4gPSBnZW5GbigpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBbXVxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2soY29udGV4dCwgdmFsdWUpXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdibG9ja0InLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIG9yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHZhbHVlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKGNvbnRleHQsIGVycm9ycylcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBjb250ZXh0LmluZGV4ID8gZXJyb3JzIDogbmVzdGVkKGNvbnRleHQsIGVycm9ycylcbiAgICAgIHJldHVybiBmYWlsKGNvbnRleHQsIGVyciwgaW5kZXgpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXMgdGhvc2VcbiAqIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mIHBhcnNlcnMgdG9cbiAqIGV4ZWN1dGUuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoaXMgcGFyc2VyJ3NcbiAqIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYWxsIG9mIHRoZSBlYXJsaWVyXG4gKiBwYXJzZXJzIHN1Y2NlZWRlZCwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIHRoZVxuICogdmVyeSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGUgZnVuY3Rpb25cbiAqICAgICBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGwgb3RoZXJcbiAqICAgICBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBleGVjdXRlIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgcGlwZUIgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBmbiA9IHBzLnBvcCgpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdwaXBlQicsIHBzKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdwaXBlQicsIGZuLCBvcmRGbkZvcm1hdHRlcihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSxcbiAgICApXG5cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChjb250ZXh0LCBlcnJvcnMpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQuaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQoY29udGV4dCwgZXJyb3JzKVxuICAgICAgICByZXR1cm4gZmFpbChjb250ZXh0LCBlcnIsIGluZGV4KVxuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rKGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgaXRzIHByZSwgY29udGVudCwgYW5kIHBvc3QgcGFyc2VycyBpbiBvcmRlclxuICogYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKlxuICogSWYgYW55IHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gd2hlcmVcbiAqIGBwcmVgIHdhcyBleGVjdXRlZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZSBhbmQgd2hvc2UgcmVzdWx0XG4gKiAgICAgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYHByZWAsIGBwYCwgYW5kIGBwb3N0YCBpblxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuQiA9IChwcmUsIHBvc3QsIHApID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHByZSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBwb3N0LCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHAsIG9yZFBhckZvcm1hdHRlcignM3JkJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcmVwLCBbcHJlY3R4LCBwcmVyZXNdXSA9IHR3aW4ocHJlKGN0eCkpXG4gIGlmIChwcmVyZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXJlcFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAocHJlY3R4KVxuICBsZXQgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKHByZXJlcy5lcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChwY3R4LCBlcnJvcnMpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBwY3R4LmluZGV4ID8gZXJyb3JzIDogbmVzdGVkKHBjdHgsIGVycm9ycylcbiAgICByZXR1cm4gZmFpbChwY3R4LCBlcnIsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgW3Bvc3RjdHgsIHBvc3RyZXNdID0gcG9zdChwY3R4KVxuICBpZiAocG9zdHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsKHBvc3RjdHgsIG1lcmdlKGVycm9ycywgcG9zdHJlcy5lcnJvcnMpKVxuICB9XG4gIGlmIChwb3N0cmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIGVycm9ycyA9IG1lcmdlKGVycm9ycywgcG9zdHJlcy5lcnJvcnMpXG4gICAgY29uc3QgZXJyID0gaW5kZXggPT09IHBvc3RjdHguaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQocG9zdGN0eCwgZXJyb3JzKVxuICAgIHJldHVybiBmYWlsKHBvc3RjdHgsIGVyciwgaW5kZXgpXG4gIH1cbiAgcmV0dXJuIG9rKHBvc3RjdHgsIHByZXMudmFsdWUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXNzZXJ0QXJyYXksXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBmb3JtYXR0ZXIsXG4gIG9yZE51bUZvcm1hdHRlcixcbiAgb3JkUGFyRm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAgYW5kIHJldHVybiBgcGAncyByZXN1bHRzIGpvaW5lZFxuICogdG9nZXRoZXIgaW50byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgcmVxdWlyZXMgdGhhdCBgcGAgcmV0dXJucyBhblxuICogYXJyYXk7IGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGlmIGl0IGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuIGFuIGFycmF5IG9mXG4gKiAgICAgc3RyaW5ncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCByZXR1cm5zIGEgc2luZ2xlXG4gKiAgICAgc3RyaW5nIG1hZGUgZnJvbSBqb2luaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgYXJyYXkgb2Ygc3RyaW5nc1xuICogICAgIHJldHVybmVkIGJ5IGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGpvaW4gPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdqb2luJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnam9pbicsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKHBjdHgsIHYuam9pbignJykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAgYW5kIHJldHVybiBpdHMgcmVzdWx0cyBtaW51cyBhbnlcbiAqIGBudWxsYCBvciBgdW5kZWZpbmVkYCByZXN1bHRzLiBUaGlzIHJlcXVpcmVzIHRoYXQgYHBgIHJldHVybnMgYW5cbiAqIGFycmF5OyBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBpdCBkb2VzIG5vdC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IGlzIGV4cGVjdGVkIHRvIHJldHVybiBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCByZXR1cm5zIGl0cyByZXN1bHRzXG4gKiAgICAgbWludXMgYW55IGBudWxsYCBvciBgdW5kZWZpbmVkYCByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3QgY29tcGFjdCA9IHAgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2NvbXBhY3QnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdjb21wYWN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2socGN0eCwgdi5maWx0ZXIoeCA9PiB4ICE9IG51bGwpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBidXQsIG9uIHN1Y2Nlc3MsIHJldHVybnMgYHhgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS4gSXRzIHJlc3VsdCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0aGF0IHRoZSBuZXcgcGFyc2VyIHdpbGwgcmVzdWx0IGluIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGBwYCBidXQgcmV0dXJuIGB4YCBvblxuICogICAgIHN1Y2Nlc3MuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWx1ZSA9IChwLCB4KSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndmFsdWUnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gT2sgPyBvayhwY3R4LCB4KSA6IHByZXBcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBgbmB0aCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgMC1iYXNlZCBpbmRleCBvZiB0aGUgcmVzdWx0IGVsZW1lbnQgdG8gcmV0dXJuLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBgbmB0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBudGggPSAocCwgbikgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ250aCcsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ250aCcsIG4sIG9yZE51bUZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ250aCcsIHYsIGZvcm1hdHRlcignMXN0IGFyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhwY3R4LCB2W25dKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgZmlyc3QgPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmaXJzdCcsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZpcnN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2socGN0eCwgdlswXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBzZWNvbmQgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBzZWNvbmQgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2Vjb25kJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnc2Vjb25kJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2socGN0eCwgdlsxXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSB0aGlyZCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHRoaXJkID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndGhpcmQnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCd0aGlyZCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKHBjdHgsIHZbMl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvdXJ0aCA9IHAgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvdXJ0aCcsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZvdXJ0aCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKHBjdHgsIHZbM10pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlmdGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaWZ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWZ0aCA9IHAgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpZnRoJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlmdGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhwY3R4LCB2WzRdKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRQYXJzZXIsXG4gIGZvcm1hdHRlcixcbiAgb3JkRm5Gb3JtYXR0ZXIsXG4gIG9yZFBhckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IG1heWJlRmF0YWwsIG9rLCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJvdGggQXBwbGljYXRpdmUgYW5kIE1vbmFkXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggYWx3YXlzIHN1Y2NlZWRzIHdpdGggdGhlIHN1cHBsaWVkIHZhbHVlLlxuICpcbiAqIFRoaXMgc2VydmVzIGFzIGEgcHJpbWl0aXZlIGZvciBib3RoIG1vbmFkcyBhbmQgYXBwbGljYXRpdmVzLiBJblxuICogSGFza2VsbCB0ZXJtcywgdGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGJvdGggYHB1cmVgIGluIHRoZVxuICogYEFwcGxpY2F0aXZlYCBjbGFzcyBhbmQgYHJldHVybmAgaW4gdGhlIGBNb25hZGAgY2xhc3MuXG4gKlxuICogSW4gb3RoZXIgd29yZHMsIGl0IGxpZnRzIGFuIGFyYml0cmFyeSB2YWx1ZSBpbnRvIGEgUGFyc2VyIGNvbnRleHQsXG4gKiB0dXJuaW5nIGl0IGludG8gYSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoYXQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB3aWxsIHJlc3VsdCB3aGVuIHRoaXMgcGFyc2VyIGlzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyB3aXRoIGB2YWx1ZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHdheXMgPSB4ID0+IHBhcnNlcihjdHggPT4gb2soY3R4LCB4KSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFwcGxpY2F0aXZlXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIHBhc3NlcyBpdHMgcmVzdWx0IHRvXG4gKiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoZVxuICogcmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgdGhlIGBmbWFwYCBvcGVyYXRpb24gZnJvbSBIYXNrZWxsJ3MgYEZ1bmN0b3JgIGNsYXNzLiBJdCdzXG4gKiB1c2VkIGFzIGEgYmFzaXMgZm9yIGxpZnRpbmcgZnVuY3Rpb25zIGludG8gYSBQYXJzZXIgY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKToqfSBmbiBBIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYCBhbmQgd2hvc2UgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgICBjcmVhdGVkIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHN1Y2NlZWQgd2l0aCB0aGF0XG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXAgPSAocCwgZm4pID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYXAnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ21hcCcsIGZuLCBvcmRGbkZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPayA/IG9rKHBjdHgsIGZuKHByZXMudmFsdWUpKSA6IHByZXBcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcWAgdG8gdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIGA8Kj5gIGZyb20gSGFza2VsbCdzIGBBcHBsaWNhdGl2ZWBcbiAqIGNsYXNzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAqICAgICBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBBIHBhcnNlciB3aGljaCBwcm92aWRlcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHkgPSAocCwgcSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FwcGx5JywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHknLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICByZXR1cm4gbWF5YmVGYXRhbChcbiAgICAgIHFjdHguaW5kZXggIT09IGluZGV4LCBxY3R4LCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpLFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGZuID0gcXJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgJ2FwcGx5JywgZm4sIGZvcm1hdHRlcignMm5kIGFyZ3VtZW50IHRvIHJldHVybiBhIGZ1bmN0aW9uJyksXG4gIClcbiAgcmV0dXJuIG9rKHFjdHgsIGZuKHByZXMudmFsdWUpKVxufSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vbmFkXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHJlc3VsdCBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkIHBhcnNlclxuICogdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGUgcGFyc2VyXG4gKiByZXR1cm5zIHRoYXQgcmVzdWx0LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIHRoZSBmdW5jdGlvbi1wcm92aWRlZCBwYXJzZXIgZmFpbHNcbiAqIGFmdGVyIHRoZSBvdGhlciBwYXJzZXIgY29uc3VtZXMgaW5wdXQsIGV2ZW4gaWYgdGhhdCBmYWlsdXJlIGlzXG4gKiBub24tZmF0YWwuXG4gKlxuICogVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGBNb25hZGAgY2xhc3MncyBgYmluZGAgb3BlcmF0aW9uXG4gKiAoZ2VuZXJhbGx5IHdyaXR0ZW4gYD4+PWAgaW4gSGFza2VsbCkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZSBhcyBhIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgdGhlIGlucHV0IHRvLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW4gPSAocCwgZm4pID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjaGFpbicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW4nLCBmbiwgb3JkRm5Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBxID0gZm4ocHJlcy52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnY2hhaW4nLCBxLCBmb3JtYXR0ZXIoJ3RoZSAybmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgcGFyc2VyJyksXG4gIClcblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IHR3aW4ocShwY3R4KSlcbiAgcmV0dXJuIHFyZXMuc3RhdHVzID09PSBPa1xuICAgID8gcXJlcFxuICAgIDogbWF5YmVGYXRhbChxY3R4LmluZGV4ICE9PSBpbmRleCwgcWN0eCwgbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbn0pXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBbHRlcm5hdGl2ZVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmlyc3QgYXBwbGllcyBgcGAgYW5kLCBpZiB0aGF0IGZhaWxzLCBhcHBsaWVzIGBxYC4gVGhlXG4gKiByZXN1bHQgaXMgdGhlIHJlc3VsdCBvZiB3aGF0ZXZlciBwYXJzZXIgc3VjY2VlZHMuIElmIGJvdGggZmFpbCxcbiAqIGBvckVsc2VgIGFsc28gZmFpbHMsIGFuZCBpZiBlaXRoZXIgZmFpbCBmYXRhbGx5LCBgb3JFbHNlYCBmYWlsc1xuICogZmF0YWxseS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyBgPHw+YCBpbiBIYXNrZWxsJ3MgYEFsdGVybmF0aXZlYCBjbGFzcy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIGZpcnN0IHBhcnNlciBhbmQgdGhlbiBpZlxuICogICAgIG5lY2Vzc2FyeSB0aGUgc2Vjb25kIHBhcnNlciwgcmV0dXJuaW5nIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IHRvXG4gKiAgICAgc3VjY2VlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9yRWxzZSA9IChwLCBxKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3JFbHNlJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3JFbHNlJywgcSwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IEZhaWwpIHJldHVybiBwcmVwXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSB0d2luKHEocGN0eCkpXG4gIHJldHVybiBxcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHFyZXBcbiAgICA6IG1heWJlRmF0YWwocXJlcy5zdGF0dXMgPT09IEZhdGFsLCBxY3R4LCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxufSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERlcml2YXRpdmUgcHJpbWl0aXZlc1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBzZXF1ZW5jZSBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhIDItZWxlbWVudCBhcnJheS5cbiAqXG4gKiBJZiBlaXRoZXIgYHBgIG9yIGBxYCBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZVxuICogZmFpbHVyZSB3aWxsIGJlIGZhdGFsIGlmIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXJcbiAqIHBhcnNlci5cbiAqXG4gKiBUaGlzIGlzIHRoZSBtb3N0IHByaW1pdGl2ZSBzZXF1ZW5jaW5nIHBhcnNlci4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzXG4gKiBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgZWl0aGVyLCBpbiB0aGUgbW9uYWRpYyBhbmQgYXBwbGljYXRpdmVcbiAqIHN0eWxlcyByZXNwZWN0aXZlbHk6XG4gKlxuICogYGBgXG4gKiBjaGFpbihwLCBhID0+IGNoYWluKHEsIGIgPT4gYWx3YXlzKFthLCBiXSkpKVxuICogYXBwbHkocCwgYXBwbHkocSwgYWx3YXlzKGIgPT4gYSA9PiBbYSwgYl0pKSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBhbmRUaGVuID0gKHAsIHEpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhbmRUaGVuJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYW5kVGhlbicsIHEsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgcmV0dXJuIHFyZXMuc3RhdHVzID09PSBPa1xuICAgID8gb2socWN0eCwgW3ByZXMudmFsdWUsIHFyZXMudmFsdWVdKVxuICAgIDogbWF5YmVGYXRhbChxY3R4LmluZGV4ICE9PSBpbmRleCwgcWN0eCwgbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdHZW5Gb3JtYXR0ZXIsXG4gIGFyZ1BhckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0R2VuRnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRQYXJzZXJzLFxuICBhc3NlcnRTdHJpbmcsXG4gIG9yZEZuRm9ybWF0dGVyLFxuICBvcmROdW1Gb3JtYXR0ZXIsXG4gIG9yZFBhckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IG1heWJlRmF0YWwsIG9rLCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWQsIG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgb3JkaW5hbCwgcmFuZ2UsIHN0cmluZ2lmeSwgdHdpbiwgd29yZGluYWwgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG5mdW5jdGlvbiBsb29wTWVzc2FnZShuYW1lKSB7XG4gIHJldHVybiBgWyR7bmFtZX1dOiBpbmZpbml0ZSBsb29wIGRldGVjdGVkOyBgXG4gICAgKyAnbmVpdGhlciBjb250ZW50IG5vciBzZXBhcmF0b3IgcGFyc2VyIGNvbnN1bWVkIGlucHV0J1xufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpcyBleGVjdXRlZFxuICogaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZSBmYWlscy4gSW4gdGhlXG4gKiBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lcyB0aGVcbiAqIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBhbnkgaW5wdXQgd2FzIGNvbnN1bWVkIGJlZm9yZSBhbnkgb2ZcbiAqIGl0cyBwYXJzZXJzIGZhaWwsIGV2ZW4gaWYgdGhhdCBmYWlsdXJlIGl0c2VsZiB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfHN0cmluZ30gYXJncyBUaGUgcGFyc2VycyB0byBiZSBleGVjdXRlZC4gVGhlIGxhc3RcbiAqICAgICBhcmd1bWVudCAqbWF5KiBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBiZWNvbWVzIHRoZSBleHBlY3RlZFxuICogICAgIGVycm9yIG1lc3NhZ2UgaW4gcGxhY2Ugb2YgdGhlIGNvbGxlY3RlZCBleHBlY3RlZCBlcnJvciBtZXNzYWdlc1xuICogICAgIG9mIHRoZSBjb25zdGl0dWVudCBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXRcbiAqICAgICBhIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJnc1xuICBjb25zdCBtID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+XG4gICAgICBhc3NlcnRQYXJzZXIoJ3NlcScsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgdHJ1ZSkpKVxuXG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuICAgIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICAgIGNvbnRleHQgPSBwY3R4XG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIGVycm9ycylcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgcmV0dXJuc1xuICogdGhlIHJlc3VsdCBvZiBgcGAuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBhcHBsaWNhdGl2ZSBgPCpgXG4gKiBpbiBIYXNrZWxsLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbGVmdCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGVmdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gICAgcmV0dXJuIG1heWJlRmF0YWwocHJlcy5zdGF0dXMgPT09IEZhdGFsLCBwY3R4LCBlcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgcmV0dXJuIHFyZXMuc3RhdHVzID09PSBPa1xuICAgID8gb2socWN0eCwgcHJlcy52YWx1ZSlcbiAgICA6IG1heWJlRmF0YWwocWN0eC5pbmRleCAhPT0gaW5kZXgsIHFjdHgsIGVycm9ycylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgcmV0dXJuc1xuICogdGhlIHJlc3VsdCBvZiBgcWAuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBhcHBsaWNhdGl2ZSBgKj5gXG4gKiBpbiBIYXNrZWxsLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyaWdodCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gICAgcmV0dXJuIG1heWJlRmF0YWwocHJlcy5zdGF0dXMgPT09IEZhdGFsLCBwY3R4LCBlcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IHR3aW4ocShwY3R4KSlcbiAgY29uc3QgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICByZXR1cm4gcXJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBxcmVwXG4gICAgOiBtYXliZUZhdGFsKHFjdHguaW5kZXggIT09IGluZGV4LCBxY3R4LCBlcnJvcnMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGEgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkIHdpbGwgYmVcbiAqIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuIGJlXG4gKiBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIElmIGFueSB5aWVsZGVkIHBhcnNlciBmYWlscyBhZnRlciBhbm90aGVyIHlpZWxkZWQgcGFyc2VyIGhhcyBjb25zdW1lZFxuICogaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIGFuIGVycm9yIHRvIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZyBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vIGFyZ3VtZW50c1xuICogICAgIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZCBwYXJzZXInc1xuICogICAgIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seSBgUGFyc2VyYHM7XG4gKiAgICAgb3RoZXJ3aXNlIGFuIGVycm9yIGlzIHRocm93bi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcbiAqICAgICBleGVjdXRlcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIGluIHRoZSByZXR1cm5cbiAqICAgICB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgYmxvY2sgPSAoZywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0R2VuRnVuY3Rpb24oJ2Jsb2NrJywgZywgYXJnR2VuRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2Jsb2NrJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGdlbiA9IGcoKVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogW11cbiAgbGV0IG5leHRWYWx1ZVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxvY2snLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIHdvcmRpbmFsKGkgKyAxKVxuICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSB2YWx1ZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIGVycm9ycylcbiAgICB9XG4gICAgbmV4dFZhbHVlID0gcHJlcy52YWx1ZVxuICAgIGkrK1xuICB9XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW50byBhbiBhcnJheSB0aGF0IGlzIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBmYWlsIG5vbi1mYXRhbGx5OyBob3dldmVyLCBpZiBgcGAgZXZlciBmYWlsc1xuICogZmF0YWxseSwgdGhlbiBzbyB3aWxsIHRoaXMgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkgPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55JywgcClcblxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIHRoZSByZXN1bHRzIGludG8gYW4gYXJyYXkgdGhhdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW4gZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdFxuICogb25jZS4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBgcGAgZXZlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkIG9uZSBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbWFueTEgPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55MScsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgZGlzY2FyZHMgYW55IHN1Y2Nlc3NmdWwgcmVzdWx0IHdoaWxlXG4gKiBzdGlsbCBjb25zdW1pbmcgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdG8gYmUgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGNvbnN1bWUgaW5wdXQgYXMgYHBgICBkb2VzIG9uXG4gKiAgICAgc3VjY2VzcywgYnV0IHdpbGwgcHJvZHVjZSBubyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcCcsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPayA/IG9rKHBjdHgsIG51bGwpIDogcHJlcFxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBkaXNjYXJkaW5nIHRoZSByZXN1bHRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBmYWlsIG5vbi1mYXRhbGx5OyBob3dldmVyLCBpZiBgcGAgZXZlciBmYWlsc1xuICogZmF0YWxseSwgdGhlbiBzbyB3aWxsIHRoaXMgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXBNYW55ID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcE1hbnknLCBwKVxuXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIG9uZSBvciBtb3JlIHRpbWVzIHVudGlsIGl0IGZhaWxzLFxuICogZGlzY2FyZGluZyB0aGUgcmVzdWx0cy5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW4gZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdFxuICogb25jZS4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBgcGAgZXZlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxuICovXG5leHBvcnQgY29uc3Qgc2tpcE1hbnkxID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcE1hbnkxJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2VwYCBpblxuICogYmV0d2VlbiBlYWNoLiBUaGUgcmVzdWx0cyBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIG5vdCBmYWlsIG5vbi1mYXRhbGx5LCBhcyBtYXRjaGluZyBgcGAgemVybyB0aW1lcyBpc1xuICogdmFsaWQuIEl0IGNhbiBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2VwYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzZXBgIGJvdGggc3VjY2VlZCB3aXRob3V0IGNvbnN1bWluZyBjb250ZW50LCB0aGF0IHdvdWxkXG4gKiBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEJ5ID0gKHAsIHNlcCkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEJ5JywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnknLCBzZXAsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rKHBjdHgsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NlcHJlcCwgW3NlcGN0eCwgc2VwcmVzXV0gPSB0d2luKHNlcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gc2VwY3R4XG4gICAgaWYgKHNlcHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gc2VwcmVwXG4gICAgaWYgKHNlcHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBCeScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIG9uZSBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNlcGAgaW5cbiAqIGJldHdlZW4gZWFjaC4gVGhlIHJlc3VsdHMgb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZFxuICogcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIEl0XG4gKiB3aWxsIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzZXBgIGV2ZXIgZmFpbCBmYXRhbGx5LlxuICpcbiAqIElmIGBwYCBhbmQgYHNlcGAgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwQnkxID0gKHAsIHNlcCkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEJ5MScsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEJ5MScsIHNlcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzZXByZXAsIFtzZXBjdHgsIHNlcHJlc11dID0gdHdpbihzZXAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHNlcGN0eFxuICAgIGlmIChzZXByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHNlcHJlcFxuICAgIGlmIChzZXByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwQnkxJykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNlcGAgaW5cbiAqIGJldHdlZW4gZWFjaCBhbmQgb3B0aW9uYWxseSBhZnRlciB0aGUgbGFzdCBtYXRjaCBvZiBgcGAuIFRoZSByZXN1bHRzXG4gKiBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgbm9uLWZhdGFsbHksIGFzIG1hdGNoaW5nIGBwYCB6ZXJvIHRpbWVzIGlzXG4gKiB2YWxpZC4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzZXBgIGV2ZXIgZmFpbCBmYXRhbGx5LlxuICpcbiAqIElmIGBwYCBhbmQgYHNlcGAgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkgPSAocCwgc2VwKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwRW5kQnknLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeScsIHNlcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2socGN0eCwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2VwcmVwLCBbc2VwY3R4LCBzZXByZXNdXSA9IHR3aW4oc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBzZXBjdHhcbiAgICBpZiAoc2VwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBzZXByZXBcbiAgICBpZiAoc2VwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEVuZEJ5JykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2VwcmVwLCBbc2VwY3R4LCBzZXByZXNdXSA9IHR3aW4oc2VwKHsgLi4uY29udGV4dCwgaW5kZXggfSkpXG4gIHJldHVybiBzZXByZXMuc3RhdHVzID09PSBGYXRhbCA/IHNlcHJlcCA6IG9rKHNlcGN0eCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzZXBgIGluXG4gKiBiZXR3ZWVuIGVhY2ggYW5kIG9wdGlvbmFsbHkgYWZ0ZXIgdGhlIGxhc3QgbWF0Y2ggb2YgYHBgLiBUaGUgcmVzdWx0c1xuICogb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZCByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIG5vdCBmYWlsIGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSXRcbiAqIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGVpdGhlciBgcGAgb3IgYHNlcGAgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2VwYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBFbmRCeTEgPSAocCwgc2VwKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwRW5kQnkxJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwRW5kQnkxJywgc2VwLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NlcHJlcCwgW3NlcGN0eCwgc2VwcmVzXV0gPSB0d2luKHNlcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gc2VwY3R4XG4gICAgaWYgKHNlcHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gc2VwcmVwXG4gICAgaWYgKHNlcHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBFbmRCeTEnKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIGNvbnN0IFtzZXByZXAsIFtzZXBjdHgsIHNlcHJlc11dID0gdHdpbihzZXAoeyAuLi5jb250ZXh0LCBpbmRleCB9KSlcbiAgcmV0dXJuIHNlcHJlcy5zdGF0dXMgPT09IEZhdGFsID8gc2VwcmVwIDogb2soc2VwY3R4LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsIGNvbGxlY3RpbmcgdGhlXG4gKiBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYWZ0ZXIgYW55IGlucHV0IGhhcyBiZWVuIGNvbnN1bWVkIGJ5IGEgcHJpb3IgZXhlY3V0aW9uXG4gKiBvZiBgcGAsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGV4ZWN1dGUgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGV4ZWN1dGUgdGhlIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChwLCBuKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmVwZWF0JywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcigncmVwZWF0Jywgbiwgb3JkTnVtRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBpdHMgcHJlLCBjb250ZW50LCBhbmQgcG9zdCBwYXJzZXJzIGluIG9yZGVyXG4gKiBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBJZiBlaXRoZXIgYHBgIG9yIGBwb3N0YCBmYWlscyBhZnRlciBhIHByaW9yIHBhcnNlciBoYXMgY29uc3VtZWRcbiAqIGlucHV0LCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcG9zdCBUaGUgbGFzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseSBhbmQgd2hvc2UgcmVzdWx0IGJlY29tZXNcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgcGFyc2VycyBpbiB0aGUgY29ycmVjdFxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuID0gKHByZSwgcG9zdCwgcCkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwcmUsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwb3N0LCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuJywgcCwgb3JkUGFyRm9ybWF0dGVyKCczcmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwcmVyZXAsIFtwcmVjdHgsIHByZXJlc11dID0gdHdpbihwcmUoY3R4KSlcbiAgaWYgKHByZXJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcmVwXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChwcmVjdHgpXG4gIGNvbnN0IGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShwcmVyZXMuZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgcmV0dXJuIG1heWJlRmF0YWwocGN0eC5pbmRleCAhPT0gaW5kZXgsIHBjdHgsIGVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtwb3N0Y3R4LCBwb3N0cmVzXSA9IHBvc3QocGN0eClcbiAgcmV0dXJuIHBvc3RyZXMuc3RhdHVzID09PSBPa1xuICAgID8gb2socG9zdGN0eCwgcHJlcy52YWx1ZSlcbiAgICA6IG1heWJlRmF0YWwoXG4gICAgICBwb3N0Y3R4LmluZGV4ICE9PSBpbmRleCwgcG9zdGN0eCwgbWVyZ2UoZXJyb3JzLCBwb3N0cmVzLmVycm9ycyksXG4gICAgKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBhIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBhblxuICogZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZlxuICogdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqICpmaXJzdCosIHNvIHRoZSByZXN1bHRzIG9mIHRoZSB0d28gcGFyc2VycyB3aWxsIG5vdCBvdmVybGFwLlxuICpcbiAqIElmIGBwYCBmYWlscyBiZWZvcmUgYGVuZGAgc3VjY2VlZHMgYnV0IGFmdGVyIHByaW9yIGV4ZWN1dGlvbnMgb2YgYHBgXG4gKiBoYXZlIGNvbnN1bWVkIGlucHV0LCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqICAgICB1bnRpbCBgZW5kYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsID0gKHAsIGVuZCkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnlUaWxsJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGwnLCBlbmQsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtlbmRyZXAsIFtlbmRjdHgsIGVuZHJlc11dID0gdHdpbihlbmQoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGVuZGN0eFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGVuZHJlcFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBPaykgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKFxuICAgICAgICBjb250ZXh0LmluZGV4ICE9PSBpbmRleCwgY29udGV4dCwgbWVyZ2UocHJlcy5lcnJvcnMsIGVuZHJlcy5lcnJvcnMpLFxuICAgICAgKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UgYW5kIHBhc3NlcyB0aG9zZVxuICogcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2YgcGFyc2VycyB0b1xuICogZXhlY3V0ZS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhpcyBwYXJzZXInc1xuICogcmVzdWx0LlxuICpcbiAqIE5vdGUgdGhhdCwgdW5saWtlIGBzZXF1ZW5jZWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCpcbiAqIGRpc2NhcmRlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gKiB0byBgZm5gIG5vIG1hdHRlciB0aGUgcmVzdWx0cyBmcm9tIHRoZSBwYXJzZXJzLlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBhZnRlciBwcmlvciBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQsXG4gKiB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBpcyBlcXVpdmFsZW50IHRvIHRoZSBhcHBsaWNhdGl2ZSBsaWZ0IG9wZXJhdGlvbiwgbGlmdGluZ1xuICogbXVsdGktcGFyYW1ldGVyIGZ1bmN0aW9ucyBpbnRvIHRoZSBjb250ZXh0IG9mIGEgcGFyc2VyLiBJdCBhY3RzIGxpa2VcbiAqIGBsaWZ0QTJgIGlmIHR3byBwYXJzZXJzIGFyZSBwYXNzZWQgaW4sIGBsaWZ0QTNgIGlmIHRocmVlIGFyZSBwYXNzZWRcbiAqIGluLCBldGMuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGUgZnVuY3Rpb25cbiAqICAgICBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGwgb3RoZXJcbiAqICAgICBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBleGVjdXRlIGl0cyBwYXJzZXJzIGluIG9yZGVyLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgcGlwZSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IGZuID0gcHMucG9wKClcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcnMoJ3BpcGUnLCBwcylcbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3BpcGUnLCBmbiwgb3JkRm5Gb3JtYXR0ZXIob3JkaW5hbChwcy5sZW5ndGggKyAxKSkpXG5cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIGVycm9ycylcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBvayhjb250ZXh0LCBmbiguLi52YWx1ZXMpKVxuICB9KVxufVxuXG4vKipcbiAqIFByaXZhdGUgZm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgYXNzZXJ0aW9uIG1lc3NhZ2VzIGFib3V0IG9wIHBhcnNlcnNcbiAqIG5vdCByZXR1cm5pbmcgZnVuY3Rpb25zXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG9yZCBUaGUgbnVtYmVyIG9mIHRoZSBvcCBwYXJzZXIgdGhhdCBmYWlscyB0byBwcm9kdWNlXG4gKiAgICAgYSBmdW5jdGlvblxuICogQHJldHVybnMge3N0cmluZ30gQW4gYXBwcm9wcmlhdGUgYXNzZXJ0aW9uIGZhaWx1cmUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gb3BGb3JtYXR0ZXIob3JkKSB7XG4gIHJldHVybiB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHtvcmR9IG9wIHBhcnNlciB0byByZXR1cm4gYSBmdW5jdGlvbjsgZm91bmQgJHtcbiAgICBzdHJpbmdpZnkodmFsdWUpXG4gIH1gXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG8gdGhlIHJlc3VsdHNcbiAqIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cbiAqIElmIHRoZXJlIGFyZSB6ZXJvIG1hdGNoZXMgb2YgYHBgLCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGB4YCBiZWNvbWVzXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2NMID0gKHAsIG9wLCB4KSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2NMJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2NMJywgb3AsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2socGN0eCwgeClcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbb3ByZXAsIFtvcGN0eCwgb3ByZXNdXSA9IHR3aW4ob3AoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG9wY3R4XG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBvcHJlcFxuICAgIGlmIChvcHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICAgJ2Fzc29jTCcsIG9wcmVzLnZhbHVlLCBvcEZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gob3ByZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgLCBlYWNoIHNlcGFyYXRlZFxuICogYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdCBhc3NvY2lhdGl2ZVxuICogYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIE90aGVyd2lzZSBpdCBjYW4gb25seSBmYWlsIGZhdGFsbHkgaWYgYHBgIG9yIGBvcGAgZmFpbHNcbiAqIGZhdGFsbHkuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvYzFMID0gKHAsIG9wKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxTCcsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMUwnLCBvcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvcHJlcCwgW29wY3R4LCBvcHJlc11dID0gdHdpbihvcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gb3BjdHhcbiAgICBpZiAob3ByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIG9wcmVwXG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2MxTCcsIG9wcmVzLnZhbHVlLCBvcEZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gob3ByZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG8gdGhlIHJlc3VsdHNcbiAqIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cbiAqIElmIHRoZXJlIGFyZSB6ZXJvIG1hdGNoZXMgb2YgYHBgLCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGB4YCBiZWNvbWVzXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc29jUiA9IChwLCBvcCwgeCkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jUicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jUicsIG9wLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rKHBjdHgsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29wcmVwLCBbb3BjdHgsIG9wcmVzXV0gPSB0d2luKG9wKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBvcGN0eFxuICAgIGlmIChvcHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gb3ByZXBcbiAgICBpZiAob3ByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvY1InLCBvcHJlcy52YWx1ZSwgb3BGb3JtYXR0ZXIob3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9wcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgLCBlYWNoIHNlcGFyYXRlZFxuICogYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBPdGhlcndpc2UgaXQgY2FuIG9ubHkgZmFpbCBmYXRhbGx5IGlmIGBwYCBvciBgb3BgIGZhaWxzXG4gKiBmYXRhbGx5LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc29jMVIgPSAocCwgb3ApID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFSJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxUicsIG9wLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29wcmVwLCBbb3BjdHgsIG9wcmVzXV0gPSB0d2luKG9wKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBvcGN0eFxuICAgIGlmIChvcHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gb3ByZXBcbiAgICBpZiAob3ByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvYzFSJywgb3ByZXMudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcHJlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBmb3JtYXRFcnJvcnMgfSBmcm9tICcuL2Vycm9yJ1xuaW1wb3J0IHsgc3RyaW5nVG9WaWV3LCB0cmFjaywgdHdpbiB9IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xuICogb2YgdHlwZWQgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxufVxuXG4vKipcbiAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3RhdHVzIG9mIHRoZSBsYXN0IHBhcnNpbmcgb3BlcmF0aW9uLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IHtcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIHdhcyBzdWNjZXNzZnVsLiAqL1xuICBPazogJ29rJyxcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC4gKi9cbiAgRmFpbDogJ2ZhaWwnLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cbiAgRmF0YWw6ICdmYXRhbCcsXG59XG5cbi8qKlxuICogVGhlIGNvbnRleHQgb2YgYSBwYXJzZXIuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBpbnB1dCB0ZXh0IGFuZCBhXG4gKiBwb2ludGVyIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIHdpdGhpbiBpdC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb250ZXh0XG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgd2hlcmUgdGhlXG4gKiAgICAgbmV4dCBwYXJzaW5nIG9wZXJhdGlvbiB3aWxsIHRha2UgcGxhY2UgKG9yIHdoZXJlIHRoZSBsYXN0IG9uZVxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGlzIGlzXG4gKiBlc3NlbnRpYWxseSBhIHVuaW9uIG9mIHN1Y2Nlc3NmdWwgdmFsdWUgYW5kIGZhaWx1cmUgZXJyb3IsIHdpdGggdGhlXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVzdWx0XG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXG4gKiAgICAgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiBhIHN1Y2Nlc3NmdWwgcGFyc2UuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxuICogICAgIGR1cmluZyBhbiB1bnN1Y2Nlc3NmdWwgcGFyc2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgb2JqZWN0IHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgaW5jbHVkaW5nIHRoZVxuICogY29udGV4dCBhbmQgdGhlIHJlc3VsdC5cbiAqIEB0eXBlZGVmIHtbQ29udGV4dCwgUmVzdWx0XX0gUmVwbHlcbiAqL1xuXG4vKipcbiAqIEEgdHlwZWQgYXJyYXkgb2YgYW55IGJ1aWx0LWluIGtpbmQuXG4gKlxuICogQHR5cGVkZWZcbiAqICAgeyhVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcbiAqICAgSW50MTZBcnJheXxJbnQzMkFycmF5fEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXkpfSBUeXBlZEFycmF5XG4gKi9cblxuLyoqXG4gKiBJbnB1dCB0ZXh0IHRvIGJlIHBhcnNlZC5cbiAqXG4gKiBAdHlwZWRlZiB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gSW5wdXRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBjb250ZXh0LiBUaGlzIGlzIG5vdCBleHBvcnRlZCBiZWNhdXNlIGFcbiAqIG5ldyBjb250ZXh0IGlzIG9ubHkgY3JlYXRlZCBiZWZvcmUgcGFyc2luZywgaW4gdGhlIGBwYXJzZWAgZnVuY3Rpb24uXG4gKiBBbnkgZnVydGhlciBjb250ZXh0cyBhcmUgZGVyaXZlZCBmcm9tIHRoZSBjb250ZXh0IHVzaW5nIHtAbGluayBva30sXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxuICpcbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge0NvbnRleHR9IEFuIGVtcHR5IHBhcnNlciBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dChpbnB1dCkge1xuICBjb25zdCBtZXNzYWdlID0gJ1BhcnNlciBpbnB1dCBtdXN0IGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LCBhbiBhcnJheSAnXG4gICAgKyBgYnVmZmVyLCBvciBhIGRhdGEgdmlldzsgcGFyc2VyIGlucHV0IHdhcyAke3R5cGVvZiBpbnB1dH1gXG5cbiAgY29uc3QgdmlldyA9IChpbnB1dCA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpc1R5cGVkQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH0pKGlucHV0KVxuXG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBpbmRleDogMCxcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXG4gKiBjb250ZXh0LCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXG4gKiByZXR1cm5zIHRoZSB1cGRhdGVkIGNvbnRleHQuXG4gKlxuICogQGNhbGxiYWNrIFBhcnNlclxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYmVmb3JlIHRoZSBwYXJzZXIgaXMgcnVuLlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgdXBkYXRlZCBjb250ZXh0IGFmdGVyIHRoZSBwYXJzZXIgaXMgYXBwbGllZCBhbmRcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoYXQgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgUGFyc2VyYC4gVGhpcyBmYWN0b3J5IHNpbXBseSB0YWtlcyBhIHBhcnNlciBmdW5jdGlvblxuICogYW5kIHJldHVybnMgdGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uOyB0aGUgcHVycG9zZSBvZiB0aGUgZmFjdG9yeSBpc1xuICogdG8gdHJhY2sgcGFyc2VycyB0aGF0IGl0IGhhcyBjcmVhdGVkLlxuICpcbiAqIElmIGFzc2VydGlvbnMgYXJlIGVuYWJsZWQsIHRoaXMgd2lsbCBtZWFuIHRoYXQgYW55IHBhcnNlciBjb21iaW5hdG9yXG4gKiB3aWxsIGFzc2VydCB0aGF0IHRoZSBwYXJzZXIgdGhhdCBpcyBwYXNzZWQgdG8gaXQgd2FzIGNyZWF0ZWQgYnkgdGhpc1xuICogZmFjdG9yeSBmdW5jdGlvbi4gQW55IG90aGVyIHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93bixcbiAqIGV2ZW4gaWYgaXQgYWNjZXB0cyB0aGUgcmlnaHQga2luZCBvZiBhcmd1bWVudCBhbmQgcmV0dXJucyB0aGUgcHJvcGVyXG4gKiByZXR1cm4gdmFsdWUuIElmIGFzc2VydGlvbnMgYXJlIG5vdCBlbmFibGVkLCB0aGlzIGNoZWNrIHdpbGwgbm90IGJlXG4gKiBkb25lLlxuICpcbiAqIEV2ZXJ5IHBhcnNlciBpbiB0aGlzIGxpYnJhcnkgaXMgY3JlYXRlZCB3aXRoIGBtYWtlUGFyc2VyYCwgc28gYW55IG9mXG4gKiB0aG9zZSBvciBhbnkgcGFyc2VyIGNvbXBvc2VkIGZyb20gdGhvc2Ugd2lsbCB3b3JrIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IGZuIEEgcGFyc2VyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gVGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3QgcGFyc2VyID0gdHJhY2soZm4gPT4gZm4pXG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2Ugc3VjY2VlZGVkLCBhcyB3ZWxsIGFzXG4gKiBhIGBDb250ZXh0YCBwb3RlbnRpYWxseSB3aXRoIGFuIHVwZGF0ZWQgYGluZGV4YC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1udWxsXSBUaGUgbmV3IHJlc3VsdCBvZiB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBwYXJzZXJcbiAqICAgICB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgc3VjY2VlZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2soY3R4LCB2YWx1ZSA9IG51bGwsIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuT2ssIHZhbHVlIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdpdGhvdXRcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIGNvcHkgb2YgYENvbnRleHRgLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzPVtdXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqICAgICBjb250ZXh0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWwoY3R4LCBlcnJvcnMgPSBbXSwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5GYWlsLCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2hpbGVcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIG5ldyBgQ29udGV4dGAgd2l0aCBhbiB1cGRhdGVkIGBpbmRleGAuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W10gVGhlIGVycm9ycyBhc3NvY2lhdGVkIHdpdGggdGhlXG4gKiAgICAgY29udGV4dCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9Y3R4LmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGUgbGF0ZXN0XG4gKiAgICAgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYXRhbChjdHgsIGVycm9ycyA9IFtdLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhdGFsLCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZXIgYXBwbGljYXRvaW4gZmFpbGVkLlxuICogV2hldGhlciB0aGlzIGlzIGEgZmF0YWwgZXJyb3Igb3Igbm90IGRlcGVuZHMgb24gd2hldGhlciBgdGVzdGAgaXNcbiAqIGB0cnVlYCAoZmF0YWwpIG9yIGBmYWxzZWAgKG5vbi1mYXRhbCkuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSB0ZXN0IFVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHByb2R1Y2VkIHJlc3VsdFxuICogICAgIHJlcHJlc2VudHMgYSBmYXRhbCBlcnJvciAoYHRydWVgKSBvciBub3QgKGBmYWxzZWApLlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W10gVGhlIGVycm9ycyBhc3NvY2lhdGVkIHdpdGggdGhlXG4gKiAgICAgY29udGV4dCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9Y3R4LmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGUgbGF0ZXN0XG4gKiAgICAgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXliZUZhdGFsKHRlc3QsIGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbXG4gICAgeyAuLi5jdHgsIGluZGV4IH0sXG4gICAgeyBzdGF0dXM6IHRlc3QgPyBTdGF0dXMuRmF0YWwgOiBTdGF0dXMuRmFpbCwgZXJyb3JzIH0sXG4gIF1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBUaGlzIGlucHV0IGNhbiBiZSBhIHN0cmluZywgYSB0eXBlZCBhcnJheSxcbiAqIGFuIGFycmF5IGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXcuIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGZpbmFsIHBhcnNlclxuICogY29udGV4dCByZXR1cm5lZCBieSB0aGUgcGFyc2VyIGFmdGVyIGJlaW5nIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0ge0lucHV0fSBpbnB1dCBUaGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtSZXBseX0gVGhlIGZpbmFsIGNvbnRleHQgYWZ0ZXIgYWxsIHBhcnNlcnMgaGF2ZSBiZWVuXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGUgZmluYWwgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UocGFyc2VyLCBpbnB1dCkge1xuICByZXR1cm4gcGFyc2VyKGNvbnRleHQoaW5wdXQpKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0YXR1cyBvZiB0aGUgZ2l2ZW4gcmVwbHkuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7U3RhdHVzfSBUaGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXR1cyhyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGludm9jYXRpb24gb2YgYHBhcnNlYCB3YXMgc3VjY2Vzc2Z1bC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHBhcnNlciBzdWNjZWVkZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGRpZCBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZWVkZWQocmVwbHkpIHtcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1cyA9PT0gU3RhdHVzLk9rXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyXG4gKiBkaWQgbm90IHN1Y2NlZWQsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogTm90ZSB0aGF0IGBudWxsYCBpcyBhIHBvc3NpYmxlIHJlc3VsdCBmcm9tIHNvbWUgaW5kaXZpZHVhbCBwYXJzZXJzXG4gKiAoYHNraXBgLCBgbG9va0FoZWFkYCwgZXRjLikuIFRoZSBwcm9wZXIgd2F5IHRvIHRlbGwgaWYgYSBwYXJzZXJcbiAqIHN1Y2NlZWRlZCBpbiB0aGUgZmlyc3QgcGxhY2UgaXMgdG8gdXNlIGBzdWNjZWVkZWRgLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdmFsdWUgZnJvbSB0aGUgcGFyc2UgaWYgaXQgd2FzIHN1Y2Nlc3NmdWwsXG4gKiAgICAgb3IgYG51bGxgIGlmIGl0IHdhcyBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzKHJlcGx5KSB7XG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gcmVwbHlbMV0udmFsdWUgOiBudWxsXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBzdHJpbmcgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYW5cbiAqIHVuc3VjY2Vzc2Z1bCBpbnZvY2F0aW9uIG9mIGBwYXJzZWAuIElmIHRoZSBwYXJzZXIgd2FzIGFjdHVhbGx5XG4gKiBzdWNjZXNzZnVsLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nIGRldGFpbGluZyB0aGUgY2lyY3Vtc3RhbmNlcyBvZlxuICogICAgIHRoZSBwYXJzZXIgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmUocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyBudWxsIDogZm9ybWF0RXJyb3JzKHJlcGx5KVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFJldHVybnMgdGhlIHBhcnNlZCB2YWx1ZSBpZiB0aGUgcGFyc2VyXG4gKiBzdWNjZWVkcywgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBwYXJzZXIncyBlcnJvciBtZXNzYWdlIGlmXG4gKiBpdCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0ge0lucHV0fSBpbnB1dCBUaGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IGZyb20gdGhlIHBhcnNlciBhcHBsaWNhdGlvbiwgaWYgdGhlIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLlxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXJzZXIgZmFpbHMuIFRoZSBlcnJvciBtZXNzYWdlIHdpbGwgYmUgYVxuICogICAgIGRldGFpbGVkIHJlY29yZCBvZiB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGFyc2VyLCBpbnB1dCkge1xuICBjb25zdCBbcmVwbHksIFtfLCByZXN1bHRdXSA9IHR3aW4ocGFyc2VyKGNvbnRleHQoaW5wdXQpKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiByZXN1bHQudmFsdWVcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0RXJyb3JzKHJlcGx5KSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGNoYXJMZW5ndGgsXG4gIGNvbW1hU2VwYXJhdGUsXG4gIG5leHRDaGFyV2lkdGgsXG4gIHZpZXdUb1N0cmluZyxcbn0gZnJvbSAnLi91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuQ29udGV4dH0gQ29udGV4dCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLlJlc3VsdH0gUmVzdWx0ICovXG5cbmNvbnN0IHRhYiA9IC9cXHQvZ3VcbmNvbnN0IHplcm9XaWR0aCA9IC8oPzpcXHB7TW59fFxccHtDZn0pL2d1XG5cbi8qKlxuICogQSBzdHJpbmcgZGVmaW5pbmcgdGhlIHR5cGUgb2YgYW4gZXJyb3IuXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgRXJyb3JUeXBlID0ge1xuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXhwZWN0ZWQgcmVzdWx0LiBQcm9kdWNlZCBieSB0aGUgdmFzdFxuICAgKiBtYWpvcml0eSBvZiBwYXJzZXJzLlxuICAgKi9cbiAgRXhwZWN0ZWQ6ICdleHBlY3RlZCcsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIHJlc3VsdCB0aGF0IHdhcyBub3QgZXhwZWN0ZWQuIFR5cGljYWxseVxuICAgKiBwcm9kdWNlZCBieSBwYXJzZXJzIHN1Y2ggYXMgYHVuZXhwZWN0ZWRgIGFuZCBgbm90Rm9sbG93ZWRCeWAuXG4gICAqL1xuICBVbmV4cGVjdGVkOiAndW5leHBlY3RlZCcsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVHlwaWNhbGx5IHByb2R1Y2VkXG4gICAqIGJ5IHBhcnNlcnMgc3VjaCBhcyBgZmFpbGAgYW5kIGBmYWlsRmF0YWxseWAuXG4gICAqL1xuICBHZW5lcmljOiAnZ2VuZXJpYycsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBlcnJvciB3aXRoaW4gYW5vdGhlciBlcnJvci4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCBmb3IgYW4gZXJyb3IgdGhhdCBjYXVzZWQgYmFja3RyYWNraW5nLCB3aGVyZSB0aGVcbiAgICogcGFyZW50IGVycm9yIGlzIHJlcG9ydGVkIGFmdGVyIGJhY2t0cmFja2luZy5cbiAgICovXG4gIE5lc3RlZDogJ25lc3RlZCcsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIG5lc3RlZCBlcnJvciB3aXRoIGl0cyBvd24gc2VwYXJhdGUgZXJyb3JcbiAgICogbWVzc2FnZS4gVGhpcyBpcyBwcm9kdWNlZCBzcGVjaWZpY2FsbHkgYnkgdGhlIGBjb21wb3VuZGAgcGFyc2VyLlxuICAgKi9cbiAgQ29tcG91bmQ6ICdjb21wb3VuZCcsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBzb21lIG90aGVyIGtpbmQgb2YgZXJyb3IgbWVzc2FnZSB0byBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYSBjdXN0b20gZXJyb3IgZm9ybWF0dGVyLlxuICAgKi9cbiAgT3RoZXI6ICdvdGhlcicsXG59XG5cbi8qKlxuICogQSBsaXN0IG9mIGVycm9ycy4gVGhpcyBjYW4gY29uc2lzdCBvZiBhbnkgZXJyb3IgbWVzc2FnZXMgdGhhdCBhcHBseVxuICogdG8gYSBwYXJ0aWN1bGFyIGluZGV4IG9yIG5lc3RlZC9jb21wb3VuZCBlcnJvcnMgdGhhdCBwb2ludCBiYWNrIHRvXG4gKiB0aGUgc2FtZSBpbmRleCBidXQgYXBwbHkgdG8gYSBkaWZmZXJlbnQgb25lLlxuICogQHR5cGVkZWYgeyhOZXN0ZWRFcnJvcnxDb21wb3VuZEVycm9yfExvY2FsRXJyb3IpW119IEVycm9yTGlzdFxuICovXG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGF0IHRoZSBsb2NhdGlvbiByZWZlcnJlZCB0byBieSB0aGUgY3VycmVudFxuICogY29udGV4dC4gVGhlIHR5cGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlcmUgdGhlIGxhYmVsIHNob3VsZCBiZVxuICogcG9zaXRpb25lZCBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMb2NhbEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVycm9yLlxuICovXG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGluIGEgZGlmZmVyZW50IGxvY2F0aW9uIHRoYW4gdGhlIG9uZSByZWZlcnJlZFxuICogdG8gYnkgdGhlIGN1cnJlbnQgY29udGV4dC4gVGhlIG1vc3QgdHlwaWNhbCByZWFzb24gZm9yIHRoaXMgaGFwcGVuaW5nXG4gKiBpcyBiYWNrdHJhY2tpbmc7IHRoZSBsb2NhbCBlcnJvciBjYW4gdHJhY2sgdGhlIGN1cnJlbnRcbiAqIChwb3N0LWJhY2t0cmFjaykgbG9jYXRpb24gd2hpbGUgdGhlIG5lc3RlZCBlcnJvciByZXRhaW5zIGluZm9ybXRpb25cbiAqIGZyb20gdGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoZSBiYWNrdHJhY2tpbmcgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5lc3RlZEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxuICogICAgIGBFcnJvclR5cGUuTmVzdGVkYC5cbiAqIEBwcm9wZXJ0eSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb21cbiAqICAgICB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBjdHhgLlxuICovXG5cbi8qKlxuICogQSBuZXN0ZWQgZXJyb3IgdGhhdCBoYXMgaXRzIG93biBsYWJlbC4gVGhpcyBpcyBzaW1wbHkgZm9yIHByb2R1Y2luZ1xuICogbmljZXIgZXJyb3IgbWVzc2FnZXM7IHRoaXMgZXJyb3IgaXMgdHlwaWNhbGx5IG9ubHkgcHJvZHVjZWQgYnkgdGhlXG4gKiBgYmFja2xhYmVsYCBwYXJzZXIuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29tcG91bmRFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcbiAqICAgICBgRXJyb3JUeXBlLkNvbXBvdW5kYC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBlcnJvci4gVGhpc1xuICogICAgIGlzIHR5cGljYWxseSB1c2VkIGFzIGEgc29ydCBvZiBoZWFkZXIgb3ZlciB0aGUgbmVzdGVkIG1lc3NhZ2VzXG4gKiAgICAgdW5kZXIgdGhpcyBjb21wb3VuZCBlcnJvci5cbiAqIEBwcm9wZXJ0eSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb21cbiAqICAgICB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBjdHhgLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBlcnJvciBsaXN0IGNvbnRhaW5pbmcgb25lIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBleHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0ZWQobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5FeHBlY3RlZCwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS4gSXQgaXMgZXhwZWN0ZWQgdGhhdCBvbmUgYXJyYXkgb2ZcbiAqIGVycm9yIG1lc3NhZ2VzIG1heSBoYXZlIG11bHRpcGxlIHVuZXhwZWN0ZWQgZXJyb3JzLCBidXQgb25seSB0aGVcbiAqIGZpcnN0IHdpbGwgYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBmb3VuZCBidXQgd2FzXG4gKiAgICAgbm90IGV4cGVjdGVkLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgdW5leHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5leHBlY3RlZChsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLlVuZXhwZWN0ZWQsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVGhlcmUgY2FuIGJlIG1vcmUgdGhhbiBvbmUgZ2VuZXJpY1xuICogZXJyb3IgbWVzc2FnZSBpbiBhbiBhcnJheSBvZiBlcnJvciBtZXNzYWdlcywgYnV0IG9ubHkgdGhlIGZpcnN0IHdpbGxcbiAqIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBnZW5lcmljIGVycm9yJ3MgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGdlbmVyaWMgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWMobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5HZW5lcmljLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gb3RoZXIgZXJyb3IuIFRoZXNlIGVycm9ycyBhcmUgbm90IGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdFxuICogZm9ybWF0dGVyIGF0IGFsbCBhbmQgYXJlIG9ubHkgdXNlZnVsIGZvciBjdXN0b20gZm9ybWF0dGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG90aGVyIGVycm9yJ3MgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBvdGhlciB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3RoZXIobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5PdGhlciwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmVzdGVkIGVycm9yLiBUaGlzIHRha2VzIGFuIGVycm9yIGxpc3QgYW5kIHdyYXBzIGl0IHdpdGhcbiAqIGNvbnRleHQgaW5mb3JtYXRpb24uIElmIHRoZSBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGVcbiAqIG5lc3RlZCBlcnJvciwgdGhhdCBlcnJvciBpcyBzaW1wbHkgcmV0dXJuZWQ7IGEgc2luZ2xlIG5lc3RlZCBlcnJvclxuICogd2lsbCBub3QgYmUgbmVzdGVkIGluIGFub3RoZXIgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgbmVzdGVkIGVycm9yXG4gKiAgICAgb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7W05lc3RlZEVycm9yXX0gQSBuZXcgbmVzdGVkIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVzdGVkKGN0eCwgZXJyb3JzKSB7XG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAxICYmIGVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkXG4gICAgPyBlcnJvcnNcbiAgICA6IFt7IHR5cGU6IEVycm9yVHlwZS5OZXN0ZWQsIGN0eCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBjb21wb3VuZCBlcnJvci4gVGhpcyB3cmFwcyBhbiBlcnJvciBsaXN0IGp1c3QgYXMgYVxuICogbmVzdGVkIGVycm9yIGRvZXMsIGV4Y2VwdCBpdCBhbHNvIGF0dGFjaGVzIGEgbWVzc2FnZSB0byBpdC4gSWYgdGhlXG4gKiBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGUgbmVzdGVkIGVycm9yLCBpdHMgaW5mb3JtYXRpb24gaXNcbiAqIHVzZWQgdG8gY3JlYXRlIGEgbmV3IGNvbXBvdW5kIGVycm9yIHdpdGhvdXQgYW55IG5lc3RlZCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXR0YWNoZWQgdG8gdGhlIG5lc3RlZCBlcnJvci5cbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgY29tcG91bmRcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgcG9zaXRpb24gcG9pbnRlZCB0byBieSB0aGUgZ2l2ZW4gY29udGV4dC5cbiAqIEByZXR1cm5zIHtbQ29tcG91bmRFcnJvcl19IEEgbmV3IGNvbXBvdW5kIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG91bmQobGFiZWwsIGN0eCwgZXJyb3JzKSB7XG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAxICYmIGVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkXG4gICAgPyBbe1xuICAgICAgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLFxuICAgICAgY3R4OiBlcnJvcnMuY3R4LFxuICAgICAgZXJyb3JzOiBlcnJvcnMuZXJyb3JzLFxuICAgICAgbGFiZWwsXG4gICAgfV1cbiAgICA6IFt7IHR5cGU6IEVycm9yVHlwZS5Db21wb3VuZCwgY3R4LCBlcnJvcnMsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogTWVyZ2VzIHR3byBhcnJheXMgb2YgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzMT1bXV0gVGhlIGZpcnN0IGFycmF5IG9mIGVycm9ycy5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzMj1bXV0gVGhlIHNlY29uZCBhcnJheSBvZiBlcnJvcnMuXG4gKiBAcmV0dXJucyB7RXJyb3JMaXN0fSBBIG5ldyBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZXJyb3JzIGZyb21cbiAqICAgICB0aGUgZmlyc3QgdHdvIGFycmF5cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGVycm9yczEgPSBbXSwgZXJyb3JzMiA9IFtdKSB7XG4gIHJldHVybiBbLi4uZXJyb3JzMSwgLi4uZXJyb3JzMl1cbn1cblxuLy8gI3JlZ2lvbiBGb3JtYXR0aW5nIHV0aWxpdHkgZnVuY3Rpb25zXG5cbi8vICNyZWdpb24gVHlwZWRlZnMgZm9yIG9iamVjdCByZXR1cm4gdHlwZXNcblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbiBvZiBhIGJ5dGUgdG8gc2VlXG4gKiBpZiBpdCBpcyAob3Igc3RhcnRzKSBhIG5ld2xpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV3bGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbmV3bGluZSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2Nhbm5lZCBieXRlIHdhc1xuICogICAgIGVpdGhlciBhIG5ld2xpbmUgb3IgdGhlIGJlZ2lubmluZyBvZiBhIG11bHRpLWJ5dGUgbmV3bGluZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBza2lwIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAqICAgICBjb250YWlucy4gVGhpcyBpcyByZXR1cm5lZCBhY2N1cmF0ZWx5IHdoZXRoZXIgb3Igbm90IHRoYXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYSBuZXdsaW5lLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyBvZiBhXG4gKiBsaW5lIHdpdGhpbiBhIGRhdGEgdmlldywgYXMgd2VsbCBhcyB0aGUgbnVtYmVyIG9mIHRoYXQgbGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMaW5lSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgYWx3YXlzIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGRhdGEgdmlldyBpdHNlbGYsIG9yIHRoZSBmaXJzdCBieXRlIGFmdGVyIGEgbmV3bGluZVxuICogICAgIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbmQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGVpdGhlciB0aGUgbGFzdFxuICogICAgIGJ5dGUgaW4gdGhlIGRhdGEgdmlldyBvciB0aGUgYnl0ZSBpbW1lZGlhdGVseSBwcmVjZWRpbmcgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiBhIG5ld2xpbmUgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmVubyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgYm91bmRlZCBieVxuICogICAgIGluZGV4ZXMgYHN0YXJ0YCBhbmQgYGVuZGAuIFRoaXMgbnVtYmVyIGlzIDEtYmFzZWQsIGFzIGl0IGlzIHVzZWRcbiAqICAgICBmb3IgZGlzcGxheSBvZiBhbiBlcnJvciBwb3NpdGlvbiBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIHRoZSBhZGp1c3RlZCBsaW5lIGFuZCBjb2x1bW4gaW5kZXggdGhhdCByZXN1bHRzXG4gKiBmcm9tIHRhYiBleHBhbnNpb24uXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFiYmVkTGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsaW5lIFRoZSBzdHJpbmcgb2YgdGV4dCByZXByZXNlbnRpbmcgb25lIGxpbmUsXG4gKiAgICAgd2l0aCB0YWIgY2hhcmFjdGVycyByZXBsYWNlZCBieSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIHNwYWNlcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgY2hhcmFjdGVyIGluZGV4IHBhc3NlZCBpbnRvIHRoZVxuICogICAgIGZ1bmN0aW9uLCBhZGp1c3RlZCBieSB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRhYnMgYW5kXG4gKiAgICAgdGhlIHNwYWNlcyB1c2VkIHRvIHJlcGxhY2UgdGhlbS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGNvbHVtbiBpbmRleCBhbmQgbGluZVxuICogbGVuZ3RoIGFmdGVyIGFjY291bnRpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2xJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xubyBUaGUgYWRqdXN0ZWQgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgcG9pbnRlZCB0byBieSB0aGUgYGNoYXJJbmRleGAgcGFyYW1ldGVyLiBUaGlzIGlzIGFkanVzdGVkIGJ5IGFueVxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0aGF0IG1heSBhcHBlYXIgaW4gdGhlIGxpbmUgYW5kIGlzIHR1cm5lZFxuICogICAgIGludG8gYSAxLWJhc2VkIG51bWJlciBmb3IgZGlzcGxheSBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGlzIGlzIHJldHVybmVkIHNvbGVseSB0byBiZSBwYXNzZWQgaW50b1xuICogICAgIG90aGVyIGZ1bmN0aW9ucyB3aG8gdGhlbiB3b24ndCBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoZSB3aWR0aCBvZlxuICogICAgIHRoZSBsaW5lIGFjY291bnRpbmcgZm9yIHRob3NlIHNhbWUgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICovXG5cbi8qKlxuICAqIE9iamVjdCBjb250YWluaW5nIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzLlxuICAqXG4gICogQHR5cGVkZWYge29iamVjdH0gUG9zaXRpb25cbiAgKiBAcHJvcGVydHkge251bWJlcn0gbGluZSBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0byBieVxuICAqICAgICB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LlxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2x1bW4gVGhlIGNvbHVtbiBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0b1xuICAqICAgICBieSB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LCBhZGp1c3RlZCBmb3IgY2hhcmFjdGVyIHdpZHRoIGFuZFxuICAqICAgICB0YWIgc2l6ZS5cbiAgKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGNhbGxlZCBieSBgZm9ybWF0RXJyb3JzYCB0byBkbyB0aGUgYWN0dWFsIGZvcm1hdHRpbmcuIEFcbiAqIGRlZmF1bHQgZm9ybWF0dGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGJ1dCBjYW4gYmUgcmVwbGFjZWQgaWZcbiAqIGRlc2lyZWQuXG4gKlxuICogQGNhbGxiYWNrIEZvcm1hdHRlclxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGJlaW5nIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIGB2aWV3YCBvZiB0aGUgYnl0ZSB3aGVyZSB0aGVcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXG4gKiAgICAgc3RvcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSBkaXNwbGF5IHdpZHRoIG9mIHRoZSBsaW5lIHdoZXJlXG4gKiAgICAgdGhlIGVycm9yIG9jY3VycmVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlXG4gKiAgICAgdHJ1bmNhdGVkIHdpdGggZWxsaXBzZXMgYmVmb3JlIGFuZC9vciBhZnRlci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgbXVsdGktbGluZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBzdXBwbGllZFxuICogdmlldyBpcyBhIG5ld2xpbmUuIEFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzIGlzIHJldHVybmVkO1xuICogYG5ld2xpbmVgIGlzIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoYXQgY2hhcmFjdGVyIGlzIGFcbiAqIG5ld2xpbmU7IGBza2lwYCBpcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciAoYW5kIHRoZXJlZm9yZSBob3cgbWFueVxuICogYnl0ZXMgdG8gc2tpcCB1bnRpbCB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gY2hlY2spLlxuICpcbiAqIEFsbCBVbmljb2RlIG5ld2xpbmVzIChDUiwgTEYsIEZGLCBWVCwgTkVMLCBMUywgYW5kIFBTKSBhcmUgaGFuZGxlZCxcbiAqIGFsb25nIHdpdGggdGhlIG11bHRpLWNoYXJhY3RlciBuZXdsaW5lIENSK0xGLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW50byBgdmlld2AgaW5kaWNhdGluZyB0aGUgYnl0ZSB0b1xuICogICAgIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGEgbmV3bGluZS5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge05ld2xpbmVJbmZvfSBOZXdsaW5lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05ld2xpbmUoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmIChieXRlID09PSAweDBhIHx8IGJ5dGUgPT09IDB4MGIgfHwgYnl0ZSA9PT0gMHgwYykge1xuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGJ5dGUgPT09IDB4MGQpIHtcbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4MGQgJiYgbmV4dEJ5dGUgPT09IDB4MGEpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG5cbiAgICBpZiAoYnl0ZSA9PT0gMHhjMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4NSkgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMikge1xuICAgICAgY29uc3QgdGhpcmRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDIpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHhlMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4MFxuICAgICAgICAmJiAodGhpcmRCeXRlID09PSAweGE4IHx8IHRoaXJkQnl0ZSA9PT0gMHhhOSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbmV3bGluZTogZmFsc2UsIHNraXA6IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIGluZGV4ZXMgb2YgdGhlIGxpbmUgaW4gdGhlIGdpdmVuXG4gKiB2aWV3IHRoYXQgY29udGFpbnMgdGhlIGJ5dGUgcG9pbnRlZCBhdCBieSBgaW5kZXhgLiBJdCBkb2VzIHRoaXMgYnlcbiAqIGRldGVybWluaW5nIHdoZXJlIG5ld2xpbmVzIGFyZSBhbmQgdGhlbiBmaWd1cmluZyBvdXQgd2hpY2ggb25lcyBjb21lXG4gKiBjbG9zZXN0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGluZGV4LiBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzIHRoYXQgY2FtZVxuICogYmVmb3JlIHRoZSBpbmRleCAoYW5kIHRoZXJlZm9yZSB0aGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgd2l0aCB0aGVcbiAqIGluZGV4KSBpcyBhbHNvIGNvdW50ZWQuXG4gKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aHJlZSBwcm9wZXJ0aWVzOiBgc3RhcnRgIGlzIHRoZSBpbmRleCBvZiB0aGVcbiAqIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmUsIGBlbmRgIGlzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBieXRlIG9mIHRoZVxuICogbGluZSAobm90IGNvdW50aW5nIHRoZSBuZXdsaW5lKSwgYW5kIGBsaW5lbm9gIGlzIHRoZSBsaW5lIG51bWJlclxuICogd2hlcmUgdGhlIGluZGV4IGFwcGVhcnMuIGBsaW5lbm9gIGlzIDEtaW5kZXhlZCBzaW5jZSBpdCBpcyBtZWFudCBmb3JcbiAqIGRpc3BsYXkgaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgbGluZVxuICogICAgIGluZGV4IGluZm9ybWF0aW9uIGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtMaW5lSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZ1xuICogICAgIGluZGV4ZXMgb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldykge1xuICBsZXQgc3RhcnQgPSAwXG4gIGxldCBsaW5lbm8gPSAxIC8vIDEtYmFzZWRcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBjb25zdCB7IG5ld2xpbmUsIHNraXAgfSA9IGlzTmV3bGluZShpLCB2aWV3KVxuICAgIGlmIChuZXdsaW5lKSB7XG4gICAgICBpZiAoaSArIHNraXAgPiBpbmRleCkge1xuICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kOiBpIC0gMSwgbGluZW5vIH1cbiAgICAgIH1cbiAgICAgIGxpbmVubysrXG4gICAgICBzdGFydCA9IGkgKyBza2lwXG4gICAgfVxuICAgIGkgKz0gc2tpcFxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQ6IHZpZXcuYnl0ZUxlbmd0aCAtIDEsIGxpbmVubyB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY2hhcmFjdGVyIGluZGV4IChhcyBvcHBvc2VkIHRvIGJ5dGUgaW5kZXgpIHdpdGhpbiBhXG4gKiBzaW5nbGUgbGluZSBvZiB0ZXh0IG9mIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCB0byBieSBgaW5kZXhgIHdpdGhpblxuICogYHZpZXdgLiBUaGUgYHN0YXJ0YCBwYXJhbWV0ZXIgc2V0cyB0aGUgZmlyc3QgYnl0ZSBvZiBhIFwibGluZVwiIHdpdGhpblxuICogdGhlIHZpZXcgYW5kIGNhbiBiZSBjYWxjdWxhdGVkIHdpdGgge0BsaW5rIGdldExpbmVJbmRleGVzfSBhYm92ZS5cbiAqXG4gKiBJbiBsaW5lcyB3aXRoIG9ubHkgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycywgdGhlIGNoYXJhY3RlciBpbmRleCB3aWxsXG4gKiBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGluZGV4IC0gc3RhcnRgLiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uXG4gKiBpcyB0byBhZGp1c3Qgd2hlbiBtdWx0aS1ieXRlIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgY2hhcmFjdGVyXG4gKiAgICAgaW5kZXggaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgYnl0ZSBvZiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4LCB3aXRoaW4gYSBzaW5nbGUgbGluZSBvZiB0ZXh0LCBvZiB0aGVcbiAqICAgICBjaGFyYWN0ZXIgd2hvc2UgZmlyc3QgYnl0ZSBpcyBiZWluZyBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KSB7XG4gIGxldCBjaGFySW5kZXggPSAwXG4gIGxldCBieXRlSW5kZXggPSBzdGFydFxuICB3aGlsZSAoYnl0ZUluZGV4IDwgaW5kZXggJiYgYnl0ZUluZGV4IDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgYnl0ZUluZGV4ICs9IG5leHRDaGFyV2lkdGgoYnl0ZUluZGV4LCB2aWV3KVxuICAgIGNoYXJJbmRleCsrXG4gIH1cbiAgcmV0dXJuIGNoYXJJbmRleFxufVxuXG4vKipcbiAqIEV4cGFuZHMgdGFicyBpbnRvIHNwYWNlcyBhbmQgY2FsY3VsYXRlcyB0aGUgY29sdW1uIGluZGV4IG9mIHRoZVxuICogaW5kZXhlZCBjaGFyYWN0ZXIgYWRqdXN0aW5nIGZvciB0aG9zZSBzcGFjZXMuIFRoZSBudW1iZXIgb2Ygc3BhY2VzIGluXG4gKiBlYWNoIHRhYiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggYHRhYlNpemVgLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IGBsaW5lYCBpcyB0aGVcbiAqIGlucHV0IGxpbmUgd2l0aCB0YWJzIGV4cGFuZGVkIGludG8gc3BhY2VzLCBhbmQgYGNvbEluZGV4YCBpcyB0aGVcbiAqIGluZGV4IG9mIHRoZSBjb2x1bW4gdGhhdCBoYXMgdGhlIGNoYXJhY3RlciBwb2ludGVkIGF0IGJ5IHRoZVxuICogY2hhcmFjdGVyIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFySW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdFxuICogICAgIHdpdGhpbiB0aGUgbGluZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgdGFiaWZpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3BhY2VzIHRoYXQgY2FuIHJlcGxhY2VcbiAqICAgICBhIHRhYi4gTm90ZSB0aGF0IHRhYnMgYXJlIHRyZWF0ZWQgYXMgc3RvcHM7IHRoZXkgd2lsbCBiZSBvZlxuICogICAgIHZhcnlpbmcgc2l6ZXMgdGhhdCByZXN1bHRzIGluIHRoZW0gYWx3YXlzIGVuZGluZyBhdCBhIGNvbHVtbiB0aGF0XG4gKiAgICAgaXMgYSBtdWx0aXBsZSBvZiBgdGFiU2l6ZWAuXG4gKiBAcmV0dXJucyB7VGFiYmVkTGluZUluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsaW5lIGFmdGVyIHJlcGxhY2luZ1xuICogICAgIHRhYnMgd2l0aCBzcGFjZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWJpZnkoY2hhckluZGV4LCBsaW5lLCB0YWJTaXplKSB7XG4gIGNvbnN0IHRhYkluZGV4ZXMgPSBbXVxuICBsZXQgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB3aGlsZSAodGFiTWF0Y2ggIT09IG51bGwpIHtcbiAgICB0YWJJbmRleGVzLnB1c2godGFiTWF0Y2guaW5kZXgpXG4gICAgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB9XG5cbiAgLy8gcmVwbGFjZSBlYWNoIHRhYiB3aXRoIHRoZSBjb3JlY3QgbnVtYmVyIG9mIHNwYWNlcywgc2hpZnRpbmcgdGhlXG4gIC8vIHJlbWFpbmluZyBpbmRleGVzIGJ5IHRoYXQgYW1vdW50XG4gIGxldCBvZmZzZXQgPSAwXG4gIGxldCBwcmVJbmRleE9mZnNldCA9IDBcbiAgbGV0IHJlc3VsdCA9IGxpbmVcblxuICBmb3IgKGNvbnN0IHRhYkluZGV4IG9mIHRhYkluZGV4ZXMpIHtcbiAgICBjb25zdCBhY3R1YWxJbmRleCA9IHRhYkluZGV4ICsgb2Zmc2V0XG4gICAgY29uc3Qgc3BhY2VDb3VudCA9IHRhYlNpemUgLSBhY3R1YWxJbmRleCAlIHRhYlNpemVcbiAgICBpZiAoYWN0dWFsSW5kZXggPCBjaGFySW5kZXggKyBwcmVJbmRleE9mZnNldCkge1xuICAgICAgcHJlSW5kZXhPZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICB9XG4gICAgb2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBhY3R1YWxJbmRleCkgKyAnICcucmVwZWF0KHNwYWNlQ291bnQpXG4gICAgICArIHJlc3VsdC5zdWJzdHJpbmcoYWN0dWFsSW5kZXggKyAxKVxuICB9XG4gIHJldHVybiB7IGxpbmU6IHJlc3VsdCwgY29sSW5kZXg6IHByZUluZGV4T2Zmc2V0ICsgY2hhckluZGV4IH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBmaW5hbCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCB0b1xuICogYnkgdGhlIGNvbHVtbiBpbmRleC4gVGhpcyBjb2x1bW4gbnVtYmVyIGlzIDEtYmFzZWQgKGZvciBkaXNwbGF5LCB0aGVcbiAqIHNhbWUgYXMgdGhlIGxpbmUgbnVtYmVyIGZyb20gYGdldExpbmVJbmRleGVzYCkgYW5kIGlzIGFkanVzdGVkIGZvclxuICogemVyby13aWR0aCBjaGFyYWN0ZXJzIHN1Y2ggYXMgZm9ybWF0dGluZyBjaGFyYWN0ZXJzIGFuZCBub24tc3BhY2luZ1xuICogbWFya3MuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdHdvIHByb3BldGllczogYGNvbG5vYCBpcyB0aGVcbiAqIDEtaW5kZXhlZCBjb2x1bW4gbnVtYmVyLCBhbmQgYGxlbmd0aGAgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGluZVxuICogYWRqdXN0aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoZSBsYXR0ZXIgaXMgcHJvdmlkZWQgc28gaXRcbiAqIGRvZXNuJ3QgaGF2ZSB0byBiZSByZWNhbGN1bGF0ZWQgYnkgYHNob3dgLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNvbHVtbiB3aXRoaW4gdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgcG90ZW50aWFsbHkgY29udGFpbmluZ1xuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0byBhY2NvdW50IGZvci5cbiAqIEByZXR1cm5zIHtDb2xJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKSB7XG4gIGxldCBpbmRleCA9IGNvbEluZGV4XG4gIGNvbnN0IG1hdGNoZXMgPSBbXVxuXG4gIGxldCBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIHdoaWxlIChtYXRjaCAhPT0gbnVsbCkge1xuICAgIG1hdGNoZXMucHVzaChtYXRjaC5pbmRleClcbiAgICBpZiAobWF0Y2guaW5kZXggPCBpbmRleCkgaW5kZXgtLVxuICAgIG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbG5vOiBpbmRleCArIDEsIC8vIDEtYmFzZWRcbiAgICBsZW5ndGg6IGNoYXJMZW5ndGgobGluZSkgLSBtYXRjaGVzLmxlbmd0aCxcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyBjb250YWluaW5nIG9uZSBsaW5lIHRoYXQgaXMgdGhlIHRleHQgYXQgYW5kIGFyb3VuZFxuICogdGhlIGNvbHVtbiB0byBiZSBkaXNwbGF5ZWQsIGFuZCBvbmUgbGluZSB0aGF0IGlzIGEgY2FyZXQgcG9pbnRpbmcgdG9cbiAqIHRoYXQgcGFydGljdWxhciBjb2x1bW4uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhZGRzIGVsbGlwc2VzIGFzIG5lZWRlZCB0byB0aGUgZnJvbnQgYW5kL29yIHRoZSBiYWNrIG9mXG4gKiB0aGUgbGluZSBpbiBvcmRlciB0byBnZXQgdGhlIGNvbHVtbiBpbnRvIHRoZSB2aXNpYmxlIGFyZWEsIGJhc2VkIG9uXG4gKiB0aGUgYG1heFdpZHRoYCBvZiB0aGUgbGluZSB0byBkaXNwbGF5LiBUaGUgYGxlbmd0aGAgcGFyYW1ldGVyIGlzIHRoZVxuICogYGxlbmd0aGAgcmV0dXJuZWQgYnkgYGdldENvbE51bWJlcmAgYW5kIGlzIGhlcmUganVzdCB0byBhdm9pZCBoYXZpbmdcbiAqIHRvIHJlY2FsY3VsYXRlIGl0IGluIHRoaXMgZnVuY3Rpb24gd2hlbiBpdCBhbHJlYWR5IG5lZWRlZCB0byBiZVxuICogY2FsY3VsYXRlZCBpbiB0aGUgb3RoZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvciB0YWJzIGFuZFxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xubyBUaGUgY29sdW1uIG51bWJlciB3aGVyZSB0aGUgY2FyZXQgc2hvdWxkIHBvaW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwb3RlbnRpYWxseSB0cnVuY2F0ZWQgbGluZSBvZiB0ZXh0LCBmb2xsb3dlZCBieVxuICogICAgIGFub3RoZXIgbGluZSBjb250YWluaW5nIGEgY2FyZXQgcG9pbnRpbmcgYXQgdGhlIGRlc2lnbmF0ZWRcbiAqICAgICBjb2x1bW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG5cbiAgLy8gRmlyc3QgY2FzZTogdGhlIGxpbmUgaXMgc2hvcnRlciB0aGFuIG1heFdpZHRoLiBEaXNwbGF5IHRoZSBsaW5lXG4gIC8vIHdpdGggdGhlIGNhcmV0IHBvc2l0aW9uZWQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAmJiBsZW5ndGggPD0gbWF4V2lkdGgpIHtcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lfVxcbiR7c3B9JHsnICcucmVwZWF0KGNvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIFNlY29uZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyB0byBhIGNoYXJhY3RlciBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy5cbiAgLy8gRGlzcGxheSB0aGUgZmlyc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGFmdGVyIGl0IGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAtIDMpIHtcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lLnN1YnN0cmluZygwLCBtYXhXaWR0aCAtIDMpfS4uLlxcbiR7c3B9JHtcbiAgICAgICcgJy5yZXBlYXQoY29sbm8gLSAxKVxuICAgIH1eYFxuICB9XG5cbiAgLy8gVGhpcmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgYXQgYSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpXG4gIC8vIGNoYXJhY3RlcnMgYnV0IGlzIGluIHRoZSBsYXN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIERpc3BsYXlcbiAgLy8gdGhlIGxhc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGJlZm9yZSBpdCwgY2FsY3VsYXRlIGEgbmV3XG4gIC8vIHBvc2l0aW9uIGZvciB0aGUgY2FyZXQsIGFuZCBwb3NpdGlvbiBpdCBiZWxvdyB0aGUgbGluZS5cbiAgaWYgKGNvbG5vID49IGxlbmd0aCAtIG1heFdpZHRoICsgMykge1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzXG4gICAgY29uc3QgbmV3Q29sbm8gPSBjb2xubyAtIChsZW5ndGggLSBtYXhXaWR0aClcbiAgICByZXR1cm4gYCR7c3B9Li4uJHtsaW5lLnN1YnN0cmluZyhzdGFydCl9XFxuJHtzcH0keycgJy5yZXBlYXQobmV3Q29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gRmluYWwgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gbWF4V2lkdGggLSAzIGFuZCB0aGUgY2FyZXRcbiAgLy8gZG9lcyBub3QgcG9pbnQgdG8gYSBjaGFyYWN0ZXIgd2l0aGluIGVpdGhlciB0aGUgZmlyc3Qgb3IgbGFzdFxuICAvLyAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBTaGlmdCB0aGUgbGluZSB0byBtYWtlIHRoZSBjYXJldCBwb2ludFxuICAvLyBhdCB0aGUgbWlkZGxlIG9mIGl0LCBhZGQgYC4uLmAgdG8gdGhlIHN0YXJ0ICphbmQqIGVuZCwgYW5kIHBvc2l0aW9uXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cbiAgY29uc3Qgc3RhcnQgPSBjb2xubyAtIDEgLSBNYXRoLmNlaWwobWF4V2lkdGggLyAyKSArIDNcbiAgY29uc3QgZW5kID0gY29sbm8gLSAxICsgTWF0aC5mbG9vcihtYXhXaWR0aCAvIDIpIC0gM1xuICByZXR1cm4gYCR7c3B9Li4uJHtcbiAgICBsaW5lLnN1YnN0cmluZyhzdGFydCwgZW5kKVxuICB9Li4uXFxuJHtzcH0ke1xuICAgICcgJy5yZXBlYXQoTWF0aC5jZWlsKG1heFdpZHRoIC8gMikpXG4gIH1eYFxufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBzZXQgb2YgbmVzdGVkIChvciBjb21wb3VuZCkgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHsoTmVzdGVkRXJyb3JbXXxDb21wb3VuZEVycm9yW10pfSBuZXN0ZWRzIEFuIGFycmF5IG9mIGVpdGhlclxuICogICAgIG5lc3RlZCBvciBjb21wb3VuZCBlcnJvcnMgdG8gZm9ybWF0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcbiAqICAgICBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGVudCBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgdGhlIGVycm9yXG4gKiAgICAgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgbmVzdGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdE5lc3RlZChuZXN0ZWRzLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KSB7XG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG4gIGNvbnN0IG5lc3RlZE1zZ3MgPSBuZXN0ZWRzLm1hcChuID0+IHtcbiAgICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBuLmN0eFxuICAgIGNvbnN0IGxhYmVsID0gbi5sYWJlbFxuICAgICAgPyBgXFxuJHtzcH0ke24ubGFiZWx9IGNvdWxkIG5vdCBiZSBwYXJzZWQgYmVjYXVzZTpcXG5cXG5gXG4gICAgICA6IGBcXG4ke3NwfVRoZSBwYXJzZXIgYmFja3RyYWNrZWQgYWZ0ZXI6XFxuXFxuYFxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxuICB9KVxuICByZXR1cm4gbmVzdGVkTXNncy5qb2luKCcnKVxufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhIHN0cmluZyBlbmRzIHdpdGggYSBjZXJ0YWluIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nIHRoYXQgaXMgc3VwcG9zZWQgdG8gaGF2ZSBhIGNlcnRhaW5cbiAqICAgICBudW1iZXIgb2YgbmV3bGluZXMgYXQgdGhlIGVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBidXQgd2l0aCBgY291bnRgIG5ld2xpbmVzIGF0IHRoZVxuICogICAgIGVuZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlTmV3bGluZXModGV4dCwgY291bnQpIHtcbiAgbGV0IHJlc3VsdCA9IHRleHRcbiAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCByZXN1bHQubGVuZ3RoIC0gMSlcbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgJ1xcbicucmVwZWF0KGNvdW50KVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGZvcm1hdHRlciBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaGFzIHRoZSBmb2xsb3dpbmcgcGFydHM6XG4gKlxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXG4gKiAgICB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAyLiBBIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgbG9jYXRpb24uIFRoaXMgcGFydCBnZW5lcmF0ZXNcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXG4gKiAgICBpbnB1dCBsaW5lIG9yLCBpZiB0aGF0J3MgdG9vIGxvbmcsIGEgcG9ydGlvbiBvZiB0aGUgaW5wdXQgbGluZVxuICogICAgc3RhcnRlZCBhbmQvb3IgZW5kZWQgd2l0aCBlbGxpcHNlcyB0aGF0IGNvbnRhaW5zIHRoZSBlcnJvclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXG4gKiAgICBpbiB0aGUgZmlyc3QgbGluZSB0aGF0IHNob3dzIGV4YWN0bHkgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMy4gVGhlIGZpcnN0IHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSwgaWYgYW55LlxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXG4gKiAgICBjb21tbWFzIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgbnVtYmVyIG9mIG1lc3NhZ2VzLlxuICogNS4gVGhlIGZpcnN0IG9mIHRoZSBnZW5lcmljIG1lc3NhZ2VzLCBpZiBhbnkuXG4gKlxuICogVGhlIHBvc2l0aW9uIG9mIHRoZSBlcnJvciBpcyBpbmRpY2F0ZWQgYnkgdGhlIGBpbmRleGAgcGFyYW1ldGVyLFxuICogd2hpY2ggaXMgdGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkgb2YgYnl0ZXMgaW4gYHZpZXdgIHdoZXJlIHRoZVxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xuICogZmxhdCBhcnJheSBvZiBieXRlcyB0YWtlcyB0aGUgZm9sbG93aW5nIGludG8gYWNjb3VudDpcbiAqXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cbiAqICAgYmUgMSwgMiwgMywgb3IgNCBieXRlcyBsb25nKVxuICogKiBNdWx0aS1jaGFyYWN0ZXIgYW5kIHNpbmdsZS1jaGFyYWN0ZXIgbXVsdGktYnl0ZSBsaW5lIGVuZGluZ3NcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcbiAqICAgYHRhYlNpemVgIHBhcmFtZXRlclxuICogKiBaZXJvLXdpZHRoIGNoYXJhY3RlcnMsIHN1Y2ggYXMgemVyby13aWR0aCBzcGFjZXMgYW5kIGpvaW5lcnMsIFJUTFxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcbiAqICAgbWFya3MsIHVtbGF1dHMgb3ZlciBMYXRpbiBjaGFyYWN0ZXJzLCBldGMuKVxuICpcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHR3byBsaW5lcyBvZiBjb2RlIHVzZXMgYHN0cmluZ1RvVmlld2AsIGFuIGludGVybmFsXG4gKiB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQsIGFzIGl0cyBuYW1lIHN1Z2dlc3RzLCB0dXJucyBhIHN0cmluZyBpbnRvIGFcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcbiAqIHVzYWdlLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8ga25vdy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZpZXcgPSBzdHJpbmdUb1ZpZXcoJ1xcdE9ub21hdG9wb2VpYVxcdFxcdFxcdFxcdOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4hycpXG4gKiBjb25zdCBtZXNzYWdlID0gZm9ybWF0KFtleHBlY3RlZCgnYSBkaWdpdCcpXSwgMjksIHZpZXcsIDQsIDcyKVxuICogYGBgXG4gKlxuICogRnJvbSB0aGlzIGNhbGwgdG8gYGZvcm1hdGAsIHRoZSBmb2xsb3dpbmcgbXVsdGktbGluZSBzdHJpbmcgd2lsbCBiZVxuICogcHJvZHVjZWQ6XG4gKlxuICogYGBgXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxuICpcbiAqICAgICBPbm9tYXRvcG9laWEgICAgICAgICAgICAgICAg4LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXG4gKiBFeHBlY3RlZCBhIGRpZ2l0XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0byBiZSBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIHRoZSB2aWV3IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmVcbiAqICAgICB0YWIgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aD03Ml0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRlbnQ9MF0gVGhlIG51bWJlciBvZiBzcGFjZXMgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXG4gKiAgICAgaW5kZW50ZWQuIFRoaXMgc2hvdWxkIGJlIDAgYW5kIGluY3JlYXNlZCBvbmx5IGZvciBuZXN0ZWQgZXJyb3JzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KFxuICBlcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplID0gOCwgbWF4V2lkdGggPSA3MiwgaW5kZW50ID0gMCxcbikge1xuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG5cbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxuICBjb25zdCB7IGNvbG5vLCBsZW5ndGggfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICBjb25zdCBwb3NpdGlvbiA9IGAke3NwfVBhcnNlIGVycm9yIGF0IChsaW5lICR7bGluZW5vfSwgY29sdW1uICR7Y29sbm99KTpgXG4gIGNvbnN0IGRpc3BsYXkgPSBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQpXG4gIGNvbnN0IGdlbmVyaWMgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuR2VuZXJpYylcbiAgY29uc3QgdW5leHBlY3RlZCA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5VbmV4cGVjdGVkKVxuICBjb25zdCBleHBlY3RlZCA9IGNvbW1hU2VwYXJhdGUoXG4gICAgZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuRXhwZWN0ZWQpXG4gICAgICAubWFwKGVycm9yID0+IGVycm9yLmxhYmVsKSxcbiAgKVxuXG4gIGNvbnN0IG5lc3RlZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZClcbiAgY29uc3QgY29tcG91bmQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5Db21wb3VuZClcblxuICBjb25zdCB1bmV4cE1zZyA9IHVuZXhwZWN0ZWQgPyBgJHtzcH1VbmV4cGVjdGVkICR7dW5leHBlY3RlZC5sYWJlbH1cXG5gIDogJydcbiAgY29uc3QgZXhwTXNnID0gZXhwZWN0ZWQubGVuZ3RoID8gYCR7c3B9RXhwZWN0ZWQgJHtleHBlY3RlZH1cXG5gIDogJydcbiAgY29uc3QgZ2VuZXJpY01zZyA9IGdlbmVyaWMgPyBgJHtzcH0ke2dlbmVyaWMubGFiZWx9XFxuYCA6ICcnXG5cbiAgY29uc3QgbmVzdGVkTXNnID0gZm9ybWF0TmVzdGVkKG5lc3RlZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgY29tcG91bmRNc2cgPSBmb3JtYXROZXN0ZWQoY29tcG91bmQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXG5cbiAgY29uc3QgdW5rbm93bk1zZyA9IGVycm9ycy5sZW5ndGggPT09IDAgPyBgJHtzcH1Vbmtub3duIGVycm9yKHMpXFxuYCA6ICcnXG4gIGNvbnN0IGVvZk1zZyA9IGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aFxuICAgID8gYCR7c3B9Tm90ZTogZmFpbHVyZSBvY2N1cnJlZCBhdCB0aGUgZW5kIG9mIGlucHV0XFxuYCA6ICcnXG5cbiAgcmV0dXJuIGVuc3VyZU5ld2xpbmVzKFxuICAgIGAke3Bvc2l0aW9ufVxcblxcbiR7ZGlzcGxheX1cXG4ke3VuZXhwTXNnfSR7ZXhwTXNnfSR7Z2VuZXJpY01zZ30ke3Vua25vd25Nc2d9YFxuICAgICAgKyBgJHtlb2ZNc2d9JHtjb21wb3VuZE1zZ30ke25lc3RlZE1zZ31gLFxuICAgIDIsXG4gIClcbn1cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIEFjY2VwdHMgYSBwYXJzZXIgY29udGV4dCBhbmQgcHJvZHVjZXMgYW4gZXJyb3IgbWVzc2FnZSBmcm9tIGl0LlxuICpcbiAqIEEgZGVmYXVsdCBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQgYnV0IGFuIGFsdGVybmF0ZSBvbmUgY2FuIGJlIHBhc3NlZFxuICogaW4uIFRoZSBzYW1lIGdvZXMgZm9yIHRhYiBzaXplICh1c2VkIHRvIGV4cGFuZCB0YWJzIGluIHBhcnNlZCB0ZXh0O1xuICogZGVmYXVsdHMgdG8gOCBpbiB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIpIGFuZCBtYXggd2lkdGggKGZvciB0aGUgZXJyb3JcbiAqIG1lc3NhZ2UgaXRzZWxmOyBkZWZhdWx0cyB0byA3MiBpbiB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIpLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSByZXBseSByZXR1cm5lZCBieSB0aGUgcGFyc2VyIHdoZW4gdGhlIGVycm9yXG4gKiAgICAgaGFwcGVuZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemVdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xuICogICAgIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge0Zvcm1hdHRlcn0gW2Zvcm1hdHRlcj1mb3JtYXRdIFRoZSBmdW5jdGlvbiB0byB3aGljaCB0aGVcbiAqICAgICBhY3R1YWwgZm9ybWF0dGluZyBpcyBkZWxlZ2F0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcnMocmVwbHksIHRhYlNpemUsIG1heFdpZHRoLCBmb3JtYXR0ZXIgPSBmb3JtYXQpIHtcbiAgY29uc3QgW2N0eCwgcmVzdWx0XSA9IHJlcGx5XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gZm9ybWF0dGVyKHJlc3VsdC5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCBieXRlIG9mIHRoZSBzdXBwbGllZCBjb250ZXh0LiBUaGVcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxuICogdGhlIDEtYmFzZWQgbGluZSBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGhlIGJ5dGUgYXQgdGhlIGNvbnRleHQnc1xuICogaW5kZXggd2l0aGluIHRoZSBjb250ZXh0J3MgZGF0YSB2aWV3LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHdob3NlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmVpbmdcbiAqICAgICBjYWxjdWxhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuIFRoZSBjdXJyZW50IHBvc2l0aW9uJ3MgY29sdW1uIG51bWJlciBpcyBhZGp1c3RlZCBiYXNlZFxuICogICAgIG9uIHRoaXMgcGFyYW1ldGVyIHdoZW4gdGFiIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oY3R4LCB0YWJTaXplID0gOCkge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgXyB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIHJldHVybiB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2xubyB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSU1xuXG5leHBvcnQge1xuICBhbHBoYSxcbiAgYW55LFxuICBhbnlPZixcbiAgY2hhcixcbiAgY2hhckksXG4gIGRpZ2l0LFxuICBlb2YsXG4gIGhleCxcbiAgbGV0dGVyLFxuICBsb3dlcixcbiAgbm9uZU9mLFxuICBvY3RhbCxcbiAgcmFuZ2UsXG4gIHNhdGlzZnksXG4gIHNhdGlzZnlNLFxuICB1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXG5leHBvcnQge1xuICBmYWlsTm9ybWFsbHksXG4gIGZhaWxGYXRhbGx5LFxufSBmcm9tICcuL3BhcnNlcnMvbWlzYydcbmV4cG9ydCB7XG4gIGFscGhhVSxcbiAgbGV0dGVyVSxcbiAgbG93ZXJVLFxuICBuZXdsaW5lLFxuICBuZXdsaW5lVSxcbiAgcmVnZXgsXG4gIHNwYWNlLFxuICBzcGFjZVUsXG4gIHNwYWNlcyxcbiAgc3BhY2VzMSxcbiAgc3BhY2VzMVUsXG4gIHNwYWNlc1UsXG4gIHVwcGVyVSxcbn0gZnJvbSAnLi9wYXJzZXJzL3JlZ2V4J1xuZXhwb3J0IHtcbiAgYWxsLFxuICBhbnlTdHJpbmcsXG4gIHN0cmluZyxcbiAgc3RyaW5nSSxcbn0gZnJvbSAnLi9wYXJzZXJzL3N0cmluZydcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTUJJTkFUT1JTXG5cbmV4cG9ydCB7XG4gIGFsdCxcbiAgZGVmLFxuICBlbXB0eSxcbiAgbm90LFxuICBvcHQsXG4gIHBlZWssXG59IGZyb20gJy4vY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUnXG5leHBvcnQge1xuICBhbmRUaGVuQixcbiAgYXBwbHlCLFxuICBhdHRlbXB0LFxuICBhdHRlbXB0TSxcbiAgYmV0d2VlbkIsXG4gIGJsb2NrQixcbiAgY2hhaW5CLFxuICBsYWJlbCxcbiAgbGVmdEIsXG4gIG1hbnlUaWxsQixcbiAgcGlwZUIsXG4gIHJlcGVhdEIsXG4gIHJpZ2h0QixcbiAgc2VxdWVuY2VCLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2JhY2t0cmFja2luZydcbmV4cG9ydCB7XG4gIGNvbXBhY3QsXG4gIGZpZnRoLFxuICBmaXJzdCxcbiAgZm91cnRoLFxuICBqb2luLFxuICBudGgsXG4gIHNlY29uZCxcbiAgdGhpcmQsXG4gIHZhbHVlLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL21pc2MnXG5leHBvcnQge1xuICBhbHdheXMsXG4gIGFuZFRoZW4sXG4gIGFwcGx5LFxuICBjaGFpbixcbiAgbWFwLFxuICBvckVsc2UsXG59IGZyb20gJy4vY29tYmluYXRvcnMvcHJpbWl0aXZlJ1xuZXhwb3J0IHtcbiAgYXNzb2MxTCxcbiAgYXNzb2MxUixcbiAgYXNzb2NMLFxuICBhc3NvY1IsXG4gIGJldHdlZW4sXG4gIGJsb2NrLFxuICBsZWZ0LFxuICBtYW55LFxuICBtYW55MSxcbiAgbWFueVRpbGwsXG4gIHBpcGUsXG4gIHJlcGVhdCxcbiAgcmlnaHQsXG4gIHNlcEJ5LFxuICBzZXBCeTEsXG4gIHNlcEVuZEJ5LFxuICBzZXBFbmRCeTEsXG4gIHNlcSxcbiAgc2tpcCxcbiAgc2tpcE1hbnksXG4gIHNraXBNYW55MSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9zZXF1ZW5jZSdcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUiBUT09MUyBBTkQgVVRJTElUSUVTXG5cbmV4cG9ydCB7XG4gIFN0YXR1cyxcbiAgZmFpbCxcbiAgZmFpbHVyZSxcbiAgZmF0YWwsXG4gIG1heWJlRmF0YWwsXG4gIG9rLFxuICBwYXJzZSxcbiAgcGFyc2VyLFxuICBydW4sXG4gIHN0YXR1cyxcbiAgc3VjY2VlZGVkLFxuICBzdWNjZXNzLFxufSBmcm9tICcuL2NvcmUnXG5leHBvcnQge1xuICBFcnJvclR5cGUsXG4gIGNvbXBvdW5kLFxuICBleHBlY3RlZCxcbiAgZm9ybWF0RXJyb3JzLFxuICBnZW5lcmljLFxuICBnZXRQb3NpdGlvbixcbiAgbWVyZ2UsXG4gIG5lc3RlZCxcbiAgb3RoZXIsXG4gIHVuZXhwZWN0ZWQsXG59IGZyb20gJy4vZXJyb3InXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJy4vZXJyb3InXG5pbXBvcnQgeyBjb21tYVNlcGFyYXRlLCBxdW90ZSB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIGFscGhhOiAnYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXG4gIGFscGhhVTogJ2EgVW5pY29kZSBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcbiAgYW55OiAnYW55IGNoYXJhY3RlcicsXG4gIGFueU9mOiBhcnJheSA9PiAnYW55IG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXG4gIGFueVN0cmluZzogbiA9PiBgYSBzdHJpbmcgb2YgJHtufSBjaGFyYWN0ZXJzYCxcbiAgY2hhcjogYyA9PiBxdW90ZShjKSxcbiAgY2hhckk6IGMgPT4gcXVvdGUoYyksXG4gIGRpZ2l0OiAnYSBkaWdpdCcsXG4gIGVvZjogJ2VuZCBvZiBpbnB1dCcsXG4gIGhleDogJ2EgaGV4YWRlY2ltYWwgZGlnaXQnLFxuICBsZXR0ZXI6ICdhIGxldHRlcicsXG4gIGxldHRlclU6ICdhIFVuaWNvZGUgbGV0dGVyJyxcbiAgbG93ZXI6ICdhIGxvd2VyY2FzZSBsZXR0ZXInLFxuICBsb3dlclU6ICdhIFVuaWNvZGUgbG93ZXJjYXNlIGxldHRlcicsXG4gIG5ld2xpbmU6ICdhIG5ld2xpbmUnLFxuICBuZXdsaW5lVTogJ2EgVW5pY29kZSBuZXdsaW5lJyxcbiAgbm9uZU9mOiBhcnJheSA9PiAnbm9uZSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnJheS5tYXAoYyA9PiBgJyR7Y30nYCkpLFxuICBvY3RhbDogJ2FuIG9jdGFsIGRpZ2l0JyxcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBgYSBjaGFyYWN0ZXIgYmV0d2VlbiAnJHtzdGFydH0nIGFuZCAnJHtlbmR9J2AsXG4gIHJlZ2V4OiByZSA9PiBgYSBzdHJpbmcgbWF0Y2hpbmcgJHtyZX1gLFxuICBzcGFjZTogJ2Egd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICBzcGFjZXM6ICd6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzMTogJ29uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlc1U6ICd6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXMxVTogJ29uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VVOiAnYSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcbiAgc3RyaW5nOiBzdHIgPT4gcXVvdGUoc3RyKSxcbiAgc3RyaW5nSTogc3RyID0+IHF1b3RlKHN0ciksXG4gIHVwcGVyOiAnYW4gdXBwZXJjYXNlIGxldHRlcicsXG4gIHVwcGVyVTogJ2EgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyJyxcbn1cblxuZXhwb3J0IGNvbnN0IGV4cGVjdGVkcyA9IHtcbiAgYWxwaGE6IGV4cGVjdGVkKHN0cmluZ3MuYWxwaGEpLFxuICBhbHBoYVU6IGV4cGVjdGVkKHN0cmluZ3MuYWxwaGFVKSxcbiAgYW55OiBleHBlY3RlZChzdHJpbmdzLmFueSksXG4gIGFueU9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLmFueU9mKGFycmF5KSksXG4gIGFueVN0cmluZzogbiA9PiBleHBlY3RlZChzdHJpbmdzLmFueVN0cmluZyhuKSksXG4gIGNoYXI6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFyKGMpKSxcbiAgY2hhckk6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFySShjKSksXG4gIGRpZ2l0OiBleHBlY3RlZChzdHJpbmdzLmRpZ2l0KSxcbiAgZW9mOiBleHBlY3RlZChzdHJpbmdzLmVvZiksXG4gIGhleDogZXhwZWN0ZWQoc3RyaW5ncy5oZXgpLFxuICBsZXR0ZXI6IGV4cGVjdGVkKHN0cmluZ3MubGV0dGVyKSxcbiAgbGV0dGVyVTogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXJVKSxcbiAgbG93ZXI6IGV4cGVjdGVkKHN0cmluZ3MubG93ZXIpLFxuICBsb3dlclU6IGV4cGVjdGVkKHN0cmluZ3MubG93ZXJVKSxcbiAgbmV3bGluZTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lKSxcbiAgbmV3bGluZVU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZVUpLFxuICBub25lT2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3Mubm9uZU9mKGFycmF5KSksXG4gIG9jdGFsOiBleHBlY3RlZChzdHJpbmdzLm9jdGFsKSxcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBleHBlY3RlZChzdHJpbmdzLnJhbmdlKHN0YXJ0LCBlbmQpKSxcbiAgcmVnZXg6IHJlID0+IGV4cGVjdGVkKHN0cmluZ3MucmVnZXgocmUpKSxcbiAgc3BhY2U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2UpLFxuICBzcGFjZXM6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzKSxcbiAgc3BhY2VzMTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxKSxcbiAgc3BhY2VzVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXNVKSxcbiAgc3BhY2VzMVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMVUpLFxuICBzcGFjZVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VVKSxcbiAgc3RyaW5nOiBzdHIgPT4gZXhwZWN0ZWQoc3RyaW5ncy5zdHJpbmcoc3RyKSksXG4gIHN0cmluZ0k6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZ0koc3RyKSksXG4gIHVwcGVyOiBleHBlY3RlZChzdHJpbmdzLnVwcGVyKSxcbiAgdXBwZXJVOiBleHBlY3RlZChzdHJpbmdzLnVwcGVyVSksXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhc3NlcnRDaGFyLFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0U3RyaW5nLFxuICBhc3NlcnRTdHJpbmdPckFycmF5LFxuICBvcmRDaGFyRm9ybWF0dGVyLFxuICBvcmRGbkZvcm1hdHRlcixcbiAgb3JkU3RyRm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbCwgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IG5leHRDaGFyLCB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyLCBmZWVkcyBpdCB0byBhIGZ1bmN0aW9uLCBhbmRcbiAqIHN1Y2NlZWRzIG9yIGZhaWxzIGJhc2VkIG9uIHRoZSByZXR1cm4gdmFsdWUuXG4gKlxuICogVGhlcmUgaXNuJ3QgYW55dGhpbmcgaGVyZSB0aGF0IGNvdWxkbid0IGJlIHdyaXR0ZW4gd2l0aFxuICogYFN0cmluZ1BhcnNlcmAgaW5zdGVhZCwgYnV0IHdoZW4gd29ya2luZyB3aXRoIHNpbmdsZSBjaGFyYWN0ZXJzIHRoZXJlXG4gKiBhcmUgY2VydGFpbiBhc3N1bXB0aW9ucyB0aGF0IGNhbiBiZSBtYWRlIChzdWNoIGFzIHRoZSBudW1iZXIgb2ZcbiAqIGNoYXJhY3RlcnMgdGhhdCBoYXZlIHRvIGJlIHJlYWQgZnJvbSB0aGUgaW5wdXQgdmlldykgdGhhdCBhbGxvdyBpdCB0b1xuICogYmUgYSBsaXR0bGUgbW9yZSBlZmZpY2llbnQuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmNvbnN0IGNoYXJQYXJzZXIgPSBmbiA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsKGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIGZuKG5leHQpID8gb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKSA6IGZhaWwoY3R4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZCBzdWNjZWVkcyBpZlxuICogdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxuICogICAgIHRocm93IGFuIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIGlzIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYXIgPSBjID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0Q2hhcignY2hhcicsIGMpXG5cbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKGNoYXJQYXJzZXIoY2ggPT4gYyA9PT0gY2gpKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZHMuY2hhcihjKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmQgc3VjY2VlZHMgaWZcbiAqIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC4gVGhpcyBkaWZmZXJzIGZyb20gYGNoYXJgIGluIHRoYXQgdGhlXG4gKiBjb21wYXJpc29uIGRvbmUgYnkgdGhpcyBwYXJzZXIgaXMgY2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICB0aHJvdyBhbiBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCAob3IgaXRzXG4gKiAgICAgb3RoZXItY2FzZWQgY291bnRlcnBhcnQpIGlzIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFySSA9IGMgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdjaGFySScsIGMpXG5cbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKGNoYXJQYXJzZXIoXG4gICAgY2ggPT4gYy50b0xvd2VyQ2FzZSgpID09PSBjaC50b0xvd2VyQ2FzZSgpLFxuICApKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZHMuY2hhckkoYykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBwYXNzZXMgaXQgdG8gdGhlIHByb3ZpZGVkXG4gKiBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlciBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLCB0aGlzXG4gKiBwYXJzZXIgZmFpbHMgYW5kIGNvbnN1bWVzIG5vIGlucHV0LlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGNhdXNlIGZvciBhbiBlcnJvciBzaW5jZSBpdCdzIG5vdFxuICogZmVhc2libGUgdG8gaGF2ZSBpdCBhbmFseXplIHRoZSBmdW5jdGlvbiB0byBzZWUgd2hhdCBpdCBleHBlY3RzIHRvXG4gKiBtYXRjaCwgc28gbm8gZXJyb3IgbWVzc2FnZSBpcyBwcm92aWRlZCBvbiBmYWlsdXJlLiBVc2VcbiAqIGBsYWJlbChzYXRpc2Z5KGZuKSwgbXNnKWAgb3IgdGhlIGVxdWl2YWxlbnQgYHNhdGlzZnlMKGZuLCBtc2cpYCB0b1xuICogYWRkIGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzYXRpc2Z5ID0gZm4gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignc2F0aXNmeScsIGZuKVxuICByZXR1cm4gY2hhclBhcnNlcihmbikoY3R4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgcGFzc2VzIGl0IHRvIHRoZSBwcm92aWRlZFxuICogZnVuY3Rpb24uIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhpcyBwYXJzZXIgc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIgYXMgdGhlIHJlc3VsdC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYGZhbHNlYCwgdGhpc1xuICogcGFyc2VyIGZhaWxzIGFuZCBjb25zdW1lcyBubyBpbnB1dCBhbmQgc2lnbmFscyBhbiBlcnJvciB3aXRoIHRoZVxuICogcHJvdmlkZWQgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc2F0aXNmeU0gPSAoZm4sIG1lc3NhZ2UpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3NhdGlzZnlNJywgZm4sIG9yZEZuRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnc2F0aXNmeU0nLCBtZXNzYWdlLCBvcmRTdHJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWQobWVzc2FnZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXIgaXQgaXNcbiAqIGJldHdlZW4gKGFjY29yZGluZyB0byBjb2RlIHBvaW50cykgY2hhcmFjdGVycyBgc2AgYW5kIGBlYFxuICogKGluY2x1c2l2ZSkuIElmIGl0IGlzLCB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0LFxuICogYW5kIGlmIGl0IGlzIG5vdCwgdGhlIHBhcnNlciBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cbiAqXG4gKiBgc2AgYW5kIGBlYCBhcmUgZXhwZWN0ZWQgdG8gYmUgc2luZ2xlIGNoYXJhY3RlcnMuIEFuIGVycm9yIHdpbGwgYmVcbiAqIHRocm93biBpZiB0aGV5IGFyZSBub3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHMgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZSByYW5nZVxuICogICAgIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZSBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgZW5kIG9mIHRoZSByYW5nZSBvZlxuICogICAgIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgbmV4dCBpbnB1dFxuICogICAgIGNoYXJhY3RlciBpcyBiZXR3ZWVuIGBzdGFydGAgYW5kIGBlbmRgIChpbmNsdXNpdmUpLlxuICovXG5leHBvcnQgY29uc3QgcmFuZ2UgPSAocywgZSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdyYW5nZScsIHMsIG9yZENoYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0Q2hhcigncmFuZ2UnLCBlLCBvcmRDaGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSBzICYmIGMgPD0gZVxuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5yYW5nZShzLCBlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBpbnB1dCBjaGFyYWN0ZXIgYW5kIHRoZW4gc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIuIEZhaWxzIG9ubHkgaWYgdGhlcmUgaXMgbm8gaW5wdXQgbGVmdCB0byByZWFkLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhbnkgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsKGN0eCwgZXhwZWN0ZWRzLmFueSlcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIG9rKGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBkb2VzXG4gKiBub3QgZXhpc3QgKGkuZS4sIGlmIHRoZSBpbmRleCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0KS5cbiAqIENvbnN1bWVzIG5vdGhpbmcgb24gZWl0aGVyIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgZW9mID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoID8gb2soY3R4LCBudWxsKSA6IGZhaWwoY3R4LCBleHBlY3RlZHMuZW9mKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2ggb2YgdGhlXG4gKiBjaGFyYWN0ZXJzIGluIGBjc2AsIHdoaWNoIGlzIGVpdGhlciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIG9yIGFcbiAqIHN0cmluZy4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZSBwYXJzZXJcbiAqIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjcyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5IG9yIGFcbiAqICAgICBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gYmUgYSBtZW1iZXIgZm9yXG4gKiAgICAgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgb25lXG4gKiAgICAgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueU9mID0gY3MgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmdPckFycmF5KCdhbnlPZicsIGNzKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgY29uc3QgYXJyID0gWy4uLmNzXVxuXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcbiAgICA/IG9rKGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbiAgICA6IGZhaWwoY3R4LCBleHBlY3RlZHMuYW55T2YoYXJyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoIG9mIHRoZVxuICogY2hhcmFjdGVycyBpbiBgY3NgLCB3aGljaCBpcyBlaXRoZXIgYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBvciBhXG4gKiBzdHJpbmcuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyAqbm90KiBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGVcbiAqIHBhcnNlciB3aWxsIHN1Y2NlZWQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY3MgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheSBvciBhXG4gKiAgICAgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIG5vdCBiZSBhIG1lbWJlclxuICogICAgIGZvciB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBub3RcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vbmVPZiA9IGNzID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JBcnJheSgnbm9uZU9mJywgY3MpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY3NdXG5cbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgID8gZmFpbChjdHgsIGV4cGVjdGVkcy5ub25lT2YoYXJyKSlcbiAgICA6IG9rKGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgZGlnaXQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGRpZ2l0ID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc5J1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5kaWdpdClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBoZXhhZGVjaW1hbCBkaWdpdC4gVGhpcyBwYXJzZXIgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBoZXggPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gICAgfHwgYyA+PSAnYScgJiYgYyA8PSAnZidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdGJ1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5oZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIG9jdGFsIGRpZ2l0LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBvY3RhbCA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnNydcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZHMub2N0YWwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGxldHRlci5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgbGV0dGVyID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6JyB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5sZXR0ZXIpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXIuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFscGhhID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gICAgfHwgYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZHMuYWxwaGEpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIHVwcGVyY2FzZSBsZXR0ZXIuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy51cHBlcilcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgbG93ZXJjYXNlIGxldHRlci5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgbG93ZXIgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLmxvd2VyKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGFzc2VydFN0cmluZyB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBmYXRhbCwgcGFyc2VyIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBnZW5lcmljIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmFpbE5vcm1hbGx5ID0gbXNnID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdmYWlsTm9ybWFsbHknLCBtc2cpXG4gIHJldHVybiBmYWlsKGN0eCwgZ2VuZXJpYyhtc2cpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi4gVGhpcyBzaWduaWZpZXMgYSBmYXRhbCBlcnJvcixcbiAqIG9uZSB0aGF0IGNhbm5vdCBiZSByZWNvdmVyZWQgZnJvbSB3aXRob3V0IGJhY2t0cmFja2luZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIGZhdGFsbHkgd2l0aCB0aGVcbiAqICAgICBzdXBwbGllZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmFpbEZhdGFsbHkgPSBtc2cgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2ZhaWxGYXRhbGx5JywgbXNnKVxuICByZXR1cm4gZmF0YWwoY3R4LCBnZW5lcmljKG1zZykpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nT3JSZWdFeHAgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbCwgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBzdHJpbmdUb1ZpZXcsIHR3aW4sIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLy8gQWxsIG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIHVzZWQgaW4gdGhlIGRlcml2ZWQgcmVnZXggcGFyc2Vycy5cbi8vIFRoZXNlIGFyZSBoZXJlIHRvIGNyZWF0ZSBhbmQgY29tcGlsZSB0aGVtIG9uY2UsIHVwb24gaW5pdGlhbCBsb2FkLCB0b1xuLy8gc3BlZWQgcGFyc2luZyBsYXRlci5cblxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMZXR0ZXIgPSAvXlxccHtBbHBoYWJldGljfS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBvciBudW1iZXIgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVBbHBoYSA9IC9eKD86XFxwe0FscGhhYmV0aWN9fFxccHtOfSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlVXBwZXIgPSAvXig/OlxccHtVcHBlcmNhc2V9fFxccHtMdH0pL3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbG93ZXJjYXNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlTG93ZXIgPSAvXlxccHtMb3dlcmNhc2V9L3Vcbi8qKiBNYXRjaGVzIGEgc2luZ2xlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlU3BhY2UgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx0IF0pL1xuLyoqIE1hdGNoZXMgYSBzaW5nbGUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlVXNwYWNlID0gL14oPzpcXHJcXG58XFxwe1doaXRlX1NwYWNlfSkvdVxuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVNwYWNlcyA9IC9eW1xcclxcblxcdCBdKi9cbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlVXNwYWNlcyA9IC9eXFxwe1doaXRlX1NwYWNlfSovdVxuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzMSA9IC9eW1xcclxcblxcdCBdKy9cbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzMSA9IC9eXFxwe1doaXRlX1NwYWNlfSsvdVxuLyoqIE1hdGNoZXMgYW55IGNvbnZlbnRpb25hbCBuZXdsaW5lIChcXHIsIFxcbiwgb3IgXFxyXFxuKS4gKi9cbmNvbnN0IHJlTmV3bGluZSA9IC9eKD86XFxyXFxufFxccnxcXG4pL1xuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBuZXdsaW5lIGNoYXJhY3RlciwgcGx1cyBcXHJcXG4uICovXG5jb25zdCByZVVuZXdsaW5lID0gL14oPzpcXHJcXG58W1xcclxcblxcdTAwODVcXHUyMDI4XFx1MjAyOV0pL3VcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCBhbmQgbWF0Y2hlcyBpdCBhcyBmYXJcbiAqIGFzIGl0IGNhbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqXG4gKiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHJlZ2V4IGJlZ2lucyB3aXRoIGEgYF5gIC4gVGhlIGBnYCBmbGFnIGlzXG4gKiBpZ25vcmVkIGluIHRoYXQgb25seSB0aGUgZmlyc3QgbWF0Y2ggaXMgcHJvY2Vzc2VkIGFuZCByZXR1cm5lZC4gVGhpc1xuICogZW5zdXJlcyB0aGF0IHRoZSBtYXRjaCBpcyBvbmx5IGFnYWluc3QgdGhlIHRleHQgZGlyZWN0bHkgYXQgdGhlXG4gKiBjdXJyZW50IHBvaW50ZXIgbG9jYXRpb24uXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBtYXRjaCBhZ2FpbnN0IHRoZVxuICogICAgIGlucHV0IHRleHQgc3RhcnRpbmcgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXG4gKiAgICAgZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbiBhbmQgc3VjY2VlZHNcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxuICovXG5jb25zdCByZWdleFBhcnNlciA9IHJlID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgcmVzdCA9IHZpZXdUb1N0cmluZyhpbmRleCwgdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXgsIHZpZXcpXG5cbiAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxuICByZXR1cm4gbWF0Y2hcbiAgICA/IG9rKGN0eCwgbWF0Y2hbMF0sIGluZGV4ICsgc3RyaW5nVG9WaWV3KG1hdGNoWzBdKS5ieXRlTGVuZ3RoKVxuICAgIDogZmFpbChjdHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHN1cHBsaWVkIHJlZ3VsYXIgZXhwcmVzc2lvbiB0b1xuICogdGhlIGlucHV0IHRleHQgYXQgdGhlIGN1cnJlbnQgbG9jYXRpb24uIElmIHRoZXJlIGlzIGEgbWF0Y2gsIGFueVxuICogbWF0Y2hpbmcgdGV4dCBpcyByZXR1cm5lZCBhcyBhIHN1Y2Nlc3NmdWwgcmVzdWx0LiBObyB0ZXh0IGlzIGNvbnN1bWVkXG4gKiB1cG9uIGZhaWx1cmUuXG4gKlxuICogQSBzdHJpbmcgY2FuIGJlIHBhc3NlZCB0byB0aGlzIHBhcnNlci4gSWYgb25lIGlzLCBpdCBpcyBjb252ZXJ0ZWRcbiAqIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aG91dCBmbGFncy5cbiAqXG4gKiBJZiBhIHN0YXJ0IGFuY2hvciAoXikgaXMgbm90IGluY2x1ZGVkLCBvbmUgd2lsbCBiZSBhZGRlZC4gSWYgdGhlIGBnYFxuICogZmxhZyBpcyBpbmNsdWRlZCwgaXQnbGwgZnVuY3Rpb25hbGx5IGJlIGlnbm9yZWQgYXMgb25seSB0aGUgZmlyc3RcbiAqIG1hdGNoIHdpbGwgYmUgY29uc2lkZXJlZCBhbnl3YXkuIFRoZXNlIHR3byBydWxlcyBlbnN1cmUgdGhhdCB0aGVcbiAqIG1hdGNoIGlzIG9ubHkgYXR0ZW1wdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgdGV4dC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0XG4gKiAgICAgdGhlIGlucHV0IHRleHQuIElmIHRoaXMgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgY29udmVydGVkIGludG8gYVxuICogICAgIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRoIG5vIGZsYWdzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgcmVndWxhclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlZ2V4ID0gcmUgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmdPclJlZ0V4cCgncmVnZXgnLCByZSlcblxuICAvLyBGaXJzdCwgY29udmVydCB0byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBpZiBpdCdzIGEgc3RyaW5nXG4gIGxldCByZWdleCA9IHR5cGVvZiByZSA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHJlKSA6IHJlXG5cbiAgLy8gTmV4dCwgbWFrZSBzdXJlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gc3RhcnRzIHdpdGggYSBeIGFuY2hvclxuICBjb25zdCB7IHNvdXJjZSwgZmxhZ3MgfSA9IHJlZ2V4XG4gIGNvbnN0IHJlYW5jaG9yID0gc291cmNlWzBdICE9PSAnXidcbiAgaWYgKHJlYW5jaG9yKSB7XG4gICAgY29uc3QgbmV3U291cmNlID0gJ14nICsgc291cmNlXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKG5ld1NvdXJjZSwgZmxhZ3MpXG4gIH1cblxuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4ocmVnZXhQYXJzZXIocmVnZXgpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMucmVnZXgocmVnZXgpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxldHRlci4gQSBsZXR0ZXIgZm9yIHRoaXMgcHVycG9zZSBpcyBhbnkgY2hhcmFjdGVyIHdpdGggdGhlXG4gKiBVbmljb2RlIGBBbHBoYWJldGljYCBwcm9wZXJ0eS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgbGV0dGVyVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4ocmVnZXhQYXJzZXIocmVMZXR0ZXIpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMubGV0dGVyVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYWxwaGFudW1lcmljLiBBIGNoYXJhY3RlciBpcyBhbHBoYW51bWVyaWMgaWYgaXQgaGFzIGVpdGhlciB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5IG9yIHRoZSBVbmljb2RlIGBOdW1iZXJgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKHJlZ2V4UGFyc2VyKHJlQWxwaGEpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMuYWxwaGFVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBlaXRoZXIgYW4gdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzXG4gKiB1cHBlcmNhc2UgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBVcHBlcmNhc2VgIHByb3BlcnR5IGFuZCBpcyB0aXRsZWNhc2VcbiAqIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgTGV0dGVyLCBUaXRsZWNhc2VgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCB1cHBlclUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKHJlZ2V4UGFyc2VyKHJlVXBwZXIpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMudXBwZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxvd2VyY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzIGxvd2VyY2FzZSBpZiBpdCBoYXMgdGhlXG4gKiBVbmljb2RlIGBMb3dlcmNhc2VgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsb3dlclUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKHJlZ2V4UGFyc2VyKHJlTG93ZXIpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMubG93ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgdGhpcyBwYXJzZXJcbiAqIHJlY29nbml6ZXMgYXJlIHNwYWNlLCB0YWIsIGFuZCBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKGBcXHJgLCBgXFxuYCxcbiAqIG9yIGBcXHJcXG5gKS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKHJlZ2V4UGFyc2VyKHJlU3BhY2UpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMuc3BhY2UpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIEEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2UgZm9yIHRoZVxuICogcHVycG9zZSBvZiB0aGlzIHBhcnNlciBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFdoaXRlX1NwYWNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGFsc28gcmVjb2duaXplIHRoZSB0d28tY2hhcmFjdGVyIGNvbWJpbmF0aW9uIGBcXHJcXG5gXG4gKiBhcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiB3aGl0ZXNwYWNlLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKHJlZ2V4UGFyc2VyKHJlVXNwYWNlKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbChycGN0eCwgZXhwZWN0ZWRzLnNwYWNlVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChzcGFjZSwgYFxcdGAsXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXJcbiAqIGFsd2F5cyBzdWNjZWVkczsgZXZlbiB6ZXJvIHdoaXRlc3BhY2VzIGlzIGVub3VnaCB0byBtYWtlIGl0IHN1Y2NlZWQsXG4gKiB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGUgaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGVcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlcyA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnBjdHgsIF9dID0gcmVnZXhQYXJzZXIocmVTcGFjZXMpKGN0eClcbiAgcmV0dXJuIG9rKHJwY3R4LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXG4gKiBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdFxuICogcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnBjdHgsIF9dID0gcmVnZXhQYXJzZXIocmVVc3BhY2VzKShjdHgpXG4gIHJldHVybiBvayhycGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsXG4gKiBvbmx5IGZhaWwgaWYgdGhlcmUgaXMgbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPblxuICogc3VjY2VzcywgaXQgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczEgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBycHJlc10gPSByZWdleFBhcnNlcihyZVNwYWNlczEpKGN0eClcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBvayhycGN0eCwgbnVsbCkgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMuc3BhY2VzMSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsIG9ubHkgZmFpbCBpZiB0aGVyZSBpc1xuICogbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPbiBzdWNjZXNzLCBpdCBza2lwcyB0aGVcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczFVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycGN0eCwgcnByZXNdID0gcmVnZXhQYXJzZXIocmVVc3BhY2VzMSkoY3R4KVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPa1xuICAgID8gb2socnBjdHgsIG51bGwpXG4gICAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMuc3BhY2VzMVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gdHdpbihyZWdleFBhcnNlcihyZU5ld2xpbmUpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMubmV3bGluZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgaW4gVW5pY29kZSBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICogKiBgTkVMYCAobmV4dCBsaW5lLCBgVSswMDg1YClcbiAqICogYExTYCAobGluZSBzZXBhcmF0b3IsIGBVKzIwMjhgKVxuICogKiBgUFNgIChwYXJhZ3JhcGggc2VwYXJhdG9yLCBgVSsyMDI5YClcbiAqXG4gKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNoYXJhY3RlcnMgYFxcZmAgb3IgYFxcdmAsIHdoaWNoIHdoaWxlIGJlaW5nXG4gKiB2ZXJ0aWNhbCBzZXBhcmF0b3JzLCBhcmVuJ3QgcmVhbGx5IG5ld2xpbmVzIGluIHRoZSB0cmFkaXRpb25hbCBzZW5zZS5cbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmVVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gdHdpbihyZWdleFBhcnNlcihyZVVuZXdsaW5lKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbChycGN0eCwgZXhwZWN0ZWRzLm5ld2xpbmVVKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGFzc2VydE51bWJlciwgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWwsIG9rLCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgbmV4dENoYXJzLCB0d2luLCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCBhIHBhcnRpY3VsYXIgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnRcbiAqIHBvc2l0aW9uIGluIHRoZSB0ZXh0LiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIGVxdWFsIGluIGxlbmd0aCB0b1xuICogYGxlbmd0aGAgaXMgcmVhZCBmcm9tIGlucHV0IGFuZCBwYXNzZWQgdG8gYGZuYDsgaWYgYGZuYCByZXR1cm5zXG4gKiBgdHJ1ZWAsIHRoZW4gdGhlIHBhcnNlciBzdWNjZWVkcy5cbiAqXG4gKiBUaGlzIHBhcnNlciBhbHdheXMgZmFpbHMgaWYgdGhlcmUgYXJlIGxlc3MgdGhhbiBgbGVuZ3RoYCBjaGFyYWN0ZXJzXG4gKiBsZWZ0IGluIHRoZSBpbnB1dC4gSXQgd2lsbCBhbHdheXMgcGFzcyBpZiBgbGVuZ3RoYCBpcyAwLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgdGhlIHBhcnNlclxuICogICAgIHNob3VsZCByZWFkLlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOiBib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSByZWFkXG4gKiAgICAgc3RyaW5nIGlzIHBhc3NlZC4gSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgcmVhZCBzdHJpbmcgcGFzc2VzXG4gKiAgICAgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqL1xuY29uc3Qgc3RyaW5nUGFyc2VyID0gKGxlbmd0aCwgZm4pID0+IHBhcnNlcihjdHggPT4ge1xuICBpZiAobGVuZ3RoIDwgMSkgcmV0dXJuIG9rKGN0eCwgJycpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsKGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICA/IGZhaWwoY3R4KVxuICAgIDogb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlIGlucHV0XG4gKiBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoZSBzdHJpbmcgbWF0Y2ggbXVzdCBiZVxuICogZXhhY3QgKGl0IGlzIGNhc2Utc2Vuc2l0aXZlKSwgYW5kIGFsbCBVVEYtOCBjaGFyYWN0ZXJzIGFyZSByZWNvZ25pemVkXG4gKiBwcm9wZXJseS5cbiAqXG4gKiBJZiBgc3RyYCBpcyBlbXB0eSwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgc3VjY2VlZC4gSWYgaXQgaXNcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXJzXG4gKiAgICAgb2YgdGhlIGlucHV0LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xuICogICAgIG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmcgPSBzdHIgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ3N0cmluZycsIHN0cilcblxuICBjb25zdCBbc3ByZXAsIFtzcGN0eCwgc3ByZXNdXSA9IHR3aW4oc3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcbiAgKShjdHgpKVxuICByZXR1cm4gc3ByZXMuc3RhdHVzID09PSBPayA/IHNwcmVwIDogZmFpbChzcGN0eCwgZXhwZWN0ZWRzLnN0cmluZyhzdHIpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlIGlucHV0XG4gKiBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoaXMgbWF0Y2ggaXMgKm5vdCpcbiAqIGNhc2Utc2Vuc2l0aXZlLlxuICpcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgY2FzZS1pbnNlbnNpdGl2ZWx5IG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdJID0gc3RyID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzdHJpbmdJJywgc3RyKVxuXG4gIGNvbnN0IFtzcHJlcCwgW3NwY3R4LCBzcHJlc11dID0gdHdpbihzdHJpbmdQYXJzZXIoXG4gICAgY2hhckxlbmd0aChzdHIpLCBjaGFycyA9PiBzdHIudG9Mb3dlckNhc2UoKSA9PT0gY2hhcnMudG9Mb3dlckNhc2UoKSxcbiAgKShjdHgpKVxuICByZXR1cm4gc3ByZXMuc3RhdHVzID09PSBPayA/IHNwcmVwIDogZmFpbChzcGN0eCwgZXhwZWN0ZWRzLnN0cmluZ0koc3RyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB0aGUgcmVtYWluZGVyIG9mIHRoZSBpbnB1dCB0ZXh0IGFuZCByZXN1bHRzIGluXG4gKiB0aGF0IHRleHQuIFN1Y2NlZWRzIGlmIGFscmVhZHkgYXQgRU9GLCByZXN1bHRpbmcgaW4gYW4gZW1wdHkgc3RyaW5nLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhbGwgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcbiAgcmV0dXJuIG9rKGN0eCwgdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldyksIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjZXJ0YWluIG51bWJlciBvZiBjaGFyYWN0ZXJzLCB1c2luZyB0aGVtIChhcyBhXG4gKiBzdHJpbmcpIGFzIGl0cyByZXN1bHQuIFRoZSBwYXJzZXIgd2lsbCBmYWlsIGlmIHRoZXJlIGFyZSBub3QgdGhhdFxuICogbWFueSBjaGFyYWN0ZXJzIGxlZnQgdG8gcmVhZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhhdCBtYW55IGNoYXJhY3RlcnMgYW5kIGpvaW5zXG4gKiAgICAgdGhlbSBpbnRvIGEgc3RyaW5nIGZvciBpdHMgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgYW55U3RyaW5nID0gbiA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcignYW55U3RyaW5nJywgbilcblxuICBjb25zdCBbc3ByZXAsIFtzcGN0eCwgc3ByZXNdXSA9IHR3aW4oc3RyaW5nUGFyc2VyKG4sICgpID0+IHRydWUpKGN0eCkpXG4gIHJldHVybiBzcHJlcy5zdGF0dXMgPT09IE9rID8gc3ByZXAgOiBmYWlsKHNwY3R4LCBleHBlY3RlZHMuYW55U3RyaW5nKG4pKVxufSlcbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG4vLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBwYXJzZXIgfSBmcm9tICcuL2NvcmUnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5Db250ZXh0fSBDb250ZXh0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuUmVzdWx0fSBSZXN1bHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXBseX0gUmVwbHkgKi9cblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVUNTLTIgc3RyaW5nIGludG8gYSBVaW50OEFycmF5IG9mIFVURi04IGJ5dGVzLlxuICovXG5leHBvcnQgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXG5cbi8qKlxuICogVHJhbnNsYXRlcyBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMgaW50byBhIFVDUy0yIHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuXG4vKipcbiAqIEFuIGl0ZXJhdG9yIHRoYXQgY292ZXJzIGEgcmFuZ2UgZnJvbSBhIHN0YXJ0aW5nIHZhbHVlIHRvIGFuIGVuZGluZ1xuICogdmFsdWUsIHN0ZXBwaW5nIGJ5IGEgY2VydGFpbiB2YWx1ZSBiZXR3ZWVuIGVhY2guXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgZmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGxhc3QgbnVtYmVyIG9mIHRoZSByYW5nZS4gQnkgZGVmYXVsdCB0aGlzXG4gKiAgICAgbnVtYmVyIGZvcm1zIHRoZSB1cHBlciBib3VuZCBvZiB0aGUgcmFuZ2Ugd2l0aG91dCBiZWluZyBpbmNsdWRlZFxuICogICAgIGluIGl0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGVwPTFdIFRoZSBudW1iZXIgdG8gaW5jcmVhc2UgdGhlIHlpZWxkZWQgdmFsdWUgYnlcbiAqICAgICBkdXJpbmcgZWFjaCBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbmNsdXNpdmU9ZmFsc2VdIERldGVybWluZXMgd2hldGhlciBgZW5kYCBzaG91bGQgYmVcbiAqICAgICBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSByYW5nZS5cbiAqIEB5aWVsZHMge251bWJlcn0gVGhlIHZhbHVlcyB0aGF0IG1ha2UgdXAgdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gKnJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXAsIGluY2x1c2l2ZSkge1xuICBjb25zdCBzID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBzdGFydCA6IDBcbiAgY29uc3QgZSA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gZW5kIDogc3RhcnRcbiAgY29uc3QgcCA9IHR5cGVvZiBzdGVwID09PSAnbnVtYmVyJyA/IHN0ZXAgPT09IDAgPyAxIDogTWF0aC5hYnMoc3RlcCkgOiAxXG4gIGNvbnN0IGkgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcidcbiAgICA/ICEhaW5jbHVzaXZlIDogdHlwZW9mIGVuZCA9PT0gJ251bWJlcidcbiAgICAgID8gISFzdGVwIDogISFlbmRcblxuICBjb25zdCBmb3J3YXJkID0gcyA8IGVcbiAgbGV0IGN1cnJlbnQgPSBzXG5cbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XG4gICAgaWYgKGZvcndhcmQpIHtcbiAgICAgIHJldHVybiBpID8gY3VycmVudCA+IGUgOiBjdXJyZW50ID49IGVcbiAgICB9XG4gICAgcmV0dXJuIGkgPyBjdXJyZW50IDwgZSA6IGN1cnJlbnQgPD0gZVxuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xuICB3aGlsZSAoIWZpbmlzaGVkKCkpIHtcbiAgICB5aWVsZCBjdXJyZW50XG4gICAgY3VycmVudCA9IGZvcndhcmQgPyBjdXJyZW50ICsgcCA6IGN1cnJlbnQgLSBwXG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXG59XG5cbi8qKlxuICogQW4gaXRlcmF0b3IgdGhhdCBwYWlycyB2YWx1ZXMgaW4gYW4gaXRlcmFibGUgd2l0aCB0aGVpciBpbmRleGVzIGluIGFcbiAqIHNlcmllcyBvZiB0d28tZWxlbWVudCBhcnJheXMuIFRoZSBmaXJzdCBhcnJheSBlbGVtZW50IGlzIHRoZSBpbmRleDtcbiAqIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGZyb20gdGhlIGl0ZXJhYmxlLlxuICpcbiAqIEZvciBhcnJheXMsIHRoaXMgY2FuIGJlIGRvbmUgd2l0aCBgYXJyYXkuZW50cmllcygpYCwgd2hpY2ggcHJvZHVjZXNcbiAqIHR3by1lbGVtZW50IGFycmF5cyBpbiB0aGUgc2FtZSBmb3JtYXQuIEhvd2V2ZXIsIHRoaXMgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbiB3aWxsIHdvcmsgd2l0aCBhbnkga2luZCBvZiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZVxuICogYEl0ZXJhYmxlYCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgQW4gaXRlcmFibGUgb2JqZWN0IHdob3NlIGVsZW1lbnRzIHdpbGxcbiAqICAgICBiZSBwYWlyZWQgd2l0aCB0aGVpciBpbmRleGVzLlxuICogQHlpZWxkcyB7W251bWJlciwgKl19IFRoZSBpdGVyYWJsZSdzIHZhbHVlcywgcGFpcmVkIHdpdGggdGhlaXJcbiAqICAgICBpbmRleGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gKmVudW1lcmF0ZShpdGVyYWJsZSkge1xuICBjb25zdCBpdGVyYXRvciA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0oKVxuICBsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpXG4gIGxldCBpbmRleCA9IDBcblxuICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgeWllbGQgW2luZGV4KyssIHJlc3VsdC52YWx1ZV1cbiAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KClcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBwb3J0aW9uIG9mIGEgVVRGLTggZGF0YSB2aWV3IGFzIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgdG8gYmUgdGhlIGZpcnN0IGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQgZnJvbSB3aGljaFxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxuICogQHJldHVybnMge3N0cmluZ30gQSBVQ1MtMiAocmVndWxhciBKYXZhU2NyaXB0IHN0cmluZykgcmVwcmVzZW50YXRpb25cbiAqICAgICBvZiB0aGUgVVRGLTggY2hhcmFjdGVycyBpbiB0aGUgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlld1RvU3RyaW5nKGluZGV4LCBsZW5ndGgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZXMgPSBVaW50OEFycmF5LmZyb20oXG4gICAgeyBsZW5ndGggfSxcbiAgICAoXywgaSkgPT4gdmlldy5nZXRVaW50OChpbmRleCArIGkpLFxuICApXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVVRGLTggZGF0YSB2aWV3IG9mIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cbiAqIEByZXR1cm5zIHtEYXRhVmlld30gQSBkYXRhIHZpZXcgb3ZlciB0aGUgVVRGLTggYnl0ZXMgb2YgdGhlIGlucHV0XG4gKiAgICAgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9WaWV3KHN0cikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KGVuY29kZXIuZW5jb2RlKHN0cikuYnVmZmVyKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcbiAqIGZyb20gdGhlIG51bWJlciBvZiBVQ1MtMiBjaGFyYWN0ZXJzIGluIHRoZSBzYW1lIHN0cmluZywgbWVhbmluZyB0aGlzXG4gKiB2YWx1ZSBjYW4gZGlmZmVyIGZyb20gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIHRoZSBzYW1lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgb2Ygd2hpY2ggdG8gZ2V0IHRoZSBjaGFyYWN0ZXIgbGVuZ3RoLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gdGhhdCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyTGVuZ3RoKHN0cikge1xuICByZXR1cm4gWy4uLnN0cl0ubGVuZ3RoXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcbiAqIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXG4gKiAgICAgdGhlIGZpcnN0IChhbmQgcGVyaGFwcyBvbmx5KSBieXRlIG9mIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxuICogICAgIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoKGJ5dGUgJiAweDgwKSA+PiA3ID09PSAwKSByZXR1cm4gMVxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTEwKSByZXR1cm4gM1xuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTEpIHJldHVybiA0XG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXG4gIC8vIGFzY2lpIGNvZGVzIGlzIHVzZWRcbiAgcmV0dXJuIDFcbn1cblxuLyoqXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cbiAqXG4gKiBAdHlwZWRlZiBOZXh0Q2hhckluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuZXh0IFRoZSBuZXh0IGNoYXJhY3RlcihzKS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRhdGEgdmlldy5cbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXG4gKiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xuICBjb25zdCB3aWR0aCA9IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpXG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cbiAqIHdpdGhpbiB0aGUgdmlldy4gRWFjaCBvZiB0aGVzZSBjaGFyYWN0ZXJzIG1heSBiZSAxLSwgMi0sIDMtLCBvclxuICogNC1ieXRlIGNoYXJhY3RlcnMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlaXIgZmlyc3QgYnl0ZXMuIElmXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBmaXJzdCBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFycyhpbmRleCwgdmlldywgY291bnQpIHtcbiAgY29uc3Qgdmlld0xlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aFxuICBsZXQgd2lkdGggPSAwXG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKGNvdW50KSkge1xuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXG4gICAgaWYgKGkgPj0gdmlld0xlbmd0aCkgYnJlYWtcbiAgICB3aWR0aCArPSBuZXh0Q2hhcldpZHRoKGksIHZpZXcpXG4gIH1cbiAgaWYgKGluZGV4ICsgd2lkdGggPj0gdmlld0xlbmd0aCkge1xuICAgIHdpZHRoID0gdmlld0xlbmd0aCAtIGluZGV4XG4gIH1cbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBTdXJyb3VuZHMgdGhlIHN1cHBsaWVkIHN0cmluZyBpbiBzaW5nbGUgcXVvdGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzdXJyb3VuZCBpbiBzaW5nbGUgcXVvdGVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBsZWQgYW5kIHRyYWlsZWQgYnkgc2luZ2xlIHF1b3Rlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlKHN0cikge1xuICByZXR1cm4gYCcke3N0cn0nYFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogVGhpcyBzb3J0IG9mIGVtdWxhdGVzICphcy1wYXR0ZXJucyogaW4gYSBsaW1pdGVkIHdheSBpbiBKYXZhU2NyaXB0LlxuICogSW4gbGFuZ3VhZ2VzIGxpa2UgSGFza2VsbCBhbmQgTUwsIHdoZW4gcGF0dGVybiBtYXRjaGluZyBpcyBkb25lLFxuICogdGhlcmUgaXMgYSBjb25zdHJ1Y3QgdG8gYmUgYWJsZSB0byByZXRhaW4gYSBsYXJnZXIgcGFydCBvZiB0aGVcbiAqIGRlc3RydWN0dXJlZCBwYXR0ZXJuIHdoaWxlIGFsc28gYnJlYWtpbmcgaXQgZG93biBmdXJ0aGVyLiBJbiBIYXNrZWxsLFxuICpcbiAqIGBgYGhhc2tlbGxcbiAqIChoZWFkIDogdGFpbCkgPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIHdpbGwgYXNzaWduIGAxYCB0byBgaGVhZGAsIGFuZCBgWzIsIDMsIDQsIDVdYCB0byBgdGFpbGAuIFRoaXMgY2FuIGJlXG4gKiBkb25lIGluIEphdmFTY3JpcHQgYXMgd2VsbCwgbGlrZSB0aGlzOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IFtoZWFkLCAuLi50YWlsXSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogSG93ZXZlciwgSGFza2VsbCBjYW4gZ28gZmFydGhlcjogaXQgY2FuIGFsc28gYXNzaWduIHRoZSBlbnRpcmUgbGlzdFxuICogYXMgYSB3aG9sZSB0byBhbm90aGVyIHZhcmlhYmxlIHdoaWxlIHN0aWxsIGFzc2lnbmluZyBpdHMgZWxlbWVudHMgYXNcbiAqIGFib3ZlLiBJdCdzIGRvbmUgbGlrZSB0aGlzOlxuICpcbiAqIGBgYGhhc2tlbGxcbiAqIGxpc3QgQCAoaGVhZCA6IHRhaWwpID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBUaGlzIHdpbGwsIGluIGFkZGl0aW9uIHRvIHRoZSBhc3NpZ25tZW50cyBhYm92ZSwgYXNzaWduIGBbMSwgMiwgMywgNCxcbiAqIDVdYCB0byBgbGlzdGAuIFRoZSBgQGAgc2lnbiBpcyByZWFkICphcyosIGFuZCB0aGlzIGNvbnN0cnVjdCBpc1xuICogY2FsbGVkIGFuICphcy1wYXR0ZXJuKiAocGVyaGFwcyBiZWNhdXNlIHRoZSBNTCB3YXkgb2YgZG9pbmcgaXQgdXNlc1xuICogdGhlIGBhc2Aga2V5d29yZCBpbnN0ZWFkIG9mIHRoZSBgQGAgc3ltYm9sKS5cbiAqXG4gKiBUaGVyZSBpcyBubyBmYWNpbGl0eSB0byBkbyB0aGlzIGluIEphdmFTY3JpcHQuIEJ1dCB0aGVyZSBhcmUgbWFueVxuICogcGxhY2VzIGluIHRoaXMgbGlicmFyeSB3aGVyZSBhIGBSZXBseWAgaXMgZGVzY3R1cmN0dXJlZCBpbnRvIGl0c1xuICogYENvbnRleHRgIGFuZCBgUmVzdWx0YCBlbGVtZW50cywgeWV0IHRoZXJlIGlzIGEgbmVlZCB0byBjb25kaXRpb25hbGx5XG4gKiB1c2UgdGhlIGVudGlyZSBgUmVwbHlgIGFzIHdlbGwgKG5vcm1hbGx5IHRvIHJldHVybiBpdCBpZiBzb21lXG4gKiBjb25kaXRpb24gaXMgbWV0KS4gUmF0aGVyIHRoYW4gY3JlYXRlIGEgbmV3IGBSZXBseWAgZnJvbSB0aGVzZSBwYXJ0cyxcbiAqIGB0d2luYCBjYW4gYmUgdXNlZCB0byBkdXBsaWNhdGUgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGBSZXBseWAuIFRoZW5cbiAqIG9ubHkgKm9uZSogb2YgdGhlIGR1cGxpY2F0ZSByZWZlcmVuY2VzIGNhbiBiZSBkZXN0cnVjdHVyZWQsIHdoaWxlIHRoZVxuICogb3RoZXIgb25lIGlzIHJldGFpbmVkIGFzIGEgd2hvbGUuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHBhcnNlcihjdHgpKVxuICogYGBgXG4gKlxuICogQXMtcGF0dGVybnMgY2FuIGJlIHVzZWQgb24gcGllY2VzIG9mIGEgcGF0dGVybiBpbnN0ZWFkIG9mIHRoZSBlbnRpcmVcbiAqIHBhdHRlcm4sIGFuZCBgdHdpbmAgY2Fubm90IGRvIHRoYXQuIEJ1dCBpdCBzZXJ2ZXMgZm9yIHdoYXQgaXMgbmVlZGVkXG4gKiBpbiBLZXNzZWwuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gdmFsdWUgQSByZXBseSB0aGF0IG5lZWRzIHRvIGJlIGRlc3RydWN0dXJlZCB3aGlsZVxuICogICAgIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSB3aG9sZS5cbiAqIEByZXR1cm5zIHtbUmVwbHksIFJlcGx5XX0gQW4gYXJyYXkgY29udGFpbmluZyB0d28gY29waWVzIG9mIHRoZVxuICogICAgIHJlcGx5LiBPbmUgY2FuIGJlIGRlc3RydWN0dXJlZCB3aGlsZSB0aGUgb3RoZXIgaXMgcmV0YWluZWQgd2hvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0d2luKHZhbHVlKSB7XG4gIHJldHVybiBbdmFsdWUsIHZhbHVlXVxufVxuXG4vKipcbiAqIENvbW1hLXNlcGFyYXRlcyAoYXMgbmVlZGVkKSB0aGUgc3RyaW5ncyBpbiB0aGUgcHJvdmlkZWQgYXJyYXkuIElmXG4gKiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZSByZXN1bHQgd2lsbCBiZSBhbiBlbXB0eSBzdHJpbmc7IGlmIHRoZSBhcnJheVxuICogaGFzIG9ubHkgb25lIGVsZW1lbnQsIHRoYXQgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkLiBJZiB0aGUgYXJyYXkgaGFzXG4gKiB0d28gZWxlbWVudHMsIHRoZXkgd2lsbCBiZSBqb2luZWQgd2l0aCAnIG9yICcgYmV0d2VlbiB0aGVtLiBJZiB0aGVcbiAqIGFycmF5IGlzIGxvbmdlciB0aGFuIHRoYXQsIGFsbCBlbGVtZW50cyB3aWxsIGJlIGNvbW1hLXNlcGFyYXRlZCB3aXRoXG4gKiBhbiBhZGRpdGlvbmFsICdvcicgYmV0d2VlbiB0aGUgbGFzdCB0d28gZWxlbWVudHMgKE94Zm9yZCBjb21tYVxuICogc3R5bGUpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IG1lc3NhZ2VzIFRoZSBzdHJpbmdzIHRoYXQgbmVlZCB0byBiZSBqb2luZWQgaW50b1xuICogICAgIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBtZXNzYWdlcyBqb2luZWQgaW50byBhIHNpbmdsZSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tYVNlcGFyYXRlKG1lc3NhZ2VzKSB7XG4gIHN3aXRjaCAobWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gJydcbiAgICBjYXNlIDE6IHJldHVybiBtZXNzYWdlc1swXVxuICAgIGNhc2UgMjogcmV0dXJuIG1lc3NhZ2VzLmpvaW4oJyBvciAnKVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IG1zZ3MgPSBtZXNzYWdlcy5zbGljZSgpXG4gICAgICBjb25zdCBsYXN0ID0gbXNncy5wb3AoKVxuICAgICAgcmV0dXJuIGAke21zZ3Muam9pbignLCAnKX0sIG9yICR7bGFzdH1gXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXVnbWVudHMgYSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGJlIGFibGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXRcbiAqIGNyZWF0ZWQgYW4gYXJiaXRyYXJ5IG9iamVjdC4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gaXMgYXNzaWduZWQgYW5cbiAqIGFkZGl0aW9uYWwgcHJvcGVydHkgKGJ5IGRlZmF1bHQgbmFtZWQgYGNyZWF0ZWRgLCBjYW4gYmUgY2hhbmdlZCBieVxuICogcGFzc2luZyBpbiB0aGUgYHByb3BgIGFyZ3VtZW50KSB3aGljaCBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIG9iamVjdCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZhY3RvcnkgY3JlYXRlZCBpdCBvciBgZmFsc2VgIGlmIGl0XG4gKiBkaWQgbm90LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBhdWdtZW50ZWQgd2l0aFxuICogICAgIHRoZSBuZXcgcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IFtwcm9wPSdjcmVhdGVkJ10gVGhlIHByb3BlcnR5IHRoYXQgd2lsbCBiZVxuICogICAgIGFkZGVkIHRvIHRoZSBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHJldHVybnMge2Z1bmN0aW9ufSBUaGUgYXVnbWVudGVkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFjayhmbiwgcHJvcCA9ICdjcmVhdGVkJykge1xuICBjb25zdCB0cmFja2VkID0gbmV3IFdlYWtTZXQoKVxuXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBmbiguLi5hcmdzKVxuICAgICAgdHJhY2tlZC5hZGQoY3JlYXRlZClcbiAgICAgIHJldHVybiBjcmVhdGVkXG4gICAgfSxcbiAgICBwcm9wLFxuICAgIHsgdmFsdWU6IHRyYWNrZWQuaGFzLmJpbmQodHJhY2tlZCkgfSxcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIHRvIGl0cyBzdHJpbmcgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCcxc3QnYCwgYDE3MjlgIGJlY29tZXMgYCcxNzI5dGgnYCwgZXRjLilcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIGNvbnZlcnQgaW50byBhbiBvcmRpbmFsLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgbnVtYmVyIGluIGl0cyBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgY29uc3Qgc3VmZml4ZXMgPSBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11cbiAgY29uc3QgdiA9IG4gJSAxMDBcbiAgcmV0dXJuIG4gKyAoc3VmZml4ZXNbKHYgLSAyMCkgJSAxMF0gPz8gc3VmZml4ZXNbdl0gPz8gc3VmZml4ZXNbMF0pXG59XG5cbmNvbnN0IG51bXMgPSBbXG4gICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsXG4gICduaW5lJywgJ3RlbicsICdlbGV2ZW4nLCAndHdlbHZlJywgJ3RoaXJ0ZWVuJywgJ2ZvdXJ0ZWVuJywgJ2ZpZnRlZW4nLFxuICAnc2l4dGVlbicsICdzZXZlbnRlZW4nLCAnZWlnaHRlZW4nLCAnbmluZXRlZW4nLFxuXVxuY29uc3Qgb25lcyA9IFtcbiAgJ3plcm90aCcsICdmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2ZpZnRoJywgJ3NpeHRoJywgJ3NldmVudGgnLFxuICAnZWlnaHRoJywgJ25pbnRoJywgJ3RlbnRoJywgJ2VsZXZlbnRoJywgJ3R3ZWxmdGgnLCAndGhpcnRlZW50aCcsXG4gICdmb3VydGVlbnRoJywgJ2ZpZnRlZW50aCcsICdzaXh0ZWVudGgnLCAnc2V2ZW50ZWVudGgnLCAnZWlnaHRlZW50aCcsXG4gICduaW5ldGVlbnRoJyxcbl1cbmNvbnN0IHRlbnMgPSBbXG4gICd0d2VudCcsICd0aGlydCcsICdmb3J0JywgJ2ZpZnQnLCAnc2l4dCcsICdzZXZlbnQnLCAnZWlnaHQnLCAnbmluZXQnLFxuXVxuY29uc3QgZ3JvdXBzID0gW1xuICAnaHVuZHJlZCcsICd0aG91c2FuZCcsICdtaWxsaW9uJywgJ2JpbGxpb24nLCAndHJpbGxpb24nLCAncXVhZHJpbGxpb24nLFxuXVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gaXRzIHdvcmQtYmFzZWQgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCdmaXJzdCdgLCBgMTcyOWAgYmVjb21lcyBgJ29uZSB0aG91c2FuZCBzZXZlbiBodW5kcmVkXG4gKiB0d2VudHktbmludGgnYCwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIG51bWJlciBpbiBpdHMgd29yZC1iYXNlZCBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3b3JkaW5hbChuKSB7XG4gIGlmIChuIDwgMCB8fCBuID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke051bWJlci5NQVhfU0FGRV9JTlRFR0VSfWApXG4gIH1cbiAgY29uc3QgbWFnID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKG4pKVxuXG4gIGlmIChuIDwgMjApIHJldHVybiBvbmVzW25dXG4gIGlmIChtYWcgPT09IDEpIHtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihuIC8gMTApIC0gMlxuICAgIHJldHVybiBuICUgMTAgPT09IDAgPyBgJHt0ZW5zW2ldfWlldGhgIDogYCR7dGVuc1tpXX15LSR7b25lc1tuICUgMTBdfWBcbiAgfVxuICBpZiAobWFnID09PSAyKSB7XG4gICAgY29uc3QgZiA9IE1hdGguZmxvb3IobiAvIDEwICoqIG1hZylcbiAgICBjb25zdCB4ID0gbiAtIGYgKiAxMCAqKiBtYWdcbiAgICByZXR1cm4gYCR7bnVtc1tmXX0gJHtncm91cHNbMF19JHt4ID09PSAwID8gJ3RoJyA6IGAgJHt3b3JkaW5hbCh4KX1gfWBcbiAgfVxuXG4gIGNvbnN0IGcgPSBtYWcgJSAzICsgMVxuICBjb25zdCBpID0gTWF0aC5mbG9vcihtYWcgLyAzKVxuICBjb25zdCBmID0gTWF0aC5mbG9vcihuIC8gMTAgKiogKG1hZyAtIGcgKyAxKSlcbiAgY29uc3QgbSA9IChmdW5jdGlvbiBtdWx0KG51bSkge1xuICAgIGlmIChudW0gPCAyMCkgcmV0dXJuIG51bXNbbnVtXVxuXG4gICAgY29uc3QgcmVtID0gbnVtICUgMTBcbiAgICBpZiAobnVtIDwgMTAwKSB7XG4gICAgICByZXR1cm4gYCR7dGVuc1tNYXRoLmZsb29yKG51bSAvIDEwKSAtIDJdfXkke1xuICAgICAgICByZW0gPT09IDAgPyAnJyA6IGAtJHtudW1zW3JlbV19YFxuICAgICAgfWBcbiAgICB9XG5cbiAgICBjb25zdCB4ID0gbnVtIC0gTWF0aC5mbG9vcihudW0gLyAxMDApICogMTAwXG4gICAgcmV0dXJuIGAke251bXNbTWF0aC5mbG9vcihudW0gLyAxMDApXX0gJHtncm91cHNbMF19JHtcbiAgICAgIHggPT09IDAgPyAndGgnIDogYCAke211bHQoeCl9YFxuICAgIH1gXG4gIH0oZikpXG4gIGNvbnN0IHggPSBuIC0gZiAqIDEwICoqIChtYWcgLSBnICsgMSlcbiAgcmV0dXJuIGAke219ICR7Z3JvdXBzW2ldfSR7eCA9PT0gMCA/ICd0aCcgOiBgICR7d29yZGluYWwoeCl9YH1gXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XG4gKiBvZnRlbiBiZSB0aGUgb3V0cHV0IGZyb20gYEpTT04uc3RyaW5naWZ5KClgLCB0aG91Z2ggcmVwcmVzZW50YXRpb25zXG4gKiBhcmUgYWxzbyBpbmNsdWRlZCBmb3IgdHlwZXMgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IHN1cHBvcnQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdHVybiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gQSByZWFzb25hYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJ1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSByZXR1cm4gYFN5bWJvbCgke3ZhbHVlLmRlc2NyaXB0aW9ufSlgXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcHByb3ByaWF0ZSBpbmRlZmluaXRlIGFydGljbGUgKCdhJyBvciAnYW4nKSB0byBhIHdvcmQgYmFzZWRcbiAqIG9uIGl0cyBmaXJzdCBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHByZXBlbmQgYW4gYXJ0aWNsZSB0by5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCB0aGUgcHJlcGVuZGVkIGFydGljbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xpZnkoc3RyKSB7XG4gIHJldHVybiAnYWVpb3VBRUlPVScuaW5jbHVkZXMoc3RyWzBdKSA/IGBhbiAke3N0cn1gIDogYGEgJHtzdHJ9YFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==