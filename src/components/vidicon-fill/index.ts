
      import VidiconFill from './Main.vue'
      import { App } from 'vue'
      
      VidiconFill.install = (app: App) => {
        app.component(VidiconFill.name, VidiconFill)
      }
      
      export default VidiconFill
    