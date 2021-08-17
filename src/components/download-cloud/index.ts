
      import DownloadCloud from './Main.vue'
      import { App } from 'vue'
      
      DownloadCloud.install = (app: App) => {
        app.component(DownloadCloud.name, DownloadCloud)
      }
      
      export default DownloadCloud
    