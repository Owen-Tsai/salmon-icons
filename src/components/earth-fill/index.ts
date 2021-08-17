
      import EarthFill from './Main.vue'
      import { App } from 'vue'
      
      EarthFill.install = (app: App) => {
        app.component(EarthFill.name, EarthFill)
      }
      
      export default EarthFill
    