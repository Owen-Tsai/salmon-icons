
      import Refresh from './Main.vue'
      import { App } from 'vue'
      
      Refresh.install = (app: App) => {
        app.component(Refresh.name, Refresh)
      }
      
      export default Refresh
    