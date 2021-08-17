
      import UploadCloud from './Main.vue'
      import { App } from 'vue'
      
      UploadCloud.install = (app: App) => {
        app.component(UploadCloud.name, UploadCloud)
      }
      
      export default UploadCloud
    