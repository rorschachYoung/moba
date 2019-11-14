/**
  *  @type {import('@vue/cli-service').ProjectOptions}
  *  @type {import('@vue/cli-plugin-babel')}
*/

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/css/_var.scss";'
      }
    }
  }
}
