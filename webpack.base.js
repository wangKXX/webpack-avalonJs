const path = require("path");
const srcDir = path.resolve(process.cwd(), 'src');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const htmlFileList = require('./config')

const htmlTemp = []
Object.keys(htmlFileList).forEach(key => {
  let htmlTempItem = new HtmlWebpackPlugin({
    filename: `${key}.html`,
    template: `./src/${key}.html`,
    chunks: [`${key}`]
  })
  htmlTemp.push(htmlTempItem)
})
htmlTemp.push(new CleanWebpackPlugin(['dist/*']))
module.exports = {
  entry: htmlFileList,
  output: {
    path: path.resolve(srcDir, "../dist"),
    filename: "script/[name]/[name]-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}  
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
      indexless: path.resolve(srcDir, "less/index/index")
    }
  },
  plugins: htmlTemp
}