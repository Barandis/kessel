/**
 * Copyright (c) 2020 Thomas J. Otterson
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'kessel',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      test: path.resolve(__dirname, 'test'),
      kessel: path.resolve(__dirname, 'src'),
    },
  },
}
