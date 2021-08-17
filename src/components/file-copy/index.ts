
      import FileCopy from './Main.vue'
      import { App } from 'vue'
      
      FileCopy.install = (app: App) => {
        app.component(FileCopy.name, FileCopy)
      }
      
      export default FileCopy
    