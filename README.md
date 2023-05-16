```js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
//在vue.config.js中
chainWebpack(config){
  config.module
    .rule("injectPage")
    .test(/\.vue$/)
    .pre()
    .use("injectPage")
    .loader("./injectPage.js")
    .options({
      componentName: "page",//组件名称
      include: resolve("src/**/*.vue"),//可为字符串，数组，正则
      exclude: resolve("src/views/page.vue"),//可为字符串，数组，正则
    })
    .end();
}

```

```html
<!--编译前-->
<template>
   <div>
    3
 </div>
</template>
<script>
export default{}
</script>

<!--编译后-->
<template>
  <page>
     <div>
        3
      </div>
    <page>
</template>
<script>
export default{}
</script>
```
# webpack-inject-page
