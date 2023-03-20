const { defineConfig } = require('@vue/cli-service')
//
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  //以下为跨域解决方法
  devServer: {
    proxy: {
      '/api': {
        target: 'http://iwenwiki.com',
        chaneOrigin: true
      }
    }
  },
  //按需导入ELEMENT-PLUS
  configureWebpack:{
    plugins:[
      AutoImport({
        resolvers:[ElementPlusResolver()]
      }),
      Components({
        resolvers:[ElementPlusResolver()]
      })
    ]
  }
})
