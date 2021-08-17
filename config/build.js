const fs = require('fs')
const path = require('path')
const rollupComponent = require('./config.comp')

let componentsData = {}

fs.readFile('./config/components.json', 'utf-8', function(err,data) {
  if (err) {
    console.error(err)
    return
  }

  componentsData = JSON.parse(data)

  const keys = Object.keys(componentsData)
  keys.forEach(item => rollupComponent(componentsData[item], item))
})


