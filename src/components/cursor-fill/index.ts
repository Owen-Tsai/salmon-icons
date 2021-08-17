
      import CursorFill from './Main.vue'
      import { App } from 'vue'
      
      CursorFill.install = (app: App) => {
        app.component(CursorFill.name, CursorFill)
      }
      
      export default CursorFill
    