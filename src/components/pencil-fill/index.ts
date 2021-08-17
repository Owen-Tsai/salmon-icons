
      import PencilFill from './Main.vue'
      import { App } from 'vue'
      
      PencilFill.install = (app: App) => {
        app.component(PencilFill.name, PencilFill)
      }
      
      export default PencilFill
    