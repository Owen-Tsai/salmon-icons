
      import Pause from './Main.vue'
      import { App } from 'vue'
      
      Pause.install = (app: App) => {
        app.component(Pause.name, Pause)
      }
      
      export default Pause
    