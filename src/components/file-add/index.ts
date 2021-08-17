
      import FileAdd from './Main.vue'
      import { App } from 'vue'
      
      FileAdd.install = (app: App) => {
        app.component(FileAdd.name, FileAdd)
      }
      
      export default FileAdd
    