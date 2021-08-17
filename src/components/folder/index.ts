
      import Folder from './Main.vue'
      import { App } from 'vue'
      
      Folder.install = (app: App) => {
        app.component(Folder.name, Folder)
      }
      
      export default Folder
    