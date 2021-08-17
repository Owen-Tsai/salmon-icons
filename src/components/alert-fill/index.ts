
      import AlertFill from './Main.vue'
      import { App } from 'vue'
      
      AlertFill.install = (app: App) => {
        app.component(AlertFill.name, AlertFill)
      }
      
      export default AlertFill
    