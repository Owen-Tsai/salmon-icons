
      import MicFill from './Main.vue'
      import { App } from 'vue'
      
      MicFill.install = (app: App) => {
        app.component(MicFill.name, MicFill)
      }
      
      export default MicFill
    