
      import Upload from './Main.vue'
      import { App } from 'vue'
      
      Upload.install = (app: App) => {
        app.component(Upload.name, Upload)
      }
      
      export default Upload
    