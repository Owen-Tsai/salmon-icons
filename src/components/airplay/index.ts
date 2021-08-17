
      import Airplay from './Main.vue'
      import { App } from 'vue'
      
      Airplay.install = (app: App) => {
        app.component(Airplay.name, Airplay)
      }
      
      export default Airplay
    