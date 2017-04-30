'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('../webpack-config/parts');

let config = {};

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
};

let common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Webpack demo'
    // })
  ]
}

switch(process.env.npm_lifecycle_event) {
  case 'build': 
    config = merge(common, 
      parts.clean(PATHS.build),
      parts.setupSourceMapForBuild(),
      parts.setupCSS(PATHS.app),
      parts.setFreeVariable('process.env.NODE_ENV', 'production'),
      parts.minify()
      );
    break;
  default: 
    config = merge(common, 
      parts.setupSourceMapForDev(),
      parts.devServer(), 
      parts.setupCSS(PATHS.app));
}
module.exports = config;