import fs from 'fs-extra'
import {
  readFile,
  writeFile
} from 'fs/promises'

import path from 'path'
import glob from 'fast-glob'
import consola from 'consola'
import chalk from 'chalk'

import {
  iconsPath,
  sfcPath,
  toPascalCase
} from './shared'

const getSvgFiles = async () => {
  return glob('*.svg', {
    cwd: iconsPath,
    absolute: true
  })
}

const generateSfc = async (file: string) => {
  const content = await readFile(file, 'utf-8')
  const baseName = path.basename(file, '.svg')
  const componentName = toPascalCase(baseName)

  const templateTag = `<template>\n${content}\n</template>`
  const scriptTag = `<script lang="ts">\nimport { defineComponent } from 'vue'\nexport default defineComponent({ name: "${componentName}" })\n</script>`

  writeFile(
    path.resolve(sfcPath, `${baseName}.vue`),
    `${templateTag}\n${scriptTag}`,
    'utf-8'
  )
}

const generateEntry = async (files: string[]) => {
  const content = files.map(file => {
    const baseName = path.basename(file, '.svg')
    const componentName = toPascalCase(baseName)

    return `export { default as ${componentName} } from './${baseName}.vue'`
  }).join('\n')

  await writeFile(path.resolve(sfcPath, 'index.ts'), content, 'utf-8')
}

;(async () => {
  consola.info(chalk.blue('Generating Vue SFCs...'))
  await fs.emptyDir(sfcPath)
  const files = await getSvgFiles()
  await Promise.all(files.map(file => generateSfc(file)))
  consola.info(chalk.blue('Generating index file...'))
  await generateEntry(files)
  consola.success(chalk.green('Done!'))
})()