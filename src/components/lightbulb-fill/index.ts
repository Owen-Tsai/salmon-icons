
      import LightbulbFill from './Main.vue'
      import { App } from 'vue'
      
      LightbulbFill.install = (app: App) => {
        app.component(LightbulbFill.name, LightbulbFill)
      }
      
      export default LightbulbFill
    