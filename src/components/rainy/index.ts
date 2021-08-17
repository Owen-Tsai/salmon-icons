
      import Rainy from './Main.vue'
      import { App } from 'vue'
      
      Rainy.install = (app: App) => {
        app.component(Rainy.name, Rainy)
      }
      
      export default Rainy
    