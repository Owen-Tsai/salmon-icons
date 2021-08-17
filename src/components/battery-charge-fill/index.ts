
      import BatteryChargeFill from './Main.vue'
      import { App } from 'vue'
      
      BatteryChargeFill.install = (app: App) => {
        app.component(BatteryChargeFill.name, BatteryChargeFill)
      }
      
      export default BatteryChargeFill
    