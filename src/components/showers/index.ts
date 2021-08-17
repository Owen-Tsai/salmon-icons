
      import Showers from './Main.vue'
      import { App } from 'vue'
      
      Showers.install = (app: App) => {
        app.component(Showers.name, Showers)
      }
      
      export default Showers
    