
      import FileText from './Main.vue'
      import { App } from 'vue'
      
      FileText.install = (app: App) => {
        app.component(FileText.name, FileText)
      }
      
      export default FileText
    