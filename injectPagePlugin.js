const { createFilter } = require('@rollup/pluginutils')
const path = require('path')
class InjectPagePlugin {
  constructor(options) {
    this.options = options
    this.filter = createFilter(options.include || '', options.exclude || '')
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('InjectPagePlugin', (compilation) => {
      const normalModuleLoader = compilation.hooks.normalModuleLoader
      normalModuleLoader.tap('InjectPagePlugin', (loaderContext) => {
        loaderContext['InjectPagePluginInstance'] = this
      })
    })
    compiler.options.module.rules.push({
      test: /\.vue$/,
      enforce: 'pre',
      use: [
        {
          loader: path.resolve('./injectPage.js')
        }
      ]
    })
  }
}
module.exports = InjectPagePlugin
