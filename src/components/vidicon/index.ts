
      import Vidicon from './Main.vue'
      import { App } from 'vue'
      
      Vidicon.install = (app: App) => {
        app.component(Vidicon.name, Vidicon)
      }
      
      export default Vidicon
    