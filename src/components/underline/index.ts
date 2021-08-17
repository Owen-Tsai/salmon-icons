
      import Underline from './Main.vue'
      import { App } from 'vue'
      
      Underline.install = (app: App) => {
        app.component(Underline.name, Underline)
      }
      
      export default Underline
    