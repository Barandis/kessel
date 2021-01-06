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
/*! exports provided: formatter, argFormatter, argCharFormatter, argFnFormatter, argNumFormatter, argParFormatter, argStrFormatter, ordFormatter, ordCharFormatter, ordFnFormatter, ordNumFormatter, ordParFormatter, ordStrFormatter, assertChar, assertFunction, assertGeneratorFunction, assertString, assertArray, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser, assertParsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatter", function() { return formatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argFormatter", function() { return argFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argCharFormatter", function() { return argCharFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argFnFormatter", function() { return argFnFormatter; });
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

function assertGeneratorFunction(name, value, formatter = genFormatter) {
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
     false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
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
   false && false;
   false && false;
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
   false && false;
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
   false && false;
   false && false;
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const q = fn(pres.value);
   false && false;
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
   false && false;
   false && false;
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
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value);
     false && false;
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

   false && false;
   false && false;
   false && false;
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
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   false && false;
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
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   false && false;
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
   false && false;
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
   false && false;
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   false && false;
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
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   false && false;
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
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   false && false;
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
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   false && false;
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
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   false && false;
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
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);

  if (qres.status !== Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
  }

  const fn = qres.value;
   false && false;
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
   false && false;
   false && false;
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const q = fn(pres.value);
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
   false && false;
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
   false && false;
   false && false;
   false && false;
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
 * @param {function():*} genFn A generator function that takes no
 *     arguments and returns whatever should be used as the returned
 *     parser's result. This generator function can `yield` only
 *     `Parser`s; otherwise an error is thrown.
 * @returns {Parser} A parser that executes the generator function,
 *     executes parsers as they are yielded, and results in the return
 *     value of the generator.
 */

const block = genFn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value);
     false && false;
    const [pctx, pres] = value(context);
    context = pctx;
    errors = ((_pres$errors2 = pres.errors) === null || _pres$errors2 === void 0 ? void 0 : _pres$errors2.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

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
   false && false;
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
   false && false;
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
   false && false;
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
   false && false;
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
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
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

   false && false;
   false && false;
   false && false;
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
   false && false;
   false && false;
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
     false && false;
     false && false;
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
   false && false;
   false && false;
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
     false && false;
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
   false && false;
   false && false;
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
     false && false;
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
   false && false;
   false && false;
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
     false && false;
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
   false && false;
   false && false;
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
     false && false;
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
   false && false;
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
   false && false;
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
   false && false;
   false && false;

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
   false && false;
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
   false && false;
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
   false && false;
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
   false && false;
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
   false && false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL3NlcXVlbmNlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9lcnJvci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL21lc3NhZ2VzLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL2NoYXIuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvbWlzYy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9yZWdleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiZm9ybWF0dGVyIiwidHlwZSIsInZhbHVlIiwic3RyaW5naWZ5IiwiY2hhckZvcm1hdHRlciIsImZuRm9ybWF0dGVyIiwiZ2VuRm9ybWF0dGVyIiwic3RyRm9ybWF0dGVyIiwiYXJyRm9ybWF0dGVyIiwic3RyQXJyRm9ybWF0dGVyIiwic3RyUmVnRm9ybXR0ZXIiLCJudW1Gb3JtYXR0ZXIiLCJwYXJGb3JtYXR0ZXIiLCJhcmdGb3JtYXR0ZXIiLCJvcmRlciIsIm11bHRpcGxlIiwid29yZGluYWwiLCJhcmdDaGFyRm9ybWF0dGVyIiwiYXJnRm5Gb3JtYXR0ZXIiLCJhcmdOdW1Gb3JtYXR0ZXIiLCJhcmdQYXJGb3JtYXR0ZXIiLCJhcmdTdHJGb3JtYXR0ZXIiLCJvcmRGb3JtYXR0ZXIiLCJvcmQiLCJvcmRDaGFyRm9ybWF0dGVyIiwib3JkRm5Gb3JtYXR0ZXIiLCJvcmROdW1Gb3JtYXR0ZXIiLCJvcmRQYXJGb3JtYXR0ZXIiLCJvcmRTdHJGb3JtYXR0ZXIiLCJmYWlsQXNzZXJ0IiwibmFtZSIsIkVycm9yIiwiYXNzZXJ0Q2hhciIsImNoYXJMZW5ndGgiLCJhc3NlcnRGdW5jdGlvbiIsInBhcnNlciIsImNyZWF0ZWQiLCJhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImFzc2VydFN0cmluZyIsImFzc2VydEFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiYXNzZXJ0U3RyaW5nT3JBcnJheSIsImV2ZXJ5IiwiYyIsImFzc2VydFN0cmluZ09yUmVnRXhwIiwiYXNzZXJ0TnVtYmVyIiwiYXNzZXJ0UGFyc2VyIiwiYXNzZXJ0UGFyc2VycyIsInZhbHVlcyIsImkiLCJlbnVtZXJhdGUiLCJvcmRpbmFsIiwiT2siLCJGYWlsIiwiRmF0YWwiLCJTdGF0dXMiLCJhbHQiLCJhcmdzIiwicHMiLCJtIiwibGVuZ3RoIiwicG9wIiwiY3R4IiwiaGFzTSIsIkFTU0VSVCIsImVycm9ycyIsImV4cGVjdGVkIiwicCIsInByZXAiLCJwY3R4IiwicHJlcyIsInR3aW4iLCJzdGF0dXMiLCJtZXJnZSIsImZhdGFsIiwiZmFpbCIsIm9wdCIsInJlcGx5Iiwib2siLCJkZWYiLCJ4IiwicGVlayIsImluZGV4IiwiY29tcG91bmQiLCJuZXN0ZWQiLCJlbXB0eSIsIm5vdCIsInVuZGVmaW5lZCIsInBhc3MiLCJyZXN1bHQiLCJsYWJlbCIsIm1zZyIsImF0dGVtcHQiLCJlcnIiLCJhdHRlbXB0TSIsIkVycm9yVHlwZSIsIk5lc3RlZCIsInNlcXVlbmNlQiIsImNvbnRleHQiLCJwdXNoIiwiY2hhaW5CIiwiZm4iLCJxIiwicXJlcCIsInFjdHgiLCJxcmVzIiwiYXBwbHlCIiwibGVmdEIiLCJyaWdodEIiLCJhbmRUaGVuQiIsInJlcGVhdEIiLCJuIiwiXyIsInJhbmdlIiwibWFueVRpbGxCIiwiZW5kIiwiZW5kcmVwIiwiZW5kY3R4IiwiZW5kcmVzIiwiYmxvY2tCIiwiZ2VuRm4iLCJnZW4iLCJuZXh0VmFsdWUiLCJkb25lIiwibmV4dCIsInBpcGVCIiwic2xpY2UiLCJiZXR3ZWVuQiIsInByZSIsInBvc3QiLCJwcmVyZXAiLCJwcmVjdHgiLCJwcmVyZXMiLCJwb3N0Y3R4IiwicG9zdHJlcyIsImpvaW4iLCJ2IiwiY29tcGFjdCIsImZpbHRlciIsIm50aCIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsImFsd2F5cyIsIm1hcCIsImFwcGx5IiwibWF5YmVGYXRhbCIsImNoYWluIiwib3JFbHNlIiwiYW5kVGhlbiIsImxvb3BNZXNzYWdlIiwic2VxIiwibGVmdCIsInJpZ2h0IiwiYmxvY2siLCJtYW55IiwidmlldyIsImJ5dGVMZW5ndGgiLCJtYW55MSIsInNraXAiLCJza2lwTWFueSIsInNraXBNYW55MSIsInNlcEJ5Iiwic2VwIiwic2VwcmVwIiwic2VwY3R4Iiwic2VwcmVzIiwiVHlwZUVycm9yIiwic2VwQnkxIiwic2VwRW5kQnkiLCJzZXBFbmRCeTEiLCJyZXBlYXQiLCJiZXR3ZWVuIiwibWFueVRpbGwiLCJwaXBlIiwib3BGb3JtYXR0ZXIiLCJhc3NvY0wiLCJvcCIsIm9wcyIsIm9wcmVwIiwib3BjdHgiLCJvcHJlcyIsImFzc29jMUwiLCJhc3NvY1IiLCJhc3NvYzFSIiwiaXNUeXBlZEFycmF5IiwiVWludDhBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkludDhBcnJheSIsIkludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiaW5wdXQiLCJtZXNzYWdlIiwic3RyaW5nVG9WaWV3IiwiRGF0YVZpZXciLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsInRyYWNrIiwidGVzdCIsInBhcnNlIiwic3VjY2VlZGVkIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmb3JtYXRFcnJvcnMiLCJydW4iLCJ0YWIiLCJ6ZXJvV2lkdGgiLCJFeHBlY3RlZCIsIlVuZXhwZWN0ZWQiLCJHZW5lcmljIiwiQ29tcG91bmQiLCJPdGhlciIsInVuZXhwZWN0ZWQiLCJnZW5lcmljIiwib3RoZXIiLCJlcnJvcnMxIiwiZXJyb3JzMiIsImlzTmV3bGluZSIsImJ5dGUiLCJnZXRVaW50OCIsIm5ld2xpbmUiLCJuZXh0Qnl0ZSIsInRoaXJkQnl0ZSIsIm5leHRDaGFyV2lkdGgiLCJnZXRMaW5lSW5kZXhlcyIsInN0YXJ0IiwibGluZW5vIiwiZ2V0Q2hhckluZGV4IiwiY2hhckluZGV4IiwiYnl0ZUluZGV4IiwidGFiaWZ5IiwibGluZSIsInRhYlNpemUiLCJ0YWJJbmRleGVzIiwidGFiTWF0Y2giLCJleGVjIiwib2Zmc2V0IiwicHJlSW5kZXhPZmZzZXQiLCJ0YWJJbmRleCIsImFjdHVhbEluZGV4Iiwic3BhY2VDb3VudCIsInN1YnN0cmluZyIsImNvbEluZGV4IiwiZ2V0Q29sTnVtYmVyIiwibWF0Y2hlcyIsIm1hdGNoIiwiY29sbm8iLCJzaG93IiwibWF4V2lkdGgiLCJpbmRlbnQiLCJzcCIsIm5ld0NvbG5vIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImZvcm1hdE5lc3RlZCIsIm5lc3RlZHMiLCJuZXN0ZWRNc2dzIiwiZm9ybWF0IiwiZW5zdXJlTmV3bGluZXMiLCJ0ZXh0IiwiY291bnQiLCJyYXdMaW5lIiwidmlld1RvU3RyaW5nIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmluZCIsImVycm9yIiwiY29tbWFTZXBhcmF0ZSIsInVuZXhwTXNnIiwiZXhwTXNnIiwiZ2VuZXJpY01zZyIsIm5lc3RlZE1zZyIsImNvbXBvdW5kTXNnIiwidW5rbm93bk1zZyIsImVvZk1zZyIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwic3RyaW5ncyIsImFscGhhIiwiYWxwaGFVIiwiYW55IiwiYW55T2YiLCJhcnJheSIsImFueVN0cmluZyIsImNoYXIiLCJxdW90ZSIsImNoYXJJIiwiZGlnaXQiLCJlb2YiLCJoZXgiLCJsZXR0ZXIiLCJsZXR0ZXJVIiwibG93ZXIiLCJsb3dlclUiLCJuZXdsaW5lVSIsIm5vbmVPZiIsIm9jdGFsIiwicmVnZXgiLCJyZSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInNwYWNlc1UiLCJzcGFjZXMxVSIsInNwYWNlVSIsInN0cmluZyIsInN0ciIsInN0cmluZ0kiLCJ1cHBlciIsInVwcGVyVSIsImV4cGVjdGVkcyIsImNoYXJQYXJzZXIiLCJ3aWR0aCIsIm5leHRDaGFyIiwiY3ByZXAiLCJjcGN0eCIsImNwcmVzIiwiY2giLCJ0b0xvd2VyQ2FzZSIsInNhdGlzZnkiLCJzYXRpc2Z5TSIsInMiLCJlIiwiY3MiLCJhcnIiLCJpbmNsdWRlcyIsImZhaWxOb3JtYWxseSIsImZhaWxGYXRhbGx5IiwicmVMZXR0ZXIiLCJyZUFscGhhIiwicmVVcHBlciIsInJlTG93ZXIiLCJyZVNwYWNlIiwicmVVc3BhY2UiLCJyZVNwYWNlcyIsInJlVXNwYWNlcyIsInJlU3BhY2VzMSIsInJlVXNwYWNlczEiLCJyZU5ld2xpbmUiLCJyZVVuZXdsaW5lIiwicmVnZXhQYXJzZXIiLCJyZXN0IiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJyZWFuY2hvciIsIm5ld1NvdXJjZSIsInJwcmVwIiwicnBjdHgiLCJycHJlcyIsInN0cmluZ1BhcnNlciIsIm5leHRDaGFycyIsInNwcmVwIiwic3BjdHgiLCJzcHJlcyIsImNoYXJzIiwiYWxsIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsImFicyIsImZvcndhcmQiLCJjdXJyZW50IiwiZmluaXNoZWQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yIiwiU3ltYm9sIiwiYnl0ZXMiLCJmcm9tIiwiZGVjb2RlIiwiZW5jb2RlIiwidmlld0xlbmd0aCIsIm1lc3NhZ2VzIiwibXNncyIsImxhc3QiLCJwcm9wIiwidHJhY2tlZCIsIldlYWtTZXQiLCJkZWZpbmVQcm9wZXJ0eSIsImFkZCIsImhhcyIsImJpbmQiLCJzdWZmaXhlcyIsIm51bXMiLCJvbmVzIiwidGVucyIsImdyb3VwcyIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtYWciLCJsb2cxMCIsImYiLCJnIiwibXVsdCIsIm51bSIsInJlbSIsImRlc2NyaXB0aW9uIiwiSlNPTiIsImFydGljbGlmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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LENBQUNELFFBQUQsRUFBV1gsSUFBWCxDQUFqQztBQUVBLFNBQU87QUFBRUEsUUFBSSxFQUFFTCxNQUFSO0FBQWdCbUQsVUFBTSxFQUFFL0I7QUFBeEIsR0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzl2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFELENBQUksRUFDOUIsRUFGRDtBQUdELEdBZFUsQ0FjVGlVLENBZFMsQ0FBWDs7QUFlQSxRQUFNalUsQ0FBQyxHQUFHK0IsQ0FBQyxHQUFHa1MsQ0FBQyxHQUFHLE9BQU9GLEdBQUcsR0FBR0csQ0FBTixHQUFVLENBQWpCLENBQWxCO0FBQ0EsU0FBUSxHQUFFdlYsQ0FBRSxJQUFHaVYsTUFBTSxDQUFDM1YsQ0FBRCxDQUFJLEdBQUUrQixDQUFDLEtBQUssQ0FBTixHQUFVLElBQVYsR0FBa0IsSUFBR3JFLFFBQVEsQ0FBQ3FFLENBQUQsQ0FBSSxFQUFFLEVBQTlEO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNsRixTQUFULENBQW1CRCxLQUFuQixFQUEwQjtBQUMvQixNQUFJQSxLQUFLLEtBQUswRixTQUFkLEVBQXlCLE9BQU8sV0FBUDs7QUFDekIsTUFBSSxPQUFPMUYsS0FBUCxLQUFpQixVQUFyQixFQUFpQztBQUMvQixXQUFPaUMsNENBQU0sQ0FBQ0MsT0FBUCxDQUFlbEMsS0FBZixJQUF3QixRQUF4QixHQUFtQyxVQUExQztBQUNEOztBQUNELE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQixPQUFRLFVBQVNBLEtBQUssQ0FBQ3laLFdBQVksR0FBbkM7QUFDL0IsU0FBT0MsSUFBSSxDQUFDelosU0FBTCxDQUFlRCxLQUFmLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVMyWixTQUFULENBQW1CL0YsR0FBbkIsRUFBd0I7QUFDN0IsU0FBTyxhQUFhbUIsUUFBYixDQUFzQm5CLEdBQUcsQ0FBQyxDQUFELENBQXpCLElBQWlDLE1BQUtBLEdBQUksRUFBMUMsR0FBK0MsS0FBSUEsR0FBSSxFQUE5RDtBQUNELEMiLCJmaWxlIjoia2Vzc2VsLm5vYXNzZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgcGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgZW51bWVyYXRlLCBvcmRpbmFsLCBzdHJpbmdpZnksIHdvcmRpbmFsIH0gZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZvcm1hdHRlciBmdW5jdGlvbiBvdXQgb2YgYSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZS5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbigqKTpzdHJpbmd9IEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgdmFsdWUgb2YgYW55XG4gKiAgICAgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXIgPSB0eXBlID0+XG4gIHZhbHVlID0+IGBleHBlY3RlZCAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5jb25zdCBjaGFyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJylcbmNvbnN0IGZuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGZ1bmN0aW9uJylcbmNvbnN0IGdlbkZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBnZW5lcmF0b3IgZnVuY3Rpb24nKVxuY29uc3Qgc3RyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZycpXG5jb25zdCBhcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2FuIGFycmF5JylcbmNvbnN0IHN0ckFyckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2YgY2hhcmFjdGVycycpXG5jb25zdCBzdHJSZWdGb3JtdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24nKVxuY29uc3QgbnVtRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG51bWJlcicpXG5jb25zdCBwYXJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgcGFyc2VyJylcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmb3JtYXR0ZXIgZnVuY3Rpb24gb3V0IG9mIGEgdHlwZSBhbmQgYSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSB0aGF0IHRoZSB2YWx1ZSBzaG91bGQgYmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW29yZGVyXSBUaGUgcG9zaXRpb24gb2YgdGhlIHZhbHVlIHdpdGhpbiBhbiBhcmd1bWVudFxuICogICAgIGxpc3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFttdWx0aXBsZV0gSW5kaWNhdGVzIHdoZXRoZXIgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZVxuICogICAgIGFyZ3VtZW50IGluIHRoZSBmdW5jdGlvbiB3aG9zZSBlcnJvciBpcyBiZWluZyBmb3JtYXR0ZWQuIElmIHRoaXNcbiAqICAgICBpcyBmYWxzZSwgdGhlIGBvcmRlcmAgd2lsbCBiZSBpZ25vcmVkLlxuICogQHJldHVybnMge2Z1bmN0aW9uKCopOnN0cmluZ30gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB2YWx1ZSBvZiBhbnlcbiAqICAgICB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGFyZ0Zvcm1hdHRlciA9ICh0eXBlLCBvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+IHZhbHVlID0+XG4gIGBleHBlY3RlZCAke1xuICAgIG11bHRpcGxlID8gYCR7d29yZGluYWwob3JkZXIpfSBgIDogJydcbiAgfWFyZ3VtZW50IHRvIGJlICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXG5cbmV4cG9ydCBjb25zdCBhcmdDaGFyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ0ZuRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIGZ1bmN0aW9uJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ051bUZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBudW1iZXInLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnUGFyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdTdHJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egc3RyaW5nJywgb3JkZXIsIG11bHRpcGxlKVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZvcm1hdHRlciBmdW5jdGlvbiBvdXQgb2YgYSB0eXBlIGFuZCBhIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcmQgVGhlIHBvc2l0aW9uIG9mIHRoZSB2YWx1ZSB3aXRoaW4gYWFuIGFyZ3VtZW50XG4gKiAgICAgbGlzdCwgYSBibG9jayBvZiBjb2RlLCBldGMuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6c3RyaW5nfSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIGFueVxuICogICAgIHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3Qgb3JkRm9ybWF0dGVyID0gKHR5cGUsIG9yZCkgPT4gdmFsdWUgPT5cbiAgYGV4cGVjdGVkICR7b3JkfSBhcmd1bWVudCB0byBiZSAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5leHBvcnQgY29uc3Qgb3JkQ2hhckZvcm1hdHRlciA9IG9yZCA9PlxuICBvcmRGb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkRm5Gb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIGZ1bmN0aW9uJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZE51bUZvcm1hdHRlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgbnVtYmVyJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZFBhckZvcm1hdHRlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgcGFyc2VyJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZFN0ckZvcm1hdHRlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2Egc3RyaW5nJywgb3JkKVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6c3RyaW5nfSBmb3JtYXR0ZXJcbiAqL1xuZnVuY3Rpb24gZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHNpbmdsZS1jaGFyYWN0ZXIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydENoYXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGNoYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY2hhckxlbmd0aCh2YWx1ZSkgIT09IDEpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIG5vbi1wYXJzZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGZuRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgfHwgcGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBnZW5lcmF0b3IgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGdlbkZvcm1hdHRlcikge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0QXJyYXkobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGFyckZvcm1hdHRlcikge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc2luZ2xlLWNoYXJhY3RlclxuICogc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPckFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJBcnJGb3JtYXR0ZXIpIHtcbiAgaWYgKCEoXG4gICAgQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICAmJiB2YWx1ZS5ldmVyeShjID0+IHR5cGVvZiBjID09PSAnc3RyaW5nJyAmJiBjaGFyTGVuZ3RoKGMpID09PSAxKVxuICAgIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbiAgKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yUmVnRXhwKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJSZWdGb3JtdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJ1xuICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBudW1Gb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRQYXJzZXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHBhckZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8ICFwYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYW4gYXJyYXkgY29udGFpbnMgb25seSBwYXJzZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7KltdfSB2YWx1ZXMgVGhlIGFycmF5IG9mIHZhbHVlcyBiZWluZyBjaGVja2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VycyhuYW1lLCB2YWx1ZXMpIHtcbiAgZm9yIChjb25zdCBbaSwgdmFsdWVdIG9mIGVudW1lcmF0ZSh2YWx1ZXMpKSB7XG4gICAgYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBvcmRQYXJGb3JtYXR0ZXIob3JkaW5hbChpICsgMSkpKVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRTdHJpbmcsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBmYXRhbCwgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBjb21wb3VuZCwgZXhwZWN0ZWQsIG1lcmdlLCBuZXN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHBhcnNlcnMgb25lIGF0IGEgdGltZSB1bnRpbCBvbmUgc3VjY2VlZHMsIG9uZVxuICogZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuIE9uIGZhaWx1cmUgKGZhdGFsIG9yIG90aGVyd2lzZSksIGVycm9yXG4gKiBtZXNzYWdlcyBmcm9tIGFsbCBwYXJzZXJzIHRoYXQgaGFkIGZhaWxlZCBhcmUgbWVyZ2VkIGludG8gYGFsdGAnc1xuICogZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ8c3RyaW5nfSBhcmdzIFRoZSBwYXJzZXJzIHRvIGV4ZWN1dGUsIG9uZSBhdCBhIHRpbWUsXG4gKiAgICAgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuIFRoZSBsYXN0XG4gKiAgICAgYXJndW1lbnQgKm1heSogYmUgYSBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgYmVjb21lcyB0aGUgZXhwZWN0ZWRcbiAqICAgICBlcnJvciBtZXNzYWdlIGluIHBsYWNlIG9mIHRoZSBjb2xsZWN0ZWQgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXNcbiAqICAgICBvZiB0aGUgY29uc3RpdHVlbnQgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlcnMgdW50aWxcbiAqICAgICBvbmUgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHQgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3NcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdhbHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpKSlcblxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcblxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKHBjdHgsIGVycm9ycylcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwoY3R4LCBlcnJvcnMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyLCBzdWNjZWVkaW5nIHdoZXRoZXIgaXRcbiAqIGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBleGVjdXRlZCBhbmRcbiAqICAgICB0aGVuIGhhdmUgaXRzIHJlc3VsdCBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIGZhaWxzLlxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seSBpZlxuICogICAgIGl0cyBjb250YWluZWQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgb3B0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3B0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ29wdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBjb25zdCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9yc1xuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWwocGN0eCwgZXJyb3JzKVxuXG4gIC8vIElmIHRoZSBvcHRpb25hbCBwYXJzZXIgZmFpbHMsIHdlIGFkZCB0aGUgZXJyb3IgbWVzc2FnZSBldmVuIHRob3VnaFxuICAvLyB0aGUgZW5kIHJlc3VsdCBvZiBgb3B0YCBpcyBzdWNjZXNzLiBUaGlzIGxldHMgc2VxdWVuY2luZyBwYXJzZXJzXG4gIC8vIGFkZCB0aGUgb3B0IHBhcnNlcidzIGV4cGVjdGVkIHRvIGVycm9yIG1lc3NhZ2VzIGlmIGEgbGF0ZXIgcGFyc2VyXG4gIC8vIGluIHRoZSBzZXF1ZW5jZSBmYWlscy5cbiAgY29uc3QgcmVwbHkgPSBvayhwY3R4LCBudWxsKVxuICByZXBseVsxXS5lcnJvcnMgPSBlcnJvcnNcbiAgcmV0dXJuIHJlcGx5XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgZWl0aGVyIHdpdGggdGhlIHN1cHBsaWVkIHBhcnNlcidzIHN1Y2Nlc3NmdWxcbiAqIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHQgdmFsdWUgYHhgLlxuICogVGhpcyBwYXJzZXIgb25seSBmYWlscyBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZiA9IChwLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2RlZicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdkZWYnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2socGN0eCwgeClcbiAgcmV0dXJuIGZhdGFsKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKiBTdWNjZXNzIG9yIGZhaWx1cmUgYXJlIHN0aWxsIHJldHVybmVkLCB0aG91Z2ggZmF0YWwgZmFpbHVyZSBpc1xuICogY29udmVydGVkIHRvIG5vbi1mYXRhbCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBubyBpbnB1dCBpcyBjb25zdW1lZC5cbiAqXG4gKiBJZiB0aGUgY29uc2l0dWVudCBwYXJzZXIgZmFpbHMgZmF0YWxseSwgYSBuZXN0ZWQgZXJyb3IgbWVzc2FnZSB3aWxsXG4gKiBiZSBjcmVhdGVkIHRvIHRyYWNrIHRoZSBhY3R1YWwgZXJyb3IgY2F1c2UgYmVmb3JlIHRoaXMgcGFyc2VyXG4gKiBhdXRvbWF0aWNhbGx5IGJhY2t0cmFja3MuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBleGVjdXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIG9yIGZhaWxzXG4gKiAgICAgd2l0aCBpdCwgYnV0IHdoaWNoIGNvbnN1bWVzIG5vIGlucHV0IGVpdGhlciB3YXkuXG4gKi9cbmV4cG9ydCBjb25zdCBwZWVrID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncGVlaycsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdwZWVrJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2socGN0eCwgcHJlcy52YWx1ZSwgaW5kZXgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIHJldHVybiBmYWlsKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzLCBpbmRleClcbiAgfVxuICAvLyBUaGlzIHBhcnNlciBpbXBsZW1lbnRzIGF1dG9tYXRpYyBiYWNrdHJhY2tpbmcsIHNvIGlmIGl0cyBwYXJzZXJcbiAgLy8gZmFpbHMgZmF0YWxseSwgaXQgaGFzIHRvIHRyYWNrIHRoYXQgdGhyb3VnaCBhIG5lc3RlZCBlcnJvclxuICByZXR1cm4gZmFpbChcbiAgICBwY3R4LFxuICAgIGhhc00gPyBjb21wb3VuZChtLCBwY3R4LCBwcmVzLmVycm9ycykgOiBuZXN0ZWQocGN0eCwgcHJlcy5lcnJvcnMpLFxuICAgIGluZGV4LFxuICApXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscywgdGhpc1xuICogcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlIG9uIGZhaWx1cmUgaWYgdGhhdFxuICogZmFpbHVyZSB3YXMgY2F1c2VkIGJ5IGEgc3VjY2VzcyB3aXRoIGlucHV0IGNvbnN1bWVkLiBBbiBlcnJvciBtZXNzYWdlXG4gKiBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXMgdGhlIG9wdGlvbmFsXG4gKiBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGNvbnN1bWVzXG4gKiAgICAgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3QgZW1wdHkgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbXB0eScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbXB0eScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPayAmJiBwY3R4LmluZGV4ID09PSBpbmRleCkgcmV0dXJuIG9rKHBjdHgsIG51bGwpXG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChwY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsKHBjdHgsIGVycm9ycylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXQgd2hpY2ggZG9lc1xuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIGBwYCBzdWNjZWVkcywgdGhpcyBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkuXG4gKlxuICogVGhpcyBwYXJzZXIsIGJ5IGRlZmF1bHQsIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEFuXG4gKiBlcnJvciBtZXNzYWdlIGNhbiBiZSBzcGVjaWZpZWQgYnkgcGFzc2luZyB0aGUgZXhwZWN0ZWQgbWVzc2FnZSBpbiBhc1xuICogdGhlIG9wdGlvbmFsIHNlY29uZCBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgd2hlbiBpdFxuICogICAgIGZhaWxzLCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgY29udGV4dCwgd2hldGhlciBvciBub3QgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBub3QgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdub3QnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbm90JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHVuZGVmaW5lZFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPayA/IGZhaWwocGN0eCwgZXJyb3JzLCBpbmRleCkgOiBvayhwY3R4LCBudWxsLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRQYXJzZXJzLFxuICBhc3NlcnRTdHJpbmcsXG4gIGZvcm1hdHRlcixcbiAgb3JkRm5Gb3JtYXR0ZXIsXG4gIG9yZE51bUZvcm1hdHRlcixcbiAgb3JkUGFyRm9ybWF0dGVyLFxuICBvcmRTdHJGb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBmYXRhbCwgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBjb21wb3VuZCwgRXJyb3JUeXBlLCBleHBlY3RlZCwgbWVyZ2UsIG5lc3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IG9yZGluYWwsIHJhbmdlLCBzdHJpbmdpZnksIHR3aW4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG5mdW5jdGlvbiBwYXNzKGN0eCwgcmVzdWx0LCBlcnJvcnMpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCB9LCB7IC4uLnJlc3VsdCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXNzZXMgdGhyb3VnaCB0aGUgcmVzdWx0IG9mIGl0cyBlbWJlZGRlZCBwYXJzZXIsXG4gKiBleGNlcHQgdGhhdCBpdCB3aWxsIGNoYW5nZSB0aGF0IHBhcnNlcidzIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG9cbiAqIHRoZSBvbmUgcHJvdmlkZWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBleGVjdXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBleHBlY3RlZCBlcnJvciBtZXNzYWdlIGlmIGBwYCBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBwYXNzZXMgaXRzIHJlc3VsdHNcbiAqICAgICB0aHJvdWdoIGV4Y2VwdCBmb3IgY2hhbmdpbmcgaXRzIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdXBvblxuICogICAgIGZhaWx1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBsYWJlbCA9IChwLCBtc2cpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsYWJlbCcsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2xhYmVsJywgbXNnLCBvcmRTdHJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gRmFpbCA/IHBhc3MocGN0eCwgcHJlcywgZXhwZWN0ZWQobXNnKSkgOiBwcmVwXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYmFja3RyYWNrcyB3aGVuIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkgYW5kXG4gKiB0cmFuc2Zvcm1zIHRoYXQgZmF0YWwgZmFpbHVyZSBpbnRvIGEgbm9uLWZhdGFsIG9uZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IHdheSAoYWxvbmcgd2l0aCB0aGUgc2ltaWxhciBgYXR0ZW1wdE1gKSB0byBjYXVzZSBhXG4gKiBjb250YWluZWQgcGFyc2VyIHRvIGJhY2t0cmFjayBhZnRlciBhIGZhdGFsIGZhaWx1cmUuIEFsbCBvZiB0aGUgYEJgXG4gKiBiYWNrdHJhY2tpbmcgcGFyc2VycyBiYWNrdHJhY2sgb25seSBpZiB0aGUgZmF0YWwgZmFpbHVyZSB3YXMgY2F1c2VkXG4gKiBieSBhIGNvbnRhaW5lZCBwYXJzZXIncyBub24tZmF0YWwgZmFpbHVyZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIGZhdGFsIGZhaWx1cmVzIHdpbGwgYmUgY29udmVydGVkXG4gKiAgICAgaW50byBub24tZmF0YWwgZmFpbHVyZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGNhbm5vdCBmYWlsIGZhdGFsbHkuIElmIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIgZmFpbHMgZmF0YWxseSwgdGhpcyBvbmUgd2lsbCBpbnN0ZWFkIGZhaWwgbm9uLWZhdGFsbHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhdHRlbXB0ID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXR0ZW1wdCcsIHApXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcGN0eC5pbmRleCA/IHByZXMuZXJyb3JzIDogbmVzdGVkKHBjdHgsIHByZXMuZXJyb3JzKVxuICByZXR1cm4gZmFpbChwY3R4LCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGJhY2t0cmFja3Mgd2hlbiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5IGFuZFxuICogdHJhbnNmb3JtcyB0aGF0IGZhdGFsIGZhaWx1cmUgaW50byBhIG5vbi1mYXRhbCBvbmUuIFRoZSBlcnJvciBtZXNzYWdlXG4gKiBpcyB0aGVuIHJlcGxhY2VkIHdpdGggdGhlIHN1cHBsaWVkIG9uZS5cbiAqXG4gKiBJZiB0aGUgY29udGFpbmVkIHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhpcyBhY3RzIGp1c3QgbGlrZVxuICogYGxhYmVsYCBhbmQgc2ltcGx5IHJlcGxhY2VzIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlLiBJZiB0aGF0XG4gKiBwYXJzZXIgZmFpbHMgZmF0YWxseSBob3dldmVyLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnRcbiAqIHdoZXJlIHRoYXQgcGFyc2VyIHdhcyBleGVjdXRlZCBhbmQgd2lsbCB1c2UgdGhlIHN1cHBsaWVkIGVycm9yXG4gKiBtZXNzYWdlIGFzIGEgaGVhZGVyIHRvIGEgbmVzdGVkIGVycm9yIG1lc3NhZ2UgZGV0YWlsaW5nIHRoZVxuICogYmFja3RyYWNraW5nLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBlcnJvciBtZXNzYWdlIHRvIGJlIHVzZWQuIFRoaXMgd2lsbCBiZSBhblxuICogICAgIGBFeHBlY3RlZGAgZXJyb3IgaWYgbm8gaW5wdXQgd2FzIGNvbnN1bWVkLCBvciBhIGBDb21wb3VuZGAgZXJyb3JcbiAqICAgICBpZiBpdCB3YXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBjaGFuZ2VzIHRoZSBlcnJvciBhc1xuICogICAgIGFwcHJvcHJpYXRlIGlmIGBwYCBmYWlscy5cbiAqL1xuZXhwb3J0IGNvbnN0IGF0dGVtcHRNID0gKHAsIG1zZykgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2F0dGVtcHRNJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnYXR0ZW1wdE0nLCBtc2csIG9yZFN0ckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgaWYgKHByZXMuZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBwcmVzLmVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKSB7XG4gICAgICBjb25zdCB7IGN0eCwgZXJyb3JzIH0gPSBwcmVzLmVycm9yc1swXVxuICAgICAgcmV0dXJuIHBhc3MocGN0eCwgcHJlcywgY29tcG91bmQobXNnLCBjdHgsIGVycm9ycykpXG4gICAgfVxuICAgIHJldHVybiBwYXNzKHBjdHgsIHByZXMsIGV4cGVjdGVkKG1zZykpXG4gIH1cbiAgcmV0dXJuIGZhaWwoY3R4LCBjb21wb3VuZChtc2csIHBjdHgsIHByZXMuZXJyb3JzKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lIGZhaWxzLiBJbiB0aGVcbiAqIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzIHRoZVxuICogcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSBhZnRlciBhbGwgb2YgdGhlIGVhcmxpZXJcbiAqIHBhcnNlcnMgc3VjY2VlZGVkLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgdGhlXG4gKiB2ZXJ5IGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgZXhlY3V0ZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdFxuICogICAgIGEgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VCID0gKC4uLnBzKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcnMoJ3NlcXVlbmNlQicsIHBzKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChjb250ZXh0LCBlcnJvcnMpXG4gICAgICByZXR1cm4gZmFpbChjb250ZXh0LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSByZXN1bHQgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZCBwYXJzZXJcbiAqIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlIHBhcnNlclxuICogcmV0dXJucyB0aGF0IHJlc3VsdC5cbiAqXG4gKiBJZiB0aGUgcGFyc2VyIHJldHVybmVkIGJ5IGBmbmAgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYHBgIHN1Y2NlZWRzLFxuICogdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgYW5kXG4gKiB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgLCBwYXNzIHRoZSByZXN1bHQgdG9cbiAqICAgICB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzIHJldHVybiB2YWx1ZSBhcyBhXG4gKiAgICAgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY2hhaW5CJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdjaGFpbkInLCBmbiwgb3JkRm5Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBxID0gZm4ocHJlcy52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnY2hhaW5CJywgcSwgZm9ybWF0dGVyKCd0aGUgMm5kIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICApXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSB0d2luKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKHFjdHgsIGVycm9ycylcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IHFjdHguaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQocWN0eCwgZXJyb3JzKVxuICByZXR1cm4gZmFpbChxY3R4LCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBxYCB0byB0aGUgZnVuY3Rpb25cbiAqIHJldHVybmVkIGJ5IGBwYC5cbiAqXG4gKiBJZiBgcGAgc3VjY2VlZHMgYW5kIGBxYCBmYWlscywgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlXG4gKiBwb2ludCB3aGVyZSBgcGAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICogICAgIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIEEgcGFyc2VyIHdoaWNoIHByb3ZpZGVzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHlCID0gKHAsIHEpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseUInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseUInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKHFjdHgsIGVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgY29uc3QgZXJyID0gaW5kZXggPT09IHFjdHguaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQocWN0eCwgZXJyb3JzKVxuICAgIHJldHVybiBmYWlsKHFjdHgsIGVyciwgaW5kZXgpXG4gIH1cblxuICBjb25zdCBmbiA9IHFyZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICdhcHBseUInLCBmbiwgZm9ybWF0dGVyKCcybmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgZnVuY3Rpb24nKSxcbiAgKVxuICByZXR1cm4gb2socWN0eCwgZm4ocHJlcy52YWx1ZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHBgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICovXG5leHBvcnQgY29uc3QgbGVmdEIgPSAocCwgcSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnRCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdEInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBvayhxY3R4LCBwcmVzLnZhbHVlKVxuXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKHFjdHgsIGVycm9ycylcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcWN0eC5pbmRleCA/IGVycm9ycyA6IG5lc3RlZChxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsKHFjdHgsIGVyciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHFgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0QiA9IChwLCBxKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHRCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHRCJywgcSwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSB0d2luKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWwocWN0eCwgZXJyb3JzKVxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBxY3R4LmluZGV4ID8gZXJyb3JzIDogbmVzdGVkKHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWwocWN0eCwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCB3aWxsIGV4ZWN1dGUgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gc2VxdWVuY2UgYW5kXG4gKiB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGJvdGggaW4gYW4gYXJyYXkuXG4gKlxuICogSWYgYHBgIHN1Y2NlZWRzIGFuZCBgcWAgZmFpbHMsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZVxuICogcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBib3RoIGBwYCBhbmQgYHFgIGFuZCByZXR1cm5zXG4gKiAgICAgdGhlIHJlc3VsdHMgb2YgYm90aCBwYXJzZXJzIGluIGFuIGFycmF5LlxuICovXG5leHBvcnQgY29uc3QgYW5kVGhlbkIgPSAocCwgcSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FuZFRoZW5CJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYW5kVGhlbkInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBvayhxY3R4LCBbcHJlcy52YWx1ZSwgcXJlcy52YWx1ZV0pXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWwocWN0eCwgZXJyb3JzKVxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBxY3R4LmluZGV4ID8gZXJyb3JzIDogbmVzdGVkKHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWwocWN0eCwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcywgY29sbGVjdGluZyB0aGVcbiAqIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LlxuICpcbiAqIElmIGBwYCBmYWlscyBhZnRlciBpbml0aWFsbHkgc3VjY2VlZGluZyBvbmNlIG9yIG1vcmUsIHRoaXMgcGFyc2VyXG4gKiB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCB0aGUgZmlyc3QgdGltZSBhbmRcbiAqIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBleGVjdXRlIG11bHRpcGxlIHRpbWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBleGVjdXRlIHRoZSBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBlYXRCID0gKHAsIG4pID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyZXBlYXRCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcigncmVwZWF0QicsIG4sIG9yZE51bUZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleFxuICAgICAgICA/IHByZXMuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKGNvbnRleHQsIHByZXMuZXJyb3JzKVxuICAgICAgcmV0dXJuIGZhaWwoY29udGV4dCwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBhIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBhblxuICogZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZlxuICogdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqICpmaXJzdCosIHNvIHRoZSByZXN1bHRzIG9mIHRoZSB0d28gcGFyc2VycyB3aWxsIG5vdCBvdmVybGFwLlxuICpcbiAqIElmIGBwYCBmYWlscyBub24tZmF0YWxseSBiZWZvcmUgYGVuZGAgc3VjY2VlZHMsIHRoaXMgcGFyc2VyIHdpbGxcbiAqIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCB0aGUgZmlyc3QgdGltZSBhbmQgd2lsbFxuICogZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBlbmRgIGFuZCB0aGVuIGBwYCB6ZXJvXG4gKiAgICAgb3IgbW9yZSB0aW1lcyB1bnRpbCBgZW5kYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsQiA9IChwLCBlbmQpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBlbmQsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtlbmRyZXAsIFtlbmRjdHgsIGVuZHJlc11dID0gdHdpbihlbmQoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGVuZGN0eFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGVuZHJlcFxuICAgIGlmIChlbmRyZXMuc3RhdHVzID09PSBPaykgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBwY3R4LmluZGV4XG4gICAgICAgID8gbWVyZ2UocHJlcy5lcnJvcnMsIGVuZHJlcy5lcnJvcnMpXG4gICAgICAgIDogbmVzdGVkKHBjdHgsIG1lcmdlKHByZXMuZXJyb3JzLCBlbmRyZXMuZXJyb3JzKSlcbiAgICAgIHJldHVybiBmYWlsKHBjdHgsIGVyciwgaW5kZXgpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYW55IG9mIHRoZSB5aWVsZGVkIHBhcnNlcnMgZmFpbCwgIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvXG4gKiB0aGUgcG9pbnQgd2hlcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbFxuICogbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbigpOip9IGdlbkZuIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cbiAqICAgICBhcmd1bWVudHMgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkXG4gKiAgICAgcGFyc2VyJ3MgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5XG4gKiAgICAgYFBhcnNlcmBzOyBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBibG9ja0IgPSBnZW5GbiA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEdlbmVyYXRvckZ1bmN0aW9uKCdibG9ja0InLCBnZW5GbilcblxuICBjb25zdCBnZW4gPSBnZW5GbigpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBbXVxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2soY29udGV4dCwgdmFsdWUpXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdibG9ja0InLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIG9yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHZhbHVlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKGNvbnRleHQsIGVycm9ycylcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBjb250ZXh0LmluZGV4ID8gZXJyb3JzIDogbmVzdGVkKGNvbnRleHQsIGVycm9ycylcbiAgICAgIHJldHVybiBmYWlsKGNvbnRleHQsIGVyciwgaW5kZXgpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXMgdGhvc2VcbiAqIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mIHBhcnNlcnMgdG9cbiAqIGV4ZWN1dGUuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoaXMgcGFyc2VyJ3NcbiAqIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYWxsIG9mIHRoZSBlYXJsaWVyXG4gKiBwYXJzZXJzIHN1Y2NlZWRlZCwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIHRoZVxuICogdmVyeSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGUgZnVuY3Rpb25cbiAqICAgICBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGwgb3RoZXJcbiAqICAgICBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBleGVjdXRlIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgcGlwZUIgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBmbiA9IHBzLnBvcCgpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdwaXBlQicsIHBzKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdwaXBlQicsIGZuLCBvcmRGbkZvcm1hdHRlcihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSxcbiAgICApXG5cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChjb250ZXh0LCBlcnJvcnMpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQuaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQoY29udGV4dCwgZXJyb3JzKVxuICAgICAgICByZXR1cm4gZmFpbChjb250ZXh0LCBlcnIsIGluZGV4KVxuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rKGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgaXRzIHByZSwgY29udGVudCwgYW5kIHBvc3QgcGFyc2VycyBpbiBvcmRlclxuICogYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKlxuICogSWYgYW55IHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gd2hlcmVcbiAqIGBwcmVgIHdhcyBleGVjdXRlZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZSBhbmQgd2hvc2UgcmVzdWx0XG4gKiAgICAgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYHByZWAsIGBwYCwgYW5kIGBwb3N0YCBpblxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuQiA9IChwcmUsIHBvc3QsIHApID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHByZSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBwb3N0LCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHAsIG9yZFBhckZvcm1hdHRlcignM3JkJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcmVwLCBbcHJlY3R4LCBwcmVyZXNdXSA9IHR3aW4ocHJlKGN0eCkpXG4gIGlmIChwcmVyZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXJlcFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAocHJlY3R4KVxuICBsZXQgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKHByZXJlcy5lcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChwY3R4LCBlcnJvcnMpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBwY3R4LmluZGV4ID8gZXJyb3JzIDogbmVzdGVkKHBjdHgsIGVycm9ycylcbiAgICByZXR1cm4gZmFpbChwY3R4LCBlcnIsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgW3Bvc3RjdHgsIHBvc3RyZXNdID0gcG9zdChwY3R4KVxuICBpZiAocG9zdHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsKHBvc3RjdHgsIG1lcmdlKGVycm9ycywgcG9zdHJlcy5lcnJvcnMpKVxuICB9XG4gIGlmIChwb3N0cmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIGVycm9ycyA9IG1lcmdlKGVycm9ycywgcG9zdHJlcy5lcnJvcnMpXG4gICAgY29uc3QgZXJyID0gaW5kZXggPT09IHBvc3RjdHguaW5kZXggPyBlcnJvcnMgOiBuZXN0ZWQocG9zdGN0eCwgZXJyb3JzKVxuICAgIHJldHVybiBmYWlsKHBvc3RjdHgsIGVyciwgaW5kZXgpXG4gIH1cbiAgcmV0dXJuIG9rKHBvc3RjdHgsIHByZXMudmFsdWUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXNzZXJ0QXJyYXksXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBmb3JtYXR0ZXIsXG4gIG9yZE51bUZvcm1hdHRlcixcbiAgb3JkUGFyRm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAgYW5kIHJldHVybiBgcGAncyByZXN1bHRzIGpvaW5lZFxuICogdG9nZXRoZXIgaW50byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgcmVxdWlyZXMgdGhhdCBgcGAgcmV0dXJucyBhblxuICogYXJyYXk7IGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGlmIGl0IGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuIGFuIGFycmF5IG9mXG4gKiAgICAgc3RyaW5ncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCByZXR1cm5zIGEgc2luZ2xlXG4gKiAgICAgc3RyaW5nIG1hZGUgZnJvbSBqb2luaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgYXJyYXkgb2Ygc3RyaW5nc1xuICogICAgIHJldHVybmVkIGJ5IGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGpvaW4gPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdqb2luJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnam9pbicsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKHBjdHgsIHYuam9pbignJykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAgYW5kIHJldHVybiBpdHMgcmVzdWx0cyBtaW51cyBhbnlcbiAqIGBudWxsYCBvciBgdW5kZWZpbmVkYCByZXN1bHRzLiBUaGlzIHJlcXVpcmVzIHRoYXQgYHBgIHJldHVybnMgYW5cbiAqIGFycmF5OyBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBpdCBkb2VzIG5vdC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IGlzIGV4cGVjdGVkIHRvIHJldHVybiBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCByZXR1cm5zIGl0cyByZXN1bHRzXG4gKiAgICAgbWludXMgYW55IGBudWxsYCBvciBgdW5kZWZpbmVkYCByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3QgY29tcGFjdCA9IHAgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2NvbXBhY3QnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdjb21wYWN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2socGN0eCwgdi5maWx0ZXIoeCA9PiB4ICE9IG51bGwpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBidXQsIG9uIHN1Y2Nlc3MsIHJldHVybnMgYHhgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS4gSXRzIHJlc3VsdCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0aGF0IHRoZSBuZXcgcGFyc2VyIHdpbGwgcmVzdWx0IGluIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGBwYCBidXQgcmV0dXJuIGB4YCBvblxuICogICAgIHN1Y2Nlc3MuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWx1ZSA9IChwLCB4KSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndmFsdWUnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gT2sgPyBvayhwY3R4LCB4KSA6IHByZXBcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBgbmB0aCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgMC1iYXNlZCBpbmRleCBvZiB0aGUgcmVzdWx0IGVsZW1lbnQgdG8gcmV0dXJuLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBgbmB0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBudGggPSAocCwgbikgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ250aCcsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ250aCcsIG4sIG9yZE51bUZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ250aCcsIHYsIGZvcm1hdHRlcignMXN0IGFyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhwY3R4LCB2W25dKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgZmlyc3QgPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmaXJzdCcsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZpcnN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2socGN0eCwgdlswXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBzZWNvbmQgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBzZWNvbmQgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2Vjb25kJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnc2Vjb25kJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2socGN0eCwgdlsxXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSB0aGlyZCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHRoaXJkID0gcCA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndGhpcmQnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCd0aGlyZCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKHBjdHgsIHZbMl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvdXJ0aCA9IHAgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvdXJ0aCcsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZvdXJ0aCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKHBjdHgsIHZbM10pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlmdGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaWZ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWZ0aCA9IHAgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpZnRoJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlmdGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhwY3R4LCB2WzRdKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRQYXJzZXIsXG4gIGZvcm1hdHRlcixcbiAgb3JkRm5Gb3JtYXR0ZXIsXG4gIG9yZFBhckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IG1heWJlRmF0YWwsIG9rLCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJvdGggQXBwbGljYXRpdmUgYW5kIE1vbmFkXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggYWx3YXlzIHN1Y2NlZWRzIHdpdGggdGhlIHN1cHBsaWVkIHZhbHVlLlxuICpcbiAqIFRoaXMgc2VydmVzIGFzIGEgcHJpbWl0aXZlIGZvciBib3RoIG1vbmFkcyBhbmQgYXBwbGljYXRpdmVzLiBJblxuICogSGFza2VsbCB0ZXJtcywgdGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGJvdGggYHB1cmVgIGluIHRoZVxuICogYEFwcGxpY2F0aXZlYCBjbGFzcyBhbmQgYHJldHVybmAgaW4gdGhlIGBNb25hZGAgY2xhc3MuXG4gKlxuICogSW4gb3RoZXIgd29yZHMsIGl0IGxpZnRzIGFuIGFyYml0cmFyeSB2YWx1ZSBpbnRvIGEgUGFyc2VyIGNvbnRleHQsXG4gKiB0dXJuaW5nIGl0IGludG8gYSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoYXQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB3aWxsIHJlc3VsdCB3aGVuIHRoaXMgcGFyc2VyIGlzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyB3aXRoIGB2YWx1ZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHdheXMgPSB4ID0+IHBhcnNlcihjdHggPT4gb2soY3R4LCB4KSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFwcGxpY2F0aXZlXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIHBhc3NlcyBpdHMgcmVzdWx0IHRvXG4gKiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoZVxuICogcmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgdGhlIGBmbWFwYCBvcGVyYXRpb24gZnJvbSBIYXNrZWxsJ3MgYEZ1bmN0b3JgIGNsYXNzLiBJdCdzXG4gKiB1c2VkIGFzIGEgYmFzaXMgZm9yIGxpZnRpbmcgZnVuY3Rpb25zIGludG8gYSBQYXJzZXIgY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKToqfSBmbiBBIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYCBhbmQgd2hvc2UgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgICBjcmVhdGVkIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHN1Y2NlZWQgd2l0aCB0aGF0XG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXAgPSAocCwgZm4pID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYXAnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ21hcCcsIGZuLCBvcmRGbkZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPayA/IG9rKHBjdHgsIGZuKHByZXMudmFsdWUpKSA6IHByZXBcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcWAgdG8gdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIGA8Kj5gIGZyb20gSGFza2VsbCdzIGBBcHBsaWNhdGl2ZWBcbiAqIGNsYXNzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAqICAgICBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBBIHBhcnNlciB3aGljaCBwcm92aWRlcyBhIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHkgPSAocCwgcSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FwcGx5JywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHknLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICByZXR1cm4gbWF5YmVGYXRhbChcbiAgICAgIHFjdHguaW5kZXggIT09IGluZGV4LCBxY3R4LCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpLFxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGZuID0gcXJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgJ2FwcGx5JywgZm4sIGZvcm1hdHRlcignMm5kIGFyZ3VtZW50IHRvIHJldHVybiBhIGZ1bmN0aW9uJyksXG4gIClcbiAgcmV0dXJuIG9rKHFjdHgsIGZuKHByZXMudmFsdWUpKVxufSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1vbmFkXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHJlc3VsdCBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkIHBhcnNlclxuICogdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGUgcGFyc2VyXG4gKiByZXR1cm5zIHRoYXQgcmVzdWx0LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIHRoZSBmdW5jdGlvbi1wcm92aWRlZCBwYXJzZXIgZmFpbHNcbiAqIGFmdGVyIHRoZSBvdGhlciBwYXJzZXIgY29uc3VtZXMgaW5wdXQsIGV2ZW4gaWYgdGhhdCBmYWlsdXJlIGlzXG4gKiBub24tZmF0YWwuXG4gKlxuICogVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGBNb25hZGAgY2xhc3MncyBgYmluZGAgb3BlcmF0aW9uXG4gKiAoZ2VuZXJhbGx5IHdyaXR0ZW4gYD4+PWAgaW4gSGFza2VsbCkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZSBhcyBhIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgdGhlIGlucHV0IHRvLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW4gPSAocCwgZm4pID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjaGFpbicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW4nLCBmbiwgb3JkRm5Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBxID0gZm4ocHJlcy52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnY2hhaW4nLCBxLCBmb3JtYXR0ZXIoJ3RoZSAybmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgcGFyc2VyJyksXG4gIClcblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IHR3aW4ocShwY3R4KSlcbiAgcmV0dXJuIHFyZXMuc3RhdHVzID09PSBPa1xuICAgID8gcXJlcFxuICAgIDogbWF5YmVGYXRhbChxY3R4LmluZGV4ICE9PSBpbmRleCwgcWN0eCwgbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbn0pXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBbHRlcm5hdGl2ZVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmlyc3QgYXBwbGllcyBgcGAgYW5kLCBpZiB0aGF0IGZhaWxzLCBhcHBsaWVzIGBxYC4gVGhlXG4gKiByZXN1bHQgaXMgdGhlIHJlc3VsdCBvZiB3aGF0ZXZlciBwYXJzZXIgc3VjY2VlZHMuIElmIGJvdGggZmFpbCxcbiAqIGBvckVsc2VgIGFsc28gZmFpbHMsIGFuZCBpZiBlaXRoZXIgZmFpbCBmYXRhbGx5LCBgb3JFbHNlYCBmYWlsc1xuICogZmF0YWxseS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyBgPHw+YCBpbiBIYXNrZWxsJ3MgYEFsdGVybmF0aXZlYCBjbGFzcy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIGZpcnN0IHBhcnNlciBhbmQgdGhlbiBpZlxuICogICAgIG5lY2Vzc2FyeSB0aGUgc2Vjb25kIHBhcnNlciwgcmV0dXJuaW5nIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IHRvXG4gKiAgICAgc3VjY2VlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9yRWxzZSA9IChwLCBxKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3JFbHNlJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3JFbHNlJywgcSwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IEZhaWwpIHJldHVybiBwcmVwXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSB0d2luKHEocGN0eCkpXG4gIHJldHVybiBxcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHFyZXBcbiAgICA6IG1heWJlRmF0YWwocXJlcy5zdGF0dXMgPT09IEZhdGFsLCBxY3R4LCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxufSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERlcml2YXRpdmUgcHJpbWl0aXZlc1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBzZXF1ZW5jZSBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhIDItZWxlbWVudCBhcnJheS5cbiAqXG4gKiBJZiBlaXRoZXIgYHBgIG9yIGBxYCBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZVxuICogZmFpbHVyZSB3aWxsIGJlIGZhdGFsIGlmIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXJcbiAqIHBhcnNlci5cbiAqXG4gKiBUaGlzIGlzIHRoZSBtb3N0IHByaW1pdGl2ZSBzZXF1ZW5jaW5nIHBhcnNlci4gSXQgY2FuIGJlIHJlZ2FyZGVkIGFzXG4gKiBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgZWl0aGVyLCBpbiB0aGUgbW9uYWRpYyBhbmQgYXBwbGljYXRpdmVcbiAqIHN0eWxlcyByZXNwZWN0aXZlbHk6XG4gKlxuICogYGBgXG4gKiBjaGFpbihwLCBhID0+IGNoYWluKHEsIGIgPT4gYWx3YXlzKFthLCBiXSkpKVxuICogYXBwbHkocCwgYXBwbHkocSwgYWx3YXlzKGIgPT4gYSA9PiBbYSwgYl0pKSlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBhbmRUaGVuID0gKHAsIHEpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhbmRUaGVuJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYW5kVGhlbicsIHEsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgcmV0dXJuIHFyZXMuc3RhdHVzID09PSBPa1xuICAgID8gb2socWN0eCwgW3ByZXMudmFsdWUsIHFyZXMudmFsdWVdKVxuICAgIDogbWF5YmVGYXRhbChxY3R4LmluZGV4ICE9PSBpbmRleCwgcWN0eCwgbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydEdlbmVyYXRvckZ1bmN0aW9uLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0UGFyc2VycyxcbiAgYXNzZXJ0U3RyaW5nLFxuICBvcmRGbkZvcm1hdHRlcixcbiAgb3JkTnVtRm9ybWF0dGVyLFxuICBvcmRQYXJGb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBtYXliZUZhdGFsLCBvaywgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkLCBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IG9yZGluYWwsIHJhbmdlLCBzdHJpbmdpZnksIHR3aW4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG5mdW5jdGlvbiBsb29wTWVzc2FnZShuYW1lKSB7XG4gIHJldHVybiBgWyR7bmFtZX1dOiBpbmZpbml0ZSBsb29wIGRldGVjdGVkOyBgXG4gICAgKyAnbmVpdGhlciBjb250ZW50IG5vciBzZXBhcmF0b3IgcGFyc2VyIGNvbnN1bWVkIGlucHV0J1xufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpcyBleGVjdXRlZFxuICogaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZSBmYWlscy4gSW4gdGhlXG4gKiBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lcyB0aGVcbiAqIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBhbnkgaW5wdXQgd2FzIGNvbnN1bWVkIGJlZm9yZSBhbnkgb2ZcbiAqIGl0cyBwYXJzZXJzIGZhaWwsIGV2ZW4gaWYgdGhhdCBmYWlsdXJlIGl0c2VsZiB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfHN0cmluZ30gYXJncyBUaGUgcGFyc2VycyB0byBiZSBleGVjdXRlZC4gVGhlIGxhc3RcbiAqICAgICBhcmd1bWVudCAqbWF5KiBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBiZWNvbWVzIHRoZSBleHBlY3RlZFxuICogICAgIGVycm9yIG1lc3NhZ2UgaW4gcGxhY2Ugb2YgdGhlIGNvbGxlY3RlZCBleHBlY3RlZCBlcnJvciBtZXNzYWdlc1xuICogICAgIG9mIHRoZSBjb25zdGl0dWVudCBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXRcbiAqICAgICBhIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJnc1xuICBjb25zdCBtID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+XG4gICAgICBhc3NlcnRQYXJzZXIoJ3NlcScsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgdHJ1ZSkpKVxuXG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuICAgIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICAgIGNvbnRleHQgPSBwY3R4XG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIGVycm9ycylcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgcmV0dXJuc1xuICogdGhlIHJlc3VsdCBvZiBgcGAuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBhcHBsaWNhdGl2ZSBgPCpgXG4gKiBpbiBIYXNrZWxsLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbGVmdCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGVmdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gICAgcmV0dXJuIG1heWJlRmF0YWwocHJlcy5zdGF0dXMgPT09IEZhdGFsLCBwY3R4LCBlcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgcmV0dXJuIHFyZXMuc3RhdHVzID09PSBPa1xuICAgID8gb2socWN0eCwgcHJlcy52YWx1ZSlcbiAgICA6IG1heWJlRmF0YWwocWN0eC5pbmRleCAhPT0gaW5kZXgsIHFjdHgsIGVycm9ycylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgcmV0dXJuc1xuICogdGhlIHJlc3VsdCBvZiBgcWAuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBhcHBsaWNhdGl2ZSBgKj5gXG4gKiBpbiBIYXNrZWxsLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyaWdodCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gICAgcmV0dXJuIG1heWJlRmF0YWwocHJlcy5zdGF0dXMgPT09IEZhdGFsLCBwY3R4LCBlcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IHR3aW4ocShwY3R4KSlcbiAgY29uc3QgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICByZXR1cm4gcXJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBxcmVwXG4gICAgOiBtYXliZUZhdGFsKHFjdHguaW5kZXggIT09IGluZGV4LCBxY3R4LCBlcnJvcnMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGEgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkIHdpbGwgYmVcbiAqIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuIGJlXG4gKiBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIElmIGFueSB5aWVsZGVkIHBhcnNlciBmYWlscyBhZnRlciBhbm90aGVyIHlpZWxkZWQgcGFyc2VyIGhhcyBjb25zdW1lZFxuICogaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIGFuIGVycm9yIHRvIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogICAgIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWRcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcbiAqICAgICBgUGFyc2VyYHM7IG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXG4gKiAgICAgZXhlY3V0ZXMgcGFyc2VycyBhcyB0aGV5IGFyZSB5aWVsZGVkLCBhbmQgcmVzdWx0cyBpbiB0aGUgcmV0dXJuXG4gKiAgICAgdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJsb2NrID0gZ2VuRm4gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbignYmxvY2snLCBnZW5GbilcblxuICBjb25zdCBnZW4gPSBnZW5GbigpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBbXVxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2soY29udGV4dCwgdmFsdWUpXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdibG9jaycsIHZhbHVlLCB2ID0+IGBleHBlY3RlZCAke1xuICAgICAgb3JkaW5hbChpICsgMSlcbiAgICB9IHlpZWxkIHRvIGJlIHRvIGEgcGFyc2VyOyBmb3VuZCAke3N0cmluZ2lmeSh2KX1gKVxuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gdmFsdWUoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChjb250ZXh0LmluZGV4ICE9PSBpbmRleCwgY29udGV4dCwgZXJyb3JzKVxuICAgIH1cbiAgICBuZXh0VmFsdWUgPSBwcmVzLnZhbHVlXG4gICAgaSsrXG4gIH1cbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzIHVudGlsIGl0IGZhaWxzLFxuICogY29sbGVjdGluZyB0aGUgcmVzdWx0cyBpbnRvIGFuIGFycmF5IHRoYXQgaXMgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGZhaWwgbm9uLWZhdGFsbHk7IGhvd2V2ZXIsIGlmIGBwYCBldmVyIGZhaWxzXG4gKiBmYXRhbGx5LCB0aGVuIHNvIHdpbGwgdGhpcyBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgZXhlY3V0ZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbWFueSA9IHAgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnknLCBwKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW50byBhbiBhcnJheSB0aGF0IGlzIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbiBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGBwYCBldmVyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgZXhlY3V0ZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55MSA9IHAgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnkxJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBkaXNjYXJkcyBhbnkgc3VjY2Vzc2Z1bCByZXN1bHQgd2hpbGVcbiAqIHN0aWxsIGNvbnN1bWluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0byBiZSBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBgcGAgIGRvZXMgb25cbiAqICAgICBzdWNjZXNzLCBidXQgd2lsbCBwcm9kdWNlIG5vIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXAgPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdza2lwJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICByZXR1cm4gcHJlcy5zdGF0dXMgPT09IE9rID8gb2socGN0eCwgbnVsbCkgOiBwcmVwXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGRpc2NhcmRpbmcgdGhlIHJlc3VsdHMuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGZhaWwgbm9uLWZhdGFsbHk7IGhvd2V2ZXIsIGlmIGBwYCBldmVyIGZhaWxzXG4gKiBmYXRhbGx5LCB0aGVuIHNvIHdpbGwgdGhpcyBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxuICovXG5leHBvcnQgY29uc3Qgc2tpcE1hbnkgPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdza2lwTWFueScsIHApXG5cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBkaXNjYXJkaW5nIHRoZSByZXN1bHRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbiBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGBwYCBldmVyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwTWFueTEgPSBwID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdza2lwTWFueTEnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzZXBgIGluXG4gKiBiZXR3ZWVuIGVhY2guIFRoZSByZXN1bHRzIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmRcbiAqIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgbm9uLWZhdGFsbHksIGFzIG1hdGNoaW5nIGBwYCB6ZXJvIHRpbWVzIGlzXG4gKiB2YWxpZC4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzZXBgIGV2ZXIgZmFpbCBmYXRhbGx5LlxuICpcbiAqIElmIGBwYCBhbmQgYHNlcGAgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwQnkgPSAocCwgc2VwKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnknLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBCeScsIHNlcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2socGN0eCwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2VwcmVwLCBbc2VwY3R4LCBzZXByZXNdXSA9IHR3aW4oc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBzZXBjdHhcbiAgICBpZiAoc2VwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBzZXByZXBcbiAgICBpZiAoc2VwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5JykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2VwYCBpblxuICogYmV0d2VlbiBlYWNoLiBUaGUgcmVzdWx0cyBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIG5vdCBmYWlsIGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSXRcbiAqIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGVpdGhlciBgcGAgb3IgYHNlcGAgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2VwYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBCeTEgPSAocCwgc2VwKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnkxJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnkxJywgc2VwLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NlcHJlcCwgW3NlcGN0eCwgc2VwcmVzXV0gPSB0d2luKHNlcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gc2VwY3R4XG4gICAgaWYgKHNlcHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gc2VwcmVwXG4gICAgaWYgKHNlcHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBCeTEnKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2VwYCBpblxuICogYmV0d2VlbiBlYWNoIGFuZCBvcHRpb25hbGx5IGFmdGVyIHRoZSBsYXN0IG1hdGNoIG9mIGBwYC4gVGhlIHJlc3VsdHNcbiAqIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmQgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBub24tZmF0YWxseSwgYXMgbWF0Y2hpbmcgYHBgIHplcm8gdGltZXMgaXNcbiAqIHZhbGlkLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGVpdGhlciBgcGAgb3IgYHNlcGAgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2VwYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBFbmRCeSA9IChwLCBzZXApID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeScsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5Jywgc2VwLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBvayhwY3R4LCBbXSlcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzZXByZXAsIFtzZXBjdHgsIHNlcHJlc11dID0gdHdpbihzZXAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHNlcGN0eFxuICAgIGlmIChzZXByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHNlcHJlcFxuICAgIGlmIChzZXByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnknKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIGNvbnN0IFtzZXByZXAsIFtzZXBjdHgsIHNlcHJlc11dID0gdHdpbihzZXAoeyAuLi5jb250ZXh0LCBpbmRleCB9KSlcbiAgcmV0dXJuIHNlcHJlcy5zdGF0dXMgPT09IEZhdGFsID8gc2VwcmVwIDogb2soc2VwY3R4LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIG9uZSBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNlcGAgaW5cbiAqIGJldHdlZW4gZWFjaCBhbmQgb3B0aW9uYWxseSBhZnRlciB0aGUgbGFzdCBtYXRjaCBvZiBgcGAuIFRoZSByZXN1bHRzXG4gKiBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgaWYgYHBgIGRvZXNuJ3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJdFxuICogd2lsbCBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2VwYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzZXBgIGJvdGggc3VjY2VlZCB3aXRob3V0IGNvbnN1bWluZyBjb250ZW50LCB0aGF0IHdvdWxkXG4gKiBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEVuZEJ5MSA9IChwLCBzZXApID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeTEnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeTEnLCBzZXAsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2VwcmVwLCBbc2VwY3R4LCBzZXByZXNdXSA9IHR3aW4oc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBzZXBjdHhcbiAgICBpZiAoc2VwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBzZXByZXBcbiAgICBpZiAoc2VwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEVuZEJ5MScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgY29uc3QgW3NlcHJlcCwgW3NlcGN0eCwgc2VwcmVzXV0gPSB0d2luKHNlcCh7IC4uLmNvbnRleHQsIGluZGV4IH0pKVxuICByZXR1cm4gc2VwcmVzLnN0YXR1cyA9PT0gRmF0YWwgPyBzZXByZXAgOiBvayhzZXBjdHgsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcywgY29sbGVjdGluZyB0aGVcbiAqIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LlxuICpcbiAqIElmIGBwYCBmYWlscyBhZnRlciBhbnkgaW5wdXQgaGFzIGJlZW4gY29uc3VtZWQgYnkgYSBwcmlvciBleGVjdXRpb25cbiAqIG9mIGBwYCwgdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gZXhlY3V0ZSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gZXhlY3V0ZSB0aGUgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKHAsIG4pID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyZXBlYXQnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdyZXBlYXQnLCBuLCBvcmROdW1Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGl0cyBwcmUsIGNvbnRlbnQsIGFuZCBwb3N0IHBhcnNlcnMgaW4gb3JkZXJcbiAqIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIElmIGVpdGhlciBgcGAgb3IgYHBvc3RgIGZhaWxzIGFmdGVyIGEgcHJpb3IgcGFyc2VyIGhhcyBjb25zdW1lZFxuICogaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwcmUgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IGFuZCB3aG9zZSByZXN1bHQgYmVjb21lc1xuICogICAgIHRoZSByZXN1bHQgb2YgdGhlIG5ldyBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHRoZSBjb3JyZWN0XG4gKiAgICAgb3JkZXIgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJldHdlZW4gPSAocHJlLCBwb3N0LCBwKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHByZSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHBvc3QsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzNyZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXJlcCwgW3ByZWN0eCwgcHJlcmVzXV0gPSB0d2luKHByZShjdHgpKVxuICBpZiAocHJlcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVyZXBcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKHByZWN0eClcbiAgY29uc3QgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKHByZXJlcy5lcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICByZXR1cm4gbWF5YmVGYXRhbChwY3R4LmluZGV4ICE9PSBpbmRleCwgcGN0eCwgZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgW3Bvc3RjdHgsIHBvc3RyZXNdID0gcG9zdChwY3R4KVxuICByZXR1cm4gcG9zdHJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBvayhwb3N0Y3R4LCBwcmVzLnZhbHVlKVxuICAgIDogbWF5YmVGYXRhbChcbiAgICAgIHBvc3RjdHguaW5kZXggIT09IGluZGV4LCBwb3N0Y3R4LCBtZXJnZShlcnJvcnMsIHBvc3RyZXMuZXJyb3JzKSxcbiAgICApXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGEgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzIHVudGlsIGFuXG4gKiBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mXG4gKiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpcyBleGVjdXRlZFxuICogKmZpcnN0Kiwgc28gdGhlIHJlc3VsdHMgb2YgdGhlIHR3byBwYXJzZXJzIHdpbGwgbm90IG92ZXJsYXAuXG4gKlxuICogSWYgYHBgIGZhaWxzIGJlZm9yZSBgZW5kYCBzdWNjZWVkcyBidXQgYWZ0ZXIgcHJpb3IgZXhlY3V0aW9ucyBvZiBgcGBcbiAqIGhhdmUgY29uc3VtZWQgaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICogQHBhcmFtIHtQYXJzZXJ9IGVuZCBUaGUgZW5kIHBhcnNlci4gUGFyc2luZyBlbmRzIHdoZW4gdGhpcyBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIHplcm8gb3IgbW9yZSB0aW1lc1xuICogICAgIHVudGlsIGBlbmRgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgbWFueVRpbGwgPSAocCwgZW5kKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGwnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbCcsIGVuZCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW2VuZHJlcCwgW2VuZGN0eCwgZW5kcmVzXV0gPSB0d2luKGVuZChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gZW5kY3R4XG4gICAgaWYgKGVuZHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZW5kcmVwXG4gICAgaWYgKGVuZHJlcy5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoXG4gICAgICAgIGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCBtZXJnZShwcmVzLmVycm9ycywgZW5kcmVzLmVycm9ycyksXG4gICAgICApXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzIHRob3NlXG4gKiByZXN1bHRzIHRvIGEgZnVuY3Rpb24gb2YgdGhlIHNhbWUgYXJpdHkgYXMgdGhlIG51bWJlciBvZiBwYXJzZXJzIHRvXG4gKiBleGVjdXRlLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGlzIHBhcnNlcidzXG4gKiByZXN1bHQuXG4gKlxuICogTm90ZSB0aGF0LCB1bmxpa2UgYHNlcXVlbmNlYCwgYG51bGxgIHBhcnNlciByZXN1bHRzIGFyZSAqbm90KlxuICogZGlzY2FyZGVkLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAqIHRvIGBmbmAgbm8gbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXG4gKlxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIGFmdGVyIHByaW9yIHBhcnNlcnMgaGF2ZSBjb25zdW1lZCBpbnB1dCxcbiAqIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGFwcGxpY2F0aXZlIGxpZnQgb3BlcmF0aW9uLCBsaWZ0aW5nXG4gKiBtdWx0aS1wYXJhbWV0ZXIgZnVuY3Rpb25zIGludG8gdGhlIGNvbnRleHQgb2YgYSBwYXJzZXIuIEl0IGFjdHMgbGlrZVxuICogYGxpZnRBMmAgaWYgdHdvIHBhcnNlcnMgYXJlIHBhc3NlZCBpbiwgYGxpZnRBM2AgaWYgdGhyZWUgYXJlIHBhc3NlZFxuICogaW4sIGV0Yy5cbiAqXG4gKiBAcGFyYW0gey4uLihQYXJzZXJ8ZnVuY3Rpb24oLi4uKik6Kil9IGFyZ3MgQW4gYXJyYXkgb2YgcGFyc2VycyB0byBiZVxuICogICAgIGV4ZWN1dGVkIG9uZSBhdCBhIHRpbWUsIGluIG9yZGVyLCBmb2xsb3dlZCBieSBhIGZ1bmN0aW9uIHdoaWNoXG4gKiAgICAgd2lsbCByZWNlaXZlIGFzIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0cyByZXR1cm5cbiAqICAgICB2YWx1ZSB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoaXMgcGFyc2VyLiBBIHNpbmdsZSBmdW5jdGlvblxuICogICAgIG11c3QgYmUgcHJlc2VudCBhbmQgaXQgbXVzdCBiZSB0aGUgbGFzdCBwYXJhbWV0ZXI7IGFsbCBvdGhlclxuICogICAgIHBhcmFtZXRlcnMgbXVzdCBiZSBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGV4ZWN1dGUgaXRzIHBhcnNlcnMgaW4gb3JkZXIsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgZm4gPSBwcy5wb3AoKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VycygncGlwZScsIHBzKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbigncGlwZScsIGZuLCBvcmRGbkZvcm1hdHRlcihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSlcblxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgICByZXR1cm4gbWF5YmVGYXRhbChjb250ZXh0LmluZGV4ICE9PSBpbmRleCwgY29udGV4dCwgZXJyb3JzKVxuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rKGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogUHJpdmF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciBhc3NlcnRpb24gbWVzc2FnZXMgYWJvdXQgb3AgcGFyc2Vyc1xuICogbm90IHJldHVybmluZyBmdW5jdGlvbnNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gb3JkIFRoZSBudW1iZXIgb2YgdGhlIG9wIHBhcnNlciB0aGF0IGZhaWxzIHRvIHByb2R1Y2VcbiAqICAgICBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBbiBhcHByb3ByaWF0ZSBhc3NlcnRpb24gZmFpbHVyZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBvcEZvcm1hdHRlcihvcmQpIHtcbiAgcmV0dXJuIHZhbHVlID0+IGBleHBlY3RlZCAke29yZH0gb3AgcGFyc2VyIHRvIHJldHVybiBhIGZ1bmN0aW9uOyBmb3VuZCAke1xuICAgIHN0cmluZ2lmeSh2YWx1ZSlcbiAgfWBcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY0wgPSAocCwgb3AsIHgpID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBvcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBvayhwY3R4LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvcHJlcCwgW29wY3R4LCBvcHJlc11dID0gdHdpbihvcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gb3BjdHhcbiAgICBpZiAob3ByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIG9wcmVwXG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2NMJywgb3ByZXMudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcHJlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG8gdGhlIHJlc3VsdHNcbiAqIG9mIGBwYC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaWYgYHBgIGRvZXNuJ3Qgc3VjY2VlZCBhdCBsZWFzdFxuICogb25jZS4gT3RoZXJ3aXNlIGl0IGNhbiBvbmx5IGZhaWwgZmF0YWxseSBpZiBgcGAgb3IgYG9wYCBmYWlsc1xuICogZmF0YWxseS5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIGxlZnQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc29jMUwgPSAocCwgb3ApID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFMJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxTCcsIG9wLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29wcmVwLCBbb3BjdHgsIG9wcmVzXV0gPSB0d2luKG9wKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBvcGN0eFxuICAgIGlmIChvcHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gb3ByZXBcbiAgICBpZiAob3ByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvYzFMJywgb3ByZXMudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcHJlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgLCBlYWNoIHNlcGFyYXRlZFxuICogYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2NSID0gKHAsIG9wLCB4KSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2NSJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2NSJywgb3AsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2socGN0eCwgeClcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbb3ByZXAsIFtvcGN0eCwgb3ByZXNdXSA9IHR3aW4ob3AoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG9wY3R4XG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBvcHJlcFxuICAgIGlmIChvcHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICAgJ2Fzc29jUicsIG9wcmVzLnZhbHVlLCBvcEZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gob3ByZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodCBhc3NvY2lhdGl2ZVxuICogYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIE90aGVyd2lzZSBpdCBjYW4gb25seSBmYWlsIGZhdGFsbHkgaWYgYHBgIG9yIGBvcGAgZmFpbHNcbiAqIGZhdGFsbHkuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2MxUiA9IChwLCBvcCkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMVInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFSJywgb3AsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbb3ByZXAsIFtvcGN0eCwgb3ByZXNdXSA9IHR3aW4ob3AoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG9wY3R4XG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBvcHJlcFxuICAgIGlmIChvcHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICAgJ2Fzc29jMVInLCBvcHJlcy52YWx1ZSwgb3BGb3JtYXR0ZXIob3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9wcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZvcm1hdEVycm9ycyB9IGZyb20gJy4vZXJyb3InXG5pbXBvcnQgeyBzdHJpbmdUb1ZpZXcsIHRyYWNrLCB0d2luIH0gZnJvbSAnLi91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9lcnJvci5qcycpLkVycm9yTGlzdH0gRXJyb3JMaXN0ICovXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBvbmUgb2YgdGhlIHR5cGVzXG4gKiBvZiB0eXBlZCBhcnJheXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDE2QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQ4QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDE2QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5XG59XG5cbi8qKlxuICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgcGFyc2luZyBvcGVyYXRpb24uXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgU3RhdHVzID0ge1xuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2Ugd2FzIHN1Y2Nlc3NmdWwuICovXG4gIE9rOiAnb2snLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LiAqL1xuICBGYWlsOiAnZmFpbCcsXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgYW5kIGNvbnN1bWVkIGlucHV0LiAqL1xuICBGYXRhbDogJ2ZhdGFsJyxcbn1cblxuLyoqXG4gKiBUaGUgY29udGV4dCBvZiBhIHBhcnNlci4gVGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGlucHV0IHRleHQgYW5kIGFcbiAqIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbnRleHRcbiAqIEBwcm9wZXJ0eSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyB3aGVyZSB0aGVcbiAqICAgICBuZXh0IHBhcnNpbmcgb3BlcmF0aW9uIHdpbGwgdGFrZSBwbGFjZSAob3Igd2hlcmUgdGhlIGxhc3Qgb25lXG4gKiAgICAgcmVzdWx0ZWQgaW4gYW4gZXJyb3IpLlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgc3VjY2Vzc2Z1bCBvciBub3QuIFRoaXMgaXNcbiAqIGVzc2VudGlhbGx5IGEgdW5pb24gb2Ygc3VjY2Vzc2Z1bCB2YWx1ZSBhbmQgZmFpbHVyZSBlcnJvciwgd2l0aCB0aGVcbiAqIGBzdGF0dXNgIHByb3BlcnR5IHRvIGRldGVybWluZSB3aGljaCBpcyB2YWxpZC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7U3RhdHVzfSBzdGF0dXMgVGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBhdHRlbXB0ZWQgcGFyc2Ugb2ZcbiAqICAgICB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIG9mIGEgc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkXG4gKiAgICAgZHVyaW5nIGFuIHVuc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgcGFyc2VyIGFwcGxpY2F0aW9uLCBpbmNsdWRpbmcgdGhlXG4gKiBjb250ZXh0IGFuZCB0aGUgcmVzdWx0LlxuICogQHR5cGVkZWYge1tDb250ZXh0LCBSZXN1bHRdfSBSZXBseVxuICovXG5cbi8qKlxuICogQSB0eXBlZCBhcnJheSBvZiBhbnkgYnVpbHQtaW4ga2luZC5cbiAqXG4gKiBAdHlwZWRlZlxuICogICB7KFVpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8SW50OEFycmF5fFxuICogICBJbnQxNkFycmF5fEludDMyQXJyYXl8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheSl9IFR5cGVkQXJyYXlcbiAqL1xuXG4vKipcbiAqIElucHV0IHRleHQgdG8gYmUgcGFyc2VkLlxuICpcbiAqIEB0eXBlZGVmIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBJbnB1dFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgcGFyc2VyIGNvbnRleHQuIFRoaXMgaXMgbm90IGV4cG9ydGVkIGJlY2F1c2UgYVxuICogbmV3IGNvbnRleHQgaXMgb25seSBjcmVhdGVkIGJlZm9yZSBwYXJzaW5nLCBpbiB0aGUgYHBhcnNlYCBmdW5jdGlvbi5cbiAqIEFueSBmdXJ0aGVyIGNvbnRleHRzIGFyZSBkZXJpdmVkIGZyb20gdGhlIGNvbnRleHQgdXNpbmcge0BsaW5rIG9rfSxcbiAqIHtAbGluayBlcnJvcn0sIG9yIHtAbGluayBmYXRhbH0uXG4gKlxuICogQHBhcmFtIHtJbnB1dH0gaW5wdXQgVGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7Q29udGV4dH0gQW4gZW1wdHkgcGFyc2VyIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0KGlucHV0KSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnUGFyc2VyIGlucHV0IG11c3QgYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksIGFuIGFycmF5ICdcbiAgICArIGBidWZmZXIsIG9yIGEgZGF0YSB2aWV3OyBwYXJzZXIgaW5wdXQgd2FzICR7dHlwZW9mIGlucHV0fWBcblxuICBjb25zdCB2aWV3ID0gKGlucHV0ID0+IHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHN0cmluZ1RvVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlzVHlwZWRBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQuYnVmZmVyKVxuICAgIH1cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfSkoaW5wdXQpXG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3LFxuICAgIGluZGV4OiAwLFxuICB9XG59XG5cbi8qKlxuICogQSBwYXJzaW5nIGZ1bmN0aW9uLiBUaGlzIGlzIHNpbXBseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYXJzZXJcbiAqIGNvbnRleHQsIHVwZGF0ZXMgaXQgc29tZWhvdyAoZ2VuZXJhbGx5IGJ5IHJlYWRpbmcgYSBjaGFyYWN0ZXIpLCBhbmRcbiAqIHJldHVybnMgdGhlIHVwZGF0ZWQgY29udGV4dC5cbiAqXG4gKiBAY2FsbGJhY2sgUGFyc2VyXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBiZWZvcmUgdGhlIHBhcnNlciBpcyBydW4uXG4gKiBAcmV0dXJucyB7UmVwbHl9IFRoZSB1cGRhdGVkIGNvbnRleHQgYWZ0ZXIgdGhlIHBhcnNlciBpcyBhcHBsaWVkIGFuZFxuICogICAgIHRoZSByZXN1bHQgb2YgdGhhdCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBQYXJzZXJgLiBUaGlzIGZhY3Rvcnkgc2ltcGx5IHRha2VzIGEgcGFyc2VyIGZ1bmN0aW9uXG4gKiBhbmQgcmV0dXJucyB0aGUgc2FtZSBwYXJzZXIgZnVuY3Rpb247IHRoZSBwdXJwb3NlIG9mIHRoZSBmYWN0b3J5IGlzXG4gKiB0byB0cmFjayBwYXJzZXJzIHRoYXQgaXQgaGFzIGNyZWF0ZWQuXG4gKlxuICogSWYgYXNzZXJ0aW9ucyBhcmUgZW5hYmxlZCwgdGhpcyB3aWxsIG1lYW4gdGhhdCBhbnkgcGFyc2VyIGNvbWJpbmF0b3JcbiAqIHdpbGwgYXNzZXJ0IHRoYXQgdGhlIHBhcnNlciB0aGF0IGlzIHBhc3NlZCB0byBpdCB3YXMgY3JlYXRlZCBieSB0aGlzXG4gKiBmYWN0b3J5IGZ1bmN0aW9uLiBBbnkgb3RoZXIgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duLFxuICogZXZlbiBpZiBpdCBhY2NlcHRzIHRoZSByaWdodCBraW5kIG9mIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRoZSBwcm9wZXJcbiAqIHJldHVybiB2YWx1ZS4gSWYgYXNzZXJ0aW9ucyBhcmUgbm90IGVuYWJsZWQsIHRoaXMgY2hlY2sgd2lsbCBub3QgYmVcbiAqIGRvbmUuXG4gKlxuICogRXZlcnkgcGFyc2VyIGluIHRoaXMgbGlicmFyeSBpcyBjcmVhdGVkIHdpdGggYG1ha2VQYXJzZXJgLCBzbyBhbnkgb2ZcbiAqIHRob3NlIG9yIGFueSBwYXJzZXIgY29tcG9zZWQgZnJvbSB0aG9zZSB3aWxsIHdvcmsgYXV0b21hdGljYWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gZm4gQSBwYXJzZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBUaGUgc2FtZSBwYXJzZXIgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZXIgPSB0cmFjayhmbiA9PiBmbilcblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBzdWNjZWVkZWQsIGFzIHdlbGwgYXNcbiAqIGEgYENvbnRleHRgIHBvdGVudGlhbGx5IHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIHBhcnNlclxuICogICAgIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBzdWNjZWVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvayhjdHgsIHZhbHVlID0gbnVsbCwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5PaywgdmFsdWUgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2l0aG91dFxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgY29weSBvZiBgQ29udGV4dGAuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogICAgIGNvbnRleHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbChjdHgsIGVycm9ycyA9IFtdLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhaWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aGlsZVxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgbmV3IGBDb250ZXh0YCB3aXRoIGFuIHVwZGF0ZWQgYGluZGV4YC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqICAgICBjb250ZXh0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhdGFsKGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmF0YWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlciBhcHBsaWNhdG9pbiBmYWlsZWQuXG4gKiBXaGV0aGVyIHRoaXMgaXMgYSBmYXRhbCBlcnJvciBvciBub3QgZGVwZW5kcyBvbiB3aGV0aGVyIGB0ZXN0YCBpc1xuICogYHRydWVgIChmYXRhbCkgb3IgYGZhbHNlYCAobm9uLWZhdGFsKS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHRlc3QgVXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgcHJvZHVjZWQgcmVzdWx0XG4gKiAgICAgcmVwcmVzZW50cyBhIGZhdGFsIGVycm9yIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqICAgICBjb250ZXh0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heWJlRmF0YWwodGVzdCwgY3R4LCBlcnJvcnMgPSBbXSwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IC4uLmN0eCwgaW5kZXggfSxcbiAgICB7IHN0YXR1czogdGVzdCA/IFN0YXR1cy5GYXRhbCA6IFN0YXR1cy5GYWlsLCBlcnJvcnMgfSxcbiAgXVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFRoaXMgaW5wdXQgY2FuIGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LFxuICogYW4gYXJyYXkgYnVmZmVyLCBvciBhIGRhdGEgdmlldy4gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgZmluYWwgcGFyc2VyXG4gKiBjb250ZXh0IHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgYWZ0ZXIgYmVpbmcgcnVuLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgZmluYWwgY29udGV4dCBhZnRlciBhbGwgcGFyc2VycyBoYXZlIGJlZW5cbiAqICAgICBhcHBsaWVkIGFuZCB0aGUgcmVzdWx0IG9mIHRoZSBmaW5hbCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShwYXJzZXIsIGlucHV0KSB7XG4gIHJldHVybiBwYXJzZXIoY29udGV4dChpbnB1dCkpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtTdGF0dXN9IFRoZSBzdGF0dXMgb2YgdGhlIGdpdmVuIHJlcGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdHVzKHJlcGx5KSB7XG4gIHJldHVybiByZXBseVsxXS5zdGF0dXNcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gaW52b2NhdGlvbiBvZiBgcGFyc2VgIHdhcyBzdWNjZXNzZnVsLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcGFyc2VyIHN1Y2NlZWRlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgZGlkIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2NlZWRlZChyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzID09PSBTdGF0dXMuT2tcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuIElmIHRoZSBwYXJzZXJcbiAqIGRpZCBub3Qgc3VjY2VlZCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAqXG4gKiBOb3RlIHRoYXQgYG51bGxgIGlzIGEgcG9zc2libGUgcmVzdWx0IGZyb20gc29tZSBpbmRpdmlkdWFsIHBhcnNlcnNcbiAqIChgc2tpcGAsIGBsb29rQWhlYWRgLCBldGMuKS4gVGhlIHByb3BlciB3YXkgdG8gdGVsbCBpZiBhIHBhcnNlclxuICogc3VjY2VlZGVkIGluIHRoZSBmaXJzdCBwbGFjZSBpcyB0byB1c2UgYHN1Y2NlZWRlZGAuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB2YWx1ZSBmcm9tIHRoZSBwYXJzZSBpZiBpdCB3YXMgc3VjY2Vzc2Z1bCxcbiAqICAgICBvciBgbnVsbGAgaWYgaXQgd2FzIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2Nlc3MocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyByZXBseVsxXS52YWx1ZSA6IG51bGxcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgZXJyb3IgbWVzc2FnZSBhcyBhIHN0cmluZyBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBhblxuICogdW5zdWNjZXNzZnVsIGludm9jYXRpb24gb2YgYHBhcnNlYC4gSWYgdGhlIHBhcnNlciB3YXMgYWN0dWFsbHlcbiAqIHN1Y2Nlc3NmdWwsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmcgZGV0YWlsaW5nIHRoZSBjaXJjdW1zdGFuY2VzIG9mXG4gKiAgICAgdGhlIHBhcnNlciBmYWlsdXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZShyZXBseSkge1xuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IG51bGwgOiBmb3JtYXRFcnJvcnMocmVwbHkpXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gUmV0dXJucyB0aGUgcGFyc2VkIHZhbHVlIGlmIHRoZSBwYXJzZXJcbiAqIHN1Y2NlZWRzLCBvciB0aHJvd3MgYW4gZXhjZXB0aW9uIHdpdGggdGhlIHBhcnNlcidzIGVycm9yIG1lc3NhZ2UgaWZcbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgZnJvbSB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLCBpZiB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBhcnNlciBmYWlscy4gVGhlIGVycm9yIG1lc3NhZ2Ugd2lsbCBiZSBhXG4gKiAgICAgZGV0YWlsZWQgcmVjb3JkIG9mIHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwYXJzZXIsIGlucHV0KSB7XG4gIGNvbnN0IFtyZXBseSwgW18sIHJlc3VsdF1dID0gdHdpbihwYXJzZXIoY29udGV4dChpbnB1dCkpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSB7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihmb3JtYXRFcnJvcnMocmVwbHkpKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgY2hhckxlbmd0aCxcbiAgY29tbWFTZXBhcmF0ZSxcbiAgbmV4dENoYXJXaWR0aCxcbiAgdmlld1RvU3RyaW5nLFxufSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5Db250ZXh0fSBDb250ZXh0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuUmVzdWx0fSBSZXN1bHQgKi9cblxuY29uc3QgdGFiID0gL1xcdC9ndVxuY29uc3QgemVyb1dpZHRoID0gLyg/OlxccHtNbn18XFxwe0NmfSkvZ3VcblxuLyoqXG4gKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgdHlwZSBvZiBhbiBlcnJvci5cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFcnJvclR5cGUgPSB7XG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBleHBlY3RlZCByZXN1bHQuIFByb2R1Y2VkIGJ5IHRoZSB2YXN0XG4gICAqIG1ham9yaXR5IG9mIHBhcnNlcnMuXG4gICAqL1xuICBFeHBlY3RlZDogJ2V4cGVjdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgcmVzdWx0IHRoYXQgd2FzIG5vdCBleHBlY3RlZC4gVHlwaWNhbGx5XG4gICAqIHByb2R1Y2VkIGJ5IHBhcnNlcnMgc3VjaCBhcyBgdW5leHBlY3RlZGAgYW5kIGBub3RGb2xsb3dlZEJ5YC5cbiAgICovXG4gIFVuZXhwZWN0ZWQ6ICd1bmV4cGVjdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUeXBpY2FsbHkgcHJvZHVjZWRcbiAgICogYnkgcGFyc2VycyBzdWNoIGFzIGBmYWlsYCBhbmQgYGZhaWxGYXRhbGx5YC5cbiAgICovXG4gIEdlbmVyaWM6ICdnZW5lcmljJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGVycm9yIHdpdGhpbiBhbm90aGVyIGVycm9yLiBUaGlzIGlzXG4gICAqIGdlbmVyYWxseSB1c2VkIGZvciBhbiBlcnJvciB0aGF0IGNhdXNlZCBiYWNrdHJhY2tpbmcsIHdoZXJlIHRoZVxuICAgKiBwYXJlbnQgZXJyb3IgaXMgcmVwb3J0ZWQgYWZ0ZXIgYmFja3RyYWNraW5nLlxuICAgKi9cbiAgTmVzdGVkOiAnbmVzdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgbmVzdGVkIGVycm9yIHdpdGggaXRzIG93biBzZXBhcmF0ZSBlcnJvclxuICAgKiBtZXNzYWdlLiBUaGlzIGlzIHByb2R1Y2VkIHNwZWNpZmljYWxseSBieSB0aGUgYGNvbXBvdW5kYCBwYXJzZXIuXG4gICAqL1xuICBDb21wb3VuZDogJ2NvbXBvdW5kJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIHNvbWUgb3RoZXIga2luZCBvZiBlcnJvciBtZXNzYWdlIHRvIGJlXG4gICAqIGRpc3BsYXllZCBpbiBhIGN1c3RvbSBlcnJvciBmb3JtYXR0ZXIuXG4gICAqL1xuICBPdGhlcjogJ290aGVyJyxcbn1cblxuLyoqXG4gKiBBIGxpc3Qgb2YgZXJyb3JzLiBUaGlzIGNhbiBjb25zaXN0IG9mIGFueSBlcnJvciBtZXNzYWdlcyB0aGF0IGFwcGx5XG4gKiB0byBhIHBhcnRpY3VsYXIgaW5kZXggb3IgbmVzdGVkL2NvbXBvdW5kIGVycm9ycyB0aGF0IHBvaW50IGJhY2sgdG9cbiAqIHRoZSBzYW1lIGluZGV4IGJ1dCBhcHBseSB0byBhIGRpZmZlcmVudCBvbmUuXG4gKiBAdHlwZWRlZiB7KE5lc3RlZEVycm9yfENvbXBvdW5kRXJyb3J8TG9jYWxFcnJvcilbXX0gRXJyb3JMaXN0XG4gKi9cblxuLyoqXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgYXQgdGhlIGxvY2F0aW9uIHJlZmVycmVkIHRvIGJ5IHRoZSBjdXJyZW50XG4gKiBjb250ZXh0LiBUaGUgdHlwZSBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVyZSB0aGUgbGFiZWwgc2hvdWxkIGJlXG4gKiBwb3NpdGlvbmVkIGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExvY2FsRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXJyb3IuXG4gKi9cblxuLyoqXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgaW4gYSBkaWZmZXJlbnQgbG9jYXRpb24gdGhhbiB0aGUgb25lIHJlZmVycmVkXG4gKiB0byBieSB0aGUgY3VycmVudCBjb250ZXh0LiBUaGUgbW9zdCB0eXBpY2FsIHJlYXNvbiBmb3IgdGhpcyBoYXBwZW5pbmdcbiAqIGlzIGJhY2t0cmFja2luZzsgdGhlIGxvY2FsIGVycm9yIGNhbiB0cmFjayB0aGUgY3VycmVudFxuICogKHBvc3QtYmFja3RyYWNrKSBsb2NhdGlvbiB3aGlsZSB0aGUgbmVzdGVkIGVycm9yIHJldGFpbnMgaW5mb3JtdGlvblxuICogZnJvbSB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGJhY2t0cmFja2luZyBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmVzdGVkRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXG4gKiAgICAgYEVycm9yVHlwZS5OZXN0ZWRgLlxuICogQHByb3BlcnR5IHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWxcbiAqICAgICBlcnJvciBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbVxuICogICAgIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYGN0eGAuXG4gKi9cblxuLyoqXG4gKiBBIG5lc3RlZCBlcnJvciB0aGF0IGhhcyBpdHMgb3duIGxhYmVsLiBUaGlzIGlzIHNpbXBseSBmb3IgcHJvZHVjaW5nXG4gKiBuaWNlciBlcnJvciBtZXNzYWdlczsgdGhpcyBlcnJvciBpcyB0eXBpY2FsbHkgb25seSBwcm9kdWNlZCBieSB0aGVcbiAqIGBiYWNrbGFiZWxgIHBhcnNlci5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb21wb3VuZEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxuICogICAgIGBFcnJvclR5cGUuQ29tcG91bmRgLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGVycm9yLiBUaGlzXG4gKiAgICAgaXMgdHlwaWNhbGx5IHVzZWQgYXMgYSBzb3J0IG9mIGhlYWRlciBvdmVyIHRoZSBuZXN0ZWQgbWVzc2FnZXNcbiAqICAgICB1bmRlciB0aGlzIGNvbXBvdW5kIGVycm9yLlxuICogQHByb3BlcnR5IHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWxcbiAqICAgICBlcnJvciBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbVxuICogICAgIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYGN0eGAuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGVycm9yIGxpc3QgY29udGFpbmluZyBvbmUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RlZChsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkV4cGVjdGVkLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLiBJdCBpcyBleHBlY3RlZCB0aGF0IG9uZSBhcnJheSBvZlxuICogZXJyb3IgbWVzc2FnZXMgbWF5IGhhdmUgbXVsdGlwbGUgdW5leHBlY3RlZCBlcnJvcnMsIGJ1dCBvbmx5IHRoZVxuICogZmlyc3Qgd2lsbCBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGZvdW5kIGJ1dCB3YXNcbiAqICAgICBub3QgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSB1bmV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmV4cGVjdGVkKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuVW5leHBlY3RlZCwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUaGVyZSBjYW4gYmUgbW9yZSB0aGFuIG9uZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIGluIGFuIGFycmF5IG9mIGVycm9yIG1lc3NhZ2VzLCBidXQgb25seSB0aGUgZmlyc3Qgd2lsbFxuICogYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIGdlbmVyaWMgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZ2VuZXJpYyB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpYyhsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkdlbmVyaWMsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvdGhlciBlcnJvci4gVGhlc2UgZXJyb3JzIGFyZSBub3QgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0XG4gKiBmb3JtYXR0ZXIgYXQgYWxsIGFuZCBhcmUgb25seSB1c2VmdWwgZm9yIGN1c3RvbSBmb3JtYXR0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgb3RoZXIgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgcGFyc2UgZXJyb3Igb2YgdGhlIG90aGVyIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdGhlcihsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLk90aGVyLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXN0ZWQgZXJyb3IuIFRoaXMgdGFrZXMgYW4gZXJyb3IgbGlzdCBhbmQgd3JhcHMgaXQgd2l0aFxuICogY29udGV4dCBpbmZvcm1hdGlvbi4gSWYgdGhlIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZVxuICogbmVzdGVkIGVycm9yLCB0aGF0IGVycm9yIGlzIHNpbXBseSByZXR1cm5lZDsgYSBzaW5nbGUgbmVzdGVkIGVycm9yXG4gKiB3aWxsIG5vdCBiZSBuZXN0ZWQgaW4gYW5vdGhlciBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBuZXN0ZWQgZXJyb3JcbiAqICAgICBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgcG9zaXRpb24gcG9pbnRlZCB0byBieSB0aGUgZ2l2ZW4gY29udGV4dC5cbiAqIEByZXR1cm5zIHtbTmVzdGVkRXJyb3JdfSBBIG5ldyBuZXN0ZWQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXN0ZWQoY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IGVycm9yc1xuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLk5lc3RlZCwgY3R4LCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGNvbXBvdW5kIGVycm9yLiBUaGlzIHdyYXBzIGFuIGVycm9yIGxpc3QganVzdCBhcyBhXG4gKiBuZXN0ZWQgZXJyb3IgZG9lcywgZXhjZXB0IGl0IGFsc28gYXR0YWNoZXMgYSBtZXNzYWdlIHRvIGl0LiBJZiB0aGVcbiAqIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZSBuZXN0ZWQgZXJyb3IsIGl0cyBpbmZvcm1hdGlvbiBpc1xuICogdXNlZCB0byBjcmVhdGUgYSBuZXcgY29tcG91bmQgZXJyb3Igd2l0aG91dCBhbnkgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhdHRhY2hlZCB0byB0aGUgbmVzdGVkIGVycm9yLlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBjb21wb3VuZFxuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBjb250ZXh0LlxuICogQHJldHVybnMge1tDb21wb3VuZEVycm9yXX0gQSBuZXcgY29tcG91bmQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3VuZChsYWJlbCwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IFt7XG4gICAgICB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsXG4gICAgICBjdHg6IGVycm9ycy5jdHgsXG4gICAgICBlcnJvcnM6IGVycm9ycy5lcnJvcnMsXG4gICAgICBsYWJlbCxcbiAgICB9XVxuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLCBjdHgsIGVycm9ycywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIGFycmF5cyBvZiBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnMxPVtdXSBUaGUgZmlyc3QgYXJyYXkgb2YgZXJyb3JzLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnMyPVtdXSBUaGUgc2Vjb25kIGFycmF5IG9mIGVycm9ycy5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlcnJvcnMgZnJvbVxuICogICAgIHRoZSBmaXJzdCB0d28gYXJyYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoZXJyb3JzMSA9IFtdLCBlcnJvcnMyID0gW10pIHtcbiAgcmV0dXJuIFsuLi5lcnJvcnMxLCAuLi5lcnJvcnMyXVxufVxuXG4vLyAjcmVnaW9uIEZvcm1hdHRpbmcgdXRpbGl0eSBmdW5jdGlvbnNcblxuLy8gI3JlZ2lvbiBUeXBlZGVmcyBmb3Igb2JqZWN0IHJldHVybiB0eXBlc1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmFsdWF0aW9uIG9mIGEgYnl0ZSB0byBzZWVcbiAqIGlmIGl0IGlzIChvciBzdGFydHMpIGEgbmV3bGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXdsaW5lSW5mb1xuICogQHByb3BlcnR5IHtib29sZWFufSBuZXdsaW5lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzY2FubmVkIGJ5dGUgd2FzXG4gKiAgICAgZWl0aGVyIGEgbmV3bGluZSBvciB0aGUgYmVnaW5uaW5nIG9mIGEgbXVsdGktYnl0ZSBuZXdsaW5lLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNraXAgVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IHRoZSBuZXh0IGNoYXJhY3RlclxuICogICAgIGNvbnRhaW5zLiBUaGlzIGlzIHJldHVybmVkIGFjY3VyYXRlbHkgd2hldGhlciBvciBub3QgdGhhdFxuICogICAgIGNoYXJhY3RlciBpcyBhIG5ld2xpbmUuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnQgYW5kIGVuZCBpbmRleGVzIG9mIGFcbiAqIGxpbmUgd2l0aGluIGEgZGF0YSB2aWV3LCBhcyB3ZWxsIGFzIHRoZSBudW1iZXIgb2YgdGhhdCBsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExpbmVJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBhbHdheXMgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgZGF0YSB2aWV3IGl0c2VsZiwgb3IgdGhlIGZpcnN0IGJ5dGUgYWZ0ZXIgYSBuZXdsaW5lXG4gKiAgICAgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVuZCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGxhc3RcbiAqICAgICBieXRlIG9mIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgZWl0aGVyIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBpbiB0aGUgZGF0YSB2aWV3IG9yIHRoZSBieXRlIGltbWVkaWF0ZWx5IHByZWNlZGluZyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIGEgbmV3bGluZSBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZW5vIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSBib3VuZGVkIGJ5XG4gKiAgICAgaW5kZXhlcyBgc3RhcnRgIGFuZCBgZW5kYC4gVGhpcyBudW1iZXIgaXMgMS1iYXNlZCwgYXMgaXQgaXMgdXNlZFxuICogICAgIGZvciBkaXNwbGF5IG9mIGFuIGVycm9yIHBvc2l0aW9uIGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkanVzdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmRleCB0aGF0IHJlc3VsdHNcbiAqIGZyb20gdGFiIGV4cGFuc2lvbi5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWJiZWRMaW5lSW5mb1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGxpbmUgVGhlIHN0cmluZyBvZiB0ZXh0IHJlcHJlc2VudGluZyBvbmUgbGluZSxcbiAqICAgICB3aXRoIHRhYiBjaGFyYWN0ZXJzIHJlcGxhY2VkIGJ5IHRoZSBhcHByb3ByaWF0ZSBudW1iZXIgb2Ygc3BhY2VzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbEluZGV4IFRoZSBjaGFyYWN0ZXIgaW5kZXggcGFzc2VkIGludG8gdGhlXG4gKiAgICAgZnVuY3Rpb24sIGFkanVzdGVkIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGFicyBhbmRcbiAqICAgICB0aGUgc3BhY2VzIHVzZWQgdG8gcmVwbGFjZSB0aGVtLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgY29sdW1uIGluZGV4IGFuZCBsaW5lXG4gKiBsZW5ndGggYWZ0ZXIgYWNjb3VudGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbEluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbG5vIFRoZSBhZGp1c3RlZCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXJcbiAqICAgICBwb2ludGVkIHRvIGJ5IHRoZSBgY2hhckluZGV4YCBwYXJhbWV0ZXIuIFRoaXMgaXMgYWRqdXN0ZWQgYnkgYW55XG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRoYXQgbWF5IGFwcGVhciBpbiB0aGUgbGluZSBhbmQgaXMgdHVybmVkXG4gKiAgICAgaW50byBhIDEtYmFzZWQgbnVtYmVyIGZvciBkaXNwbGF5IGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3JcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoaXMgaXMgcmV0dXJuZWQgc29sZWx5IHRvIGJlIHBhc3NlZCBpbnRvXG4gKiAgICAgb3RoZXIgZnVuY3Rpb25zIHdobyB0aGVuIHdvbid0IGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhlIHdpZHRoIG9mXG4gKiAgICAgdGhlIGxpbmUgYWNjb3VudGluZyBmb3IgdGhvc2Ugc2FtZSB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKi9cblxuLyoqXG4gICogT2JqZWN0IGNvbnRhaW5pbmcgbGluZSBhbmQgY29sdW1uIG51bWJlcnMuXG4gICpcbiAgKiBAdHlwZWRlZiB7b2JqZWN0fSBQb3NpdGlvblxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5XG4gICogICAgIHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcuXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiBUaGUgY29sdW1uIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvXG4gICogICAgIGJ5IHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcsIGFkanVzdGVkIGZvciBjaGFyYWN0ZXIgd2lkdGggYW5kXG4gICogICAgIHRhYiBzaXplLlxuICAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gY2FsbGVkIGJ5IGBmb3JtYXRFcnJvcnNgIHRvIGRvIHRoZSBhY3R1YWwgZm9ybWF0dGluZy4gQVxuICogZGVmYXVsdCBmb3JtYXR0ZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYnV0IGNhbiBiZSByZXBsYWNlZCBpZlxuICogZGVzaXJlZC5cbiAqXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGVyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgYmVpbmcgdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gYHZpZXdgIG9mIHRoZSBieXRlIHdoZXJlIHRoZVxuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlIHRhYnNcbiAqICAgICBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIGRpc3BsYXkgd2lkdGggb2YgdGhlIGxpbmUgd2hlcmVcbiAqICAgICB0aGUgZXJyb3Igb2NjdXJyZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmVcbiAqICAgICB0cnVuY2F0ZWQgd2l0aCBlbGxpcHNlcyBiZWZvcmUgYW5kL29yIGFmdGVyLlxuICogQHJldHVybnMge3N0cmluZ30gQSBtdWx0aS1saW5lIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIHN1cHBsaWVkXG4gKiB2aWV3IGlzIGEgbmV3bGluZS4gQW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXMgaXMgcmV0dXJuZWQ7XG4gKiBgbmV3bGluZWAgaXMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhhdCBjaGFyYWN0ZXIgaXMgYVxuICogbmV3bGluZTsgYHNraXBgIGlzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIChhbmQgdGhlcmVmb3JlIGhvdyBtYW55XG4gKiBieXRlcyB0byBza2lwIHVudGlsIHRoZSBuZXh0IGNoYXJhY3RlciB0byBjaGVjaykuXG4gKlxuICogQWxsIFVuaWNvZGUgbmV3bGluZXMgKENSLCBMRiwgRkYsIFZULCBORUwsIExTLCBhbmQgUFMpIGFyZSBoYW5kbGVkLFxuICogYWxvbmcgd2l0aCB0aGUgbXVsdGktY2hhcmFjdGVyIG5ld2xpbmUgQ1IrTEYuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbnRvIGB2aWV3YCBpbmRpY2F0aW5nIHRoZSBieXRlIHRvXG4gKiAgICAgY2hlY2sgdG8gc2VlIGlmIGl0J3MgYSBuZXdsaW5lLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TmV3bGluZUluZm99IE5ld2xpbmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3bGluZShpbmRleCwgdmlldykge1xuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcbiAgaWYgKGJ5dGUgPT09IDB4MGEgfHwgYnl0ZSA9PT0gMHgwYiB8fCBieXRlID09PSAweDBjKSB7XG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XG4gIH1cblxuICBpZiAoYnl0ZSA9PT0gMHgwZCkge1xuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHgwZCAmJiBuZXh0Qnl0ZSA9PT0gMHgwYSkge1xuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XG4gIH1cblxuICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcblxuICAgIGlmIChieXRlID09PSAweGMyICYmIG5leHRCeXRlID09PSAweDg1KSByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAyKSB7XG4gICAgICBjb25zdCB0aGlyZEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMilcbiAgICAgIGlmIChieXRlID09PSAweGUyICYmIG5leHRCeXRlID09PSAweDgwXG4gICAgICAgICYmICh0aGlyZEJ5dGUgPT09IDB4YTggfHwgdGhpcmRCeXRlID09PSAweGE5KSkge1xuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAzIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBuZXdsaW5lOiBmYWxzZSwgc2tpcDogbmV4dENoYXJXaWR0aChpbmRleCwgdmlldykgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgaW5kZXhlcyBvZiB0aGUgbGluZSBpbiB0aGUgZ2l2ZW5cbiAqIHZpZXcgdGhhdCBjb250YWlucyB0aGUgYnl0ZSBwb2ludGVkIGF0IGJ5IGBpbmRleGAuIEl0IGRvZXMgdGhpcyBieVxuICogZGV0ZXJtaW5pbmcgd2hlcmUgbmV3bGluZXMgYXJlIGFuZCB0aGVuIGZpZ3VyaW5nIG91dCB3aGljaCBvbmVzIGNvbWVcbiAqIGNsb3Nlc3QgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5kZXguIFRoZSBudW1iZXIgb2YgbmV3bGluZXMgdGhhdCBjYW1lXG4gKiBiZWZvcmUgdGhlIGluZGV4IChhbmQgdGhlcmVmb3JlIHRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSB3aXRoIHRoZVxuICogaW5kZXgpIGlzIGFsc28gY291bnRlZC5cbiAqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRocmVlIHByb3BlcnRpZXM6IGBzdGFydGAgaXMgdGhlIGluZGV4IG9mIHRoZVxuICogZmlyc3QgYnl0ZSBvZiB0aGUgbGluZSwgYGVuZGAgaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGJ5dGUgb2YgdGhlXG4gKiBsaW5lIChub3QgY291bnRpbmcgdGhlIG5ld2xpbmUpLCBhbmQgYGxpbmVub2AgaXMgdGhlIGxpbmUgbnVtYmVyXG4gKiB3aGVyZSB0aGUgaW5kZXggYXBwZWFycy4gYGxpbmVub2AgaXMgMS1pbmRleGVkIHNpbmNlIGl0IGlzIG1lYW50IGZvclxuICogZGlzcGxheSBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBsaW5lXG4gKiAgICAgaW5kZXggaW5mb3JtYXRpb24gaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge0xpbmVJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydGluZyBhbmQgZW5kaW5nXG4gKiAgICAgaW5kZXhlcyBvZiB0aGUgbGluZSBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KSB7XG4gIGxldCBzdGFydCA9IDBcbiAgbGV0IGxpbmVubyA9IDEgLy8gMS1iYXNlZFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAoaSA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGNvbnN0IHsgbmV3bGluZSwgc2tpcCB9ID0gaXNOZXdsaW5lKGksIHZpZXcpXG4gICAgaWYgKG5ld2xpbmUpIHtcbiAgICAgIGlmIChpICsgc2tpcCA+IGluZGV4KSB7XG4gICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQ6IGkgLSAxLCBsaW5lbm8gfVxuICAgICAgfVxuICAgICAgbGluZW5vKytcbiAgICAgIHN0YXJ0ID0gaSArIHNraXBcbiAgICB9XG4gICAgaSArPSBza2lwXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZDogdmlldy5ieXRlTGVuZ3RoIC0gMSwgbGluZW5vIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjaGFyYWN0ZXIgaW5kZXggKGFzIG9wcG9zZWQgdG8gYnl0ZSBpbmRleCkgd2l0aGluIGFcbiAqIHNpbmdsZSBsaW5lIG9mIHRleHQgb2YgdGhlIGNoYXJhY3RlciBwb2ludGVkIHRvIGJ5IGBpbmRleGAgd2l0aGluXG4gKiBgdmlld2AuIFRoZSBgc3RhcnRgIHBhcmFtZXRlciBzZXRzIHRoZSBmaXJzdCBieXRlIG9mIGEgXCJsaW5lXCIgd2l0aGluXG4gKiB0aGUgdmlldyBhbmQgY2FuIGJlIGNhbGN1bGF0ZWQgd2l0aCB7QGxpbmsgZ2V0TGluZUluZGV4ZXN9IGFib3ZlLlxuICpcbiAqIEluIGxpbmVzIHdpdGggb25seSBzaW5nbGUtYnl0ZSBjaGFyYWN0ZXJzLCB0aGUgY2hhcmFjdGVyIGluZGV4IHdpbGxcbiAqIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyBgaW5kZXggLSBzdGFydGAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHRvIGFkanVzdCB3aGVuIG11bHRpLWJ5dGUgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBjaGFyYWN0ZXJcbiAqICAgICBpbmRleCBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBieXRlIG9mIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgaW5kZXgsIHdpdGhpbiBhIHNpbmdsZSBsaW5lIG9mIHRleHQsIG9mIHRoZVxuICogICAgIGNoYXJhY3RlciB3aG9zZSBmaXJzdCBieXRlIGlzIGJlaW5nIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpIHtcbiAgbGV0IGNoYXJJbmRleCA9IDBcbiAgbGV0IGJ5dGVJbmRleCA9IHN0YXJ0XG4gIHdoaWxlIChieXRlSW5kZXggPCBpbmRleCAmJiBieXRlSW5kZXggPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBieXRlSW5kZXggKz0gbmV4dENoYXJXaWR0aChieXRlSW5kZXgsIHZpZXcpXG4gICAgY2hhckluZGV4KytcbiAgfVxuICByZXR1cm4gY2hhckluZGV4XG59XG5cbi8qKlxuICogRXhwYW5kcyB0YWJzIGludG8gc3BhY2VzIGFuZCBjYWxjdWxhdGVzIHRoZSBjb2x1bW4gaW5kZXggb2YgdGhlXG4gKiBpbmRleGVkIGNoYXJhY3RlciBhZGp1c3RpbmcgZm9yIHRob3NlIHNwYWNlcy4gVGhlIG51bWJlciBvZiBzcGFjZXMgaW5cbiAqIGVhY2ggdGFiIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCBgdGFiU2l6ZWAuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogYGxpbmVgIGlzIHRoZVxuICogaW5wdXQgbGluZSB3aXRoIHRhYnMgZXhwYW5kZWQgaW50byBzcGFjZXMsIGFuZCBgY29sSW5kZXhgIGlzIHRoZVxuICogaW5kZXggb2YgdGhlIGNvbHVtbiB0aGF0IGhhcyB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgYXQgYnkgdGhlXG4gKiBjaGFyYWN0ZXIgaW5kZXguXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNoYXJJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0XG4gKiAgICAgd2l0aGluIHRoZSBsaW5lLlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyB0YWJpZmllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBzcGFjZXMgdGhhdCBjYW4gcmVwbGFjZVxuICogICAgIGEgdGFiLiBOb3RlIHRoYXQgdGFicyBhcmUgdHJlYXRlZCBhcyBzdG9wczsgdGhleSB3aWxsIGJlIG9mXG4gKiAgICAgdmFyeWluZyBzaXplcyB0aGF0IHJlc3VsdHMgaW4gdGhlbSBhbHdheXMgZW5kaW5nIGF0IGEgY29sdW1uIHRoYXRcbiAqICAgICBpcyBhIG11bHRpcGxlIG9mIGB0YWJTaXplYC5cbiAqIEByZXR1cm5zIHtUYWJiZWRMaW5lSW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxpbmUgYWZ0ZXIgcmVwbGFjaW5nXG4gKiAgICAgdGFicyB3aXRoIHNwYWNlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhYmlmeShjaGFySW5kZXgsIGxpbmUsIHRhYlNpemUpIHtcbiAgY29uc3QgdGFiSW5kZXhlcyA9IFtdXG4gIGxldCB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXG4gIHdoaWxlICh0YWJNYXRjaCAhPT0gbnVsbCkge1xuICAgIHRhYkluZGV4ZXMucHVzaCh0YWJNYXRjaC5pbmRleClcbiAgICB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXG4gIH1cblxuICAvLyByZXBsYWNlIGVhY2ggdGFiIHdpdGggdGhlIGNvcmVjdCBudW1iZXIgb2Ygc3BhY2VzLCBzaGlmdGluZyB0aGVcbiAgLy8gcmVtYWluaW5nIGluZGV4ZXMgYnkgdGhhdCBhbW91bnRcbiAgbGV0IG9mZnNldCA9IDBcbiAgbGV0IHByZUluZGV4T2Zmc2V0ID0gMFxuICBsZXQgcmVzdWx0ID0gbGluZVxuXG4gIGZvciAoY29uc3QgdGFiSW5kZXggb2YgdGFiSW5kZXhlcykge1xuICAgIGNvbnN0IGFjdHVhbEluZGV4ID0gdGFiSW5kZXggKyBvZmZzZXRcbiAgICBjb25zdCBzcGFjZUNvdW50ID0gdGFiU2l6ZSAtIGFjdHVhbEluZGV4ICUgdGFiU2l6ZVxuICAgIGlmIChhY3R1YWxJbmRleCA8IGNoYXJJbmRleCArIHByZUluZGV4T2Zmc2V0KSB7XG4gICAgICBwcmVJbmRleE9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIH1cbiAgICBvZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIGFjdHVhbEluZGV4KSArICcgJy5yZXBlYXQoc3BhY2VDb3VudClcbiAgICAgICsgcmVzdWx0LnN1YnN0cmluZyhhY3R1YWxJbmRleCArIDEpXG4gIH1cbiAgcmV0dXJuIHsgbGluZTogcmVzdWx0LCBjb2xJbmRleDogcHJlSW5kZXhPZmZzZXQgKyBjaGFySW5kZXggfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGZpbmFsIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIHRvXG4gKiBieSB0aGUgY29sdW1uIGluZGV4LiBUaGlzIGNvbHVtbiBudW1iZXIgaXMgMS1iYXNlZCAoZm9yIGRpc3BsYXksIHRoZVxuICogc2FtZSBhcyB0aGUgbGluZSBudW1iZXIgZnJvbSBgZ2V0TGluZUluZGV4ZXNgKSBhbmQgaXMgYWRqdXN0ZWQgZm9yXG4gKiB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgc3VjaCBhcyBmb3JtYXR0aW5nIGNoYXJhY3RlcnMgYW5kIG5vbi1zcGFjaW5nXG4gKiBtYXJrcy5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0d28gcHJvcGV0aWVzOiBgY29sbm9gIGlzIHRoZVxuICogMS1pbmRleGVkIGNvbHVtbiBudW1iZXIsIGFuZCBgbGVuZ3RoYCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsaW5lXG4gKiBhZGp1c3RpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhlIGxhdHRlciBpcyBwcm92aWRlZCBzbyBpdFxuICogZG9lc24ndCBoYXZlIHRvIGJlIHJlY2FsY3VsYXRlZCBieSBgc2hvd2AuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgY29sdW1uIHdpdGhpbiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0LlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBwb3RlbnRpYWxseSBjb250YWluaW5nXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRvIGFjY291bnQgZm9yLlxuICogQHJldHVybnMge0NvbEluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpIHtcbiAgbGV0IGluZGV4ID0gY29sSW5kZXhcbiAgY29uc3QgbWF0Y2hlcyA9IFtdXG5cbiAgbGV0IG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgd2hpbGUgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgbWF0Y2hlcy5wdXNoKG1hdGNoLmluZGV4KVxuICAgIGlmIChtYXRjaC5pbmRleCA8IGluZGV4KSBpbmRleC0tXG4gICAgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB9XG4gIHJldHVybiB7XG4gICAgY29sbm86IGluZGV4ICsgMSwgLy8gMS1iYXNlZFxuICAgIGxlbmd0aDogY2hhckxlbmd0aChsaW5lKSAtIG1hdGNoZXMubGVuZ3RoLFxuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25lIGxpbmUgdGhhdCBpcyB0aGUgdGV4dCBhdCBhbmQgYXJvdW5kXG4gKiB0aGUgY29sdW1uIHRvIGJlIGRpc3BsYXllZCwgYW5kIG9uZSBsaW5lIHRoYXQgaXMgYSBjYXJldCBwb2ludGluZyB0b1xuICogdGhhdCBwYXJ0aWN1bGFyIGNvbHVtbi5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFkZHMgZWxsaXBzZXMgYXMgbmVlZGVkIHRvIHRoZSBmcm9udCBhbmQvb3IgdGhlIGJhY2sgb2ZcbiAqIHRoZSBsaW5lIGluIG9yZGVyIHRvIGdldCB0aGUgY29sdW1uIGludG8gdGhlIHZpc2libGUgYXJlYSwgYmFzZWQgb25cbiAqIHRoZSBgbWF4V2lkdGhgIG9mIHRoZSBsaW5lIHRvIGRpc3BsYXkuIFRoZSBgbGVuZ3RoYCBwYXJhbWV0ZXIgaXMgdGhlXG4gKiBgbGVuZ3RoYCByZXR1cm5lZCBieSBgZ2V0Q29sTnVtYmVyYCBhbmQgaXMgaGVyZSBqdXN0IHRvIGF2b2lkIGhhdmluZ1xuICogdG8gcmVjYWxjdWxhdGUgaXQgaW4gdGhpcyBmdW5jdGlvbiB3aGVuIGl0IGFscmVhZHkgbmVlZGVkIHRvIGJlXG4gKiBjYWxjdWxhdGVkIGluIHRoZSBvdGhlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIGZvcm1hdHRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yIHRhYnMgYW5kXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbG5vIFRoZSBjb2x1bW4gbnVtYmVyIHdoZXJlIHRoZSBjYXJldCBzaG91bGQgcG9pbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBvdGVudGlhbGx5IHRydW5jYXRlZCBsaW5lIG9mIHRleHQsIGZvbGxvd2VkIGJ5XG4gKiAgICAgYW5vdGhlciBsaW5lIGNvbnRhaW5pbmcgYSBjYXJldCBwb2ludGluZyBhdCB0aGUgZGVzaWduYXRlZFxuICogICAgIGNvbHVtbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudCA9IDApIHtcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICAvLyBGaXJzdCBjYXNlOiB0aGUgbGluZSBpcyBzaG9ydGVyIHRoYW4gbWF4V2lkdGguIERpc3BsYXkgdGhlIGxpbmVcbiAgLy8gd2l0aCB0aGUgY2FyZXQgcG9zaXRpb25lZCBiZWxvdyBpdC5cbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoICYmIGxlbmd0aCA8PSBtYXhXaWR0aCkge1xuICAgIHJldHVybiBgJHtzcH0ke2xpbmV9XFxuJHtzcH0keycgJy5yZXBlYXQoY29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gU2Vjb25kIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIHRvIGEgY2hhcmFjdGVyIGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLlxuICAvLyBEaXNwbGF5IHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYWZ0ZXIgaXQgYW5kIHBvc2l0aW9uXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoIC0gMykge1xuICAgIHJldHVybiBgJHtzcH0ke2xpbmUuc3Vic3RyaW5nKDAsIG1heFdpZHRoIC0gMyl9Li4uXFxuJHtzcH0ke1xuICAgICAgJyAnLnJlcGVhdChjb2xubyAtIDEpXG4gICAgfV5gXG4gIH1cblxuICAvLyBUaGlyZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyBhdCBhIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMylcbiAgLy8gY2hhcmFjdGVycyBidXQgaXMgaW4gdGhlIGxhc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gRGlzcGxheVxuICAvLyB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYmVmb3JlIGl0LCBjYWxjdWxhdGUgYSBuZXdcbiAgLy8gcG9zaXRpb24gZm9yIHRoZSBjYXJldCwgYW5kIHBvc2l0aW9uIGl0IGJlbG93IHRoZSBsaW5lLlxuICBpZiAoY29sbm8gPj0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBsZW5ndGggLSBtYXhXaWR0aCArIDNcbiAgICBjb25zdCBuZXdDb2xubyA9IGNvbG5vIC0gKGxlbmd0aCAtIG1heFdpZHRoKVxuICAgIHJldHVybiBgJHtzcH0uLi4ke2xpbmUuc3Vic3RyaW5nKHN0YXJ0KX1cXG4ke3NwfSR7JyAnLnJlcGVhdChuZXdDb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBGaW5hbCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiBtYXhXaWR0aCAtIDMgYW5kIHRoZSBjYXJldFxuICAvLyBkb2VzIG5vdCBwb2ludCB0byBhIGNoYXJhY3RlciB3aXRoaW4gZWl0aGVyIHRoZSBmaXJzdCBvciBsYXN0XG4gIC8vIChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIFNoaWZ0IHRoZSBsaW5lIHRvIG1ha2UgdGhlIGNhcmV0IHBvaW50XG4gIC8vIGF0IHRoZSBtaWRkbGUgb2YgaXQsIGFkZCBgLi4uYCB0byB0aGUgc3RhcnQgKmFuZCogZW5kLCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBjb25zdCBzdGFydCA9IGNvbG5vIC0gMSAtIE1hdGguY2VpbChtYXhXaWR0aCAvIDIpICsgM1xuICBjb25zdCBlbmQgPSBjb2xubyAtIDEgKyBNYXRoLmZsb29yKG1heFdpZHRoIC8gMikgLSAzXG4gIHJldHVybiBgJHtzcH0uLi4ke1xuICAgIGxpbmUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpXG4gIH0uLi5cXG4ke3NwfSR7XG4gICAgJyAnLnJlcGVhdChNYXRoLmNlaWwobWF4V2lkdGggLyAyKSlcbiAgfV5gXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIHNldCBvZiBuZXN0ZWQgKG9yIGNvbXBvdW5kKSBlcnJvciBtZXNzYWdlcy5cbiAqXG4gKiBAcGFyYW0geyhOZXN0ZWRFcnJvcltdfENvbXBvdW5kRXJyb3JbXSl9IG5lc3RlZHMgQW4gYXJyYXkgb2YgZWl0aGVyXG4gKiAgICAgbmVzdGVkIG9yIGNvbXBvdW5kIGVycm9ycyB0byBmb3JtYXQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlIHRhYlxuICogICAgIHN0b3BzIGxheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZW50IFRoZSBudW1iZXIgb2Ygc3BhY2VzIHRvIGluZGVudCB0aGUgZXJyb3JcbiAqICAgICBtZXNzYWdlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBuZXN0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0TmVzdGVkKG5lc3RlZHMsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpIHtcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcbiAgY29uc3QgbmVzdGVkTXNncyA9IG5lc3RlZHMubWFwKG4gPT4ge1xuICAgIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IG4uY3R4XG4gICAgY29uc3QgbGFiZWwgPSBuLmxhYmVsXG4gICAgICA/IGBcXG4ke3NwfSR7bi5sYWJlbH0gY291bGQgbm90IGJlIHBhcnNlZCBiZWNhdXNlOlxcblxcbmBcbiAgICAgIDogYFxcbiR7c3B9VGhlIHBhcnNlciBiYWNrdHJhY2tlZCBhZnRlcjpcXG5cXG5gXG4gICAgcmV0dXJuIGxhYmVsICsgZm9ybWF0KG4uZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCArIDIpXG4gIH0pXG4gIHJldHVybiBuZXN0ZWRNc2dzLmpvaW4oJycpXG59XG5cbi8qKlxuICogRW5zdXJlcyB0aGF0IGEgc3RyaW5nIGVuZHMgd2l0aCBhIGNlcnRhaW4gbnVtYmVyIG9mIG5ld2xpbmVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBzdHJpbmcgdGhhdCBpcyBzdXBwb3NlZCB0byBoYXZlIGEgY2VydGFpblxuICogICAgIG51bWJlciBvZiBuZXdsaW5lcyBhdCB0aGUgZW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgbmV3bGluZXMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGJ1dCB3aXRoIGBjb3VudGAgbmV3bGluZXMgYXQgdGhlXG4gKiAgICAgZW5kLlxuICovXG5mdW5jdGlvbiBlbnN1cmVOZXdsaW5lcyh0ZXh0LCBjb3VudCkge1xuICBsZXQgcmVzdWx0ID0gdGV4dFxuICB3aGlsZSAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJ1xcbicpIHtcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIHJlc3VsdC5sZW5ndGggLSAxKVxuICB9XG4gIHJldHVybiByZXN1bHQgKyAnXFxuJy5yZXBlYXQoY291bnQpXG59XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZm9ybWF0dGVyIGZvciBlcnJvciBtZXNzYWdlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBzdHJpbmcgdGhhdCBoYXMgdGhlIGZvbGxvd2luZyBwYXJ0czpcbiAqXG4gKiAxLiBBIHBvc2l0aW9uIGxpbmUgdGhhdCBnaXZlcyB0aGUgbGluZSBudW1iZXIgYW5kIGNvbHVtbiBudW1iZXIgd2hlcmVcbiAqICAgIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIDIuIEEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBsb2NhdGlvbi4gVGhpcyBwYXJ0IGdlbmVyYXRlc1xuICogICAgdHdvIGxpbmVzIGluIHRoZSBlcnJvciBtZXNzYWdlLiBUaGUgZmlyc3QgaXMgZWl0aGVyIHRoZSBlbnRpcmVcbiAqICAgIGlucHV0IGxpbmUgb3IsIGlmIHRoYXQncyB0b28gbG9uZywgYSBwb3J0aW9uIG9mIHRoZSBpbnB1dCBsaW5lXG4gKiAgICBzdGFydGVkIGFuZC9vciBlbmRlZCB3aXRoIGVsbGlwc2VzIHRoYXQgY29udGFpbnMgdGhlIGVycm9yXG4gKiAgICBsb2NhdGlvbi4gVGhlIHNlY29uZCBpcyBhIGNhcmV0IHBvc2l0aW9uZWQgdW5kZXJuZWF0aCB0aGUgbG9jYXRpb25cbiAqICAgIGluIHRoZSBmaXJzdCBsaW5lIHRoYXQgc2hvd3MgZXhhY3RseSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAzLiBUaGUgZmlyc3QgdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLCBpZiBhbnkuXG4gKiA0LiBBbGwgb2YgdGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzIChpZiBhbnkpLCBzZXBhcmF0ZWQgYnkgJ29yJyBhbmRcbiAqICAgIGNvbW1tYXMgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSBudW1iZXIgb2YgbWVzc2FnZXMuXG4gKiA1LiBUaGUgZmlyc3Qgb2YgdGhlIGdlbmVyaWMgbWVzc2FnZXMsIGlmIGFueS5cbiAqXG4gKiBUaGUgcG9zaXRpb24gb2YgdGhlIGVycm9yIGlzIGluZGljYXRlZCBieSB0aGUgYGluZGV4YCBwYXJhbWV0ZXIsXG4gKiB3aGljaCBpcyB0aGUgaW5kZXggd2l0aGluIHRoZSBhcnJheSBvZiBieXRlcyBpbiBgdmlld2Agd2hlcmUgdGhlXG4gKiBlcnJvciBvY2N1cnJlZC4gVGhlIGNhbGN1bGF0aW9uIG9mIGxpbmUgYW5kIGNvbHVtbiBudW1iZXIgZnJvbSB0aGlzXG4gKiBmbGF0IGFycmF5IG9mIGJ5dGVzIHRha2VzIHRoZSBmb2xsb3dpbmcgaW50byBhY2NvdW50OlxuICpcbiAqICogTXVsdGktYnl0ZSBjaGFyYWN0ZXJzIChldmVyeXRoaW5nIGlzIFVURi04IGF3YXJlLCBzbyBjaGFyYWN0ZXJzIGNhblxuICogICBiZSAxLCAyLCAzLCBvciA0IGJ5dGVzIGxvbmcpXG4gKiAqIE11bHRpLWNoYXJhY3RlciBhbmQgc2luZ2xlLWNoYXJhY3RlciBtdWx0aS1ieXRlIGxpbmUgZW5kaW5nc1xuICogKiBUYWJzLCB3aGljaCBhcmUgZXhwYW5kZWQgaW50byBhIG51bWJlciBvZiBzcGFjZXMgc2V0IGJ5IHRoZVxuICogICBgdGFiU2l6ZWAgcGFyYW1ldGVyXG4gKiAqIFplcm8td2lkdGggY2hhcmFjdGVycywgc3VjaCBhcyB6ZXJvLXdpZHRoIHNwYWNlcyBhbmQgam9pbmVycywgUlRMXG4gKiAgIG9yIExUUiBmb3JtYXR0aW5nIGNoYXJhY3RlcnMsIGFuZCBkaWFjcml0aWNzIChIZWJyZXcgb3IgVGhhaSB2b3dlbFxuICogICBtYXJrcywgdW1sYXV0cyBvdmVyIExhdGluIGNoYXJhY3RlcnMsIGV0Yy4pXG4gKlxuICogVGhlIG91dHB1dCBpcyBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgNSBlbGVtZW50cyBhYm92ZS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIFRoZSBmb2xsb3dpbmcgdHdvIGxpbmVzIG9mIGNvZGUgdXNlcyBgc3RyaW5nVG9WaWV3YCwgYW4gaW50ZXJuYWxcbiAqIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCwgYXMgaXRzIG5hbWUgc3VnZ2VzdHMsIHR1cm5zIGEgc3RyaW5nIGludG8gYVxuICogVVRGLTggZGF0YSB2aWV3LiBJdCdzIGNhbGxlZCBieSBgcGFyc2VgIGl0c2VsZiwgc28gaW4gcmVhbCB3b3JsZFxuICogdXNhZ2UsIGl0J3Mgbm90IG5lY2Vzc2FyeSB0byBrbm93LlxuICpcbiAqIGBgYFxuICogY29uc3QgdmlldyA9IHN0cmluZ1RvVmlldygnXFx0T25vbWF0b3BvZWlhXFx0XFx0XFx0XFx04LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHJylcbiAqIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXQoW2V4cGVjdGVkKCdhIGRpZ2l0JyldLCAyOSwgdmlldywgNCwgNzIpXG4gKiBgYGBcbiAqXG4gKiBGcm9tIHRoaXMgY2FsbCB0byBgZm9ybWF0YCwgdGhlIGZvbGxvd2luZyBtdWx0aS1saW5lIHN0cmluZyB3aWxsIGJlXG4gKiBwcm9kdWNlZDpcbiAqXG4gKiBgYGBcbiAqIFBhcnNlIGVycm9yIGF0IChsaW5lIDEsIGNvbHVtbiAzNyk6XG4gKlxuICogICAgIE9ub21hdG9wb2VpYSAgICAgICAgICAgICAgICDguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5cbiAqIEV4cGVjdGVkIGEgZGlnaXRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRvIGJlIGZvcm1hdHRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW4gdGhlIHZpZXcgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemU9OF0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZVxuICogICAgIHRhYiBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoPTcyXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGVudD0wXSBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0aGUgbWVzc2FnZSBzaG91bGQgYmVcbiAqICAgICBpbmRlbnRlZC4gVGhpcyBzaG91bGQgYmUgMCBhbmQgaW5jcmVhc2VkIG9ubHkgZm9yIG5lc3RlZCBlcnJvcnMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoXG4gIGVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUgPSA4LCBtYXhXaWR0aCA9IDcyLCBpbmRlbnQgPSAwLFxuKSB7XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIGxlbmd0aCB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gYCR7c3B9UGFyc2UgZXJyb3IgYXQgKGxpbmUgJHtsaW5lbm99LCBjb2x1bW4gJHtjb2xub30pOmBcbiAgY29uc3QgZGlzcGxheSA9IHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgZ2VuZXJpYyA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxuICBjb25zdCB1bmV4cGVjdGVkID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLlVuZXhwZWN0ZWQpXG4gIGNvbnN0IGV4cGVjdGVkID0gY29tbWFTZXBhcmF0ZShcbiAgICBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5FeHBlY3RlZClcbiAgICAgIC5tYXAoZXJyb3IgPT4gZXJyb3IubGFiZWwpLFxuICApXG5cbiAgY29uc3QgbmVzdGVkID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKVxuICBjb25zdCBjb21wb3VuZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkNvbXBvdW5kKVxuXG4gIGNvbnN0IHVuZXhwTXNnID0gdW5leHBlY3RlZCA/IGAke3NwfVVuZXhwZWN0ZWQgJHt1bmV4cGVjdGVkLmxhYmVsfVxcbmAgOiAnJ1xuICBjb25zdCBleHBNc2cgPSBleHBlY3RlZC5sZW5ndGggPyBgJHtzcH1FeHBlY3RlZCAke2V4cGVjdGVkfVxcbmAgOiAnJ1xuICBjb25zdCBnZW5lcmljTXNnID0gZ2VuZXJpYyA/IGAke3NwfSR7Z2VuZXJpYy5sYWJlbH1cXG5gIDogJydcblxuICBjb25zdCBuZXN0ZWRNc2cgPSBmb3JtYXROZXN0ZWQobmVzdGVkLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxuICBjb25zdCBjb21wb3VuZE1zZyA9IGZvcm1hdE5lc3RlZChjb21wb3VuZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcblxuICBjb25zdCB1bmtub3duTXNnID0gZXJyb3JzLmxlbmd0aCA9PT0gMCA/IGAke3NwfVVua25vd24gZXJyb3IocylcXG5gIDogJydcbiAgY29uc3QgZW9mTXNnID0gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoXG4gICAgPyBgJHtzcH1Ob3RlOiBmYWlsdXJlIG9jY3VycmVkIGF0IHRoZSBlbmQgb2YgaW5wdXRcXG5gIDogJydcblxuICByZXR1cm4gZW5zdXJlTmV3bGluZXMoXG4gICAgYCR7cG9zaXRpb259XFxuXFxuJHtkaXNwbGF5fVxcbiR7dW5leHBNc2d9JHtleHBNc2d9JHtnZW5lcmljTXNnfSR7dW5rbm93bk1zZ31gXG4gICAgICArIGAke2VvZk1zZ30ke2NvbXBvdW5kTXNnfSR7bmVzdGVkTXNnfWAsXG4gICAgMixcbiAgKVxufVxuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogQWNjZXB0cyBhIHBhcnNlciBjb250ZXh0IGFuZCBwcm9kdWNlcyBhbiBlcnJvciBtZXNzYWdlIGZyb20gaXQuXG4gKlxuICogQSBkZWZhdWx0IGZvcm1hdHRlciBpcyBwcm92aWRlZCBidXQgYW4gYWx0ZXJuYXRlIG9uZSBjYW4gYmUgcGFzc2VkXG4gKiBpbi4gVGhlIHNhbWUgZ29lcyBmb3IgdGFiIHNpemUgKHVzZWQgdG8gZXhwYW5kIHRhYnMgaW4gcGFyc2VkIHRleHQ7XG4gKiBkZWZhdWx0cyB0byA4IGluIHRoZSBkZWZhdWx0IGZvcm1hdHRlcikgYW5kIG1heCB3aWR0aCAoZm9yIHRoZSBlcnJvclxuICogbWVzc2FnZSBpdHNlbGY7IGRlZmF1bHRzIHRvIDcyIGluIHRoZSBkZWZhdWx0IGZvcm1hdHRlcikuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIHJlcGx5IHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgd2hlbiB0aGUgZXJyb3JcbiAqICAgICBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZV0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXG4gKiAgICAgc3RvcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4V2lkdGhdIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7Rm9ybWF0dGVyfSBbZm9ybWF0dGVyPWZvcm1hdF0gVGhlIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZVxuICogICAgIGFjdHVhbCBmb3JtYXR0aW5nIGlzIGRlbGVnYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEVycm9ycyhyZXBseSwgdGFiU2l6ZSwgbWF4V2lkdGgsIGZvcm1hdHRlciA9IGZvcm1hdCkge1xuICBjb25zdCBbY3R4LCByZXN1bHRdID0gcmVwbHlcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIHJldHVybiBmb3JtYXR0ZXIocmVzdWx0LmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IGJ5dGUgb2YgdGhlIHN1cHBsaWVkIGNvbnRleHQuIFRoZVxuICogcG9zaXRpb24gaXMgYW4gb2JqZWN0IHdpdGggYGxpbmVgIGFuZCBgY29sdW1uYCBwcm9wZXJ0aWVzIHRoYXQgYXJlXG4gKiB0aGUgMS1iYXNlZCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aGUgYnl0ZSBhdCB0aGUgY29udGV4dCdzXG4gKiBpbmRleCB3aXRoaW4gdGhlIGNvbnRleHQncyBkYXRhIHZpZXcuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgd2hvc2UgY3VycmVudCBwb3NpdGlvbiBpcyBiZWluZ1xuICogICAgIGNhbGN1bGF0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemU9OF0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZVxuICogICAgIHRhYnMgc3RvcC4gVGhlIGN1cnJlbnQgcG9zaXRpb24ncyBjb2x1bW4gbnVtYmVyIGlzIGFkanVzdGVkIGJhc2VkXG4gKiAgICAgb24gdGhpcyBwYXJhbWV0ZXIgd2hlbiB0YWIgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cbiAqIEByZXR1cm5zIHtQb3NpdGlvbn0gQSB0d28tcHJvcGVydHkgb2JqZWN0IHdpdGggYGxpbmVgIGFuZCBgY29sdW1uYFxuICogICAgIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihjdHgsIHRhYlNpemUgPSA4KSB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXG5cbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxuICBjb25zdCB7IGNvbG5vLCBfIH0gPSBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpXG5cbiAgcmV0dXJuIHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbG5vIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQQVJTRVJTXG5cbmV4cG9ydCB7XG4gIGFscGhhLFxuICBhbnksXG4gIGFueU9mLFxuICBjaGFyLFxuICBjaGFySSxcbiAgZGlnaXQsXG4gIGVvZixcbiAgaGV4LFxuICBsZXR0ZXIsXG4gIGxvd2VyLFxuICBub25lT2YsXG4gIG9jdGFsLFxuICByYW5nZSxcbiAgc2F0aXNmeSxcbiAgc2F0aXNmeU0sXG4gIHVwcGVyLFxufSBmcm9tICcuL3BhcnNlcnMvY2hhcidcbmV4cG9ydCB7XG4gIGZhaWxOb3JtYWxseSxcbiAgZmFpbEZhdGFsbHksXG59IGZyb20gJy4vcGFyc2Vycy9taXNjJ1xuZXhwb3J0IHtcbiAgYWxwaGFVLFxuICBsZXR0ZXJVLFxuICBsb3dlclUsXG4gIG5ld2xpbmUsXG4gIG5ld2xpbmVVLFxuICByZWdleCxcbiAgc3BhY2UsXG4gIHNwYWNlVSxcbiAgc3BhY2VzLFxuICBzcGFjZXMxLFxuICBzcGFjZXMxVSxcbiAgc3BhY2VzVSxcbiAgdXBwZXJVLFxufSBmcm9tICcuL3BhcnNlcnMvcmVnZXgnXG5leHBvcnQge1xuICBhbGwsXG4gIGFueVN0cmluZyxcbiAgc3RyaW5nLFxuICBzdHJpbmdJLFxufSBmcm9tICcuL3BhcnNlcnMvc3RyaW5nJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ09NQklOQVRPUlNcblxuZXhwb3J0IHtcbiAgYWx0LFxuICBkZWYsXG4gIGVtcHR5LFxuICBub3QsXG4gIG9wdCxcbiAgcGVlayxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZSdcbmV4cG9ydCB7XG4gIGFuZFRoZW5CLFxuICBhcHBseUIsXG4gIGF0dGVtcHQsXG4gIGF0dGVtcHRNLFxuICBiZXR3ZWVuQixcbiAgYmxvY2tCLFxuICBjaGFpbkIsXG4gIGxhYmVsLFxuICBsZWZ0QixcbiAgbWFueVRpbGxCLFxuICBwaXBlQixcbiAgcmVwZWF0QixcbiAgcmlnaHRCLFxuICBzZXF1ZW5jZUIsXG59IGZyb20gJy4vY29tYmluYXRvcnMvYmFja3RyYWNraW5nJ1xuZXhwb3J0IHtcbiAgY29tcGFjdCxcbiAgZmlmdGgsXG4gIGZpcnN0LFxuICBmb3VydGgsXG4gIGpvaW4sXG4gIG50aCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgdmFsdWUsXG59IGZyb20gJy4vY29tYmluYXRvcnMvbWlzYydcbmV4cG9ydCB7XG4gIGFsd2F5cyxcbiAgYW5kVGhlbixcbiAgYXBwbHksXG4gIGNoYWluLFxuICBtYXAsXG4gIG9yRWxzZSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9wcmltaXRpdmUnXG5leHBvcnQge1xuICBhc3NvYzFMLFxuICBhc3NvYzFSLFxuICBhc3NvY0wsXG4gIGFzc29jUixcbiAgYmV0d2VlbixcbiAgYmxvY2ssXG4gIGxlZnQsXG4gIG1hbnksXG4gIG1hbnkxLFxuICBtYW55VGlsbCxcbiAgcGlwZSxcbiAgcmVwZWF0LFxuICByaWdodCxcbiAgc2VwQnksXG4gIHNlcEJ5MSxcbiAgc2VwRW5kQnksXG4gIHNlcEVuZEJ5MSxcbiAgc2VxLFxuICBza2lwLFxuICBza2lwTWFueSxcbiAgc2tpcE1hbnkxLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcblxuZXhwb3J0IHtcbiAgU3RhdHVzLFxuICBmYWlsLFxuICBmYWlsdXJlLFxuICBmYXRhbCxcbiAgbWF5YmVGYXRhbCxcbiAgb2ssXG4gIHBhcnNlLFxuICBwYXJzZXIsXG4gIHJ1bixcbiAgc3RhdHVzLFxuICBzdWNjZWVkZWQsXG4gIHN1Y2Nlc3MsXG59IGZyb20gJy4vY29yZSdcbmV4cG9ydCB7XG4gIEVycm9yVHlwZSxcbiAgY29tcG91bmQsXG4gIGV4cGVjdGVkLFxuICBmb3JtYXRFcnJvcnMsXG4gIGdlbmVyaWMsXG4gIGdldFBvc2l0aW9uLFxuICBtZXJnZSxcbiAgbmVzdGVkLFxuICBvdGhlcixcbiAgdW5leHBlY3RlZCxcbn0gZnJvbSAnLi9lcnJvcidcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IGNvbW1hU2VwYXJhdGUsIHF1b3RlIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgYWxwaGE6ICdhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcbiAgYWxwaGFVOiAnYSBVbmljb2RlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICBhbnk6ICdhbnkgY2hhcmFjdGVyJyxcbiAgYW55T2Y6IGFycmF5ID0+ICdhbnkgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcbiAgYW55U3RyaW5nOiBuID0+IGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgLFxuICBjaGFyOiBjID0+IHF1b3RlKGMpLFxuICBjaGFySTogYyA9PiBxdW90ZShjKSxcbiAgZGlnaXQ6ICdhIGRpZ2l0JyxcbiAgZW9mOiAnZW5kIG9mIGlucHV0JyxcbiAgaGV4OiAnYSBoZXhhZGVjaW1hbCBkaWdpdCcsXG4gIGxldHRlcjogJ2EgbGV0dGVyJyxcbiAgbGV0dGVyVTogJ2EgVW5pY29kZSBsZXR0ZXInLFxuICBsb3dlcjogJ2EgbG93ZXJjYXNlIGxldHRlcicsXG4gIGxvd2VyVTogJ2EgVW5pY29kZSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgbmV3bGluZTogJ2EgbmV3bGluZScsXG4gIG5ld2xpbmVVOiAnYSBVbmljb2RlIG5ld2xpbmUnLFxuICBub25lT2Y6IGFycmF5ID0+ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXG4gIG9jdGFsOiAnYW4gb2N0YWwgZGlnaXQnLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGBhIGNoYXJhY3RlciBiZXR3ZWVuICcke3N0YXJ0fScgYW5kICcke2VuZH0nYCxcbiAgcmVnZXg6IHJlID0+IGBhIHN0cmluZyBtYXRjaGluZyAke3JlfWAsXG4gIHNwYWNlOiAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHNwYWNlczogJ3plcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzVTogJ3plcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlczFVOiAnb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZVU6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICBzdHJpbmc6IHN0ciA9PiBxdW90ZShzdHIpLFxuICBzdHJpbmdJOiBzdHIgPT4gcXVvdGUoc3RyKSxcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcbiAgdXBwZXJVOiAnYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXInLFxufVxuXG5leHBvcnQgY29uc3QgZXhwZWN0ZWRzID0ge1xuICBhbHBoYTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYSksXG4gIGFscGhhVTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYVUpLFxuICBhbnk6IGV4cGVjdGVkKHN0cmluZ3MuYW55KSxcbiAgYW55T2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55T2YoYXJyYXkpKSxcbiAgYW55U3RyaW5nOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55U3RyaW5nKG4pKSxcbiAgY2hhcjogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXIoYykpLFxuICBjaGFySTogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXJJKGMpKSxcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxuICBlb2Y6IGV4cGVjdGVkKHN0cmluZ3MuZW9mKSxcbiAgaGV4OiBleHBlY3RlZChzdHJpbmdzLmhleCksXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxuICBsZXR0ZXJVOiBleHBlY3RlZChzdHJpbmdzLmxldHRlclUpLFxuICBsb3dlcjogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlciksXG4gIGxvd2VyVTogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlclUpLFxuICBuZXdsaW5lOiBleHBlY3RlZChzdHJpbmdzLm5ld2xpbmUpLFxuICBuZXdsaW5lVTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lVSksXG4gIG5vbmVPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lT2YoYXJyYXkpKSxcbiAgb2N0YWw6IGV4cGVjdGVkKHN0cmluZ3Mub2N0YWwpLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGV4cGVjdGVkKHN0cmluZ3MucmFuZ2Uoc3RhcnQsIGVuZCkpLFxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxuICBzcGFjZTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZSksXG4gIHNwYWNlczogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMpLFxuICBzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczEpLFxuICBzcGFjZXNVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlc1UpLFxuICBzcGFjZXMxVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxVSksXG4gIHNwYWNlVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZVUpLFxuICBzdHJpbmc6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZyhzdHIpKSxcbiAgc3RyaW5nSTogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nSShzdHIpKSxcbiAgdXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXIpLFxuICB1cHBlclU6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXJVKSxcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydENoYXIsXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRTdHJpbmcsXG4gIGFzc2VydFN0cmluZ09yQXJyYXksXG4gIG9yZENoYXJGb3JtYXR0ZXIsXG4gIG9yZEZuRm9ybWF0dGVyLFxuICBvcmRTdHJGb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBvaywgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgbmV4dENoYXIsIHR3aW4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIsIGZlZWRzIGl0IHRvIGEgZnVuY3Rpb24sIGFuZFxuICogc3VjY2VlZHMgb3IgZmFpbHMgYmFzZWQgb24gdGhlIHJldHVybiB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpc24ndCBhbnl0aGluZyBoZXJlIHRoYXQgY291bGRuJ3QgYmUgd3JpdHRlbiB3aXRoXG4gKiBgU3RyaW5nUGFyc2VyYCBpbnN0ZWFkLCBidXQgd2hlbiB3b3JraW5nIHdpdGggc2luZ2xlIGNoYXJhY3RlcnMgdGhlcmVcbiAqIGFyZSBjZXJ0YWluIGFzc3VtcHRpb25zIHRoYXQgY2FuIGJlIG1hZGUgKHN1Y2ggYXMgdGhlIG51bWJlciBvZlxuICogY2hhcmFjdGVycyB0aGF0IGhhdmUgdG8gYmUgcmVhZCBmcm9tIHRoZSBpbnB1dCB2aWV3KSB0aGF0IGFsbG93IGl0IHRvXG4gKiBiZSBhIGxpdHRsZSBtb3JlIGVmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuY29uc3QgY2hhclBhcnNlciA9IGZuID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGZhaWwoY3R4KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gZm4obmV4dCkgPyBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZmFpbChjdHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kIHN1Y2NlZWRzIGlmXG4gKiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgdGhyb3cgYW4gZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgaXMgdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhciA9IGMgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdjaGFyJywgYylcblxuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihjaCA9PiBjID09PSBjaCkoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5jaGFyKGMpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZCBzdWNjZWVkcyBpZlxuICogdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBUaGlzIGRpZmZlcnMgZnJvbSBgY2hhcmAgaW4gdGhhdCB0aGVcbiAqIGNvbXBhcmlzb24gZG9uZSBieSB0aGlzIHBhcnNlciBpcyBjYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxuICogICAgIHRocm93IGFuIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIChvciBpdHNcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYXJJID0gYyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ2NoYXJJJywgYylcblxuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihcbiAgICBjaCA9PiBjLnRvTG93ZXJDYXNlKCkgPT09IGNoLnRvTG93ZXJDYXNlKCksXG4gICkoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5jaGFySShjKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGUgcHJvdmlkZWRcbiAqIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyIHN1Y2NlZWRzIHdpdGhcbiAqIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAsIHRoaXNcbiAqIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGRldGVybWluZSB0aGUgY2F1c2UgZm9yIGFuIGVycm9yIHNpbmNlIGl0J3Mgbm90XG4gKiBmZWFzaWJsZSB0byBoYXZlIGl0IGFuYWx5emUgdGhlIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGl0IGV4cGVjdHMgdG9cbiAqIG1hdGNoLCBzbyBubyBlcnJvciBtZXNzYWdlIGlzIHByb3ZpZGVkIG9uIGZhaWx1cmUuIFVzZVxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtc2cpYCBvciB0aGUgZXF1aXZhbGVudCBgc2F0aXNmeUwoZm4sIG1zZylgIHRvXG4gKiBhZGQgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNhdGlzZnkgPSBmbiA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5JywgZm4pXG4gIHJldHVybiBjaGFyUGFyc2VyKGZuKShjdHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBwYXNzZXMgaXQgdG8gdGhlIHByb3ZpZGVkXG4gKiBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlciBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLCB0aGlzXG4gKiBwYXJzZXIgZmFpbHMgYW5kIGNvbnN1bWVzIG5vIGlucHV0IGFuZCBzaWduYWxzIGFuIGVycm9yIHdpdGggdGhlXG4gKiBwcm92aWRlZCBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzYXRpc2Z5TSA9IChmbiwgbWVzc2FnZSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignc2F0aXNmeU0nLCBmbiwgb3JkRm5Gb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzYXRpc2Z5TScsIG1lc3NhZ2UsIG9yZFN0ckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZChtZXNzYWdlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIGRldGVybWluZXMgd2hldGhlciBpdCBpc1xuICogYmV0d2VlbiAoYWNjb3JkaW5nIHRvIGNvZGUgcG9pbnRzKSBjaGFyYWN0ZXJzIGBzYCBhbmQgYGVgXG4gKiAoaW5jbHVzaXZlKS4gSWYgaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsXG4gKiBhbmQgaWYgaXQgaXMgbm90LCB0aGUgcGFyc2VyIGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIGBzYCBhbmQgYGVgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gQW4gZXJyb3Igd2lsbCBiZVxuICogdGhyb3duIGlmIHRoZXkgYXJlIG5vdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcyBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlIHJhbmdlXG4gKiAgICAgb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBlbmQgb2YgdGhlIHJhbmdlIG9mXG4gKiAgICAgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGJldHdlZW4gYHN0YXJ0YCBhbmQgYGVuZGAgKGluY2x1c2l2ZSkuXG4gKi9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzLCBlKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgcywgb3JkQ2hhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdyYW5nZScsIGUsIG9yZENoYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGZuID0gYyA9PiBjID49IHMgJiYgYyA8PSBlXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLnJhbmdlKHMsIGUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGlucHV0IGNoYXJhY3RlciBhbmQgdGhlbiBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3Rlci4gRmFpbHMgb25seSBpZiB0aGVyZSBpcyBubyBpbnB1dCBsZWZ0IHRvIHJlYWQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFueSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGZhaWwoY3R4LCBleHBlY3RlZHMuYW55KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGRvZXNcbiAqIG5vdCBleGlzdCAoaS5lLiwgaWYgdGhlIGluZGV4IGlzIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQpLlxuICogQ29uc3VtZXMgbm90aGluZyBvbiBlaXRoZXIgc3VjY2VzcyBvciBmYWlsdXJlLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBlb2YgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIHJldHVybiBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGggPyBvayhjdHgsIG51bGwpIDogZmFpbChjdHgsIGV4cGVjdGVkcy5lb2YpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaCBvZiB0aGVcbiAqIGNoYXJhY3RlcnMgaW4gYGNzYCwgd2hpY2ggaXMgZWl0aGVyIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgb3IgYVxuICogc3RyaW5nLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlIHBhcnNlclxuICogd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXkgb3IgYVxuICogICAgIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBiZSBhIG1lbWJlciBmb3JcbiAqICAgICB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBvbmVcbiAqICAgICBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgY29uc3QgYW55T2YgPSBjcyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yQXJyYXkoJ2FueU9mJywgY3MpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY3NdXG5cbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgID8gb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxuICAgIDogZmFpbChjdHgsIGV4cGVjdGVkcy5hbnlPZihhcnIpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2ggb2YgdGhlXG4gKiBjaGFyYWN0ZXJzIGluIGBjc2AsIHdoaWNoIGlzIGVpdGhlciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIG9yIGFcbiAqIHN0cmluZy4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzICpub3QqIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZVxuICogcGFyc2VyIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjcyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5IG9yIGFcbiAqICAgICBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gbm90IGJlIGEgbWVtYmVyXG4gKiAgICAgZm9yIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIG5vdFxuICogICAgIG9uZSBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9uZU9mID0gY3MgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmdPckFycmF5KCdub25lT2YnLCBjcylcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGFyciA9IFsuLi5jc11cblxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXG4gICAgPyBmYWlsKGN0eCwgZXhwZWN0ZWRzLm5vbmVPZihhcnIpKVxuICAgIDogb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBkaWdpdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgZGlnaXQgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLmRpZ2l0KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGhleGFkZWNpbWFsIGRpZ2l0LiBUaGlzIHBhcnNlciBpcyBub3QgY2FzZSBzZW5zaXRpdmUuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGhleCA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLmhleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gb2N0YWwgZGlnaXQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IG9jdGFsID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc3J1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5vY3RhbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgbGV0dGVyLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXIgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLmxldHRlcilcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgYWxwaGFudW1lcmljIGNoYXJhY3Rlci5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgYWxwaGEgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgICB8fCBjID49ICcwJyAmJiBjIDw9ICc5J1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5hbHBoYSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgdXBwZXJjYXNlIGxldHRlci5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgdXBwZXIgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLnVwcGVyKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBsb3dlcmNhc2UgbGV0dGVyLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsb3dlciA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZHMubG93ZXIpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWwsIGZhdGFsLCBwYXJzZXIgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGdlbmVyaWMgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGUgZ2VuZXJpY1xuICogZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyB3aXRoIHRoZSBzdXBwbGllZFxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsTm9ybWFsbHkgPSBtc2cgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2ZhaWxOb3JtYWxseScsIG1zZylcbiAgcmV0dXJuIGZhaWwoY3R4LCBnZW5lcmljKG1zZykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLiBUaGlzIHNpZ25pZmllcyBhIGZhdGFsIGVycm9yLFxuICogb25lIHRoYXQgY2Fubm90IGJlIHJlY292ZXJlZCBmcm9tIHdpdGhvdXQgYmFja3RyYWNraW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgZmF0YWxseSB3aXRoIHRoZVxuICogICAgIHN1cHBsaWVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsRmF0YWxseSA9IG1zZyA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmFpbEZhdGFsbHknLCBtc2cpXG4gIHJldHVybiBmYXRhbChjdHgsIGdlbmVyaWMobXNnKSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBhc3NlcnRTdHJpbmdPclJlZ0V4cCB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBvaywgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IHN0cmluZ1RvVmlldywgdHdpbiwgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vLyBBbGwgb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiB0aGUgZGVyaXZlZCByZWdleCBwYXJzZXJzLlxuLy8gVGhlc2UgYXJlIGhlcmUgdG8gY3JlYXRlIGFuZCBjb21waWxlIHRoZW0gb25jZSwgdXBvbiBpbml0aWFsIGxvYWQsIHRvXG4vLyBzcGVlZCBwYXJzaW5nIGxhdGVyLlxuXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxldHRlciA9IC9eXFxwe0FscGhhYmV0aWN9L3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIG9yIG51bWJlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUFscGhhID0gL14oPzpcXHB7QWxwaGFiZXRpY318XFxwe059KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVcHBlciA9IC9eKD86XFxwe1VwcGVyY2FzZX18XFxwe0x0fSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsb3dlcmNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMb3dlciA9IC9eXFxwe0xvd2VyY2FzZX0vdVxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVTcGFjZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHQgXSkvXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVc3BhY2UgPSAvXig/OlxcclxcbnxcXHB7V2hpdGVfU3BhY2V9KS91XG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzID0gL15bXFxyXFxuXFx0IF0qL1xuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzID0gL15cXHB7V2hpdGVfU3BhY2V9Ki91XG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMxID0gL15bXFxyXFxuXFx0IF0rL1xuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMxID0gL15cXHB7V2hpdGVfU3BhY2V9Ky91XG4vKiogTWF0Y2hlcyBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKFxcciwgXFxuLCBvciBcXHJcXG4pLiAqL1xuY29uc3QgcmVOZXdsaW5lID0gL14oPzpcXHJcXG58XFxyfFxcbikvXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIG5ld2xpbmUgY2hhcmFjdGVyLCBwbHVzIFxcclxcbi4gKi9cbmNvbnN0IHJlVW5ld2xpbmUgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx1MDA4NVxcdTIwMjhcXHUyMDI5XSkvdVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgdGFrZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IGFuZCBtYXRjaGVzIGl0IGFzIGZhclxuICogYXMgaXQgY2FuIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICpcbiAqIEl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgcmVnZXggYmVnaW5zIHdpdGggYSBgXmAgLiBUaGUgYGdgIGZsYWcgaXNcbiAqIGlnbm9yZWQgaW4gdGhhdCBvbmx5IHRoZSBmaXJzdCBtYXRjaCBpcyBwcm9jZXNzZWQgYW5kIHJldHVybmVkLiBUaGlzXG4gKiBlbnN1cmVzIHRoYXQgdGhlIG1hdGNoIGlzIG9ubHkgYWdhaW5zdCB0aGUgdGV4dCBkaXJlY3RseSBhdCB0aGVcbiAqIGN1cnJlbnQgcG9pbnRlciBsb2NhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlXG4gKiAgICAgaW5wdXQgdGV4dCBzdGFydGluZyBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmNvbnN0IHJlZ2V4UGFyc2VyID0gcmUgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCByZXN0ID0gdmlld1RvU3RyaW5nKGluZGV4LCB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleCwgdmlldylcblxuICBjb25zdCBtYXRjaCA9IHJlc3QubWF0Y2gocmUpXG4gIHJldHVybiBtYXRjaFxuICAgID8gb2soY3R4LCBtYXRjaFswXSwgaW5kZXggKyBzdHJpbmdUb1ZpZXcobWF0Y2hbMF0pLmJ5dGVMZW5ndGgpXG4gICAgOiBmYWlsKGN0eClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgc3VwcGxpZWQgcmVndWxhciBleHByZXNzaW9uIHRvXG4gKiB0aGUgaW5wdXQgdGV4dCBhdCB0aGUgY3VycmVudCBsb2NhdGlvbi4gSWYgdGhlcmUgaXMgYSBtYXRjaCwgYW55XG4gKiBtYXRjaGluZyB0ZXh0IGlzIHJldHVybmVkIGFzIGEgc3VjY2Vzc2Z1bCByZXN1bHQuIE5vIHRleHQgaXMgY29uc3VtZWRcbiAqIHVwb24gZmFpbHVyZS5cbiAqXG4gKiBBIHN0cmluZyBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgcGFyc2VyLiBJZiBvbmUgaXMsIGl0IGlzIGNvbnZlcnRlZFxuICogaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRob3V0IGZsYWdzLlxuICpcbiAqIElmIGEgc3RhcnQgYW5jaG9yICheKSBpcyBub3QgaW5jbHVkZWQsIG9uZSB3aWxsIGJlIGFkZGVkLiBJZiB0aGUgYGdgXG4gKiBmbGFnIGlzIGluY2x1ZGVkLCBpdCdsbCBmdW5jdGlvbmFsbHkgYmUgaWdub3JlZCBhcyBvbmx5IHRoZSBmaXJzdFxuICogbWF0Y2ggd2lsbCBiZSBjb25zaWRlcmVkIGFueXdheS4gVGhlc2UgdHdvIHJ1bGVzIGVuc3VyZSB0aGF0IHRoZVxuICogbWF0Y2ggaXMgb25seSBhdHRlbXB0ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgY3VycmVudCB0ZXh0LlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3RcbiAqICAgICB0aGUgaW5wdXQgdGV4dC4gSWYgdGhpcyBpcyBhIHN0cmluZywgaXQgd2lsbCBiZSBjb252ZXJ0ZWQgaW50byBhXG4gKiAgICAgcmVndWxhciBleHByZXNzaW9uIHdpdGggbm8gZmxhZ3MuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXG4gKiAgICAgZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbiBhbmQgc3VjY2VlZHNcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxuICovXG5leHBvcnQgY29uc3QgcmVnZXggPSByZSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yUmVnRXhwKCdyZWdleCcsIHJlKVxuXG4gIC8vIEZpcnN0LCBjb252ZXJ0IHRvIGEgcmVndWxhciBleHByZXNzaW9uIGlmIGl0J3MgYSBzdHJpbmdcbiAgbGV0IHJlZ2V4ID0gdHlwZW9mIHJlID09PSAnc3RyaW5nJyA/IG5ldyBSZWdFeHAocmUpIDogcmVcblxuICAvLyBOZXh0LCBtYWtlIHN1cmUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdGFydHMgd2l0aCBhIF4gYW5jaG9yXG4gIGNvbnN0IHsgc291cmNlLCBmbGFncyB9ID0gcmVnZXhcbiAgY29uc3QgcmVhbmNob3IgPSBzb3VyY2VbMF0gIT09ICdeJ1xuICBpZiAocmVhbmNob3IpIHtcbiAgICBjb25zdCBuZXdTb3VyY2UgPSAnXicgKyBzb3VyY2VcbiAgICByZWdleCA9IG5ldyBSZWdFeHAobmV3U291cmNlLCBmbGFncylcbiAgfVxuXG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gdHdpbihyZWdleFBhcnNlcihyZWdleCkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5yZWdleChyZWdleCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbGV0dGVyLiBBIGxldHRlciBmb3IgdGhpcyBwdXJwb3NlIGlzIGFueSBjaGFyYWN0ZXIgd2l0aCB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gdHdpbihyZWdleFBhcnNlcihyZUxldHRlcikoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5sZXR0ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbHBoYW51bWVyaWMuIEEgY2hhcmFjdGVyIGlzIGFscGhhbnVtZXJpYyBpZiBpdCBoYXMgZWl0aGVyIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkgb3IgdGhlIFVuaWNvZGUgYE51bWJlcmAgcHJvcGVydHkuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFscGhhVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4ocmVnZXhQYXJzZXIocmVBbHBoYSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5hbHBoYVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGVpdGhlciBhbiB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXNcbiAqIHVwcGVyY2FzZSBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFVwcGVyY2FzZWAgcHJvcGVydHkgYW5kIGlzIHRpdGxlY2FzZVxuICogaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBMZXR0ZXIsIFRpdGxlY2FzZWAgcHJvcGVydHkuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4ocmVnZXhQYXJzZXIocmVVcHBlcikoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy51cHBlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXMgbG93ZXJjYXNlIGlmIGl0IGhhcyB0aGVcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4ocmVnZXhQYXJzZXIocmVMb3dlcikoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5sb3dlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxuICogb3IgYFxcclxcbmApLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4ocmVnZXhQYXJzZXIocmVTcGFjZSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5zcGFjZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gQSBjaGFyYWN0ZXIgaXMgd2hpdGVzcGFjZSBmb3IgdGhlXG4gKiBwdXJwb3NlIG9mIHRoaXMgcGFyc2VyIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgV2hpdGVfU3BhY2VgIHByb3BlcnR5LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgYWxzbyByZWNvZ25pemUgdGhlIHR3by1jaGFyYWN0ZXIgY29tYmluYXRpb24gYFxcclxcbmBcbiAqIGFzIGEgc2luZ2xlIGluc3RhbmNlIG9mIHdoaXRlc3BhY2UuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4ocmVnZXhQYXJzZXIocmVVc3BhY2UpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMuc3BhY2VVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlclxuICogYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm8gd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCxcbiAqIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZSBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycGN0eCwgX10gPSByZWdleFBhcnNlcihyZVNwYWNlcykoY3R4KVxuICByZXR1cm4gb2socnBjdHgsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIGFsd2F5cyBzdWNjZWVkczsgZXZlbiB6ZXJvXG4gKiB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLCB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGVcbiAqIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90XG4gKiBwcm9kdWRlIGEgcmVzdWx0LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZXNVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycGN0eCwgX10gPSByZWdleFBhcnNlcihyZVVzcGFjZXMpKGN0eClcbiAgcmV0dXJuIG9rKHJwY3R4LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGxcbiAqIG9ubHkgZmFpbCBpZiB0aGVyZSBpcyBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uXG4gKiBzdWNjZXNzLCBpdCBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnBjdHgsIHJwcmVzXSA9IHJlZ2V4UGFyc2VyKHJlU3BhY2VzMSkoY3R4KVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IG9rKHJwY3R4LCBudWxsKSA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5zcGFjZXMxKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBycHJlc10gPSByZWdleFBhcnNlcihyZVVzcGFjZXMxKShjdHgpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBvayhycGN0eCwgbnVsbClcbiAgICA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5zcGFjZXMxVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgdGhpcyBwYXJzZXIgcmVjb2duaXplcyBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmdcbiAqIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxuICpcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKHJlZ2V4UGFyc2VyKHJlTmV3bGluZSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5uZXdsaW5lKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gKiBOZXdsaW5lcyBpbiBVbmljb2RlIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKiAqIGBORUxgIChuZXh0IGxpbmUsIGBVKzAwODVgKVxuICogKiBgTFNgIChsaW5lIHNlcGFyYXRvciwgYFUrMjAyOGApXG4gKiAqIGBQU2AgKHBhcmFncmFwaCBzZXBhcmF0b3IsIGBVKzIwMjlgKVxuICpcbiAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyBgXFxmYCBvciBgXFx2YCwgd2hpY2ggd2hpbGUgYmVpbmdcbiAqIHZlcnRpY2FsIHNlcGFyYXRvcnMsIGFyZW4ndCByZWFsbHkgbmV3bGluZXMgaW4gdGhlIHRyYWRpdGlvbmFsIHNlbnNlLlxuICpcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXG4gKiBgXFxyXFxuYC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgbmV3bGluZVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKHJlZ2V4UGFyc2VyKHJlVW5ld2xpbmUpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMubmV3bGluZVUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0TnVtYmVyLCBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbCwgb2ssIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBuZXh0Q2hhcnMsIHR3aW4sIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGUgY3VycmVudFxuICogcG9zaXRpb24gaW4gdGhlIHRleHQuIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgZXF1YWwgaW4gbGVuZ3RoIHRvXG4gKiBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXG4gKiAgICAgc2hvdWxkIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIHJlYWRcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSByZWFkIHN0cmluZyBwYXNzZXNcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICovXG5jb25zdCBzdHJpbmdQYXJzZXIgPSAobGVuZ3RoLCBmbikgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGlmIChsZW5ndGggPCAxKSByZXR1cm4gb2soY3R4LCAnJylcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGZhaWwoY3R4KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFycyhpbmRleCwgdmlldywgbGVuZ3RoKVxuICByZXR1cm4gY2hhckxlbmd0aChuZXh0KSAhPT0gbGVuZ3RoIHx8ICFmbihuZXh0KVxuICAgID8gZmFpbChjdHgpXG4gICAgOiBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGUgaW5wdXRcbiAqIGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhlIHN0cmluZyBtYXRjaCBtdXN0IGJlXG4gKiBleGFjdCAoaXQgaXMgY2FzZS1zZW5zaXRpdmUpLCBhbmQgYWxsIFVURi04IGNoYXJhY3RlcnMgYXJlIHJlY29nbml6ZWRcbiAqIHByb3Blcmx5LlxuICpcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHN0ciA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnc3RyaW5nJywgc3RyKVxuXG4gIGNvbnN0IFtzcHJlcCwgW3NwY3R4LCBzcHJlc11dID0gdHdpbihzdHJpbmdQYXJzZXIoXG4gICAgY2hhckxlbmd0aChzdHIpLCBjaGFycyA9PiBzdHIgPT09IGNoYXJzLFxuICApKGN0eCkpXG4gIHJldHVybiBzcHJlcy5zdGF0dXMgPT09IE9rID8gc3ByZXAgOiBmYWlsKHNwY3R4LCBleHBlY3RlZHMuc3RyaW5nKHN0cikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGUgaW5wdXRcbiAqIGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhpcyBtYXRjaCBpcyAqbm90KlxuICogY2FzZS1zZW5zaXRpdmUuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBjYXNlLWluc2Vuc2l0aXZlbHkgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ0kgPSBzdHIgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ3N0cmluZ0knLCBzdHIpXG5cbiAgY29uc3QgW3NwcmVwLCBbc3BjdHgsIHNwcmVzXV0gPSB0d2luKHN0cmluZ1BhcnNlcihcbiAgICBjaGFyTGVuZ3RoKHN0ciksIGNoYXJzID0+IHN0ci50b0xvd2VyQ2FzZSgpID09PSBjaGFycy50b0xvd2VyQ2FzZSgpLFxuICApKGN0eCkpXG4gIHJldHVybiBzcHJlcy5zdGF0dXMgPT09IE9rID8gc3ByZXAgOiBmYWlsKHNwY3R4LCBleHBlY3RlZHMuc3RyaW5nSShzdHIpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cbiAqIHRoYXQgdGV4dC4gU3VjY2VlZHMgaWYgYWxyZWFkeSBhdCBFT0YsIHJlc3VsdGluZyBpbiBhbiBlbXB0eSBzdHJpbmcuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGFsbCA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3Qgd2lkdGggPSB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleFxuICByZXR1cm4gb2soY3R4LCB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nIHRoZW0gKGFzIGFcbiAqIHN0cmluZykgYXMgaXRzIHJlc3VsdC4gVGhlIHBhcnNlciB3aWxsIGZhaWwgaWYgdGhlcmUgYXJlIG5vdCB0aGF0XG4gKiBtYW55IGNoYXJhY3RlcnMgbGVmdCB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZWFkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyB0aGF0IG1hbnkgY2hhcmFjdGVycyBhbmQgam9pbnNcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlTdHJpbmcgPSBuID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdhbnlTdHJpbmcnLCBuKVxuXG4gIGNvbnN0IFtzcHJlcCwgW3NwY3R4LCBzcHJlc11dID0gdHdpbihzdHJpbmdQYXJzZXIobiwgKCkgPT4gdHJ1ZSkoY3R4KSlcbiAgcmV0dXJuIHNwcmVzLnN0YXR1cyA9PT0gT2sgPyBzcHJlcCA6IGZhaWwoc3BjdHgsIGV4cGVjdGVkcy5hbnlTdHJpbmcobikpXG59KVxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IHBhcnNlciB9IGZyb20gJy4vY29yZSdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlcGx5fSBSZXBseSAqL1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcyBpbnRvIGEgVUNTLTIgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG5cbi8qKlxuICogQW4gaXRlcmF0b3IgdGhhdCBjb3ZlcnMgYSByYW5nZSBmcm9tIGEgc3RhcnRpbmcgdmFsdWUgdG8gYW4gZW5kaW5nXG4gKiB2YWx1ZSwgc3RlcHBpbmcgYnkgYSBjZXJ0YWluIHZhbHVlIGJldHdlZW4gZWFjaC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBmaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbGFzdCBudW1iZXIgb2YgdGhlIHJhbmdlLiBCeSBkZWZhdWx0IHRoaXNcbiAqICAgICBudW1iZXIgZm9ybXMgdGhlIHVwcGVyIGJvdW5kIG9mIHRoZSByYW5nZSB3aXRob3V0IGJlaW5nIGluY2x1ZGVkXG4gKiAgICAgaW4gaXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIG51bWJlciB0byBpbmNyZWFzZSB0aGUgeWllbGRlZCB2YWx1ZSBieVxuICogICAgIGR1cmluZyBlYWNoIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1c2l2ZT1mYWxzZV0gRGV0ZXJtaW5lcyB3aGV0aGVyIGBlbmRgIHNob3VsZCBiZVxuICogICAgIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHJhbmdlLlxuICogQHlpZWxkcyB7bnVtYmVyfSBUaGUgdmFsdWVzIHRoYXQgbWFrZSB1cCB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgaW5jbHVzaXZlKSB7XG4gIGNvbnN0IHMgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IHN0YXJ0IDogMFxuICBjb25zdCBlID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBlbmQgOiBzdGFydFxuICBjb25zdCBwID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInID8gc3RlcCA9PT0gMCA/IDEgOiBNYXRoLmFicyhzdGVwKSA6IDFcbiAgY29uc3QgaSA9IHR5cGVvZiBzdGVwID09PSAnbnVtYmVyJ1xuICAgID8gISFpbmNsdXNpdmUgOiB0eXBlb2YgZW5kID09PSAnbnVtYmVyJ1xuICAgICAgPyAhIXN0ZXAgOiAhIWVuZFxuXG4gIGNvbnN0IGZvcndhcmQgPSBzIDwgZVxuICBsZXQgY3VycmVudCA9IHNcblxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IHtcbiAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgcmV0dXJuIGkgPyBjdXJyZW50ID4gZSA6IGN1cnJlbnQgPj0gZVxuICAgIH1cbiAgICByZXR1cm4gaSA/IGN1cnJlbnQgPCBlIDogY3VycmVudCA8PSBlXG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXG4gIHdoaWxlICghZmluaXNoZWQoKSkge1xuICAgIHlpZWxkIGN1cnJlbnRcbiAgICBjdXJyZW50ID0gZm9yd2FyZCA/IGN1cnJlbnQgKyBwIDogY3VycmVudCAtIHBcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbn1cblxuLyoqXG4gKiBBbiBpdGVyYXRvciB0aGF0IHBhaXJzIHZhbHVlcyBpbiBhbiBpdGVyYWJsZSB3aXRoIHRoZWlyIGluZGV4ZXMgaW4gYVxuICogc2VyaWVzIG9mIHR3by1lbGVtZW50IGFycmF5cy4gVGhlIGZpcnN0IGFycmF5IGVsZW1lbnQgaXMgdGhlIGluZGV4O1xuICogdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgZnJvbSB0aGUgaXRlcmFibGUuXG4gKlxuICogRm9yIGFycmF5cywgdGhpcyBjYW4gYmUgZG9uZSB3aXRoIGBhcnJheS5lbnRyaWVzKClgLCB3aGljaCBwcm9kdWNlc1xuICogdHdvLWVsZW1lbnQgYXJyYXlzIGluIHRoZSBzYW1lIGZvcm1hdC4gSG93ZXZlciwgdGhpcyBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uIHdpbGwgd29yayB3aXRoIGFueSBraW5kIG9mIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlXG4gKiBgSXRlcmFibGVgIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSBBbiBpdGVyYWJsZSBvYmplY3Qgd2hvc2UgZWxlbWVudHMgd2lsbFxuICogICAgIGJlIHBhaXJlZCB3aXRoIHRoZWlyIGluZGV4ZXMuXG4gKiBAeWllbGRzIHtbbnVtYmVyLCAqXX0gVGhlIGl0ZXJhYmxlJ3MgdmFsdWVzLCBwYWlyZWQgd2l0aCB0aGVpclxuICogICAgIGluZGV4ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqZW51bWVyYXRlKGl0ZXJhYmxlKSB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpXG4gIGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KClcbiAgbGV0IGluZGV4ID0gMFxuXG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICB5aWVsZCBbaW5kZXgrKywgcmVzdWx0LnZhbHVlXVxuICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHBvcnRpb24gb2YgYSBVVEYtOCBkYXRhIHZpZXcgYXMgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB0byBiZSB0aGUgZmlyc3QgaW4gdGhlXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBpbmNsdWRlIGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dCBmcm9tIHdoaWNoXG4gKiAgICAgdGhlIGdlbmVyYXRlZCBzdHJpbmcgaXMgdGFrZW4uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIFVDUy0yIChyZWd1bGFyIEphdmFTY3JpcHQgc3RyaW5nKSByZXByZXNlbnRhdGlvblxuICogICAgIG9mIHRoZSBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoZSBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aWV3VG9TdHJpbmcoaW5kZXgsIGxlbmd0aCwgdmlldykge1xuICBjb25zdCBieXRlcyA9IFVpbnQ4QXJyYXkuZnJvbShcbiAgICB7IGxlbmd0aCB9LFxuICAgIChfLCBpKSA9PiB2aWV3LmdldFVpbnQ4KGluZGV4ICsgaSksXG4gIClcbiAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGJ5dGVzKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBVVEYtOCBkYXRhIHZpZXcgb2YgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZSBpbnRvIGEgVVRGLTggZGF0YSB2aWV3LlxuICogQHJldHVybnMge0RhdGFWaWV3fSBBIGRhdGEgdmlldyBvdmVyIHRoZSBVVEYtOCBieXRlcyBvZiB0aGUgaW5wdXRcbiAqICAgICBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ZpZXcoc3RyKSB7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcoZW5jb2Rlci5lbmNvZGUoc3RyKS5idWZmZXIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuIFRoaXMgY2FuIGRpZmZlclxuICogZnJvbSB0aGUgbnVtYmVyIG9mIFVDUy0yIGNoYXJhY3RlcnMgaW4gdGhlIHNhbWUgc3RyaW5nLCBtZWFuaW5nIHRoaXNcbiAqIHZhbHVlIGNhbiBkaWZmZXIgZnJvbSB0aGUgYGxlbmd0aGAgcHJvcGVydHkgb2YgdGhlIHNhbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyBvZiB3aGljaCB0byBnZXQgdGhlIGNoYXJhY3RlciBsZW5ndGguXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgVVRGLTggY2hhcmFjdGVycyBpbiB0aGF0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJMZW5ndGgoc3RyKSB7XG4gIHJldHVybiBbLi4uc3RyXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIGN1cnJlbnRseSBpbmRleGVkIGluIHRoZSB2aWV3LFxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgd2l0aGluIHRoZSB2aWV3IHRoYXQgaXNcbiAqICAgICB0aGUgZmlyc3QgKGFuZCBwZXJoYXBzIG9ubHkpIGJ5dGUgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcmV0dXJucyB7KDF8MnwzfDQpfSBUaGUgbnVtYmVyIG9mIGJ5dGVzIGNvbnRhaW5lZCBpbiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmICgoYnl0ZSAmIDB4ODApID4+IDcgPT09IDApIHJldHVybiAxXG4gIGlmICgoYnl0ZSAmIDB4ZTApID4+IDUgPT09IDBiMTEwKSByZXR1cm4gMlxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTApIHJldHVybiAzXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMSkgcmV0dXJuIDRcbiAgLy8gSG9wZWZ1bGx5IHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBoZXJlIGluIGNhc2Ugb25lIG9mIHRob3NlIGhpZ2hcbiAgLy8gYXNjaWkgY29kZXMgaXMgdXNlZFxuICByZXR1cm4gMVxufVxuXG4vKipcbiAqIENvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcihzKSBpbiB0aGUgZGF0YSB2aWV3LlxuICpcbiAqIEB0eXBlZGVmIE5leHRDaGFySW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmV0dXJuZWQgY2hhcmFjdGVyKHMpLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5leHQgVGhlIG5leHQgY2hhcmFjdGVyKHMpLlxuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGF0IHRoZSBpbmRleGVkIHBvc2l0aW9uIHdpdGhpbiB0aGUgZGF0YSB2aWV3LlxuICogVGhpcyBjaGFyYWN0ZXIgbWF5IGJlIGEgMS0sIDItLCAzLSwgb3IgNC1ieXRlIGNoYXJhY3RlciBkZXBlbmRpbmcgb25cbiAqIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IHdpZHRoID0gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldylcbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGBjb3VudGAgY2hhcmFjdGVycyBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvblxuICogd2l0aGluIHRoZSB2aWV3LiBFYWNoIG9mIHRoZXNlIGNoYXJhY3RlcnMgbWF5IGJlIDEtLCAyLSwgMy0sIG9yXG4gKiA0LWJ5dGUgY2hhcmFjdGVycyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGVpciBmaXJzdCBieXRlcy4gSWZcbiAqIHRoZXJlIGFyZSBub3QgZW5vdWdoIGNoYXJhY3RlcnMgbGVmdCwgdGhvc2UgcmVtYWluaW5nIHdpbGwgYmVcbiAqIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXG4gKiAgICAgdGhlIGZpcnN0IGRlc2lyZWQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJldHVybi5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlXG4gKiAgICAgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBjb3VudCkge1xuICBjb25zdCB2aWV3TGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoXG4gIGxldCB3aWR0aCA9IDBcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UoY291bnQpKSB7XG4gICAgY29uc3QgaSA9IGluZGV4ICsgd2lkdGhcbiAgICBpZiAoaSA+PSB2aWV3TGVuZ3RoKSBicmVha1xuICAgIHdpZHRoICs9IG5leHRDaGFyV2lkdGgoaSwgdmlldylcbiAgfVxuICBpZiAoaW5kZXggKyB3aWR0aCA+PSB2aWV3TGVuZ3RoKSB7XG4gICAgd2lkdGggPSB2aWV3TGVuZ3RoIC0gaW5kZXhcbiAgfVxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxufVxuXG4vKipcbiAqIFN1cnJvdW5kcyB0aGUgc3VwcGxpZWQgc3RyaW5nIGluIHNpbmdsZSBxdW90ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN1cnJvdW5kIGluIHNpbmdsZSBxdW90ZXMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGxlZCBhbmQgdHJhaWxlZCBieSBzaW5nbGUgcXVvdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVvdGUoc3RyKSB7XG4gIHJldHVybiBgJyR7c3RyfSdgXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0d28gY29waWVzIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIHNvcnQgb2YgZW11bGF0ZXMgKmFzLXBhdHRlcm5zKiBpbiBhIGxpbWl0ZWQgd2F5IGluIEphdmFTY3JpcHQuXG4gKiBJbiBsYW5ndWFnZXMgbGlrZSBIYXNrZWxsIGFuZCBNTCwgd2hlbiBwYXR0ZXJuIG1hdGNoaW5nIGlzIGRvbmUsXG4gKiB0aGVyZSBpcyBhIGNvbnN0cnVjdCB0byBiZSBhYmxlIHRvIHJldGFpbiBhIGxhcmdlciBwYXJ0IG9mIHRoZVxuICogZGVzdHJ1Y3R1cmVkIHBhdHRlcm4gd2hpbGUgYWxzbyBicmVha2luZyBpdCBkb3duIGZ1cnRoZXIuIEluIEhhc2tlbGwsXG4gKlxuICogYGBgaGFza2VsbFxuICogKGhlYWQgOiB0YWlsKSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogd2lsbCBhc3NpZ24gYDFgIHRvIGBoZWFkYCwgYW5kIGBbMiwgMywgNCwgNV1gIHRvIGB0YWlsYC4gVGhpcyBjYW4gYmVcbiAqIGRvbmUgaW4gSmF2YVNjcmlwdCBhcyB3ZWxsLCBsaWtlIHRoaXM6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgW2hlYWQsIC4uLnRhaWxdID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBIb3dldmVyLCBIYXNrZWxsIGNhbiBnbyBmYXJ0aGVyOiBpdCBjYW4gYWxzbyBhc3NpZ24gdGhlIGVudGlyZSBsaXN0XG4gKiBhcyBhIHdob2xlIHRvIGFub3RoZXIgdmFyaWFibGUgd2hpbGUgc3RpbGwgYXNzaWduaW5nIGl0cyBlbGVtZW50cyBhc1xuICogYWJvdmUuIEl0J3MgZG9uZSBsaWtlIHRoaXM6XG4gKlxuICogYGBgaGFza2VsbFxuICogbGlzdCBAIChoZWFkIDogdGFpbCkgPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIFRoaXMgd2lsbCwgaW4gYWRkaXRpb24gdG8gdGhlIGFzc2lnbm1lbnRzIGFib3ZlLCBhc3NpZ24gYFsxLCAyLCAzLCA0LFxuICogNV1gIHRvIGBsaXN0YC4gVGhlIGBAYCBzaWduIGlzIHJlYWQgKmFzKiwgYW5kIHRoaXMgY29uc3RydWN0IGlzXG4gKiBjYWxsZWQgYW4gKmFzLXBhdHRlcm4qIChwZXJoYXBzIGJlY2F1c2UgdGhlIE1MIHdheSBvZiBkb2luZyBpdCB1c2VzXG4gKiB0aGUgYGFzYCBrZXl3b3JkIGluc3RlYWQgb2YgdGhlIGBAYCBzeW1ib2wpLlxuICpcbiAqIFRoZXJlIGlzIG5vIGZhY2lsaXR5IHRvIGRvIHRoaXMgaW4gSmF2YVNjcmlwdC4gQnV0IHRoZXJlIGFyZSBtYW55XG4gKiBwbGFjZXMgaW4gdGhpcyBsaWJyYXJ5IHdoZXJlIGEgYFJlcGx5YCBpcyBkZXNjdHVyY3R1cmVkIGludG8gaXRzXG4gKiBgQ29udGV4dGAgYW5kIGBSZXN1bHRgIGVsZW1lbnRzLCB5ZXQgdGhlcmUgaXMgYSBuZWVkIHRvIGNvbmRpdGlvbmFsbHlcbiAqIHVzZSB0aGUgZW50aXJlIGBSZXBseWAgYXMgd2VsbCAobm9ybWFsbHkgdG8gcmV0dXJuIGl0IGlmIHNvbWVcbiAqIGNvbmRpdGlvbiBpcyBtZXQpLiBSYXRoZXIgdGhhbiBjcmVhdGUgYSBuZXcgYFJlcGx5YCBmcm9tIHRoZXNlIHBhcnRzLFxuICogYHR3aW5gIGNhbiBiZSB1c2VkIHRvIGR1cGxpY2F0ZSB0aGUgcmVmZXJlbmNlcyB0byB0aGUgYFJlcGx5YC4gVGhlblxuICogb25seSAqb25lKiBvZiB0aGUgZHVwbGljYXRlIHJlZmVyZW5jZXMgY2FuIGJlIGRlc3RydWN0dXJlZCwgd2hpbGUgdGhlXG4gKiBvdGhlciBvbmUgaXMgcmV0YWluZWQgYXMgYSB3aG9sZS5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocGFyc2VyKGN0eCkpXG4gKiBgYGBcbiAqXG4gKiBBcy1wYXR0ZXJucyBjYW4gYmUgdXNlZCBvbiBwaWVjZXMgb2YgYSBwYXR0ZXJuIGluc3RlYWQgb2YgdGhlIGVudGlyZVxuICogcGF0dGVybiwgYW5kIGB0d2luYCBjYW5ub3QgZG8gdGhhdC4gQnV0IGl0IHNlcnZlcyBmb3Igd2hhdCBpcyBuZWVkZWRcbiAqIGluIEtlc3NlbC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSB2YWx1ZSBBIHJlcGx5IHRoYXQgbmVlZHMgdG8gYmUgZGVzdHJ1Y3R1cmVkIHdoaWxlXG4gKiAgICAgbWFpbnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIHdob2xlLlxuICogQHJldHVybnMge1tSZXBseSwgUmVwbHldfSBBbiBhcnJheSBjb250YWluaW5nIHR3byBjb3BpZXMgb2YgdGhlXG4gKiAgICAgcmVwbHkuIE9uZSBjYW4gYmUgZGVzdHJ1Y3R1cmVkIHdoaWxlIHRoZSBvdGhlciBpcyByZXRhaW5lZCB3aG9sZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR3aW4odmFsdWUpIHtcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXG59XG5cbi8qKlxuICogQ29tbWEtc2VwYXJhdGVzIChhcyBuZWVkZWQpIHRoZSBzdHJpbmdzIGluIHRoZSBwcm92aWRlZCBhcnJheS4gSWZcbiAqIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlIHJlc3VsdCB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZzsgaWYgdGhlIGFycmF5XG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcbiAqIHR3byBlbGVtZW50cywgdGhleSB3aWxsIGJlIGpvaW5lZCB3aXRoICcgb3IgJyBiZXR3ZWVuIHRoZW0uIElmIHRoZVxuICogYXJyYXkgaXMgbG9uZ2VyIHRoYW4gdGhhdCwgYWxsIGVsZW1lbnRzIHdpbGwgYmUgY29tbWEtc2VwYXJhdGVkIHdpdGhcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXG4gKiBzdHlsZSkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXG4gKiAgICAgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG1lc3NhZ2VzIGpvaW5lZCBpbnRvIGEgc2luZ2xlIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hU2VwYXJhdGUobWVzc2FnZXMpIHtcbiAgc3dpdGNoIChtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xuICAgIGNhc2UgMTogcmV0dXJuIG1lc3NhZ2VzWzBdXG4gICAgY2FzZSAyOiByZXR1cm4gbWVzc2FnZXMuam9pbignIG9yICcpXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgbXNncyA9IG1lc3NhZ2VzLnNsaWNlKClcbiAgICAgIGNvbnN0IGxhc3QgPSBtc2dzLnBvcCgpXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBdWdtZW50cyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBpdFxuICogY3JlYXRlZCBhbiBhcmJpdHJhcnkgb2JqZWN0LiBUaGUgZmFjdG9yeSBmdW5jdGlvbiBpcyBhc3NpZ25lZCBhblxuICogYWRkaXRpb25hbCBwcm9wZXJ0eSAoYnkgZGVmYXVsdCBuYW1lZCBgY3JlYXRlZGAsIGNhbiBiZSBjaGFuZ2VkIGJ5XG4gKiBwYXNzaW5nIGluIHRoZSBgcHJvcGAgYXJndW1lbnQpIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogb2JqZWN0IGFuZCByZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmFjdG9yeSBjcmVhdGVkIGl0IG9yIGBmYWxzZWAgaWYgaXRcbiAqIGRpZCBub3QuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGF1Z21lbnRlZCB3aXRoXG4gKiAgICAgdGhlIG5ldyBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gW3Byb3A9J2NyZWF0ZWQnXSBUaGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlXG4gKiAgICAgYWRkZWQgdG8gdGhlIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IFRoZSBhdWdtZW50ZWQgZmFjdG9yeSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrKGZuLCBwcm9wID0gJ2NyZWF0ZWQnKSB7XG4gIGNvbnN0IHRyYWNrZWQgPSBuZXcgV2Vha1NldCgpXG5cbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlZCA9IGZuKC4uLmFyZ3MpXG4gICAgICB0cmFja2VkLmFkZChjcmVhdGVkKVxuICAgICAgcmV0dXJuIGNyZWF0ZWRcbiAgICB9LFxuICAgIHByb3AsXG4gICAgeyB2YWx1ZTogdHJhY2tlZC5oYXMuYmluZCh0cmFja2VkKSB9LFxuICApXG59XG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXIgdG8gaXRzIHN0cmluZyBvcmRpbmFsIGZvcm0gKGkuZS4sIGAxYCBiZWNvbWVzXG4gKiBgJzFzdCdgLCBgMTcyOWAgYmVjb21lcyBgJzE3Mjl0aCdgLCBldGMuKVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gY29udmVydCBpbnRvIGFuIG9yZGluYWwuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBudW1iZXIgaW4gaXRzIG9yZGluYWwgZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICBjb25zdCBzdWZmaXhlcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXVxuICBjb25zdCB2ID0gbiAlIDEwMFxuICByZXR1cm4gbiArIChzdWZmaXhlc1sodiAtIDIwKSAlIDEwXSA/PyBzdWZmaXhlc1t2XSA/PyBzdWZmaXhlc1swXSlcbn1cblxuY29uc3QgbnVtcyA9IFtcbiAgJ3plcm8nLCAnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JyxcbiAgJ25pbmUnLCAndGVuJywgJ2VsZXZlbicsICd0d2VsdmUnLCAndGhpcnRlZW4nLCAnZm91cnRlZW4nLCAnZmlmdGVlbicsXG4gICdzaXh0ZWVuJywgJ3NldmVudGVlbicsICdlaWdodGVlbicsICduaW5ldGVlbicsXG5dXG5jb25zdCBvbmVzID0gW1xuICAnemVyb3RoJywgJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnLCAnZmlmdGgnLCAnc2l4dGgnLCAnc2V2ZW50aCcsXG4gICdlaWdodGgnLCAnbmludGgnLCAndGVudGgnLCAnZWxldmVudGgnLCAndHdlbGZ0aCcsICd0aGlydGVlbnRoJyxcbiAgJ2ZvdXJ0ZWVudGgnLCAnZmlmdGVlbnRoJywgJ3NpeHRlZW50aCcsICdzZXZlbnRlZW50aCcsICdlaWdodGVlbnRoJyxcbiAgJ25pbmV0ZWVudGgnLFxuXVxuY29uc3QgdGVucyA9IFtcbiAgJ3R3ZW50JywgJ3RoaXJ0JywgJ2ZvcnQnLCAnZmlmdCcsICdzaXh0JywgJ3NldmVudCcsICdlaWdodCcsICduaW5ldCcsXG5dXG5jb25zdCBncm91cHMgPSBbXG4gICdodW5kcmVkJywgJ3Rob3VzYW5kJywgJ21pbGxpb24nLCAnYmlsbGlvbicsICd0cmlsbGlvbicsICdxdWFkcmlsbGlvbicsXG5dXG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXIgaW50byBpdHMgd29yZC1iYXNlZCBvcmRpbmFsIGZvcm0gKGkuZS4sIGAxYCBiZWNvbWVzXG4gKiBgJ2ZpcnN0J2AsIGAxNzI5YCBiZWNvbWVzIGAnb25lIHRob3VzYW5kIHNldmVuIGh1bmRyZWRcbiAqIHR3ZW50eS1uaW50aCdgLCBldGMuKS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIGNvbnZlcnQgaW50byBhbiBvcmRpbmFsLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgbnVtYmVyIGluIGl0cyB3b3JkLWJhc2VkIG9yZGluYWwgZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdvcmRpbmFsKG4pIHtcbiAgaWYgKG4gPCAwIHx8IG4gPiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikge1xuICAgIHRocm93IG5ldyBFcnJvcihgQXJndW1lbnQgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kICR7TnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJ9YClcbiAgfVxuICBjb25zdCBtYWcgPSBNYXRoLmZsb29yKE1hdGgubG9nMTAobikpXG5cbiAgaWYgKG4gPCAyMCkgcmV0dXJuIG9uZXNbbl1cbiAgaWYgKG1hZyA9PT0gMSkge1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKG4gLyAxMCkgLSAyXG4gICAgcmV0dXJuIG4gJSAxMCA9PT0gMCA/IGAke3RlbnNbaV19aWV0aGAgOiBgJHt0ZW5zW2ldfXktJHtvbmVzW24gJSAxMF19YFxuICB9XG4gIGlmIChtYWcgPT09IDIpIHtcbiAgICBjb25zdCBmID0gTWF0aC5mbG9vcihuIC8gMTAgKiogbWFnKVxuICAgIGNvbnN0IHggPSBuIC0gZiAqIDEwICoqIG1hZ1xuICAgIHJldHVybiBgJHtudW1zW2ZdfSAke2dyb3Vwc1swXX0ke3ggPT09IDAgPyAndGgnIDogYCAke3dvcmRpbmFsKHgpfWB9YFxuICB9XG5cbiAgY29uc3QgZyA9IG1hZyAlIDMgKyAxXG4gIGNvbnN0IGkgPSBNYXRoLmZsb29yKG1hZyAvIDMpXG4gIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4gLyAxMCAqKiAobWFnIC0gZyArIDEpKVxuICBjb25zdCBtID0gKGZ1bmN0aW9uIG11bHQobnVtKSB7XG4gICAgaWYgKG51bSA8IDIwKSByZXR1cm4gbnVtc1tudW1dXG5cbiAgICBjb25zdCByZW0gPSBudW0gJSAxMFxuICAgIGlmIChudW0gPCAxMDApIHtcbiAgICAgIHJldHVybiBgJHt0ZW5zW01hdGguZmxvb3IobnVtIC8gMTApIC0gMl19eSR7XG4gICAgICAgIHJlbSA9PT0gMCA/ICcnIDogYC0ke251bXNbcmVtXX1gXG4gICAgICB9YFxuICAgIH1cblxuICAgIGNvbnN0IHggPSBudW0gLSBNYXRoLmZsb29yKG51bSAvIDEwMCkgKiAxMDBcbiAgICByZXR1cm4gYCR7bnVtc1tNYXRoLmZsb29yKG51bSAvIDEwMCldfSAke2dyb3Vwc1swXX0ke1xuICAgICAgeCA9PT0gMCA/ICd0aCcgOiBgICR7bXVsdCh4KX1gXG4gICAgfWBcbiAgfShmKSlcbiAgY29uc3QgeCA9IG4gLSBmICogMTAgKiogKG1hZyAtIGcgKyAxKVxuICByZXR1cm4gYCR7bX0gJHtncm91cHNbaV19JHt4ID09PSAwID8gJ3RoJyA6IGAgJHt3b3JkaW5hbCh4KX1gfWBcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVhc29uYWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2YWx1ZS4gVGhpcyB3aWxsIG1vc3RcbiAqIG9mdGVuIGJlIHRoZSBvdXRwdXQgZnJvbSBgSlNPTi5zdHJpbmdpZnkoKWAsIHRob3VnaCByZXByZXNlbnRhdGlvbnNcbiAqIGFyZSBhbHNvIGluY2x1ZGVkIGZvciB0eXBlcyB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3Qgc3VwcG9ydC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0dXJuIGludG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcGFyc2VyLmNyZWF0ZWQodmFsdWUpID8gJ3BhcnNlcicgOiAnZnVuY3Rpb24nXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHJldHVybiBgU3ltYm9sKCR7dmFsdWUuZGVzY3JpcHRpb259KWBcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKVxufVxuXG4vKipcbiAqIEFkZHMgdGhlIGFwcHJvcHJpYXRlIGluZGVmaW5pdGUgYXJ0aWNsZSAoJ2EnIG9yICdhbicpIHRvIGEgd29yZCBiYXNlZFxuICogb24gaXRzIGZpcnN0IGxldHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcHJlcGVuZCBhbiBhcnRpY2xlIHRvLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHN0cmluZyB3aXRoIHRoZSBwcmVwZW5kZWQgYXJ0aWNsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGlmeShzdHIpIHtcbiAgcmV0dXJuICdhZWlvdUFFSU9VJy5pbmNsdWRlcyhzdHJbMF0pID8gYGFuICR7c3RyfWAgOiBgYSAke3N0cn1gXG59XG4iXSwic291cmNlUm9vdCI6IiJ9