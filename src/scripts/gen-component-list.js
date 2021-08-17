const fs = require('fs')
const {capitalizeInitial} = require('./utils')

const files = fs.readdirSync('./src/components').filter(
  item => item.includes('.vue')
)

let exportStr = ``
let obj = {}

if (files.length > 0) {
  files.forEach(fileName => {
    const baseName = fileName.split('.').shift()
    const componentName = baseName.split('-').map(capitalizeInitial).join('')
    obj[baseName] = `./src/components/${fileName}`
    exportStr += `export { default as ${componentName} } from './${fileName}'\n`
  })
}

fs.writeFileSync('./src/components/main.ts', exportStr)
fs.writeFileSync('./config/components.json', JSON.stringify(obj))
