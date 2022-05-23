import fs from 'fs'
import path from 'path'

import {
  sfcPath,
  iconPath,
  toPascalCase,
  getBaseName
} from './shared'

const generateSFC = (iconFileName: string) => {
  const _path = path.join(iconPath, iconFileName)

  fs.readFile(_path, 'utf-8', (err, content) => {
    if (err) {
      console.error(`SFC generation failed for ${iconFileName}`, err)
      return
    }

    const fileName = iconFileName
    const baseName = getBaseName(fileName)
    const componentName = toPascalCase(baseName)

    const templateTag = `<template>\n  ${content}\n</template>`
    const scriptTag = `<script lang="ts">\nimport { defineComponent } from 'vue'\nexport default defineComponent({ name: "${componentName}" })\n</script>`

    fs.writeFileSync(
      path.join(sfcPath, `${baseName}.vue`),
      `${templateTag}\n${scriptTag}`,
      'utf-8'
    )
  })
}

/** Main Process */

if (!fs.existsSync(sfcPath)) {
  console.log('create packages directory')
  fs.mkdirSync(sfcPath)
  console.log('done')
}

console.log('generating vue SFCs')

fs.readdirSync(iconPath).forEach((svg) => {
  generateSFC(svg)
})

console.log('done')

console.log('generating entry file')

let str = ``

fs.readdirSync(sfcPath).filter((file) => (
  file.endsWith('.vue')
)).forEach((file) => {
  console.log('file', file)
  const baseName = getBaseName(file, 'vue')
  const componentName = toPascalCase(baseName)
  str += `export { default as ${componentName} } from './${file}'\n`
})

fs.writeFileSync(path.join(sfcPath, 'index.ts'), str, 'utf-8')

console.log('done')
