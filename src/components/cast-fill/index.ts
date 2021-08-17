
      import CastFill from './Main.vue'
      import { App } from 'vue'
      
      CastFill.install = (app: App) => {
        app.component(CastFill.name, CastFill)
      }
      
      export default CastFill
    