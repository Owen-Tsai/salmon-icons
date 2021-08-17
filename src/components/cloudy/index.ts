
      import Cloudy from './Main.vue'
      import { App } from 'vue'
      
      Cloudy.install = (app: App) => {
        app.component(Cloudy.name, Cloudy)
      }
      
      export default Cloudy
    