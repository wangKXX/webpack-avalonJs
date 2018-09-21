const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
// const uglify = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const config = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = merge(baseConfig, config)