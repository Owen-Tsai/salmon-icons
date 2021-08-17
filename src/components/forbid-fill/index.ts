
      import ForbidFill from './Main.vue'
      import { App } from 'vue'
      
      ForbidFill.install = (app: App) => {
        app.component(ForbidFill.name, ForbidFill)
      }
      
      export default ForbidFill
    