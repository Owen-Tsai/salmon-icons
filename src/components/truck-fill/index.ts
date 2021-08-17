
      import TruckFill from './Main.vue'
      import { App } from 'vue'
      
      TruckFill.install = (app: App) => {
        app.component(TruckFill.name, TruckFill)
      }
      
      export default TruckFill
    