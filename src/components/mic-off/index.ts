
      import MicOff from './Main.vue'
      import { App } from 'vue'
      
      MicOff.install = (app: App) => {
        app.component(MicOff.name, MicOff)
      }
      
      export default MicOff
    