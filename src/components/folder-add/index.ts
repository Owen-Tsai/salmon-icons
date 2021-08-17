
      import FolderAdd from './Main.vue'
      import { App } from 'vue'
      
      FolderAdd.install = (app: App) => {
        app.component(FolderAdd.name, FolderAdd)
      }
      
      export default FolderAdd
    