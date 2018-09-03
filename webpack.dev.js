const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const config = {
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host: 'localhost',
    port: 8080,
    hot: true,
    inline: true,
    color: true,
    overlay: {
      errors: true,
      warnings: true
    }
  }
}

module.exports = merge(baseConfig, config)