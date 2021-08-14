const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')

console.log(root)

const processFile = (file) => {
  console.log(file)

  fs.readFile(file, 'utf-8', function (err, data) {
    if (err) {
      console.error(err)
      return
    }

    let result = data.replace(/\.vue/g, '.js')

    fs.writeFile(file, result, 'utf-8', function (err) {
      if (err) {
        console.error(err)
        return
      }
    })

    console.log('done')
  })
}

processFile(path.resolve(root, './es/index.js'))
processFile(path.resolve(root, './lib/index.js'))
