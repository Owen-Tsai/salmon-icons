
      import CloudWindy from './Main.vue'
      import { App } from 'vue'
      
      CloudWindy.install = (app: App) => {
        app.component(CloudWindy.name, CloudWindy)
      }
      
      export default CloudWindy
    