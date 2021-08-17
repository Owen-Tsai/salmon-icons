
      import ToggleFill from './Main.vue'
      import { App } from 'vue'
      
      ToggleFill.install = (app: App) => {
        app.component(ToggleFill.name, ToggleFill)
      }
      
      export default ToggleFill
    