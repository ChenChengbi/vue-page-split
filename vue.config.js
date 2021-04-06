/*
 * @Author: Billy
 * @Date: 2021-04-05 21:06:43
 * @LastEditors: Billy
 * @LastEditTime: 2021-04-05 21:44:12
 * @Description: 请输入
 */
module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 强制内联CSS
  css: {
    extract: false
  }
}