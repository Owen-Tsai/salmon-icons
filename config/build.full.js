const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const esBuild = require('rollup-plugin-esbuild')

const root = path.resolve(__dirname, '..')
const replacePath = (p) => {
  return ['./', p.replace('.vue', '.js').split('/').pop()].join('')
}

module.exports = {
  input: path.resolve(__dirname, '../src/components/index.ts'),
  output: [{
    file: path.resolve(root, './es/index.js'),
    format: 'esm',
    name: 'icons',
    sourcemap: false,
    paths: replacePath
  }, {
    file: path.resolve(root, './lib/index.js'),
    format: 'cjs',
    exports: 'named',
    sourcemap: false,
    paths: replacePath
  }],
  plugins: [
    nodeResolve(),
    esBuild({})
  ],
  external(id) {
    return /\.vue$/.test(id)
  }
}
