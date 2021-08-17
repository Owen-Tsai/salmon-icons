
      import FileCopyFill from './Main.vue'
      import { App } from 'vue'
      
      FileCopyFill.install = (app: App) => {
        app.component(FileCopyFill.name, FileCopyFill)
      }
      
      export default FileCopyFill
    