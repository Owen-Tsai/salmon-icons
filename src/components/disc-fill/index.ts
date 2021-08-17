
      import DiscFill from './Main.vue'
      import { App } from 'vue'
      
      DiscFill.install = (app: App) => {
        app.component(DiscFill.name, DiscFill)
      }
      
      export default DiscFill
    