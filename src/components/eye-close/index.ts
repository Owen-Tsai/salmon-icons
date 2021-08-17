
      import EyeClose from './Main.vue'
      import { App } from 'vue'
      
      EyeClose.install = (app: App) => {
        app.component(EyeClose.name, EyeClose)
      }
      
      export default EyeClose
    