
      import PercentFill from './Main.vue'
      import { App } from 'vue'
      
      PercentFill.install = (app: App) => {
        app.component(PercentFill.name, PercentFill)
      }
      
      export default PercentFill
    