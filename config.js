const path = require("path")
const srcDir = path.resolve(process.cwd(), 'src')
const htmlFileList = {
  index: path.resolve(srcDir, "js/index.js"),
  zp:  path.resolve(srcDir, "js/zp.js")
}
module.exports = htmlFileList