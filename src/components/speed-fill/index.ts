
      import SpeedFill from './Main.vue'
      import { App } from 'vue'
      
      SpeedFill.install = (app: App) => {
        app.component(SpeedFill.name, SpeedFill)
      }
      
      export default SpeedFill
    