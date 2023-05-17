const templateRegex = /<template>([\s\S]*?)<\/template>/
function injectPage(data) {
  const { filter, options } = this.InjectPagePluginInstance
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
