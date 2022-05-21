import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const getInputEntries = () => {
  const input = []

  fs.readdirSync('./src/components/', {
    withFileTypes: true
  }).filter(e => {
    e.isDirectory()
  }).forEach(dir => {
    input[dir.name] = path.join(__dirname, 'src/components/', dir.name, 'index.ts')
  })

  return input
}

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    rollupOptions: {
      input: getInputEntries(),
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue'
        },
        dir: 'dist',
        entryFileNames: '[name].js'
      }
    }
  }
})