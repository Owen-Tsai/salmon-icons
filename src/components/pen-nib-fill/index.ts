
      import PenNibFill from './Main.vue'
      import { App } from 'vue'
      
      PenNibFill.install = (app: App) => {
        app.component(PenNibFill.name, PenNibFill)
      }
      
      export default PenNibFill
    