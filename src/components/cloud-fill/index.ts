
      import CloudFill from './Main.vue'
      import { App } from 'vue'
      
      CloudFill.install = (app: App) => {
        app.component(CloudFill.name, CloudFill)
      }
      
      export default CloudFill
    