
      import MoreFill from './Main.vue'
      import { App } from 'vue'
      
      MoreFill.install = (app: App) => {
        app.component(MoreFill.name, MoreFill)
      }
      
      export default MoreFill
    