
      import SunFill from './Main.vue'
      import { App } from 'vue'
      
      SunFill.install = (app: App) => {
        app.component(SunFill.name, SunFill)
      }
      
      export default SunFill
    