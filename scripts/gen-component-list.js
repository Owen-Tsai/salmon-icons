const fs = require('fs')
const path = require('path')
const {capitalizeInitial} = require('./utils')

const files = fs.readdirSync('./src/components')

const obj = {}
let exportStr = ``

if(files.length > 0) {
  files.forEach(fileName => {
    const baseName = fileName.split('.').shift()
    const componentName = baseName.split('-').map(capitalizeInitial).join('')
    obj[baseName] = `components/${fileName}`
    exportStr += `export { default as ${componentName} } from './${fileName}'\n`
  })
}

const json = JSON.stringify(obj)

fs.writeFileSync('./scripts/components.json', json)
fs.writeFileSync('./src/main.ts', exportStr)
