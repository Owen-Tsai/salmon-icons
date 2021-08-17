
      import CalendarCheckFill from './Main.vue'
      import { App } from 'vue'
      
      CalendarCheckFill.install = (app: App) => {
        app.component(CalendarCheckFill.name, CalendarCheckFill)
      }
      
      export default CalendarCheckFill
    