const path = require('path')

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
      '@formschema/native': '@formschema/native',
      'element-ui': 'element-ui'
    }
  }
}
