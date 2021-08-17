
      import ClockwiseFill from './Main.vue'
      import { App } from 'vue'
      
      ClockwiseFill.install = (app: App) => {
        app.component(ClockwiseFill.name, ClockwiseFill)
      }
      
      export default ClockwiseFill
    