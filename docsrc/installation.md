<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Installation

```
npm install @barandis/kessel
```

This won't actually be available on NPM until I finish basic documentation, which should happen around the beginning of December.

There are also self-contained files (`kessel.js` and the minified `kessel.min.js`) in the `lib` directory of the distribution. These will work in the browser (where a global `kessel` object is provided) or with CommonJS or AMD.

## Assertions

The default Kessel library uses assertions to ensure that input to parsers is what it's supposed to be. This is more than type-checking like in TypeScript - runtime failures will result if the wrong kind of input is given to a parser. Defensive programming is not normally a philosophy that I take to, but understanding the source of errors is so important in parsing that it seems appropriate here.

The assertions slow down parsing, though I suspect that the amount of time added is negligible (this has not yet been benchmarked, though that is on the list of things to do). Every input that has a definitive type is checked, so if you have a `alt` that takes a thousand parsers, maybe that will be a bit slower.

The distribution does contain versions without assertions, named `kessel.noassert.js` and `kessel.noassert.min.js`. If you are seriously concerned about performance you can choose to use these instead.
