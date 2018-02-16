const path = require('path')
const webpack = require('webpack')

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    entry: path.join(__dirname, 'components/FormSchemaElementUI.vue'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'FormSchemaElementUI.js',
      libraryTarget: 'umd',
      library: 'FormSchemaElementUI',
      umdNamedDefine: true
    },
    externals: {
      'vue-json-schema': 'vue-json-schema',
      'element-ui': 'element-ui'
    }
  }
}
