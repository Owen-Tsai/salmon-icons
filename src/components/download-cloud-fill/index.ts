
      import DownloadCloudFill from './Main.vue'
      import { App } from 'vue'
      
      DownloadCloudFill.install = (app: App) => {
        app.component(DownloadCloudFill.name, DownloadCloudFill)
      }
      
      export default DownloadCloudFill
    