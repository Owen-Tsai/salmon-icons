
      import FileFill from './Main.vue'
      import { App } from 'vue'
      
      FileFill.install = (app: App) => {
        app.component(FileFill.name, FileFill)
      }
      
      export default FileFill
    