
      import AppsFill from './Main.vue'
      import { App } from 'vue'
      
      AppsFill.install = (app: App) => {
        app.component(AppsFill.name, AppsFill)
      }
      
      export default AppsFill
    