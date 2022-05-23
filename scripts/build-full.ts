import path from 'path'
import { RollupOptions } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esBuild from 'rollup-plugin-esbuild'

import {
  sfcPath,
  rootPath,
  rollupLib
} from './shared'

const options: RollupOptions = {
  input: path.resolve(sfcPath, 'index.ts'),
  output: [
    {
      file: path.resolve(rootPath, './esm/index.js'),
      format: 'esm',
      name: 'icons',
      sourcemap: false
    },
    {
      file: path.resolve(rootPath, './cjs/index.js'),
      format: 'cjs',
      exports: 'named',
      sourcemap: false
    }
  ],
  plugins: [
    nodeResolve(),
    esBuild({})
  ],
  external(id) {
    return /\.vue$/.test(id)
  }
}

export default rollupLib(options)
