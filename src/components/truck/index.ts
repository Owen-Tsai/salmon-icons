
      import Truck from './Main.vue'
      import { App } from 'vue'
      
      Truck.install = (app: App) => {
        app.component(Truck.name, Truck)
      }
      
      export default Truck
    