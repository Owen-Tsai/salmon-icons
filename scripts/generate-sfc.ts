import fs from 'fs'

const capitalize = (s: string) => {
  return s[0].toUpperCase() + s.slice(1)
}

const generateSFC = (iconPath: string) => {
  fs.readFile(iconPath, 'utf-8', (err, content) => {
    if (err) {
      console.error(`SFC generation failed for ${iconPath}`, err)
      return
    }

    const fileName = iconPath.replace('./icons/', '')
    const baseName = fileName.split('.svg').shift() as string
    const componentName = baseName.split('-').map(capitalize).join('')

    const templateTag = `<template>${content}</template>`
    const text = `import ${componentName} from './${baseName}.vue'\nimport { App } from 'vue'\n${componentName}.install = (app: App) => { app.component('${componentName}', ${componentName}) }\nexport default ${componentName}`

    fs.mkdirSync(`./src/components/${baseName}`, { recursive: true })

    fs.writeFileSync(`./src/components/${baseName}/${baseName}.vue`, templateTag, {
      encoding: 'utf-8'
    })
    fs.writeFileSync(`./src/components/${baseName}/index.ts`, text, {
      encoding: 'utf-8'
    })
  })
}

fs.readdirSync('./icons').forEach((svg) => {
  generateSFC(`./icons/${svg}`)
})
