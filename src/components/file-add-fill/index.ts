
      import FileAddFill from './Main.vue'
      import { App } from 'vue'
      
      FileAddFill.install = (app: App) => {
        app.component(FileAddFill.name, FileAddFill)
      }
      
      export default FileAddFill
    