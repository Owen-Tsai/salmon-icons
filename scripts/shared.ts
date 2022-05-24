import path from 'path'

export const rootPath = path.resolve(__dirname, '../')
export const iconsPath = path.resolve(rootPath, 'icons')
export const sfcPath = path.resolve(rootPath, 'packages')

/**
 * Get the PascalCased name from a kebab-cased filename
 * @param name file
 */
export const toPascalCase = (name: string): string => {
  return name.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join('')
}
