
      import FileReduceFill from './Main.vue'
      import { App } from 'vue'
      
      FileReduceFill.install = (app: App) => {
        app.component(FileReduceFill.name, FileReduceFill)
      }
      
      export default FileReduceFill
    