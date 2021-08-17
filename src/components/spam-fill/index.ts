
      import SpamFill from './Main.vue'
      import { App } from 'vue'
      
      SpamFill.install = (app: App) => {
        app.component(SpamFill.name, SpamFill)
      }
      
      export default SpamFill
    