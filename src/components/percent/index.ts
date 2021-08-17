
      import Percent from './Main.vue'
      import { App } from 'vue'
      
      Percent.install = (app: App) => {
        app.component(Percent.name, Percent)
      }
      
      export default Percent
    