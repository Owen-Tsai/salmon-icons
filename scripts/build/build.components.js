const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./base')

const basePath = path.resolve(__dirname, '../../')
const components = require('../components.json')

const entries = {}
Object.keys(components).forEach(key => {
  entries[key] = path.join(basePath, 'src', components[key])
})

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: entries,
  output: {
    path: path.resolve(__dirname, '../../lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})
