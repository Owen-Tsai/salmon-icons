
      import EyeFill from './Main.vue'
      import { App } from 'vue'
      
      EyeFill.install = (app: App) => {
        app.component(EyeFill.name, EyeFill)
      }
      
      export default EyeFill
    