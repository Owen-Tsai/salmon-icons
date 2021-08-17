
      import GlobalFill from './Main.vue'
      import { App } from 'vue'
      
      GlobalFill.install = (app: App) => {
        app.component(GlobalFill.name, GlobalFill)
      }
      
      export default GlobalFill
    