
      import MicOffFill from './Main.vue'
      import { App } from 'vue'
      
      MicOffFill.install = (app: App) => {
        app.component(MicOffFill.name, MicOffFill)
      }
      
      export default MicOffFill
    