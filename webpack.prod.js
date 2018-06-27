const webpack = require("webpack");
const path = require("path");
const srcDir = path.resolve(process.cwd(), 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entries = {
  index: path.resolve(srcDir, "js/index.js"),
  zp:  path.resolve(srcDir, "js/zp.js")
}
module.exports = {
  entry: entries,
  output: {
    path: path.resolve(srcDir, "../dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 
          {
            loader: 'postcss-loader', 
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.js$/, 
        use: {loader: 'babel-loader'}
      }
    ]
  },
  resolve: {
    extensions: ['.js', ".css", ".less"],
    alias: {
      aos: path.resolve(srcDir, "js/lib/aos"),
      aoscss: path.resolve(srcDir, "css/aos"),
      indexless: path.resolve(srcDir, "less/index/index")
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        warnings: false
      },
      comments: false
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host: 'localhost',
    port: 80,
    hot: true,
    inline: true,
    color: true,
    openPage: './src/index.html',
    overlay: {
      errors: true,
      warnings: true
    }
  }
}