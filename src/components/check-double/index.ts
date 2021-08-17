
      import CheckDouble from './Main.vue'
      import { App } from 'vue'
      
      CheckDouble.install = (app: App) => {
        app.component(CheckDouble.name, CheckDouble)
      }
      
      export default CheckDouble
    