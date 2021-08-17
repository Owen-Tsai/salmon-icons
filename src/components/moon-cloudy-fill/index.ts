
      import MoonCloudyFill from './Main.vue'
      import { App } from 'vue'
      
      MoonCloudyFill.install = (app: App) => {
        app.component(MoonCloudyFill.name, MoonCloudyFill)
      }
      
      export default MoonCloudyFill
    