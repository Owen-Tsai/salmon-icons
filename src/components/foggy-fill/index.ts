
      import FoggyFill from './Main.vue'
      import { App } from 'vue'
      
      FoggyFill.install = (app: App) => {
        app.component(FoggyFill.name, FoggyFill)
      }
      
      export default FoggyFill
    