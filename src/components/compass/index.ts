
      import Compass from './Main.vue'
      import { App } from 'vue'
      
      Compass.install = (app: App) => {
        app.component(Compass.name, Compass)
      }
      
      export default Compass
    