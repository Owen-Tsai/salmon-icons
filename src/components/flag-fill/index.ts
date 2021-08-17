
      import FlagFill from './Main.vue'
      import { App } from 'vue'
      
      FlagFill.install = (app: App) => {
        app.component(FlagFill.name, FlagFill)
      }
      
      export default FlagFill
    