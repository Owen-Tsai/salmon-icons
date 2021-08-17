
      import Playstation from './Main.vue'
      import { App } from 'vue'
      
      Playstation.install = (app: App) => {
        app.component(Playstation.name, Playstation)
      }
      
      export default Playstation
    