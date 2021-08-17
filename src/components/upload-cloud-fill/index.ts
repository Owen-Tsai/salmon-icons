
      import UploadCloudFill from './Main.vue'
      import { App } from 'vue'
      
      UploadCloudFill.install = (app: App) => {
        app.component(UploadCloudFill.name, UploadCloudFill)
      }
      
      export default UploadCloudFill
    