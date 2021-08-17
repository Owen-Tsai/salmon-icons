
      import Windy from './Main.vue'
      import { App } from 'vue'
      
      Windy.install = (app: App) => {
        app.component(Windy.name, Windy)
      }
      
      export default Windy
    