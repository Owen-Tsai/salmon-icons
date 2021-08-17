
      import CloudWindyFill from './Main.vue'
      import { App } from 'vue'
      
      CloudWindyFill.install = (app: App) => {
        app.component(CloudWindyFill.name, CloudWindyFill)
      }
      
      export default CloudWindyFill
    