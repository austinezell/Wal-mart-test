"use strict";
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/js/index.js"
  },
  output: {
    path: __dirname + '/public/dist//',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules\/|bower_components\/)/,
      loader: 'babel?presets[]=es2015'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
