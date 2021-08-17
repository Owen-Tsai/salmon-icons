
      import Smartphone from './Main.vue'
      import { App } from 'vue'
      
      Smartphone.install = (app: App) => {
        app.component(Smartphone.name, Smartphone)
      }
      
      export default Smartphone
    