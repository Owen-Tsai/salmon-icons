import path from 'path'
import {
  BuildOptions,
  Format,
  build
} from 'esbuild'
import GlobalPlugin from 'esbuild-plugin-globals'
import vue from 'unplugin-vue/esbuild'
import consola from 'consola'
import chalk from 'chalk'
import { emptyDir } from 'fs-extra'

import {
  sfcPath,
  distPath
} from './shared'

const getBuildOptions = (format: Format) => {
  const options: BuildOptions = {
    entryPoints: [path.resolve(sfcPath, 'index.ts')],
    target: 'es2018',
    platform: 'neutral',
    plugins: [vue()],
    bundle: true,
    format
  }

  if (format === 'iife') {
    options.plugins?.push(GlobalPlugin({
      vue: 'Vue'
    }))
  } else {
    options.external = ['vue']
  }

  return options
}


const buildBundle = async (minify: boolean) => {
  await Promise.all([
    build({
      ...getBuildOptions('esm'),
      outfile: path.resolve(distPath, `index${minify ? '.min' : ''}.mjs`),
      minify,
      sourcemap: minify
    }),
    build({
      ...getBuildOptions('iife'),
      outfile: path.resolve(distPath, `index.iife${minify ? '.min' : ''}.js`),
      minify,
      sourcemap: minify
    }),
    build({
      ...getBuildOptions('cjs'),
      outfile: path.resolve(distPath, `index${minify ? '.min' : ''}.js`),
      minify,
      sourcemap: minify
    })
  ])
}

;(async () => {
  consola.info(chalk.blue('Building'))
  await emptyDir(distPath)
  await Promise.all([
    buildBundle(true),
    buildBundle(false)
  ])
})()