const fs = require('fs')
const { capitalizeInitial } = require('./utils')

const generateComponent = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
      console.error(err)
      return
    }

    let fileName = filePath.replace('./src/icons/', '')
    let baseName = fileName.split('.svg').shift()
    let componentName = baseName.split('-').map(capitalizeInitial).join('')

    let templateStr = `
      <template>\n${content}</template>\n\n
    `

    templateStr += `
      <script lang="ts">
        import { defineComponent } from 'vue'
        export default defineComponent({
          name: '${componentName}'
        })
      </script>
    `

    fs.writeFileSync(`./src/components/${baseName}.vue`, templateStr)
  })
}

module.exports = generateComponent
