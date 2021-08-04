const fs = require('fs')
const generateComponent = require('./generator')

const svgDirPrefix = './src/icons'

const files = fs.readdirSync(svgDirPrefix)

if (files.length > 0) {
  files.forEach(fileName => generateComponent(`${svgDirPrefix}/${fileName}`))
}
