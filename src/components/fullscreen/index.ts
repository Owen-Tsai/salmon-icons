
      import Fullscreen from './Main.vue'
      import { App } from 'vue'
      
      Fullscreen.install = (app: App) => {
        app.component(Fullscreen.name, Fullscreen)
      }
      
      export default Fullscreen
    