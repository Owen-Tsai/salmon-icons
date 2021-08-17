
      import SunCloudyFill from './Main.vue'
      import { App } from 'vue'
      
      SunCloudyFill.install = (app: App) => {
        app.component(SunCloudyFill.name, SunCloudyFill)
      }
      
      export default SunCloudyFill
    