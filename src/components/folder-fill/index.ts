
      import FolderFill from './Main.vue'
      import { App } from 'vue'
      
      FolderFill.install = (app: App) => {
        app.component(FolderFill.name, FolderFill)
      }
      
      export default FolderFill
    