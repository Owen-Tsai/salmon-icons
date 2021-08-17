
      import Disc from './Main.vue'
      import { App } from 'vue'
      
      Disc.install = (app: App) => {
        app.component(Disc.name, Disc)
      }
      
      export default Disc
    