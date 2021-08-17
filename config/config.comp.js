const path = require('path')
const rollup = require('rollup')
const esBuild = require('rollup-plugin-esbuild')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')

module.exports = function rollupComponent(dir, baseName) {
  const root = path.resolve(__dirname, '..')
  const exportName = `${baseName}.js`

  const esm = {
    file: path.resolve(root, 'es', exportName),
    format: 'esm',
    sourcemap: false,
  };

  const cjs = {
    file: path.resolve(root, 'lib', exportName),
    format: 'cjs',
    exports: 'named',
    sourcemap: false,
  };

  const rollupConfig = {
    input: path.resolve(root, dir),
    plugins: [
      nodeResolve(),
      vue(),
      esBuild({
        // target: 'browser',
      }),
    ],
    external: ['vue'],
  }

  rollup
    .rollup(rollupConfig)
    .then(async (bundle) => {
      await Promise.all([bundle.write(esm), bundle.write(cjs)]);
      console.log(' \u001b[32m', exportName, 'done');
    });
}
