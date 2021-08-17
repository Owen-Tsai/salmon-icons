
      import CloudOff from './Main.vue'
      import { App } from 'vue'
      
      CloudOff.install = (app: App) => {
        app.component(CloudOff.name, CloudOff)
      }
      
      export default CloudOff
    