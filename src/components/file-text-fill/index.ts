
      import FileTextFill from './Main.vue'
      import { App } from 'vue'
      
      FileTextFill.install = (app: App) => {
        app.component(FileTextFill.name, FileTextFill)
      }
      
      export default FileTextFill
    