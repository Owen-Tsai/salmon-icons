
      import RefreshFill from './Main.vue'
      import { App } from 'vue'
      
      RefreshFill.install = (app: App) => {
        app.component(RefreshFill.name, RefreshFill)
      }
      
      export default RefreshFill
    