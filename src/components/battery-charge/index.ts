
      import BatteryCharge from './Main.vue'
      import { App } from 'vue'
      
      BatteryCharge.install = (app: App) => {
        app.component(BatteryCharge.name, BatteryCharge)
      }
      
      export default BatteryCharge
    