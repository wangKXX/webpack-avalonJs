const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const uglify = require('uglifyjs-webpack-plugin')
const config = {
  plugins: [
    new uglify()
  ]
}

module.exports = merge(baseConfig, config)