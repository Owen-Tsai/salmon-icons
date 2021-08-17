
      import FolderAddFill from './Main.vue'
      import { App } from 'vue'
      
      FolderAddFill.install = (app: App) => {
        app.component(FolderAddFill.name, FolderAddFill)
      }
      
      export default FolderAddFill
    