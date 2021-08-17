
      import BatteryFill from './Main.vue'
      import { App } from 'vue'
      
      BatteryFill.install = (app: App) => {
        app.component(BatteryFill.name, BatteryFill)
      }
      
      export default BatteryFill
    