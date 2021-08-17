
      import ErrorWarningFill from './Main.vue'
      import { App } from 'vue'
      
      ErrorWarningFill.install = (app: App) => {
        app.component(ErrorWarningFill.name, ErrorWarningFill)
      }
      
      export default ErrorWarningFill
    