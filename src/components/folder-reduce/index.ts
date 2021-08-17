
      import FolderReduce from './Main.vue'
      import { App } from 'vue'
      
      FolderReduce.install = (app: App) => {
        app.component(FolderReduce.name, FolderReduce)
      }
      
      export default FolderReduce
    