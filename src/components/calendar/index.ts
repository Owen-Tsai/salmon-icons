
      import Calendar from './Main.vue'
      import { App } from 'vue'
      
      Calendar.install = (app: App) => {
        app.component(Calendar.name, Calendar)
      }
      
      export default Calendar
    