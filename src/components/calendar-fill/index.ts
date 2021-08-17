
      import CalendarFill from './Main.vue'
      import { App } from 'vue'
      
      CalendarFill.install = (app: App) => {
        app.component(CalendarFill.name, CalendarFill)
      }
      
      export default CalendarFill
    