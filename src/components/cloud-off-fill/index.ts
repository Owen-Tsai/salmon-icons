
      import CloudOffFill from './Main.vue'
      import { App } from 'vue'
      
      CloudOffFill.install = (app: App) => {
        app.component(CloudOffFill.name, CloudOffFill)
      }
      
      export default CloudOffFill
    