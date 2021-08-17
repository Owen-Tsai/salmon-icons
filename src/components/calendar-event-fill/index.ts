
      import CalendarEventFill from './Main.vue'
      import { App } from 'vue'
      
      CalendarEventFill.install = (app: App) => {
        app.component(CalendarEventFill.name, CalendarEventFill)
      }
      
      export default CalendarEventFill
    