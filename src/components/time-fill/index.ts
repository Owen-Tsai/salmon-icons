
      import TimeFill from './Main.vue'
      import { App } from 'vue'
      
      TimeFill.install = (app: App) => {
        app.component(TimeFill.name, TimeFill)
      }
      
      export default TimeFill
    