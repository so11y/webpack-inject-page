const { createFilter } = require('@rollup/pluginutils')
const templateRegex = /<template>([\s\S]*?)<\/template>/
const loaderUtils = require('loader-utils')
function injectPage(data) {
  const options = loaderUtils.getOptions(this)
  var filter = createFilter(options.include || '', options.exclude || '')
  if (filter(this.resourcePath)) {
    const matches = data.match(templateRegex)
    if (matches && matches.length >= 2) {
      const templateContent = matches[1]
      const template = `<${options.componentName}>${templateContent}</${options.componentName}>`
      return data.replace(templateContent, template)
    } else {
      console.log('No <template> content found')
    }
  }
  return data
}

module.exports = injectPage
