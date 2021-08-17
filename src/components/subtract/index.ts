
      import Subtract from './Main.vue'
      import { App } from 'vue'
      
      Subtract.install = (app: App) => {
        app.component(Subtract.name, Subtract)
      }
      
      export default Subtract
    