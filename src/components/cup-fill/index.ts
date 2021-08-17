
      import CupFill from './Main.vue'
      import { App } from 'vue'
      
      CupFill.install = (app: App) => {
        app.component(CupFill.name, CupFill)
      }
      
      export default CupFill
    