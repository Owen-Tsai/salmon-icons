
      import ErrorWarning from './Main.vue'
      import { App } from 'vue'
      
      ErrorWarning.install = (app: App) => {
        app.component(ErrorWarning.name, ErrorWarning)
      }
      
      export default ErrorWarning
    