
      import Divide from './Main.vue'
      import { App } from 'vue'
      
      Divide.install = (app: App) => {
        app.component(Divide.name, Divide)
      }
      
      export default Divide
    