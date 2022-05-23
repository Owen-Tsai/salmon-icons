import fs from 'fs'
import path from 'path'

import {
  rollupComponent,
  sfcPath,
  getBaseName
} from './shared'

const componentData: Record<string, string> = {}

fs.readdirSync(sfcPath).filter(file => (
  file.endsWith('.vue')
)).forEach(sfc => {
  const name = getBaseName(sfc, 'vue')
  componentData[name] = path.resolve(sfcPath, sfc)
})

const keys = Object.keys(componentData)

keys.forEach(item => {
  rollupComponent(componentData[item], item)
})