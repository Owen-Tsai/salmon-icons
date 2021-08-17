
      import Snowy from './Main.vue'
      import { App } from 'vue'
      
      Snowy.install = (app: App) => {
        app.component(Snowy.name, Snowy)
      }
      
      export default Snowy
    