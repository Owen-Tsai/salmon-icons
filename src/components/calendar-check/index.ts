
      import CalendarCheck from './Main.vue'
      import { App } from 'vue'
      
      CalendarCheck.install = (app: App) => {
        app.component(CalendarCheck.name, CalendarCheck)
      }
      
      export default CalendarCheck
    