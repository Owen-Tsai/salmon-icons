
      import ShutDownFill from './Main.vue'
      import { App } from 'vue'
      
      ShutDownFill.install = (app: App) => {
        app.component(ShutDownFill.name, ShutDownFill)
      }
      
      export default ShutDownFill
    