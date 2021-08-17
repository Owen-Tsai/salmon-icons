
      import CalendarEvent from './Main.vue'
      import { App } from 'vue'
      
      CalendarEvent.install = (app: App) => {
        app.component(CalendarEvent.name, CalendarEvent)
      }
      
      export default CalendarEvent
    