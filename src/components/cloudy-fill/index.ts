
      import CloudyFill from './Main.vue'
      import { App } from 'vue'
      
      CloudyFill.install = (app: App) => {
        app.component(CloudyFill.name, CloudyFill)
      }
      
      export default CloudyFill
    