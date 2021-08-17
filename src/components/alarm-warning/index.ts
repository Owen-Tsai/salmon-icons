
      import AlarmWarning from './Main.vue'
      import { App } from 'vue'
      
      AlarmWarning.install = (app: App) => {
        app.component(AlarmWarning.name, AlarmWarning)
      }
      
      export default AlarmWarning
    