
      import FileList from './Main.vue'
      import { App } from 'vue'
      
      FileList.install = (app: App) => {
        app.component(FileList.name, FileList)
      }
      
      export default FileList
    