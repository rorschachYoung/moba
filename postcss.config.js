const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')
module.exports = {
  plugins: [
    autoprefixer(),
    pxtoviewport({
      viewportWidth: 375
    })
  ]
}
