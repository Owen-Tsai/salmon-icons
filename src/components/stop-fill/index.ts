
      import StopFill from './Main.vue'
      import { App } from 'vue'
      
      StopFill.install = (app: App) => {
        app.component(StopFill.name, StopFill)
      }
      
      export default StopFill
    