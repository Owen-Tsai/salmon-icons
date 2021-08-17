
      import FileListFill from './Main.vue'
      import { App } from 'vue'
      
      FileListFill.install = (app: App) => {
        app.component(FileListFill.name, FileListFill)
      }
      
      export default FileListFill
    