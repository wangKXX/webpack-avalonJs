const path = require("path")
const srcDir = path.resolve(process.cwd(), 'src')
const htmlFileList = {
  index: ["babel-polyfill", path.resolve(srcDir, "ts/index.ts")],
  zp:  ["babel-polyfill", path.resolve(srcDir, "js/zp.js")]
}
module.exports = htmlFileList