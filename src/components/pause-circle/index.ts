
      import PauseCircle from './Main.vue'
      import { App } from 'vue'
      
      PauseCircle.install = (app: App) => {
        app.component(PauseCircle.name, PauseCircle)
      }
      
      export default PauseCircle
    