
      import FileReduce from './Main.vue'
      import { App } from 'vue'
      
      FileReduce.install = (app: App) => {
        app.component(FileReduce.name, FileReduce)
      }
      
      export default FileReduce
    