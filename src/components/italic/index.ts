
      import Italic from './Main.vue'
      import { App } from 'vue'
      
      Italic.install = (app: App) => {
        app.component(Italic.name, Italic)
      }
      
      export default Italic
    