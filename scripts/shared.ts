import path from 'path'

import rollup, {
  RollupOptions,
  OutputOptions
} from 'rollup'

import { nodeResolve } from '@rollup/plugin-node-resolve'
import esBuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'

export const sfcPath = path.resolve(__dirname, '../src/packages')
export const scriptPath = path.resolve(__dirname, './')
export const distPath = path.resolve(__dirname, '../dist')
export const iconPath = path.resolve(__dirname, '../icons')
export const rootPath = path.resolve(__dirname, '..')

/**
 * Transform the first letter of `s` to upper case
 * @param s string to process
 */
export const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1)
}

/**
 * Turn kebab-cased identifiers to PascalCase
 * @param s string of kebab-case
 */
export const toPascalCase = (s: string) => {
  return s.split('-').map(capitalize).join('')
}

/**
 * Remove file type(affix) from `s`
 * @param s file name with affix
 * @param affix affix
 * @returns file name without dot and file type
 */
export const getBaseName = (s: string, affix = 'svg') => {
  return s.split(`.${affix}`).shift() as string
}


/**
 * Build component using rollup config, one at a time
 */
export const rollupComponent = (dir: string, baseName: string) => {
  const exportName = `${baseName}.js`

  const esm: OutputOptions = {
    file: path.resolve(rootPath, 'esm', exportName),
    format: 'esm',
    sourcemap: false
  }

  const cjs: OutputOptions = {
    file: path.resolve(rootPath, 'cjs', exportName),
    format: 'cjs',
    sourcemap: false
  }

  const options: RollupOptions = {
    input: path.resolve(rootPath, dir),
    plugins: [
      nodeResolve(),
      vue(),
      esBuild({})
    ],
    external: ['vue']
  }

  rollup.rollup(options).then(async (bundle) => {
    await Promise.all([
      bundle.write(esm),
      bundle.write(cjs)
    ])
    console.log(' \u001b[32m', exportName, 'done')
  })
}

/**
 * Build entire library using rollup config
 */
export const rollupLib = (opt: RollupOptions) => {
  rollup.rollup(opt)
}
