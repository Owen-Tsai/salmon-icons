
      import SendPlane from './Main.vue'
      import { App } from 'vue'
      
      SendPlane.install = (app: App) => {
        app.component(SendPlane.name, SendPlane)
      }
      
      export default SendPlane
    