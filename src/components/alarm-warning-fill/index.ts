
      import AlarmWarningFill from './Main.vue'
      import { App } from 'vue'
      
      AlarmWarningFill.install = (app: App) => {
        app.component(AlarmWarningFill.name, AlarmWarningFill)
      }
      
      export default AlarmWarningFill
    