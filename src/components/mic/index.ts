
      import Mic from './Main.vue'
      import { App } from 'vue'
      
      Mic.install = (app: App) => {
        app.component(Mic.name, Mic)
      }
      
      export default Mic
    