
      import ShutDown from './Main.vue'
      import { App } from 'vue'
      
      ShutDown.install = (app: App) => {
        app.component(ShutDown.name, ShutDown)
      }
      
      export default ShutDown
    