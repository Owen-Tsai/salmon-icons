
      import SuitcaseFill from './Main.vue'
      import { App } from 'vue'
      
      SuitcaseFill.install = (app: App) => {
        app.component(SuitcaseFill.name, SuitcaseFill)
      }
      
      export default SuitcaseFill
    