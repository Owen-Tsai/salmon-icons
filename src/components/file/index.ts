
      import File from './Main.vue'
      import { App } from 'vue'
      
      File.install = (app: App) => {
        app.component(File.name, File)
      }
      
      export default File
    