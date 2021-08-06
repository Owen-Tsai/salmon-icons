const fs = require('fs')
const path = require('path')

const files = fs.readdirSync('./src/components')

const obj = {}
if(files.length > 0) {
  files.forEach(fileName => {
    const baseName = fileName.split('.').shift()
    obj[baseName] = `components/${fileName}`
  })
}

const json = JSON.stringify(obj)

fs.writeFileSync('./build/components.json', json)
