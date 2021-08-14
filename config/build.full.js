const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const esBuild = require('rollup-plugin-esbuild');

const root = path.resolve(__dirname, '..')

module.exports = {
  input: path.resolve(__dirname, '../src/components/main.ts'),
  output: [{
    file: path.resolve(root, './es/index.js'),
    format: 'esm',
    name: 'icons',
    sourcemap: false
  }, {
    file: path.resolve(root, './lib/index.js'),
    format: 'cjs',
    exports: 'named',
    sourcemap: false
  }],
  plugins: [
    nodeResolve(),
    esBuild({
      // target: "browser",
    }),
  ],
  external(id) {
    return /\.vue$/.test(id)
  }
}
