
      import CompassFill from './Main.vue'
      import { App } from 'vue'
      
      CompassFill.install = (app: App) => {
        app.component(CompassFill.name, CompassFill)
      }
      
      export default CompassFill
    