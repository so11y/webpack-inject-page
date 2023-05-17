```js
const InjectPagePlugin = require('webpack-inject-page')
//在vue.config.js中
chainWebpack(config){
   config.plugin('InjectPagePlugin')
      .use(InjectPagePlugin, [{
        componentName: 'page',//修改为你的全局组件名称
        include: resolve('src/**/*.vue'),
        exclude: resolve('src/views/page.vue')
      }])

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
