const fs = require('fs')

const generateComponent = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
      console.error(err)
      return
    }

    let fileName = filePath.replace('./src/icons/', '')
    let baseName = fileName.split('.svg').shift()
    let componentName = baseName.split('-').map(capitalizeInitial).join('')

    let templateStr =
      `<template>
  <span class="sui-icon">
    ${content}
  </span>
</template>\n\n`

    templateStr +=
      `<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: '${componentName}'
  })
</script>`

    fs.writeFileSync(`./src/components/${baseName}.vue`, templateStr)
  })
}

const capitalizeInitial = s => {
  return s[0].toUpperCase() + s.slice(1)
}

module.exports = generateComponent
