
      import EyeOff from './Main.vue'
      import { App } from 'vue'
      
      EyeOff.install = (app: App) => {
        app.component(EyeOff.name, EyeOff)
      }
      
      export default EyeOff
    