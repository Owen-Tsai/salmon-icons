
      import Lightbulb from './Main.vue'
      import { App } from 'vue'
      
      Lightbulb.install = (app: App) => {
        app.component(Lightbulb.name, Lightbulb)
      }
      
      export default Lightbulb
    