
      import XboxFill from './Main.vue'
      import { App } from 'vue'
      
      XboxFill.install = (app: App) => {
        app.component(XboxFill.name, XboxFill)
      }
      
      export default XboxFill
    