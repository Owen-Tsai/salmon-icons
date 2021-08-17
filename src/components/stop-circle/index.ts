
      import StopCircle from './Main.vue'
      import { App } from 'vue'
      
      StopCircle.install = (app: App) => {
        app.component(StopCircle.name, StopCircle)
      }
      
      export default StopCircle
    